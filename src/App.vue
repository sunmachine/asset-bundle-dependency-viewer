<template>
    <div id="app">
        <BundleGraph/>
    </div>
</template>

<script>
import BundleGraph from './components/BundleGraph.vue'

export default {
    name: 'App',
    components: {
        BundleGraph
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
