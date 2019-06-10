<template>
    <div class="container">
        <div class="row pb-40">
            <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 text-left">
                <div class="pl-32 pr-32 mr-32 mt-64">
                    <div class="bg-white mb-24">
                        <img src="../../../static/img/evaluar/logo-base.png" class="img-content img-float" style="max-width: 160px">
                    </div>
                    <p class="color-black bi-txt-m font-400 mb-24">
                        One thing that stands out initially is that despite being a corporative app, the colours are bright, energetic and shout for attention.
                    </p>
                    <p class="bi-paragraph bi-paragraph-l color-blau bi-txt-m font-400 mb-24">
                        Rather than signalling that the product is a homage to Google Material Design principles, aesthetics it embraces a bold, contemporary graphic style.
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
                    <div class="slide slide--1"><img src="../../../static/img/evaluar/ev_0.png" class="img-content"></div>
                    <div class="slide slide--2"><img src="../../../static/img/evaluar/ev_1.png" class="img-content"></div>
                    <div class="slide slide--3"><img src="../../../static/img/evaluar/ev_2.png" class="img-content"></div>
                    <div class="slide slide--4"><img src="../../../static/img/evaluar/ev_3.png" class="img-content"></div>
                    <div class="slide slide--5"><img src="../../../static/img/evaluar/ev_4.png" class="img-content"></div>
                    <div class="slide slide--6"><img src="../../../static/img/evaluar/ev_5.png" class="img-content"></div>
                    <div class="slide slide--7"><img src="../../../static/img/evaluar/ev_6.png" class="img-content"></div>
                    <div class="slide slide--8"><img src="../../../static/img/evaluar/ev_7.png" class="img-content"></div>
                    <div class="slide slide--9"><img src="../../../static/img/evaluar/ev_8.png" class="img-content"></div>
                    <div class="slide slide--10"><img src="../../../static/img/evaluar/ev_9.png" class="img-content"></div>
                </agile>
            </div>
        </div>
        <div class="row pb-40">
            <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <agile 
                    :arrows="false" 
                    :speed="750"
                    :timing="'linear'" 
                    :fade="true"
                    :autoplay="true" 
                    :pauseOnHover="false">
                    <div class="slide slide--1"><img src="../../../static/img/evaluar/ev_10.png" class="img-content"></div>
                    <div class="slide slide--1"><img src="../../../static/img/evaluar/ev_11.png" class="img-content"></div>
                    <div class="slide slide--1"><img src="../../../static/img/evaluar/ev_12.png" class="img-content"></div>
                </agile>
            </div>
            <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 text-right">
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
        <div class="row pb-40">
            <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 text-left">
                <div class="pl-32 pr-32 mr-32 mt-64 mb-32">
                    <p class="color-black bi-txt-m font-400 mb-40">
                        Evaluar's interaction was not always like this. In a previous version, it showed the hidden menu which made losing the origin and steps needed to complete a certain scenario. Therefore, the needs and behaviors of users have been analyzed and understood over time. That is why the most convenient solution for the most common scenario has been designed, instead of trying to include as many options as possible, it was reduced in smaller modules.
                    </p>
                </div>
                <div class="bg-white mb-24">
                    <img src="../../../static/img/evaluar/e_p.png" class="img-content img-float" style="max-width: 340px">
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
                    <div class="slide slide--1"><img src="../../../static/img/evaluar/c_0.png" class="img-content"></div>
                    <div class="slide slide--2"><img src="../../../static/img/evaluar/c_1.png" class="img-content"></div>
                    <div class="slide slide--3"><img src="../../../static/img/evaluar/c_2.png" class="img-content"></div>
                    <div class="slide slide--4"><img src="../../../static/img/evaluar/c_3.png" class="img-content"></div>
                    <div class="slide slide--5"><img src="../../../static/img/evaluar/c_4.png" class="img-content"></div>
                </agile>
            </div>
        </div>
        <div class="row pb-40">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h1 class="bi-title color-blau bi-txt-xl font-400 mt-64">Profile editor for careers and user's resume</h1>
            </div>
        </div>
        <div class="row pb-40">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-24">
                <div class="bi-hero-image simple">
                    <img src="../../../static/img/evaluar/ev_13.png" class="img-content img-float">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="bi-hero-image simple">
                    <img src="../../../static/img/evaluar/c_5.png" class="img-content img-float">
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
        name: "EvaluarCap",
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