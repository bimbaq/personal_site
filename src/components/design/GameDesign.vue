<template>
    <div class="grid">
        <div class="black">
            <span>{{this.clicks}}</span>
            <span>{{this.matchCard}}</span>
        </div>
        <div v-for="card in similarTiles" :data-name="card.name" @click="isSelected" class="card">
            <div class="front"></div>
            <div class="back">{{card.img}}</div>
        </div>
        <div class="black" v-if="win">
            Congratulations!!!
        </div>
    </div>
</template>

<script>
    import * as _ from "lodash";

    const tiles = [
        {
            name: "Turtle",
            img: "🐢"
        },
        {
            name: "Squid",
            img: "🦑"
        },
        {
            name: "Panda",
            img: "🐼"
        },
        {
            name: "Cow",
            img: "🐮"
        },
        {
            name: "Penguin",
            img: "🐧"
        },
        {
            name: "Lion",
            img: "🦁"
        }
    ];

    export default {

        name: "GameDesign",
        data() {
            return {
                tiles,
                firstTile: "",
                secondTile: "",
                count: 0,
                clicks: 0,
                matchCard: 0,
                previousTarget: null,
                win: false
            };
        },
        computed: {
            similarTiles() {
                const even = this.tiles.concat(this.tiles);
                even.sort(() => 0.5 - Math.random());
                return even;
            }
        },
        methods: {
            isSelected(e) {
                const clicked = e.target;
                this.clicks += 1;

                if (clicked === this.previousTarget || clicked.parentNode.classList.contains("match")) {
                    return;
                }

                if (this.count < 2) {
                    this.count += 1;

                    // this.start();

                    if (this.count === 1) {
                        this.firstTile = clicked.parentNode.dataset.name;
                        /* eslint-disable no-console */
                        // console.log(this.firstTile, "AAA");
                        clicked.parentNode.classList.add("selected");
                    } else {
                        this.secondTile = clicked.parentNode.dataset.name;
                        /* eslint-disable no-console */
                        // console.log(this.secondTile, "BBB");
                        clicked.parentNode.classList.add("selected");
                    }

                    if (this.firstTile !== "" && this.secondTile !== "") {
                        if (this.firstTile === this.secondTile) {
                            setTimeout(() => { const selected = document.querySelectorAll(".selected"); $(selected).addClass("match"); }, 1300);
                            setTimeout(() => { this.resetTiles(); }, 1300);
                            this.matchCard += 1;

                            if (this.matchCard === _.size(this.tiles, "name")) {
                                setTimeout(() => { this.win = true; }, 1800);
                            }
                        } else {
                            setTimeout(() => { this.resetTiles(); }, 1300);
                        }
                    }

                    this.previousTarget = clicked;
                }
            },
            resetTiles() {
                this.firstTile = "";
                this.secondTile = "";
                this.count = 0;

                const selected = document.querySelectorAll(".selected");
                $(selected).removeClass("selected");
            }
        }
    };
</script>

<style lang="scss">
    .black {
        color: #000;
    }

    .grid {
        max-width: 640px;
        margin: 0 auto;
        display: block;
        background: linear-gradient(to left, #AAFFA9, #11FFBD);
    }

    .card, 
    .back, 
    .front {
        width: 150px;
        height: 150px;
    }

    .card {
        position: relative;
        transition: all .4s linear;
        transform-style: preserve-3d;
        margin: 5px;
        display: inline-block;
    }

    .back,
    .front {
        position: absolute;
        backface-visibility: hidden;
    }

    .back {
        transform: rotateY(180deg);
        background-color: #6589F9;
        font-size: 124px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .front {
        background: #FAB942;
        z-index: 2;
    }

    .match {
        display: none;

        .front {
            background: green;
        }
    }

    .selected {
        transform: rotateY(180deg);
    }
</style>