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
                            <div class="bi-hero-image">
                                <img 
                                    src="../../../static/img/evaluar/ev_1.png" 
                                    class="img-content img-float" 
                                >
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 relative">
                        <div class="bi-headline-bg bi-headline-wrapper bi-blue-light">
                            <div class="bi-headline__inline">
                               <h3 class="color-aquamarine b-txt-t font-300">Project</h3>
                               <span class="bi-headline__line"></span>
                            </div>
                            <h2 class="b-txt-l color-aquamarine font-600 mb-16">Evaluar</h2>
                        </div>
                        <p class="b-txt-s font-400 color-white text-justify">Another project in which I was involved in Grupo Céntrico was Evaluar. One of those that I feel very happy to have been part of in its development. As a designer and the good practices that I had in my previous project and in the good result I had in the development of interface, I had the opportunity to start and work in the development team. Thanks to this project I was able to improve my knowledge in the development area and think beyond the design, bringing the static to the animated.</p>
                        <p class="b-txt-s">Team that I worked with during my stay, <a class="bi-link ml-4 mr-4 color-aquamarine" target="_blank" href="http://bit.ly/2FwTI49"><span class="bi-link-label bi-blue-light">Magos</span></a> or visit corporate website <a class="bi-link ml-4 color-aquamarine" target="_blank" href="https://bit.ly/2Ifsyjq"><span class="bi-link-label bi-blue-light">Evaluar.</span></a></p>
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
                        Company dedicated to the development of tools for the Evaluation of Human Resources, which analyzes all the candidates according to the profile and the objectives of the vacancy. Automates your selection process in a simple, intelligent and modern way. And It is a preferred tool by the Human Resources departments for being the only one that automates the process of selecting human talent, integrating several filters in a single system like a Filter of Resumes, Video Filter Interview. Both for the use of the administrator and for the user.
                    </p>
                </div>
            </div>
        </div>

        <EvaluarCap class="container--80"/>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import Particle from "../common/Particle";
    import EvaluarCap from "../evaluar/EvaluarCap";

    export default {
        name: "OctopusBody",
        components: {
            Particle,
            EvaluarCap
        },
        data() {
            return {
                selectedIndexTab: 0,
                tabs: [
                    {
                        title: "e-Talet",
                        selected: "selected",
                        tabWidth: 80,
                        disabled: false
                    },
                    {
                        title: "Candidatos",
                        tabWidth: 110,
                        disabled: false
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