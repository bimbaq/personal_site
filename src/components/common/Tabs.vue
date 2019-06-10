<template>
    <ul class="tab">
        <li class="not-copy"
            v-for="(item, index) in tabsInternal" :key="item.key"
            :style="{ width: (item.tabWidth ? item.tabWidth + 'px': null)}"
            :class="{'disabled' : item.disabled}"
            @click="showTab(item, $event, index)">
            <a :class="{ 'selected': selectedIndex === index }">{{item.title}}</a>
        </li>
    </ul>
</template>
<script>
    export default {
        props: {
            tabs: {
                type: Array,
                required: true
            },
            selectedIndex: {
                type: Number
            }
        },
        name: "tabs",
        data() {
            return {
                tabsInternal: []
            };
        },
        mounted() {
            this.tabsInternal = this.tabs;
        },
        methods: {
            showTab(item, e, index) {
                this.$emit("showTab", { item, index });
                // console.log("showTab", item, e, index)
            }
        }
    };
</script>