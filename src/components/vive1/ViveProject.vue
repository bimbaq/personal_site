<template>
    <div class="container">
        <div class="row pb-40">
            <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 text-left">
                <div class="pl-32 pr-32 mr-32 mt-64">
                    <div class="bg-white mb-24">
                        <img src="../../../static/img/vive1/logo-b.svg" class="img-content img-float" style="max-width: 160px">
                    </div>
                    <p class="color-black bi-txt-m font-400">
                        The Vive1 product was a very ambitious undertaking and as you can see from the interface elements in my designs, our objective was to create the best user experience possible. 
                    </p>
                    <p class="color-black bi-txt-m font-400 mb-24">
                        Also make reusable components in various parts of the site, this project was one of the first sites where we use a Framework like (Angular.JS) for the prototypes and be able to bring a clear idea to the other guys.
                    </p>
                </div>
            </div>
            <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <div class="bi-hero-image simple">
                    <img src="../../../static/img/vive1/v_4.png" class="img-content img-float">
                </div>
            </div>
        </div>
        <div class="row pb-40">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="bi-hero-image simple">
                    <img src="../../../static/img/vive1/v_3.png" class="img-content img-float">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-right">
                <h1 class="bi-title color-blau bi-txt-xl font-400 mt-64">Brand Assets</h1>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <p class="bi-paragraph color-blau bi-txt-m font-400">
                            Roboto
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
            </div>
        </div>
        <div class="row pb-24">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="bi-hero-image simple mb-24">
                            <img src="../../../static/img/vive1/v_m1.png" class="img-content img-float">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="bi-hero-image simple mb-24">
                            <img src="../../../static/img/vive1/v_m2.png" class="img-content img-float">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="bi-hero-image simple mb-24">
                            <img src="../../../static/img/vive1/v_m3.png" class="img-content img-float">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="bg-white">
                            <img src="../../../static/img/vive1/v_p.png" class="img-content img-float" style="max-width: 270px">
                        </div>
                        <div class="row mt-48 text-left">
                            <div class="pl-32 pr-32 ml-32">
                                <p class="bi-paragraph bi-paragraph-l color-blau bi-txt-m font-400">
                                    This project was a prime candidate for the adoption of the new visual language and at the same time to take the site to a mobile version.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pb-40">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h1 class="bi-title color-blau bi-txt-xl font-400 mt-64">Home page & Filter page</h1>
            </div>
        </div>
        <div class="row pb-40">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="bi-hero-image simple mb-24">
                    <img src="../../../static/img/vive1/v_0.png" class="img-content img-float">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="bi-hero-image simple">
                    <img src="../../../static/img/vive1/v_5.png" class="img-content img-float">
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
        name: "Vive1Project",
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
                        name: "Celestial blue",
                        code: "#1D8CD0"
                    },
                    {
                        name: "Deep carrot orange",
                        code: "#FF5D1D"
                    },
                    {
                        name: "Dove gray",
                        code: "#757575"
                    }
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

    $baseFamily: 'Roboto', sans-serif;
    @import url('https://fonts.googleapis.com/css?family=Roboto');

    .font-unique {
        font-family: $baseFamily;

    }
</style>