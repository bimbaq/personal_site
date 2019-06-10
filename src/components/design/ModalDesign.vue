<template>
    <div>
        <button @click="showModal = !showModal">Show me</button>
        <Modal :show="showModal" @close="showModal = !showModal">
            <button @click="showModal = !showModal">Hey</button>
        </Modal>
    </div>
</template>

<script>
    import Modal from "../common/Modal";

    export default {
        components: {
            Modal
        },
        name: "ModalDesign",
        data() {
            return {
                showModal: false
            };
        }
    };
</script>