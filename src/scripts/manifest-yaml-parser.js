import BundleInfo from "@/scripts/bundle-info";
import GraphNode from "@/scripts/graph-node";
import GraphLink from "@/scripts/graph-link";
import Filter from "@/scripts/filter";
import YAML from "yaml";

export default class ManifestYamlParser {

    fileBuffer = undefined;

    setFile(file, onComplete) {
        console.log(`Setting file: ${file.name} (${file.type ? file.type : "type/none"})`);

        if (file.type && !file.type.startsWith('text/')) {
            console.log('File is not a text document. Aborting...', file.type, file);
            return;
        }

        file.text().then(buffer => {
            try {
                // noinspection JSCheckFunctionSignatures
                this.fileBuffer = YAML.parse(buffer);
                this.filePath = file.name;
                onComplete();
            } catch (e) {
                console.error(e);
                this._onError();
                onComplete();
            }
        });
    }

    process(filters, selectedNode) {
        if (this.fileBuffer === undefined) return;
        else if (this.fileBuffer === "error") {
            return this._onError("Problems on parsing provided file buffer.");
        }
        let buffer = this.fileBuffer;

        // Populate top-level manifest details.
        let fileVersion = buffer['ManifestFileVersion'];
        let crc = buffer['CRC'];
        let manifest = buffer['AssetBundleManifest'];

        try {
            // Get bundle data.
            let bundles = this._parseBundleInfo(manifest['AssetBundleInfos']);

            // Build all nodes, first.
            const nodes = this._extractNodes(bundles, filters);
            const links = this._generateNodeLinks(nodes, (node) => {
                node._size = 20 + (node.dependencies.length ** 1.5);
                node._color = "#dcfaf3";
            });

            const result = {
                manifestPath: this.filePath,
                manifestFileVersion: fileVersion,
                crc: crc,
                bundleCount: bundles.length,
                visibleBundlesCount: bundles.length,
                nodes: nodes,
                links: links,
                error: false
            };

            // Filter by selected node. TODO: Refactor into strategy.
            if (selectedNode !== undefined) {
                const filteredSelection = [];
                const filter = function (id) {
                    if (nodes === undefined || id === undefined) return;
                    if (filteredSelection.map(n => n.id).includes(id)) return;

                    let node = nodes.find(n => n.id === id);
                    if (node === undefined) return;

                    filteredSelection.push(node);

                    for (let i in node.dependencies) {
                        const dependencyId = node.dependencies[i];
                        filter(dependencyId);
                    }
                }

                filter(selectedNode.id);

                let keyNode = filteredSelection.find(n => n.id === selectedNode.id);
                keyNode._color = "#FFFF00";

                result.nodes = filteredSelection;
                result.links = this._generateNodeLinks(filteredSelection);
            }

            return result;
        } catch (error) {
            // console.error(error);
            return this._onError("Problems while processing file.");
        }
    }

    _extractNodes(bundles, filters) {
        const nodes = [];
        for (const bundleIdx in bundles) {
            let bundle = bundles[bundleIdx]

            if (this._isFiltered(bundle, filters)) {
                continue;
            }

            // Create a new node, and assign it's dependencies.
            let newNode = new GraphNode(bundle.name, bundle.dependencies);

            if (newNode.name !== undefined) {
                nodes.push(newNode);
            }
        }

        return nodes;
    }

    _generateNodeLinks(nodes, nodeUpdateHandler) {
        const links = [];
        for (const nodeIdx in nodes) {
            let node = nodes[nodeIdx];
            for (const dependencyIdx in node.dependencies) {
                let depId = node.dependencies[dependencyIdx];
                if (nodes.map(m => m.name).includes(depId)) {
                    let newLink = new GraphLink(node.id, depId);
                    links.push(newLink);
                }
            }

            if (nodeUpdateHandler !== undefined) {
                nodeUpdateHandler(node);
            }
        }

        return links;
    }

    _isFiltered(bundle, filters) {
        const bundleInfo = Object.assign(new BundleInfo(), bundle);
        for (const i in filters) {
            const f = Object.assign(new Filter(), filters[i]);
            if (f.isFiltered(bundleInfo.name)) {
                return true;
            }
        }

        return false;
    }

    // Converts YAML buffer of BundleInfos objects to Javascript objects
    _parseBundleInfo(infos) {
        const bundles = [];
        // Info key refers to the "Info_0"..."Info_N" key values.
        for (const infoKey in infos) {
            let bundleEntry = new BundleInfo();
            let info = infos[infoKey];
            bundleEntry.name = info["Name"];
            const depInfos = info["Dependencies"];

            for (const depInfo in depInfos) {
                let id = depInfos[depInfo];
                bundleEntry.dependencies.push(id);
            }

            if (bundleEntry.name !== undefined) {
                bundles.push(bundleEntry);
            }
        }

        return bundles;
    }

    _onError(message) {
        this.filePath = "Please try another file...";
        this.fileBuffer = "error";
        return {
            manifestPath: this.filePath,
            error: message,
            nodes: [],
            links: []
        };
    }
}
