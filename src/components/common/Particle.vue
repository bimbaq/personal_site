<template>
        <!--         mounted() {
            $(document).ready(() => {
                const maxParticles = 20;
                const particleDiv = "<div class='particle-line'></div>";
                for (let i = 0; i < maxParticles; i += 1) {
                    $(".particle-motion").append(particleDiv);
                    const thisParticle = ($(".particle-motion").children()[i]);
                    $(thisParticle).css("animation-duration", Math.floor(Math.random() * 12) + 3.5 + "s");
                    $(thisParticle).css("top", Math.floor(Math.random() * 1000) + 1 + "px");
                }
            });
        } -->

<!--         mounted() {
            $(document).ready(() => {
                const maxParticles = 20;
                const particleDiv = "<div class='particle-line'></div>";
                for (let i = 0; i < maxParticles; i += 1) {
                    $(".particle-motion").append(particleDiv);
                    const thisParticle = ($(".particle-motion").children()[i]);
                    $(thisParticle).css("animation-duration", Math.floor(Math.random() * 12) + 3.5 + "s");
                    $(thisParticle).css("top", Math.floor(Math.random() * 1000) + 1 + "px");
                }
            });
        } -->

<!--                     $(thisParticle).css("animation-duration", strAnim + 3 + "s");
                    $(thisParticle).css("top", strTop + 1 + "px"); -->

        <div class="particle">
            <div class="particle-motion"></div>
        </div>
</template>

<script>
    export default {
        name: "ParticleAnimation",
        props: {
            lines: {
                required: false,
                default: 24,
                type: Number
            }
        },
        data() {
            return {
                colors: ["#F8CD46", "#354B9D", "#77FBE3"],
                line: this.lines
            };
        },
        mounted() {
            $(document).ready(() => {
                const particleDiv = "<div class='particle-line'></div>";
                for (let i = 0; i < this.line; i += 1) {
                    $(".particle-motion").append(particleDiv);

                    const thisParticle = ($(".particle-motion").children()[i]);
                    const strAnim = Math.floor(Math.random() * 12);
                    const strTop = Math.floor(Math.random() * 1000);
                    const strColor = this.colors[Math.floor(Math.random() * this.colors.length)];

                    $(thisParticle).css({ animationDuration: `${strAnim + 2.7}s` });
                    $(thisParticle).css({ top: `${strTop + 1}px` });
                    $(thisParticle).css("background", strColor);
                }
            });
        }
    };
</script>

<style lang="scss">
    .particle {
        // position: relative;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        overflow: hidden;

        &-motion {
            transform: rotate(6.5deg);
        }

        &-line {
            width: 100%;
            height: 4px;
            // position: absolute;
            position: relative;
            background: #77FBE3;
            left: -100%;
            top: 0;
            transition: .5s;
            opacity: 1;
            animation: Thunderbolt 2s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
        }
    }

    @keyframes Thunderbolt {
        from {
            transform: translate(0) scale(0.2);
        }
        to {
            transform: translateX(200%) scale(0);
        }
    }
</style>