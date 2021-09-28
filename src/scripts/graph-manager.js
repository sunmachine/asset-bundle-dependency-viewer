import ManifestYamlParser from "@/scripts/manifest-yaml-parser";

export default class GraphManager {

    graphState = undefined;

    constructor() {
        this.parser = new ManifestYamlParser();
    }

    setFilters(filters) {
        this.filters = filters;
    }

    setFile(file, onComplete) {
        this.parser.setFile(file, onComplete);
    }

    update(selectedNode) {
        if (!this.parser.fileBuffer) return;

        this.graphState = this.parser.process(this.filters, selectedNode);
        if (this.graphState.nodes) this.graphState.visibleBundlesCount = this.graphState.nodes.length;
    }
}
