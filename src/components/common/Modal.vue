<template>
    <transition
        @beforeEnter="beforeEnter"
        @enter="enter"
        @beforeLeave="beforeLeave"
        @leave="leave">
        <div :class="$style.modal" v-if="show" ref="modal">
            <slot/>
        </div>
    </transition>
</template>

<script>
    import anime from "animejs";

    export default {
        components: {},
        props: {
            show: {
                required: false,
                default: false,
                type: Boolean
            }
        },
        data() {
            return {};
        },
        computed: {},
        methods: {
            beforeEnter(el) {
                el.style.transform = "translate(100%, -50%)";

                document.getElementById("overlay").style.visibility = "visible";
            },
            enter(el, done) {
                document.getElementById("overlay").style.opacity = "0.5";
                anime({
                    targets: el,
                    translateY: {
                        value: "-50%",
                        duration: 500,
                        elasticity: 100
                    },
                    translateX: {
                        value: "-50%",
                        duration: 0
                    },
                    complete: done
                });
            },
            beforeLeave(el) {
                el.style.transform = "translate(0%, 0%)";
            },
            leave(el, done) {
                const overlay = document.getElementById("overlay");
                overlay.style.opacity = "0";

                anime({
                    targets: el,
                    translateY: {
                        value: "200%",
                        duration: 500,
                        elasticity: 100
                    },
                    translateX: {
                        value: "-50%",
                        duration: 0
                    },
                    complete() {
                        overlay.style.visibility = "hidden";
                        done();
                    }
                });
            },
            handleDocumentClick(e) {
                if (this.$refs.modal && this.$refs.modal.contains(e.target) === false) {
                    this.$emit("close");
                }
            }
        },
        beforeMount() {
            let overlay = document.getElementById("overlay");

            if (overlay === null) {
                overlay = document.createElement("div");
                overlay.id = "overlay";
                overlay.style.position = "fixed";
                overlay.style.top = "0";
                overlay.style.left = "0";
                overlay.style.width = "100%";
                overlay.style.height = "100%";
                overlay.style.zIndex = "2000";
                overlay.style.background = "#000";
                overlay.style.opacity = "0";
                overlay.style.visibility = "hidden";
                overlay.style.transition = "opacity 500ms linear";
                document.body.appendChild(overlay);
            }

            document.addEventListener("click", this.handleDocumentClick);
            document.addEventListener("touchstart", this.handleDocumentClick);
        },
        beforeDestroy() {
            document.removeEventListener("click", this.handleDocumentClick);
            document.removeEventListener("touchstart", this.handleDocumentClick);
        }
    };
</script>

<style type="text/css" module>
    .modal {
        /*position: absolute;*/
        position: fixed;
        background: #172765;
        z-index: 2001;
        box-shadow: 0 1px 3px rgba(0,0,0,.3);
        padding: 24px;
        overflow-x: hidden;
        overflow-y: auto;
        left: 50%;
        top: 50%;
        width: 640px;
        height: 440px;
        border-radius: 2px;
    }

/*  @import "../../styles";

  .vueModal {
    position:   fixed;
    top:        $grid-unit;
    left:       $grid-unit;
    bottom:     $grid-unit;
    right:      $grid-unit;
    background: $modal-bg;
    z-index:    $modal-index;
    box-shadow: $modal-shadow;
    padding:    $modal-padding;

    @include media(tabletPortrait) {
      width:       $modal-max-width;
      left:        50%;
      top:         0;
      bottom:      0;
      margin-left: -240px;
    }
  }
*/</style>

