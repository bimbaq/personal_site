<template>
    <div style="background: red">
        <p>Test</p>
        <hr>
        <template v-for="item in items">
            <p>{{item.number}}</p>
        </template>
        <hr>
        <p>{{getItems()}}</p>
        <hr>
        <p>{{getSelectedItems()}}</p>
        <hr>
    </div>
</template>
<script>

    export default {
        name: "References",
        data() {
            return {
                items: [
                    { index: 1, number: "Eine", selected: false },
                    { index: 2, number: "Swo", selected: true },
                    { index: 3, number: "Drei", selected: false },
                    { index: 4, number: "Vier", selected: false }
                ]
            };
        },
        methods: {
            getItems() {
                return this.items;
            },
            getSelectedItems() {
                // return this.getItems().filter((item) => { return item.selected; });
            }
        },
        computed: {

        }
    };
</script>