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
                        <div class="color-aquamarine b-txt-m font-300">UI Designer / Frontend Developer</div>
                    </div>
                    <div class="col-lg-1 col-md-1 col-sm-2 col-xs-2 text-right mt-8 hide-xs">
                        <div class="b-txt-t font-600">Date</div>
                        <div class="color-aquamarine b-txt-m font-300">Currently</div>
                    </div>
                </div>
                <div class="row between-md between-lg bi-hero-content">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 hide-xs">
                        <div class="bi-hero-center">            
                            <div class="bi-hero-image">
                                <img src="../../../static/img/octopus/cms_0.png" class="img-content img-float">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 relative">
                        <div class="bi-headline-bg bi-headline-wrapper bi-blue-light">
                            <div class="bi-headline__inline">
                               <h3 class="color-aquamarine b-txt-t font-300">Project</h3>
                               <span class="bi-headline__line"></span>
                            </div>
                            <h2 class="b-txt-l color-aquamarine font-600 mb-16">⍘Knowbly</h2>
                        </div>
                        <p class="b-txt-s font-400 color-white text-justify">When I started at Metrodigi as UI Designer, I was assigned the ⍘Knowbly project. With multiple developers and engineers working on different parts of the application, we wanted to find a way for the team keeps things consistent visually and in user experience. And as one of the designers with development and rapid prototyping experience, they gave me the task and goal of achieving synchronization and ensuring that the patterns are similar and there’s a consistent language across the application. For that we actively documents ⍘Knowbly’s design styles, components (Vue.js) and patterns on two different site that's accessible to everyone in the company. </p>
                        <p class="b-txt-s">Visit <a class="bi-link ml-4 mr-8 color-aquamarine" href="http://bit.ly/2FKjhjh"><span class="bi-link-label bi-blue-light">⍘Knowbly style guide</span></a> or <a class="bi-link ml-4 mr-8 color-aquamarine" href="http://bit.ly/2tPCpKA"><span class="bi-link-label bi-blue-light">⍘Knowbly components</span></a> to see some of my work.</p>
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

                    <p class="color-black bi-txt-m font-400">⍘Knowbly is a collaborative application of versatile creation to create interactive learning materials and publish digital content of open standards, through widgets that work on desktop and mobile devices. Currently, I am in charge of making the prototypes and basic functionality of some components, following the style guide proposed by the UI / UX Design team.</p>
                </div>
            </div>
        </div>

        <OctopusManager class="container--80"/>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import Particle from "../common/Particle";
    import OctopusManager from "../octopus/OctopusManager";

    export default {
        name: "OctopusBody",
        components: {
            Particle,
            OctopusManager
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