<template>
    <div id="content">
        <AlvarezBody/>
        <MainPanel/>
        <MainToolbar :nextProject="nextProject" :lastProject="lastProject" active="is-active"/>
    </div>
</template>
<script>
    import MainToolbar from "../components/MainToolbar";
    import MainPanel from "../components/MainPanel";
    import AlvarezBody from "../components/alvarez/AlvarezBody";

    export default {
        name: "AlvarezView",
        components: {
            MainToolbar,
            MainPanel,
            AlvarezBody
        },
        data() {
            return {
                nextProject: {
                    link: "principito",
                    name: "Next Project"
                },
                lastProject: {
                    link: "vive1",
                    name: "Prev Project"
                }
            };
        }
    };
</script>