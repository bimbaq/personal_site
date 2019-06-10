<template>
    <div class="container">
        <div class="row pb-40">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="bi-hero-image simple mb-20">
                    <img src="../../../static/img/alvarez/a_t2.png" class="img-content img-float">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-right">
                <h1 class="bi-title color-blau bi-txt-xl font-400 mt-64">Brand Assets</h1>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <p class="bi-paragraph color-blau bi-txt-m font-400">
                            Open sans
                        </p>
                        <div class="mt-24 color-black font-unique">
                            <span class="b-txt-google">Aa</span>
                            <span>
                                <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                                <div>abcdefghijklmnopqrstuvwxyz</div>
                                <div>1234567890(,.;:?!$&*)</div>
                            </span>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <p class="bi-paragraph color-blau bi-txt-m font-400">
                            Primary Color Palette
                        </p>
                        <ul class="mt-24 color-gray-71">
                            <li class="pallete" :key="index" v-for="(hex, index) in pallete">
                                <span class="shape" :class="{'label': hex.checked}" :style="{'background-color' : hex.code }" :title="hex.code" @click.prevent="openPallete(index)"></span>
                                <div class="mt-8 ml-8">{{hex.name}}</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row mt-32 text-left">
                    <div class="pl-32 pr-32 ml-32">
                        <p class="color-black bi-txt-m font-400 mb-40">
                            Interaction and motion design were very important factors to give the website the polish it required. We designed a unique header section and vertical fixed navigation that made the site easy to explore and created impact when first landing on the homepage, working with the developers to bring it to life across devices.
                        </p>
                        <p class="bi-paragraph bi-paragraph-l color-blau bi-txt-m font-400">
                            It goes without saying that the website is fully responsive, it have the same ease of navigation, discovery and visual impact at every screen size.
                        </p>
                    </div>
                </div>
                <div class="row mt-48">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="bi-hero-image simple">
                            <img src="../../../static/img/alvarez/a_m.png" class="img-content img-float">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class=" mb-32">
                            <img src="../../../static/img/alvarez/a_8.jpg" class="img-content img-float">
                        </div>
                        <div class="">
                            <img src="../../../static/img/alvarez/a_9.jpg" class="img-content img-float">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pb-40">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h1 class="bi-title color-blau bi-txt-xl font-400 mt-64">Project & Contact</h1>
            </div>
        </div>
        <div class="row pb-40">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="bi-hero-image simple mb-24">
                    <img src="../../../static/img/alvarez/a_4.png" class="img-content img-float">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="bi-hero-image simple">
                    <img src="../../../static/img/alvarez/a_3.png" class="img-content img-float">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import VueAgile from "vue-agile";

    Vue.use(VueAgile);

    export default {
        name: "AlvarezManager",
        components: {
            VueAgile
        },
        data() {
            return {
                options: {
                    arrows: true
                },
                active: false,
                pallete: [
                    {
                        name: "Valencia",
                        code: "#DB514A"
                    },
                    {
                        name: "Charcoal",
                        code: "#404042"
                    },
                    {
                        name: "Nero",
                        code: "#262626"
                    }
                    // {
                    //     name: "White",
                    //     code: "#FFFFFF"
                    // }
                ]
            };
        },
        methods: {
            openPallete(index) {
                const color = this.pallete[index];

                if (!("checked" in color)) {
                    color.checked = true;
                } else {
                    color.checked = !color.checked;
                }

                Vue.set(this.pallete, index, color);
            }
        }
    };
</script>
<style lang="scss">
    .bi-project-desc {
        position: relative;
        top: -66px;
    }

    $baseFamily: 'Open Sans', sans-serif;
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');

    .font-unique {
        font-family: $baseFamily;

    }
</style>