<template>
    <div class="nav-container">
        <bundle-graph-nav-button :name="TestButton"/>
    </div>
</template>

<script>
import BundleGraphNavButton from "@/components/BundleGraphNavButton";

export default {
    name: "BundleGraphNav",
    components: {
        BundleGraphNavButton
    },
    data() {
        return {

        };
    }
}
</script>

<style scoped>
.nav-container {
    background-color: #2c3e50;
    position: absolute;
    top: 0;
    left: 0;
    width: 256px;
    height: 100vh;
}
</style>
