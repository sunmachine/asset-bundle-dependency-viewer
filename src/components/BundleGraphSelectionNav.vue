<template>
    <div class="bgr-selection-nav-container">
        <bundle-graph-selection-nav-button :buttonProps="clearSelectionButton"/>
        <bundle-graph-selection-nav-button :buttonProps="isolateNodeButton"/>
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
                name: 'c',
                onClick: this.selectionNavProps.onClearSelectedNode
            },
            isolateNodeButton: {
                name: '⌾',
                onClick: this.selectionNavProps.onIsolateSelectedNode
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
    height: 256px;
}

.bgr-selection-nav-container p {
    margin: 0;
}
</style>
