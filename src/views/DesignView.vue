<template>
    <div>
        <!-- <CollapseDesign/>
        <ModalDesign/> -->
        <!-- <GameDesign/> -->
        <References/>
    </div>
</template>

<script>
    import CollapseDesign from "../components/design/CollapseDesign";
    import ModalDesign from "../components/design/ModalDesign";
    import GameDesign from "../components/design/GameDesign";
    import References from "../components/design/References";

    export default {
        name: "Design",
        components: {
            CollapseDesign,
            ModalDesign,
            GameDesign,
            References
        },
        data() {
            return {};
        },
        methods: {}
    };
</script>