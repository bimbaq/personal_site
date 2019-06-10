<template>
    <div id="content">
        <OctopusBody/>
        <MainPanel/>
        <MainToolbar :nextProject="nextProject" :lastProject="lastProject" active="is-active"/>
    </div>
</template>
<script>
    import MainToolbar from "../components/MainToolbar";
    import MainPanel from "../components/MainPanel";
    import OctopusBody from "../components/octopus/OctopusBody";

    export default {
        name: "OctopusView",
        components: {
            MainToolbar,
            MainPanel,
            OctopusBody
        },
        data() {
            return {
                nextProject: {
                    link: "evaluar",
                    name: "Next Project"
                },
                lastProject: {
                    link: "alvarez-bravo",
                    name: "Prev Project"
                }
            };
        }
    };
</script>