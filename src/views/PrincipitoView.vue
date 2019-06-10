<template>
    <div>
        <PrincipitoBody/>
        <MainPanel/>
        <MainToolbar :nextProject="nextProject" :lastProject="lastProject" active="is-active"/>
    </div>
</template>
<script>
    import MainToolbar from "../components/MainToolbar";
    import MainPanel from "../components/MainPanel";
    import PrincipitoBody from "../components/principito/PrincipitoBody";

    export default {
        name: "PrincipitoView",
        components: {
            MainToolbar,
            MainPanel,
            PrincipitoBody
        },
        data() {
            return {
                nextProject: {
                    link: "kds",
                    name: "Next Project"
                },
                lastProject: {
                    link: "alvarez",
                    name: "Prev Project"
                }
            };
        }
    };
</script>
