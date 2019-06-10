<template>
    <collapse-animation :duration="duration">
        <slot v-if="show"/>
    </collapse-animation>
</template>

<script>
    import CollapseAnimation from "../animations/CollapseAnimation";

    export default {
        components: {
            CollapseAnimation
        },
        name: "Collapse",
        props: {
            show: {
                type: Boolean,
                required: false,
                default: true
            },
            duration: {
                type: Number,
                required: false,
                default: 250
            }
        },
        data() {
            return {};
        }
    };
</script>