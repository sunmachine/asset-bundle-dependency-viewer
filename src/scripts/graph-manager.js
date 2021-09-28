import YAML from 'yaml';
import file from '!raw-loader!../assets/manifest.yaml';
import ManifestYamlParser from "@/scripts/manifest-yaml-parser";

export default class GraphManager {

    filters = undefined;

    manifestPath = undefined;
    manifestFileVersion = undefined;
    crc = undefined;
    bundleCount = undefined;
    visibleBundleCount = undefined;

    nodes = undefined;
    links = undefined;


    constructor() {
        // TODO: Refactor to file-parsing args.
        this.targetFile = YAML.parse(file);
        this.parser = new ManifestYamlParser(this.targetFile);
    }

    setFilters(filters) {
        this.filters = filters;
    }

    update(selectedNode) {
        const output = this.parser.process(this.filters, selectedNode);

        this.manifestPath = './assets/manifest.yaml';
        this.manifestFileVersion = output.manifestFileVersion;
        this.crc = output.crc;
        this.bundleCount = output.bundleCount;
        this.visibleBundleCount = output.nodes.length;

        this.nodes = output.nodes;
        this.links = output.links;
    }
}
