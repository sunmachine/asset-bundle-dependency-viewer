<template>
    <div class="bgr-selection-nav-button"
         v-if="buttonProps !== undefined">
        <div class="tooltip">
            <div v-on:click="buttonProps.onClick" v-if="buttonProps.name === 'isolate'">
                <isolate-image class="button-icon" id="button-isolate"/>
            </div>
            <div v-on:click="buttonProps.onClick" v-if="buttonProps.name === 'isolate-dependents'">
                <isolate-image class="button-icon" id="button-isolate-dependents"/>
            </div>
            <div v-on:click="buttonProps.onClick" v-if="buttonProps.name === 'clear'">
                <cancel-image class="button-icon" id="button-clear-selection"/>
            </div>
            <!--https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/-->
            <div v-if="buttonProps.name === 'open-file'">
                <input type="file" name="file" id="button-open-manifest-file" class="input-file-field"
                       v-on:change="buttonProps.onClick"/>
                <label for="button-open-manifest-file">
                    <open-file-image class="label-icon"/>
                </label>
            </div>
            <span class="tooltip-text">{{ buttonProps.toolTip }}</span>
        </div>
    </div>
</template>

<script>
import IsolateImage from "@/assets/icons/svg/018-notification.svg";
import OpenFileImage from "@/assets/icons/svg/031-folder.svg";
import CancelImage from "@/assets/icons/svg/005-cancel.svg";

export default {
    name: "BundleGraphNavButton",
    components: {
        IsolateImage,
        OpenFileImage,
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

.button-icon, .label-icon {
    fill: #bbd6f1;
    padding: 8px;
}

.input-file-field {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
}

/* Button-specific SVG settings. */
#button-isolate {
}

#button-isolate-dependents {
    transform: scaleY(-1);
}

#button-open-manifest-file {
}

#button-clear-selection {
}

</style>
