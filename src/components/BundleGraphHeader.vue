<template>
    <div class="bgr-header-container">
        <h1>Asset Bundle Topology</h1>
        <p>
            {{ `Manifest path: ${manifestPath}` }}<br/>
            {{ `Total bundles: ${bundleCount}` }}<br/>
            {{ `Visible bundles: ${visibleBundlesCount}` }}
        </p>
    </div>
</template>


<script>
export default {
    name: 'BundleGraphHeader',
    props: {
        bundleCount: {
            default: function () {
                return 0;
            }
        },
        visibleBundlesCount: {
            default: function () {
                return 0;
            }
        },
        manifestPath: {
            default: function () {
                return "Please select a file...";
            }
        }
    }
}
</script>

<style scoped>
.bgr-header-container {
    z-index: -10;
    position: absolute;
    top: 0px;
    right: 0px;
    user-select: none;
    margin-right: 24px;
    margin-top: 12px;
}

p {
    text-align: left;
}
</style>
