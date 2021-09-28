<template>
    <div class="bgr-nav-button">
        <p>{{ name }}</p>
    </div>
</template>

<script>
export default {
    name: "BundleGraphNavButton",
    props: {
        name: {
            type: String
        }
    }
}
</script>

<style scoped>
    .bgr-nav-button {
        background-color: #7292b3;
        width:  218px;
        height: 48px;
    }

    .bgr-nav-button p {
        text-align: center;
    }
</style>
