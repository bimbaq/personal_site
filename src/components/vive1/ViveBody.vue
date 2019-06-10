<template>
    <div class="mb-64">
        <div class="bi-hero blau">
            <div class="container container--96 pt-64">
                <div class="row color-white">
                    <div class="col-lg-8 col-md-7 col-sm-6 col-xs-5 hide-xs">
                        <router-link :to="{ path: '*' }">
                            <div class="bi-name ml-32">
                                <h1 class="color-aquamarine font-400 blue-light">Byron Imbaquingo</h1>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 text-right mt-8">
                        <div class="b-txt-t font-600">Role</div>
                        <div class="color-aquamarine b-txt-m font-300">UI Designer / Code (Angular.JS)</div>
                    </div>
                    <div class="col-lg-1 col-md-1 col-sm-2 col-xs-2 text-right mt-8 hide-xs">
                        <div class="b-txt-t font-600">Date</div>
                        <div class="color-aquamarine b-txt-m font-300">2015 - 2017</div>
                    </div>
                </div>
                <div class="row between-md between-lg bi-hero-content">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 hide-xs">
                        <div class="bi-hero-center">
                            <div class="bi-hero-image" :class="imageClass" v-images-loaded:on.progress="imageProgress">
                                <img :src="hero" class="img-content img-float">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 relative">
                        <div class="bi-headline-bg bi-headline-wrapper bi-blue-light">
                            <div class="bi-headline__inline">
                               <h3 class="color-aquamarine b-txt-t font-300">Project</h3>
                               <span class="bi-headline__line"></span>
                            </div>
                            <h2 class="b-txt-l color-aquamarine font-600 mb-16">Vive 1</h2>
                        </div>
                        <p class="b-txt-s font-400 color-white text-justify">
                            In Grupo Centrico, my first project was Vive1, my role was to help crystalise the vision for a real estate website, lead the delivery of the initial stage of the project, and then lead the ongoing improvements to the platform, ensuring the global customer needs are addressed and the experience provided is continuously improved. I was responsible for the UI design of the product.
                        </p>
                        <p class="b-txt-s font-400 color-white text-justify">
                            Visit website <a class="bi-link ml-4 mr-8 color-aquamarine" href="http://bit.ly/2BS3PlF"><span class="bi-link-label bi-blue-light">vive1.com</span></a>
                        </p>
                    </div>
                </div>
            </div>
            <Particle v-if="!isParticleOpen" :lines="32" class="bi-particle-project"/>
        </div>

        <div class="container-fluid">
            <div class="row pt-72 pb-64 center-lg center-md bg-white">
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <div>
                        <h1 class="bi-title color-blau bi-txt-xl font-400 mt-64">Overview</h1>
                    </div>
                    <p class="color-black bi-txt-m font-400">
                        Re-design of Vive1 a portal for buying and selling properties in Ecuador. Working closely with the sellers to understand their business, I helped define a site structure and information hierarchy. I then worked up wireframes and prototypes to show how their huge set of detailed content could be organised in a way that was simple and easy to navigate.
                    </p>
                </div>
            </div>
        </div>

        <ViveProject class="container--80"/>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import imagesLoaded from "vue-images-loaded";
    import Particle from "../common/Particle";
    import ViveProject from "../vive1/ViveProject";

    export default {
        name: "OctopusBody",
        directives: {
            imagesLoaded
        },
        components: {
            Particle,
            ViveProject
        },
        data() {
            return {
                selectedIndexTab: 0,
                tabs: [
                    {
                        title: "Content manager",
                        selected: "selected",
                        tabWidth: 135,
                        disabled: false
                    },
                    {
                        title: "User managament",
                        tabWidth: 140,
                        disabled: false
                    },
                    {
                        title: "Content manager",
                        tabWidth: 153,
                        disabled: true
                    }
                ],
                hero: "../../../static/img/vive1/v_1.png",
                result: "",
                showImg: false
            };
        },
        methods: {
            showTab({ index }) {
                this.selectedIndexTab = index;
            },
            imageProgress(instance, image) {
                this.result = image.isLoaded ? "loaded" : "broken";
            }
        },
        computed: {
            ...mapGetters({
                isParticleOpen: "isParticleOpen"
            }),
            imageClass() {
                // if (this.result === "loaded") {
                //     return "is-loaded";
                // } else {
                //     return "is-broke";
                // }
            }
        }
    };
</script>