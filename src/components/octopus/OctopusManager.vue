<template>
    <div class="container">
        <div class="row pb-40">
            <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 text-left">
                <div class="pl-32 pr-32 mr-32 mt-64">
                    <div class="bg-white mb-24">
                        <img src="../../../static/img/octopus/1000.png" class="img-content img-float" style="max-width: 110px">
                    </div>
                    <p class="color-black bi-txt-m font-400 mb-24">
                        Worked closely with frontend developers to quickly iterate and prototype. As designer, I drive the end-to-end user experience ensuring that we build the minimal viable product, incorporate user centered design techniques.
                    </p>
                    <p <p class="bi-paragraph bi-paragraph-l color-blau bi-txt-m font-400 mb-24">
                        For this, I have to have the application with web standards, accessibility and compatibility with most browsers and devices, including Retina displays.
                    </p>
                </div>
            </div>
            <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <agile 
                    :arrows="false" 
                    :speed="750"
                    :timing="'linear'" 
                    :fade="true"
                    :autoplay="true" 
                    :pauseOnHover="false">
                    <div class="slide slide--1"><img src="../../../static/img/octopus/cms_1.png" class="img-content"></div>
                    <div class="slide slide--2"><img src="../../../static/img/octopus/cms_3.png" class="img-content"></div>
<!--                     <div class="slide slide--3"><img src="../../../static/img/octopus/cms_5.png" class="img-content"></div>
                    <div class="slide slide--4"><img src="../../../static/img/octopus/cms_7.png" class="img-content"></div>
                    <div class="slide slide--5"><img src="../../../static/img/octopus/cms_10.png" class="img-content"></div>
                    <div class="slide slide--6"><img src="../../../static/img/octopus/cms_11.png" class="img-content"></div> -->
                </agile>
            </div>
        </div>
<!--         <div class="row pb-40">
            <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <agile 
                    :arrows="false" 
                    :speed="750"
                    :timing="'linear'" 
                    :fade="true"
                    :autoplay="true" 
                    :pauseOnHover="false">
                    <div class="slide slide--1"><img src="../../../static/img/octopus/cms_1.png" class="img-content"></div>
                    <div class="slide slide--2"><img src="../../../static/img/octopus/cms_3.png" class="img-content"></div>
                    <div class="slide slide--3"><img src="../../../static/img/octopus/cms_5.png" class="img-content"></div>
                    <div class="slide slide--4"><img src="../../../static/img/octopus/cms_7.png" class="img-content"></div>
                    <div class="slide slide--5"><img src="../../../static/img/octopus/cms_10.png" class="img-content"></div>
                    <div class="slide slide--6"><img src="../../../static/img/octopus/cms_11.png" class="img-content"></div>
                </agile>
            </div>
            <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 text-right">
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
            </div>
        </div> -->
        <div class="row pb-40">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h1 class="bi-title color-blau bi-txt-xl font-400 mt-64">Content Manager</h1>
            </div>
        </div>
        <div class="row center-lg center-md pb-40">
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div class="bi-hero-image simple">
                    <img src="../../../static/img/octopus/cms_74.png" class="img-content img-float">
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
        name: "ContentManager",
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
                        name: "Navy",
                        code: "#283144"
                    },
                    {
                        name: "Green",
                        code: "#5BC28C"
                    },
                    {
                        name: "Blue",
                        code: "#48A6D8"
                    },
                    {
                        name: "Yellow",
                        code: "#EFB549"
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

    $baseFamily: 'Open Sans', sans-serif;
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');

    .font-unique {
        font-family: $baseFamily;

    }
</style>