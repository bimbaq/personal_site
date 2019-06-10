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
                        <div class="color-aquamarine b-txt-m font-300">Design / Campaigns for social</div>
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
                                <img src="../../../static/img/principito/El-Principito-0.png" class="img-content img-float">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 relative">
                        <div class="bi-headline-bg bi-headline-wrapper bi-blue-light">
                            <div class="bi-headline__inline">
                               <h3 class="color-aquamarine b-txt-t font-300">Project</h3>
                               <span class="bi-headline__line"></span>
                            </div>
                            <h2 class="b-txt-l color-aquamarine font-600 mb-16">El Principito</h2>
                        </div>
                        <p class="b-txt-s font-400 color-white text-justify">Campaign for El Condado Shopping, proposal for the presentation of the movie "El Principito" in Multicines and for this a different way of interacting with customers has been chosen, encouraging them to be active in the different social networks of the company. Collaborate with the design team for the realization of some videos and short animations that were published in social media.</p>
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
                        This consisted of involving the interested parties with activities on the Facebook wall, for them questions and answers, small videos and animations were used. He also made small competitions hiding serious elements in the photographs for them to find them and the first people to find won free passes to go to the movie.
                    </p>
                </div>
            </div>
        </div>

        <div class="container container--80">
            <div class="row pb-24">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="mb-24 bi-hero-image simple">
                        <img src="../../../static/img/principito/El-Principito-1.jpg" class="img-content img-float">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="bi-hero-image simple">
                        <img src="../../../static/img/principito/El-Principito-2.jpg" class="img-content img-float">
                    </div>
                </div>
            </div>
            <div class="row pb-24">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="mb-24 bi-hero-image simple">
                        <img src="../../../static/img/principito/El-Principito-3.jpg" class="img-content img-float">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="bi-hero-image simple">
                        <img src="../../../static/img/principito/El-Principito-6.jpg" class="img-content img-float">
                    </div>
                </div>
            </div>
            <div class="row pb-24">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="mb-24 bi-hero-image simple">
                        <img src="../../../static/img/principito/El-Principito-7.jpg" class="img-content img-float">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="bi-hero-image simple">
                        <img src="../../../static/img/principito/El-Principito-8.jpg" class="img-content img-float">
                    </div>
                </div>
            </div>
            <div class="row pb-24">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="mb-24 bi-hero-image simple">
                        <img src="../../../static/img/principito/El-Principito-9.jpg" class="img-content img-float">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="bi-hero-image simple">
                        <img src="../../../static/img/principito/El-Principito-10.jpg" class="img-content img-float">
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import Particle from "../common/Particle";

    export default {
        name: "AlvarezBody",
        components: {
            Particle
        },
        computed: {
            ...mapGetters({
                isParticleOpen: "isParticleOpen"
            })
        }
    };
</script>
