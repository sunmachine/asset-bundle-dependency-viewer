<template>
    <div class="bgr-selection-nav-button"
         v-if="buttonProps !== undefined"
         v-on:click="buttonProps.onClick">
        <p>{{ buttonProps.name }}</p>
    </div>
</template>

<script>
export default {
    name: "BundleGraphNavButton",
    props: {
        buttonProps: {
            type: Object,
            default: function() { return undefined; },
        }
    }
}
</script>

<style scoped>
.bgr-selection-nav-button {
    background-color: #7292b3;
    border-radius: 4px;
    position: relative;
    width: 32px;
    height: 32px;
    margin: 5px;

    transition: all;
    transition-duration: 166ms;

    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
}

.bgr-selection-nav-button p {
    text-align: center;
    margin: auto;
    padding: 5px 0;
}

.bgr-selection-nav-button :hover {
    background-color: #a9cae3;
    border-radius: 4px;
    color: #2c3e50;
}

.bgr-selection-nav-button :active {
    background-color: #d5ecf5;
    border-radius: 4px;
    color: #2c3e50;
}
</style>
