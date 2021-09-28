<template>
    <div>
        <bundle-graph-header
            :bundle-count="bundleCount"
            :visible-bundles-count="visibleBundlesCount"
            :manifest-path="manifestPath"/>
        <bundle-graph-selection-nav
            :selectionNavProps="selectionNavProps"/>
        <d3-network
            :net-nodes="nodes"
            :net-links="links"
            :options="options" v-on:node-click="onSelectedNode"/>
    </div>
</template>

<script>
import D3Network from "vue-d3-network";
import BundleGraphHeader from "@/components/BundleGraphHeader";
import BundleGraphSelectionNav from "@/components/BundleGraphSelectionNav";
import GraphManager from "@/scripts/graph-manager";

const graph = new GraphManager();

export default {
    components: {
        BundleGraphSelectionNav,
        BundleGraphHeader,
        D3Network
    },
    name: 'BundleGraph',
    created() {
        graph.setFilters([]);
        graph.update();
        this.forceUpdateGraph();
    },
    data() {
        return {
            // Interactive reactive variables.
            selectedNode: undefined,

            // Graph mappings.
            manifestPath: undefined,
            manifestFileVersion: undefined,
            manifestCrc: undefined,
            bundleCount: undefined,
            visibleBundlesCount: undefined,
            nodes: [],
            links: [],

            // vue-d3-network options.
            options: {
                size: {
                    w: window.innerWidth,
                    h: window.innerHeight
                },
                force: 1600,
                nodeLabels: true,
                linkWidth: 1,
                canvas: false,
            },
        }
    },
    computed: {
        selectionNavProps: function () {
            return {
                node: this.selectedNode,
                onOpenManifestFile: this.onOpenManifestFile,
                onClearSelectedNode: this.onClearSelectedNode,
                onIsolateSelectedNode: this.onIsolateSelectedNode,
                onIsolateSelectedNodeDependents: this.onIsolateSelectedNodeDependents,
            }
        },
    },
    methods: {
        onSelectedNode(event, node) {
            if (this.selectedNode !== undefined) this.selectedNode._color = "#DCFAF3";
            this.selectedNode = node;
            this.selectedNode._color = "#FFFF00";
        },
        onOpenManifestFile: function (event) {
            let file = event.target.files[0];
            this.manifestPath = file.name;
            graph.setFile(file, () => {
                graph.update();
                this.forceUpdateGraph();
            });
        },
        onClearSelectedNode() {
            graph.update();
            this.forceUpdateGraph();
        },
        onIsolateSelectedNode() {
            graph.update(this.selectedNode);
            this.forceUpdateGraph();
        },
        onIsolateSelectedNodeDependents() {
            graph.update(this.selectedNode);
            this.forceUpdateGraph();
        },
        forceUpdateGraph() {
            if (!graph || !graph.graphState) return;

            this.manifestPath = graph.graphState.manifestPath;
            this.manifestFileVersion = graph.graphState.manifestFileVersion;
            this.manifestCrc = graph.graphState.crc;
            this.bundleCount = graph.graphState.bundleCount;
            this.visibleBundlesCount = graph.graphState.visibleBundlesCount;

            this.nodes = graph.graphState.nodes;
            this.links = graph.graphState.links;
        }
    }
}
</script>

<style src="vue-d3-network/dist/vue-d3-network.css">
</style>
