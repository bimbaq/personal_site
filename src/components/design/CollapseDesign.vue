<template>
    <div>
        <button @click="isOpen = !isOpen">
            Click me
        </button>
        <Collapse :show="isOpen">
            <div style="background:red">
                Autonomy. Our desire and ability to be self directed, to control our work to a certain extent.
            </div>
        </Collapse>
    </div>
</template>

<script>
    import Collapse from "../common/Collapse";

    export default {
        components: {
            Collapse
        },
        name: "CollapseDesign",
        data() {
            return {
                isOpen: false
            };
        }
    };
</script>