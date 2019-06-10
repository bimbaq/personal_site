<template>
    <div>
        <div class="hero bg-blue-dark pb-48"> <!-- bg-blue -->
            <div class="container pt-40">
                <div class="row color-white text-right">
                    <div class="col-lg-8 col-md-6 col-sm-12 col-xs-12">
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-12 col-xs-12">
                        <div class="text-extra-large font-600">Role</div>
                        <div class="color-aquamarine text-large">UX/UI Developer</div>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-12 col-xs-12">
                        <div class="text-extra-large font-600">Date</div>
                        <div class="color-aquamarine text-large">2016</div>
                    </div>
                </div>

                <div class="row between-md between-lg hero-content">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="hero-image">
                            <img src="src/assets/octopus/cms_0.png" class="img-content img-float">
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-6 col-sm-6 col-xs-12">
                        <div class="relative mt-48">
                            <h3 class="color-aquamarine text-name mb-16 font-600">Evaluar Cap.</h3>
                            <ul class="color-white text-medium text-justify">
                                <li>It is a versatile creation collaborative application to create interactive learning materials and publish digital content of open standards.</li>
                                <li>Project in which I am participating as a UI Designer & Frontend Developer.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-divider bg-yellow"></div>
        <div class="hero-divider bg-white"></div>
        <div class="container pt-48 mb-32">
            <Tabs :tabs="tabs" @showTab="showTab" :selectedIndex.sync="selectedIndexTab"/>
        </div>

        <OctopusManager v-if="selectedIndexTab === 0" class="mb-48"/>

        <div class="relative">
            <div class="divider bg-yellow"></div>
            <div class="divider m bg-blue-shadow"></div>
        </div>
        <div class="bg-blue pt-24 pb-40">
            <div class="container">
                <div class="row">
                    <div class="spacer"></div>
                    <div class="text-center">
                        <a href="#" class="color-aquamarine relative underline">
                            <!-- <span class="text-small block">NEXT PROJECT</span> -->
                            <span class="color-blue-lighter text-extra-large-semibold block url">NEXT PROJECT</span>
                        </a>
                    </div>
                    <div class="spacer"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Tabs from "./Tabs";
    import OctopusManager from "./octopus/OctopusManager";

    export default {
        name: "CapContent",
        components: {
            Tabs,
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
                        title: "Account",
                        tabWidth: 79,
                        disabled: false
                    },
                    {
                        title: "User managament",
                        tabWidth: 140,
                        disabled: false
                    },
                    {
                        title: "Introduction layer",
                        tabWidth: 138,
                        disabled: true
                    },
                    {
                        title: "Widgets",
                        tabWidth: 79,
                        disabled: true
                    },
                    {
                        title: "Publish widget",
                        tabWidth: 118,
                        disabled: true
                    }
                ],
                particles: true
            };
        },
        methods: {
            showTab({ index }) {
                this.selectedIndexTab = index;
            }
        }
    };
</script>
