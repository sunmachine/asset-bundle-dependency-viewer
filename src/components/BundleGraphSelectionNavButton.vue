<template>
    <div class="bgr-selection-nav-button"
         v-if="buttonProps !== undefined"
         v-on:click="buttonProps.onClick">
        <div class="tooltip">
            <IsolateImage class="button-icon" id="button-isolate" v-if="buttonProps.name === 'isolate'"/>
            <IsolateImage class="button-icon" id="button-isolate-dependents" v-if="buttonProps.name === 'isolate-dependents'"/>
            <CancelImage class="button-icon" id="button-clear-selection" v-if="buttonProps.name === 'clear'"/>
            <span class="tooltip-text">{{ buttonProps.toolTip }}</span>
        </div>

    </div>
</template>

<script>
import IsolateImage from "@/assets/icons/svg/018-notification.svg";
import CancelImage from "@/assets/icons/svg/005-cancel.svg";

export default {
    name: "BundleGraphNavButton",
    components: {
        IsolateImage,
        CancelImage
    },
    props: {
        buttonProps: {
            type: Object,
            default: function () {
                return undefined;
            },
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

.bgr-selection-nav-button:hover {
    border-radius: 16px;
    background-color: #a9cae3;
}

.bgr-selection-nav-button:active {
    border-radius: 16px;
    background-color: #d5ecf5;
}

.tooltip {
    position: relative;
    display: inline-block;
}

.tooltip .tooltip-text {
    visibility: hidden;
    background-color: #212226;
    color: #CADCEA;
    text-align: center;
    border-radius: 6px;
    padding: 8px;
    margin-left: 8px;
    width: 10em;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
}

.tooltip:hover .tooltip-text {
    visibility: visible;
}

.button-icon {
    fill: #bbd6f1;
    padding: 8px;
}

/* Button-specific SVG settings. */
#button-isolate {
}

#button-isolate-dependents {
    transform: scaleY(-1);
}

#button-clear-selection {
}

</style>
