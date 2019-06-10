<template>
    <div class="cd-toolbar">
    	<div class="cd-btn" :class="active">
            <a 
                class="cd-btn-3" 
                @click="cdBtn" 
                v-if="justPlayground"
            >
                About
            </a>
            <template v-else>
                <a class="cd-btn-3" @click="cdBtn">About</a>
                <router-link class="cd-btn-1" :to="{ path: lastProject.link }">{{lastProject.name}}</router-link>
                <router-link class="cd-btn-2" :to="{ path: nextProject.link }">{{nextProject.name}}</router-link>
            </template>
	        <div class="bar bar-1"></div>
	        <div class="bar bar-2"></div>
	        <div class="bar bar-3"></div>
	    </div>
    </div>
</template>


<script>
    export default {
        name: "MainToolbar",
        props: {
            active: {
                type: String,
                default: ""
            },
            justPlayground: {
                type: Boolean,
                required: false,
                default: false
            },
            nextProject: {},
            lastProject: {}
        },
        data() {
            return {
            };
        },
        methods: {
            cdBtn() {
                $(".cd-panel").addClass("is-visible");
                $(".page-loaded").css({ overflow: "hidden" });
                this.$store.commit("SET_PARTICLE_ANIMATION", { particleActive: true });
            }
        },
        mounted() {
            this.$store.commit("SET_PARTICLE_ANIMATION", { particleActive: false });

            const appHeight = $(window).height() + 500;

            // $(document).ready(($) => {
            $(window).scroll(() => {
                if ($(window).scrollTop() > appHeight) {
                    $("body").addClass("page-loaded");
                } else {
                    $("body").removeClass("page-loaded");
                }

                if ($(window).scrollTop() > 50) {
                    $("body").addClass("page-animated");
                } else {
                    $("body").removeClass("page-animated");
                }
            });
            // });
        }
    };
</script>

<style lang="scss">
    $color-blue-dark: #010C36;
    $color-aquamarine: #77FBE3;
    $color-white: #FFFFFf;
    $color-yellow: #F8CD46;

    %text-motion {
        background: linear-gradient(270deg,$color-aquamarine,$color-yellow,$color-white,$color-aquamarine);
        background-size: 600% 600%;
        -webkit-animation: Gradient 3s ease infinite;
        -moz-animation: Gradient 3s ease infinite;
        animation: Gradient 3s ease infinite;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    body{

        &.page-loaded {
        
            .cd-btn, 
            .cd-btn-1, 
            .cd-btn-2, 
            .cd-btn-3 {
                bottom:10px;
            }

            .cd-toolbar {
                height: 50px;
            }

        }

        &.page-animated {
            
            .overview {
                transform: skewY(0deg) translateY(0);
                opacity: 1;
            }
        }
    }

    .cd-toolbar {
        position: fixed;
        z-index: 10;
        background: #010C36;
        height: 0;
        left: 0;
        width: 100%;
        bottom: 0;
        transition: height .2s ease-in-out;
    }

    .cd-btn {
        position: fixed;
        left: 50%;
        bottom: -70px;
        width: 40px;
        height: 30px;
        margin-left: -20px;
        z-index: 1;
        transition: bottom .4s ease-in-out;
        cursor: pointer;

        &-1,
        &-2,
        &-3 {
            position: fixed;
            pointer-events: none;
            color: transparent;
            font-size: 16px;
            letter-spacing: 2px;
            line-height: 30px;
            white-space: nowrap;
            will-change: color;
            transition: color .5s cubic-bezier(.19,1,.22,1);
            // bottom: 14px;
            // bottom: 10px;
            bottom: -70px;
        }

        &-1 {
            // left: calc(50% - 98px);
            left: calc(50% - 154px);
            // padding-right: 36px;
            // padding-left: 8px;
        }

        &-2 {
            left: calc(50% + 50px);
            // padding-left: 36px;
            // padding-right: 8px;
        }

        &-3 {
            left: calc(50% - 25px);
        }

        // &::before,
        // &::after {
        //     position: fixed;
        //     pointer-events: none;
        //     color: transparent;
        //     font-size: 16px;
        //     letter-spacing: 2px;
        //     line-height: 21px;
        //     white-space: nowrap;
        //     will-change: color;
        //     transition: color .5s cubic-bezier(.19,1,.22,1);
        //     bottom: 14px;
        // }

        // &::before {
        //     content: "About";
        //     left: calc(50% - 78px);
        //     padding-right: 16px;
        // }

        // &::after {
        //     content: "Playground";
        //     left: calc(50% + 16px);
        //     padding-left: 16px;
        // }

        .bar {
            position: absolute;
            left: 10%;
            top: 0;
            width: 80%;
            height: 2px;
            transition: left .3s, width .3s ease-in-out, top .2s;
            background: $color-aquamarine;

            &-1 {
                top: 7px;
            }

            &-2 {
                top: 14px;
            }

            &-3 {
                top: 21px;
            }
        }

        &:hover,
        &.is-active {
            width: 320px;
            margin-left: -160px;
            // &::before,
            // &::after { 
            //     pointer-events: initial;
            //     @extend %text-motion;
            // }

            & .cd-btn-1,
            & .cd-btn-2,
            & .cd-btn-3 {
                pointer-events: initial;
                @extend %text-motion; 
            }
            
            .bar {
                left: 0;
                width: 100%;            
            }

            .bar-1,
            .bar-3 {
                top: 14px;
            }

            .bar-1,
            .bar-2,
            .bar-3 {
                opacity: 0;
                transition: opacity .5s cubic-bezier(.19,1,.22,1);
            }            
        }
    }

</style>