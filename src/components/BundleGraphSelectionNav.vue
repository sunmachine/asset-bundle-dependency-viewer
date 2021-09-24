<template>
    <div class="bgr-selection-nav-container">
        <bundle-graph-selection-nav-button :buttonProps="clearSelectionButton"/>
        <bundle-graph-selection-nav-button :buttonProps="isolateNodeButton"/>
        <bundle-graph-selection-nav-button :buttonProps="isolateNodeDependentsButton"/>
    </div>
</template>

<script>
import BundleGraphSelectionNavButton from "@/components/BundleGraphSelectionNavButton";

export default {
    name: "BundleGraphSelectionNav",
    components: {
        BundleGraphSelectionNavButton
    },
    props: {
        selectionNavProps: {
            type: Object,
            default: function() { return undefined; }
        },
    },
    data() {
        return {
            clearSelectionButton: {
                name: "clear",
                toolTip: "Clear selection.",
                onClick: this.selectionNavProps.onClearSelectedNode
            },
            isolateNodeButton: {
                name: "isolate",
                toolTip: "Isolate selected node.",
                onClick: this.selectionNavProps.onIsolateSelectedNode
            },
            isolateNodeDependentsButton: {
                name: "isolate-dependents",
                toolTip: "Isolate dependents.",
                onClick: this.selectionNavProps.onIsolateSelectedNodeDependents
            }
        }
    }
}
</script>

<style scoped>
.bgr-selection-nav-container {
    background-color: #2c3e50;
    color: #bbd6f1;
    border-radius: 8px;
    position: absolute;
    left: 0;
    bottom: 0;
    margin-left: 18px;
    margin-bottom: 18px;
    width: 42px;
}

.bgr-selection-nav-container p {
    margin: 0;
}
</style>
