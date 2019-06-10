<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "app"
    };
</script>

<style lang="scss">
    $color-white: #FFFFFf;
    $color-aquamarine: #77FBE3;
    $color-yellow: #F8CD46;
    $color-blue: #172765;
    $color-blue-dark: #010C36;
    $color-blue-shadow: #07164D;
    $color-blau: #171DAF;
    $color-pink: #ffe2ef;
    $color-black: #000000;
    $color-gray-97: #979797;
    $color-gray-71: #717171;
    $color-gray-F4: #F4F4F4;

    $color-gray-88: #888888;
    $color-gray-CC: #CCCCCC;

    $baseFontSize: 12px;
    $baseFontFamily: 'Source Sans Pro', sans-serif;
    $baseLineHeight: 18px;
    $baseTextColor: $color-white;

    @function calculateRem($size) {
        $remSize: $size / 16px;
        @return #{$remSize}rem;
    }

    @mixin fontSize($size) {
      font-size: $size;
      font-size: calculateRem($size);
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

    *,
    *::before,
    *::after,
    html {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    *,
    html {
        padding: 0;
        margin: 0;
        font-size: 100%;
    }

    body {
        @include fontSize($baseFontSize);
        font-family: $baseFontFamily;
        line-height: $baseLineHeight;
        color: $baseTextColor;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1, 
    h2, 
    h3, 
    h4, 
    p {
        font-family: $baseFontFamily;
    }

    ul {
        list-style: none;
    }

    li {
        display: inline-block;
    }

    button {
        background: transparent;
        border: none;

        &:focus,
        &:hover {
            outline: none;
        }
    }

    img {
        object-fit:cover;
        width: 100%;
        height: 100%;
        display: inline-block;
        vertical-align: middle;
    }

    .img-content {    
        box-shadow: 0 2px 5px 0 rgba(0,0,0,.04), 0 10px 30px 0 rgba(0,0,0,.03), 0 20px 54px 0 rgba(0,0,0,.02);
        border-radius: 4px;
        display: block;
        margin: 0 auto;
    }

@each $colorName, $colorPrimary in (
    'white': $color-white,
    'yellow': $color-yellow,
    'blue': $color-blue,
    'blue-dark': $color-blue-dark,
    'blue-shadow': $color-blue-shadow,
    'aquamarine': $color-aquamarine,
    'gray-97': $color-gray-97,
    'gray-71': $color-gray-71,
    'gray-F4': $color-gray-F4,
    'gray-88': $color-gray-88,
    'gray-CC': $color-gray-CC,
    'blau':  $color-blau,
    'black': $color-black,
) {
    .bg-#{$colorName} {
        background: #{$colorPrimary};
    }
    
    .color-#{$colorName} { 
        color: #{$colorPrimary};
    }
}

.o-5 {
    opacity: 0.5;
}

.m-auto{
    margin: 0 auto;
}

$width-list: -16 -8 -4 -2 0 2 4 6 8 16 20 24 32 40 48 64 72 80 96;

$margin-list :("mt":top,"mr":right,"mb":bottom,"ml":left);
@each $namePos , $position in ($margin-list) {
    @each $name in ($width-list) {
        .#{$namePos}-#{$name} {
            margin-#{$position}: unquote($name+'px');
        }
    }
}

$padding-list :("pt":top,"pr":right,"pb":bottom,"pl":left);
@each $namePos , $position in ($padding-list) {
    @each $name in ($width-list) {
        .#{$namePos}-#{$name} {
            padding-#{$position}: unquote($name+'px');
        }
    }
}

$position-list :("top":top,"right":right,"bottom":bottom,"left":left);
@each $namePos , $position in ($position-list) {
    @each $name in ($width-list) {
        .#{$namePos}-#{$name} {
            #{$position}: unquote($name+'px');
        }
    }
}

.c-pointer {
    cursor: pointer;
}

.text-center {
    text-align: center;
}

.text-left {
    text-align: left;
}

.text-right {
    text-align: right;
}

.text-justify {
    text-align: justify;
}

.relative {
    position: relative;
}

.absolute {
    position: absolute;
}

.block {
    display: block;
}

.flex {
    display: flex;
}

.column {
    flex-direction: column;
}

.flex-middle {
    display: flex;
    align-items: center;
}

.spacer {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}

.z-1 {
    z-index: 1;
}

.z-2 {
    z-index: 1;
}

.z-3 {
    z-index: 1;
}

/* Animation
   ========================================================================== */
@-webkit-keyframes Gradient {
    0% {
        background-position: 0% 50%
    }

    50% {
        background-position: 100% 50%
    }

    100% {
        background-position: 0% 50%
    }
}

@-moz-keyframes Gradient {
    0% {
        background-position: 0% 50%
    }

    50% {
        background-position: 100% 50%
    }

    100% {
        background-position: 0% 50%
    }
}

@keyframes Gradient {
    0% {
        background-position: 0% 50%
    }

    50% {
        background-position: 100% 50%
    }

    100% {
        background-position: 0% 50%
    }
}

/* Gallery
   ========================================================================== */
.agile {

    &__dots {
        justify-content: center;
    }

    &__dot {
        margin: 8px 4px 0;

        button {
            background-color: transparent;
            // border: 1px solid $color-aquamarine;
            margin-top: 10px;
            border-radius: 50%;
            cursor: pointer;
            display: block;
            height: 10px;
            font-size: 0;
            line-height: 0;
            margin: 0;
            // transition-duration: .3s;
            transition: opacity .2s ease;
            background: rgba(0,0,0,.3);
            width: 10px;

            &:hover {
                background: rgba(0,0,0,.6);
            }
        }

        &--current {
            button {
                background: rgba(0,0,0,.6);
            }
        }
    }
}

/* Palette
   ========================================================================== */
.pallete {
    display: flex;
    list-style: none;

    & > .shape {
        height: 2.5em;
        min-width: 2.5em;
        border-radius: 0.2em 1em 1em;
        display: flex;
        margin: 0.25em;
        margin-left: 5em;
        transition: all 0.4s ease-in;

        &::before {
            content: '';
            box-sizing: border-box;
            height: 2em;
            width: 2em;
            margin: 0.25em;
            border: 1px solid $color-white;
            border-radius: 2em;
            cursor: pointer;
        }

        &::after {
            content: attr(title);
            background: rgba($color-white, 0.15);
            font-family: $baseFontFamily;   
            color: $color-white;
            margin: 0.25em 0.5em 0.25em 0.25em;
            padding: 0 0.25em;
            border-radius: 0.2em;
            line-height: 2; 
            display: none;
        }
        
        &.label {
            border-radius: 0.2em;

            &::after {
                display: block;
            }
        }
    }
}

    .container--96 {
        width:96%;
        -moz-transition: max-height 0s 2.3s ease-out, top 1.5s cubic-bezier(0.260, 0.010, 0.000, 1.005), opacity 1.4s ease-out;
        transition: max-height 0s 2.3s ease-out, top 1.5s cubic-bezier(0.260, 0.010, 0.000, 1.005), opacity 1.4s ease-out;
    }

    .container--80 {
        width:80%;
        -moz-transition: max-height 0s 2.3s ease-out, top 1.5s cubic-bezier(0.260, 0.010, 0.000, 1.005), opacity 1.4s ease-out;
        transition: max-height 0s 2.3s ease-out, top 1.5s cubic-bezier(0.260, 0.010, 0.000, 1.005), opacity 1.4s ease-out;
    }

    @media only screen and (min-width: 48em) {

    }

    @media only screen and (min-width: 64em) {
        .col-lg-6.left,
        .col-lg-6.right {
            flex-basis: 46%;
            max-width: 46%;
            margin: 0 20px;
        }
    }
    
    @media only screen and (min-width: 75em) {
        .col-lg-6.left,
        .col-lg-6.right {
            flex-basis: 40%;
            max-width: 40%;
            margin: 0 40px;
        }
    }

    .bi-link {
        position: relative;
        text-decoration: none;
        font-size: 16px;

        &-label {
            transition: color 0.5s;
            transition-timing-function: cubic-bezier(0.2,1,0.3,1);

            &::before {
                content: '';
                position: absolute;
                z-index: -1;
                bottom: 0;
                // left: 0;
                // width: 100%;
                left: -6px;
                width: 120%;
                height: 50%;
                opacity: 0.5;
                transform: scale3d(0,1,1);
                transform-origin: 0% 50%;
                transition: transform 0.5s;
                transition-timing-function: cubic-bezier(0.2,1,0.3,1);
            }

            &.bi-aquamarine {
            	
            	&::before {
	            	background: #77FBE3;
            	}
            }

            &.bi-yellow {

            	&::before {
	            	background: #F8CD46;
            	}
            }

            &.bi-blue-light {

            	&::before {
	            	background: #354B9D
            	}
            }

            &.bi-white {

                &::before {
                    background: #ffffff
                }
            }
        }

        &:hover,
        .active {
            .bi-link-label {

                &::before {
                    transform: scale3d(1,1,1);
                }
            }
        }
    }

	.bi-close {
        position: absolute;
        top: 0;
        left: 0;
        height: 60px;
        width: 60px;
        /* image replacement */
        display: inline-block;
        overflow: hidden;
        text-indent: 100%;
        white-space: nowrap;
        cursor: pointer;

        &::before,
        &::after {
            content: '';
            position: absolute;
            top: 24px;
            left: 14px;
            height: 2px;
            width: 32px;
            background-color: #77FBE3;
            /* this fixes a bug where pseudo elements are slighty off position */
            backface-visibility: hidden;
        }

        &::before {
            transform: rotate(45deg);
        }

        &::after {
            transform: rotate(-45deg);
        }

        &:hover {

            &::before,
            &::after {
                background-color: #77FBE3;
                transition-property: transform;
                transition-duration: 0.3s;
            }

            &::before {
                transform: rotate(220deg);
            }

            &::after {
                transform: rotate(135deg);
            }
        }
    }

    .is-visible {

        .bi-close {

            &::before {
                animation: close-anim-1 0.6s 0.3s;
            }

            &::after {
                animation: close-anim-2 0.6s 0.3s;
            }
        }   
    }

    .bi-headline {

	    &__inline {
	        display: flex;
	        flex-flow: row;
	        align-items: center;
	        justify-content: flex-start;

	        & > * {
	            margin: 0;
	        }
	    }

	    &__line {
	        position: relative;
	        display: block;
	        margin-left: 1rem;
	        height: 2px;
	        width: 100%;
	        background-color: #ffffff;
	    }

	    &-bg {
	        display: inline-block;

	        h1 {
	            z-index: 1;
	            position: relative;
	            white-space: nowrap;
	            display: inline-block;

	            &::before {
	                z-index: -1;
	                display: block;
	                background: $color-pink;
	                width: 100%;
	                // opacity: .5;
	                content: "";
	                position: absolute;
	                top: -19px;
	                height: 100%;
	                left: -16px;
	                padding-bottom: 2rem;
	            }

                &.bi-yellow {

                    &::before {
                        opacity: .5;
                        background: #F8CD46;
                    }
                }

                &.bi-blue {

                    &::before {
                        opacity: .5;
                        background: #172765;
                    }
                }

                .bi-blue-light{

                    &::before {
                        opacity: .5;
                        background: #354B9D;
                    }
                }
	        }
	    }

	    &-wrapper {
	        display: inline-block;
	        position: relative;
	        
	        &::before {
	            content: " ";
	            position: absolute;
	            // top: -.6em;
	            top: -3.1em;
	            left: -10%;
	            z-index: -1;
	            display: block;
	            width: 102%;
	            height: 100%;
	            background-color: #354B9D;
	        }

            &.bi-yellow {

                &::before {
                    opacity: .5;
                    background: #F8CD46;
                }
            }

            &.bi-blue {

                &::before {
                    opacity: .5;
                    background: #172765;
                }
            }

            .bi-blue-light{

                &::before {
                    opacity: .5;
                    background: #354B9D;
                }
            }
	    }
	}

    // new

    .bi-txt-xxl {
        font-size: 45px;
        // line-height: 1;
        line-height: 45px;
        // letter-spacing: 4px;
    }

    .bi-txt-xl {
        font-size: 19px;
        line-height: 1;
    }

    .bi-txt-m {
        font-size: 16px;
        line-height: 21px;
    }

    .bi-title {
        z-index: 1;
        position: relative;
        white-space: nowrap;
        display: inline-block;
        margin-bottom: 16px;

        &::before {
            position: absolute;
            display: block;
            content: "";
            top: -16px;
            left: -16px;
            width: 100%;
            height: 100%;
            background: linear-gradient(to top, rgba($color-pink, .9) 90%, transparent 90%, transparent);
            z-index: -1;
        }

        &.aquamarine {

            &::before {
                background: linear-gradient(to top, rgba($color-aquamarine, .5) 90%, transparent 90%, transparent);
            }
        }
    }

    .bi-paragraph {
        z-index: 1;
        position: relative;
        display: inline-block;

        &::before {
            position: absolute;
            display: block;
            content: "";
            top: -8px;
            left: -16px;
            width: 100%;
            height: 100%;
            background: linear-gradient(to top, rgba($color-aquamarine, .5) 90%, transparent 90%, transparent);
            z-index: -1;
        }

        &#{&}-l {
            
            &::before {
                top: -16px;
                height: calc(100% + 8px);
            }
        }

        &#{&}-xl {
            
            &::before {
                top: -24px;
                height: calc(100% + 16px);
            }
        }
    }

    // new

    .bi-name {

        h1 {
            position: relative;
            display: inline-block;
            font-size: calc(21px + ((1vw - 4.8px) * .714286));
            z-index: 1;

            &::before {
                z-index: -1;
                display: block;
                // background-color: #ffd248;
                background: $color-pink;
                width: 100%;
                // opacity: .5;
                content: "";
                position: absolute;
                top: -20px;
                height: 100%;
                left: -16px;
                padding-bottom: 32px;
            }

            &.blue-light {

                &::before {
                    background-color: #354B9D;
                }
            }
        }
    }

    @keyframes close-anim-1 {
        0%, 50% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(45deg);
        }
    }

    @keyframes close-anim-2 {
        0%, 50% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(-45deg);
        }
    }


// body
    .bi-hero {
        padding: 34px;

        &.blau {
            background-color: #172765;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1013' height='1013' viewBox='0 0 20 20'%3E%3Cg fill-opacity='0.11'%3E%3Cpolygon fill='%23354b9d' points='20%2C10 10%2C0 0%2C0 20%2C20'/%3E%3Cpolygon fill='%23354b9d' points='0%2C10 0%2C20 10%2C20'/%3E%3C/g%3E%3C/svg%3E");
        }

        &-content {
            margin-top: 80px;
            position: relative;
            z-index: 2;
        }

        &-center {
            max-width: 500px;
            margin: 0 auto;
        }

        &-image {
            padding: 9px 8px 0px;
            background: #354B9D;
            border-radius: 8px;
            top: 60px;
            position: relative;

            &.simple {
                top: 4px;
            }

            &:before {
                content: "";
                padding: 9px 8px 0px;
                background: #010C36;
                border-radius: 8px;
                width: 100%;
                height: 102%;
                position: absolute;
                z-index: -1;
                top: -4px;
                left: 0px;
            }
        }

        &-divider {
            width: 100%;
            height: 24px;
            bottom: 8px;
            position: relative;
            transform: skewY(1.5deg) translateY(-14px);
        }

        .bi-particle-project {
            height: 82vh;
        }
    }

    .slide {
            padding: 4px 8px 4px;
            background: #354B9D;
            border-radius: 8px;
            // top: 60px;
            position: relative;

            &:before {
                content: "";
                padding: 0 8px 0;
                background: #010C36;
                border-radius: 8px;
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: -1;
                top: 4px;
                left: 0px;
            }
        }

/* Fonts
   ========================================================================== */

.b-txt-l {
    font-size: 45px;
    line-height: 48px;
    letter-spacing: 4px;
}

.b-txt-t {
    font-size: 21px;
    line-height: 21px;
}

.b-txt-st {
    font-size: 20px;
    line-height: 32px;
}

.b-txt-m {
    font-size: 16px;
    line-height: 1.65em;
}

.b-txt-s {
    font-size: 14px;
    line-height: 1.65em;
}

.b-txt-google {
    font-size: 90px;
    line-height: 1;
}

.font-300 {
    font-weight: 300;
}

.font-400 {
    font-weight: 400;
}

.font-600 {
    font-weight: 600;
}

/* media
   ========================================================================== */
// @media screen and (max-width: 1180px){  
//     .bi-hero {
//         height: 82vh;

//         &-content {
//             margin-top: 100px;
//         }
//     }
// }

/*mobile*/

// @media screen and (max-width: 960px){
//     .bi-hero {
//         height: auto;
//         padding: 34px;

//         &-content {
//             margin-top: 24px;
//         }
//     }
// }

// @media screen and (max-width: 760px){
//     .bi-hero {
//         height: auto;
//         padding: 34px;

//         &-content {
//             margin-top: 80px;
//         }
//     }
// }

    .hide-xs {
        display: none;
    }

@media only screen and (min-width: 48em) {

    .bi-hero {
        height: 94vh;
        padding: 0;

        &-content {
            margin-top: calc(94vh - 440px);
        }
    }

    .hide-xs {
        display: block;
    }

    .bi-txt-xl {
        font-size: 28px;
        line-height: 1;
    }
}

@media only screen and (min-width: 64em) { 
// md

    .bi-hero {
        height: 88vh;
        padding: 0;

        &-content {
            margin-top: calc(88vh - 440px);
        }
    }

    .hide-xs {
        display: block;
    }

    .bi-txt-xl {
        font-size: 28px;
        line-height: 1;
    }
}


@media only screen and (min-width: 75em) {
// lg

    .bi-hero {
        height: 86vh;
        padding: 0;

        &-content {
            margin-top: calc(86vh - 440px);
        }
    }

    .hide-xs {
        display: block;
    }

    .bi-txt-xl {
        font-size: 28px;
        line-height: 1;
    }
}
</style>