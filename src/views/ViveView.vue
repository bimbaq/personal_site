<template>
    <div id="content">
        <ViveBody/>
        <MainPanel/>
        <MainToolbar :nextProject="nextProject" :lastProject="lastProject" active="is-active"/>
    </div>
</template>
<script>
    import MainToolbar from "../components/MainToolbar";
    import MainPanel from "../components/MainPanel";
    import ViveBody from "../components/vive1/ViveBody";

    export default {
        name: "ViveView",
        components: {
            MainToolbar,
            MainPanel,
            ViveBody
        },
        data() {
            return {
                nextProject: {
                    link: "alvarez-bravo",
                    name: "Next Project"
                },
                lastProject: {
                    link: "evaluar",
                    name: "Prev Project"
                }
            };
        }
    };
</script>