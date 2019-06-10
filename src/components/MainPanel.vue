<template>
    <div class="cd-panel from-right">
        <header class="cd-panel-header">
            <button class="bi-close" @click="closeBtn">Cerrar</button>
            <div class="flex-middle social">
                <a href="http://bit.ly/2tLVv4h" target="_blank" class="color-aquamarine mr-8 bi-social">
                    <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                </a>
                <small class="color-white o-5">&nbsp;//&nbsp;</small>
                <a href="http://bit.ly/2tNMnvX" target="_blank" class="color-aquamarine mr-8 ml-8 bi-social">
                    <i class="fa fa-codepen fa-2x" aria-hidden="true"></i>
                </a>
                <small class="color-white o-5">&nbsp;//&nbsp;</small>
                <a href="http://bit.ly/2Hyh7mO" target="_blank" class="color-aquamarine ml-8 bi-social">
                    <i class="fa fa-behance fa-2x" aria-hidden="true"></i>
                </a>
            </div>
            <a class="resume wipe resume-m" href="static/pdf/byron_imbaquingo_91.pdf" target="_blank">RESUME</a>
        </header>
        <div class="cd-panel-container">
            <div class="cd-panel-content">
                    <div class="cd-panel-left hide-xs">
                        <div class="cd-box-description">
                            <h1 class="bi-title color-blau bi-txt-xl font-400 mt-64">Byron Imbaquingo</h1>
                            <p class="color-blue bi-txt-m font-400 mt-8">
                                I am a UI Designer & Frontend Developer currently working at Metrodigi.
                                I enjoy creating stuff and bringing good solutions to life, with wild creativity but also thoughtful mind.
                                Following a design process to carefully make decisions helps me doing the things right.
                                Much of my time is spent thinking through designing interfaces, and coding especially with JS, Vue.js, animations and just coding layout.
                            </p>
                            <p class="color-blue bi-txt-m font-400 mb-32">Other works that I have done apart from web design.</p>
                            <p class="bi-paragraph color-blue bi-txt-m font-400 mb-40">
                                Digging into Vue.js, ThreeJS and AnimeJS
                            </p>
                            <div class="text-right mr-16">
                                <a class="resume wipe" href="static/pdf/byron_imbaquingo_91.pdf" target="_blank">RESUME</a>
                            </div>
                        </div>
                        <Particle v-if="isParticleOpen"/>
                    </div>
                    <div class="cd-panel-right">
                        <div class="row">
                            <div class="col-lg-4">
                                 <img src="../assets/modal/1.gif">
                            </div>
                            <div class="col-lg-4">
                                 <img src="../assets/modal/2.gif">
                            </div>
                            <div class="col-lg-4">
                                 <img src="../assets/modal/3.jpg">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                 <img src="../assets/modal/7.jpg">
                            </div>
                            <div class="col-lg-4">
                                 <img src="../assets/modal/8.jpg">
                            </div>
                            <div class="col-lg-4">
                                 <img src="../assets/modal/4.jpg">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-4">
                                 <img src="../assets/modal/10.jpg">
                            </div>
                            <div class="col-lg-4">
                                 <img src="../assets/modal/11.jpg">
                            </div>
                            <div class="col-lg-4">
                                 <img src="../assets/modal/12.jpg">
                            </div>
                        </div>
                        <img src="../assets/bg.png" class="cd-panel-img">
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import Particle from "./common/Particle";

    export default {
        name: "PanelPlayground",
        components: {
            Particle
        },
        data() {
            return {};
        },
        methods: {
            closeBtn() {
                if ($(event.target).is(".cd-panel") || $(event.target).is(".bi-close")) {
                    $(".cd-panel").removeClass("is-visible");
                    $(".page-loaded").removeAttr("style");
                    this.$store.commit("SET_PARTICLE_ANIMATION", { particleActive: false });
                    event.preventDefault();
                }
            }
        },
        computed: {
            ...mapGetters({
                isParticleOpen: "isParticleOpen"
            })
        }
    };
</script>

<style lang="scss">

    $color-blue-dark: #010C36;
    $color-aquamarine: #77FBE3;
    $color-white: #FFFFFf;
    $color-yellow: #F8CD46;

    .resume {
      display: inline-block;
      vertical-align: top;
      width: 100px;
      height: 34px;
      line-height: 34px;
      text-transform: uppercase;
      text-decoration: none;
      color: #172765;
      letter-spacing: 0.1em;
      text-align: center;
      position: relative;
      box-shadow: inset 0 0 0 2px #77FBE3;
      border-radius: 4px;
      overflow: hidden
    }

    .wipe {
      -webkit-transition: color 0.3s ease-out;
      transition: color 0.3s ease-out;
    }
    .wipe::after {
      width: 100%;
      height: 100%;
      display: block;
      background: #77FBE3;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      transition: transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translateY(34px);
      z-index: -1;
    }
    .wipe:hover::after {
      transform: translateY(0px);
    }



    %text-motion {
        background: linear-gradient(270deg,$color-aquamarine,$color-yellow,$color-white,$color-aquamarine);
        background-size: 600% 600%;
        -webkit-animation: Gradient 3s ease infinite;
        -moz-animation: Gradient 3s ease infinite;
        animation: Gradient 3s ease infinite;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .overflow-fixed {
        position: fixed;
        overflow: hidden!important;
    }

    .cd-panel-img {
        width: 100%;
        height: auto;
        display: inline-block;
        vertical-align: middle;
    }

    .cd-box-description {
        position: relative;
        width: 80%;
        padding-top: 25%;
        margin: 0 auto;
        z-index: 1;
    }

.cd-panel {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  visibility: hidden;
  -webkit-transition: visibility 0s 0.6s;
  -moz-transition: visibility 0s 0.6s;
  transition: visibility 0s 0.6s;
  z-index: 99;

    &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        cursor: pointer;
        -webkit-transition: background 0.3s 0.3s;
        -moz-transition: background 0.3s 0.3s;
        transition: background 0.3s 0.3s;
    }

    &.is-visible {
        visibility: visible;
        -webkit-transition: visibility 0s 0s;
        -moz-transition: visibility 0s 0s;
        transition: visibility 0s 0s;

        &::after {
            background: rgba(0, 0, 0, 0.6);
            -webkit-transition: background 0.3s 0s;
            -moz-transition: background 0.3s 0s;
            transition: background 0.3s 0s;
        }
    }
}

.cd-panel-header {
    position: fixed;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #010C36;
    z-index: 200;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
    -webkit-transition: top 0.3s 0s;
    -moz-transition: top 0.3s 0s;
    transition: top 0.3s 0s;
    -webkit-transition: all 300ms linear;
    -moz-transition: all 300ms linear;
    -o-transition: all 300ms linear;
    -ms-transition: all 300ms linear;
    transition: all 300ms linear;

    .social {
        float: right;
        margin-right: 18px;
    }

    .bi-social {
        transition: all .2s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }

        i {
            padding: 14px 0;
        }
    }
}

.from-right .cd-panel-header, .from-left .cd-panel-header {
  bottom: -50px;
}
.from-right .cd-panel-header {
  right: 0;
}
.from-left .cd-panel-header {
  left: 0;
}
.is-visible .cd-panel-header {
    bottom: 0;
    -webkit-transition: bottom 0.3s 0.3s;
    -moz-transition: bottom 0.3s 0.3s;
    transition: bottom 0.3s 0.3s;
}
/*@media only screen and (min-width: 768px) {
  .cd-panel-header {
    width: 70%;
  }
}
@media only screen and (min-width: 1170px) {
  .cd-panel-header {
    width: 50%;
  }
}*/

.cd-panel-resume {
  // position: absolute;
  // top: 14px;
  // right: 16px;
  color: #77FBE3;
  text-decoration: none;

  // float: right;
  // right: 0;
  // margin-right: 60px;

  &:hover {
    @extend %text-motion;
  }
}

.cd-panel.is-visible .bi-close::before {
  animation: close-anim-1 0.6s 0.3s;
}
.cd-panel.is-visible .bi-close::after {
  animation: close-anim-2 0.6s 0.3s;
}

.cd-panel-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: #ffffff;
/*  background: url(../images/bg.png);
  background-size: 100% 100%;*/
  z-index: 100;
  -webkit-transition-property: -webkit-transform;
  -moz-transition-property: -moz-transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-delay: 0.3s;
  -moz-transition-delay: 0.3s;
  transition-delay: 0.3s;
}
.from-right .cd-panel-container {
  right: 0;
  -webkit-transform: translate3d(100%, 0, 0);
  -moz-transform: translate3d(100%, 0, 0);
  -ms-transform: translate3d(100%, 0, 0);
  -o-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}
.from-left .cd-panel-container {
  left: 0;
  -webkit-transform: translate3d(-100%, 0, 0);
  -moz-transform: translate3d(-100%, 0, 0);
  -ms-transform: translate3d(-100%, 0, 0);
  -o-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
}
.is-visible .cd-panel-container {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition-delay: 0s;
  -moz-transition-delay: 0s;
  transition-delay: 0s;
}
/*@media only screen and (min-width: 768px) {
  .cd-panel-container {
    width: 70%;
  }
}
@media only screen and (min-width: 1170px) {
  .cd-panel-container {
    width: 50%;
  }
}*/

.cd-panel-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;

    .cd-panel-left {
        width: 35%;
        height: 100%;
        // height: calc(100% - 50px;);
        left: 0px;
        top: 0px;
        z-index: 0;
        position: fixed;
        border-right: 2px solid #fAfAfA;
    }
    .cd-panel-right {
        width: 65%;
        height: 100%;
        // padding: 20px 20px 80px;
        margin-left: 35%;
        float: none;
        clear: none;
        overflow: auto;
        /* smooth scrolling on touch devices */
        -webkit-overflow-scrolling: touch;
    }
}

.resume-m {
  display: none;
}

@media only screen and (max-width: 48em) {
  .cd-panel-content {
    .cd-panel-right {
        width: 100%;
        margin-left: 0;
      }
  }

  .resume {
    color: white;
  }

  .resume-m {
    display: block;
    margin-top: 8px;
    left: 64px;
  }
}
</style>