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
                        <div class="color-aquamarine b-txt-m font-300">UI Designer / Web development</div>
                    </div>
                    <div class="col-lg-1 col-md-1 col-sm-2 col-xs-2 text-right mt-8 hide-xs">
                        <div class="b-txt-t font-600">Date</div>
                        <div class="color-aquamarine b-txt-m font-300">2015</div>
                    </div>
                </div>
                <div class="row between-md between-lg bi-hero-content">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 hide-xs">
                        <div class="bi-hero-center">                        
                            <div class="bi-hero-image">
                                <img src="../../../static/img/alvarez/a_0.png" height="1599" width="2560" class="img-content img-float">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 relative">
                        <div class="bi-headline-bg bi-headline-wrapper bi-blue-light">
                            <div class="bi-headline__inline">
                               <h3 class="color-aquamarine b-txt-t font-300">Project</h3>
                               <span class="bi-headline__line"></span>
                            </div>
                            <h2 class="b-txt-l color-aquamarine font-600 mb-16">Alvarez Bravo</h2>
                        </div>
                        <p class="b-txt-s font-400 color-white text-justify">While working at Nación Digital in 2015 - (Ecuador), My role was to work closely with the design team to produce visual design, prototypes and documentation. I was also involved with user testing, legal and research and worked closely with development team to ensure quality, animation, and interactions were considered from concept to completion.</p>
                        <p class="b-txt-s">One of the projects was<a class="bi-link ml-4 mr-8 color-aquamarine" href="http://bit.ly/2ERV1ux"><span class="bi-link-label bi-blue-light">alvarezbravo.com.ec</span></a></p>
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
                        Alvarez Bravo is a builder and real estate, its purpose was to create impact among its clients in a visual and interactive way, which would have an easy way to see the location and characteristics of each property for sale, as well as its availability for marketing and delivery time. Designed to have a very tactile and home-made feel, the site underwent a significant amount of testing and re-design to achieve this tricky mix.
                    </p>
                </div>
            </div>
        </div>

        <AlvarezManager class="container--80"/>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import Particle from "../common/Particle";
    import AlvarezManager from "../alvarez/AlvarezManager";

    export default {
        name: "AlvarezBody",
        components: {
            Particle,
            AlvarezManager
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
                ]
            };
        },
        methods: {
            showTab({ index }) {
                this.selectedIndexTab = index;
            }
        },
        computed: {
            ...mapGetters({
                isParticleOpen: "isParticleOpen"
            })
        }
    };
</script>
