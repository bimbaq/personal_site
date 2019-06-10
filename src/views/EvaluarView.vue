<template>
    <div id="content">
        <EvaluarBody/>
        <MainPanel/>
        <MainToolbar :nextProject="nextProject" :lastProject="lastProject" active="is-active"/>
    </div>
</template>
<script>
    import MainToolbar from "../components/MainToolbar";
    import MainPanel from "../components/MainPanel";
    import EvaluarBody from "../components/evaluar/EvaluarBody";

    export default {
        name: "OctopusView",
        components: {
            MainToolbar,
            MainPanel,
            EvaluarBody
        },
        data() {
            return {
                nextProject: {
                    link: "vive1",
                    name: "Next Project"
                },
                lastProject: {
                    link: "kds",
                    name: "Prev Project"
                }
            };
        }
    };
</script>