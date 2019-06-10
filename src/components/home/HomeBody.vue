<template>
    <div>
        <div 
            class="col-xs-12 col-sm-6 col-md-6 col-lg-6" 
            :class="item.position" 
            v-for="(item, index) in col" 
            :key="index" >
            <div class="project">
                <router-link :to="{ path: item.path }" v-if="item.model === 'web'">
                    <div class="fond" :class="item.color">
                        <img :src="'src/assets/home/' + item.img">
                    </div>
                    <h2 class="bi-title aquamarine color-blau title font-300 b-txt-l">{{item.title}}</h2>
                    <!-- <div class="bi-headline-bg title">
                        <h1 class="b-txt-l color-blue font-400 mb-0 mt-0">{{item.title}}</h1>
                    </div> -->
                </router-link>
                <a class="block c-pointer" :href="item.link" target="_blank" v-else-if="item.model === 'link'">
                    <div class="fond" :class="item.color">
                        <img :src="'src/assets/home/' + item.img">
                    </div>
                    <h2 class="title font-300 b-txt-l color-blue">{{item.title}}</h2>
                    <!-- <div class="bi-headline-bg title">
                        <h1 class="b-txt-l color-blue font-400 mb-0 mt-0">{{item.title}}</h1>
                    </div> -->
                </a>
                <a class="block c-pointer" @click="showVideo()" v-else-if="item.model === 'video'">
                    <div class="fond" :class="item.color">
                        <img :src="'src/assets/home/' + item.img">
                    </div>
                    <h2 class="title font-300 b-txt-l color-blue">{{item.title}}</h2>
                    <!-- <div class="bi-headline-bg title">
                        <h1 class="b-txt-l color-blue font-400 mb-0 mt-0">{{item.title}}</h1>
                    </div> -->
                </a>
                <a class="block" v-else>
                    <div class="fond" :class="item.color">
                        <img :src="'src/assets/home/' + item.img">
                    </div>
                    <h2 class="title font-300 b-txt-l color-blue">{{item.title}}</h2>
                    <!-- <div class="bi-headline-bg title">
                        <h1 class="b-txt-l color-blue font-400 mb-0 mt-0">{{item.title}}</h1>
                    </div> -->
                </a>
                <div class="detail">
                    <!-- <u class="menu__item active more">
                        <span class="menu__item-name">{{item.label}}</span>
                    </u> -->
                    <div class="line" :class="item.color"></div>
                    <div class="description b-txt-t color-blau">{{item.description}}</div>
                    <!-- <span class="period b-txt-m">{{item.year}}</span> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeBody",
        props: {
            col: {}
        },
        data() {
            return {};
        },
        methods: {
            showVideo() {
                this.$parent.openModel();
            }
        }
    };
</script>

<style lang="scss">
$color-blue-dark: #010C36;
$color-aquamarine: #77FBE3;
$color-white: #FFFFFf;
$color-yellow: #F8CD46;
$color-gray-97: #979797;
$color-gray-71: #717171;


    $color-blau: #171DAF;
    $color-pink: #ffe2ef;


.project {
  position: relative;  
  width: 100%;
  left: 0;
}

.project .fond {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    transition: all 0.2s ease-out;
    margin:0;
    left: 0;
    top: 0;

    &::before {
        content: '';
        position:absolute;
        width:100%;
        height:0;
        background-size: 100% 100%;
        background-position: center bottom;
        // bottom: -4px;
        // z-index: 4;
        opacity: 0;
        transition: height .1s;
        top: 0;
        left:0;
    }
}

.left .project:hover .fond {

    &::before {
        // bottom: -18px;
        // top: 20px;
    }
}

.right .project .fond {

    &::before {
        left: 20px;
    }
}

.left .project:hover .fond {
    // left: -10px;

    &::before {
        // bottom: 13px;
        // opacity: 1;
        opacity: 1;
        // height:24px;
        height:100%;
        transition: height 0.2s;

        transition: height 0.2s, left .3s ease-out, top .3s ease-out;
    }
}

.right .project:hover .fond {
    // left: 10px;

    &::before {
        // bottom: 13px;
        // opacity: 1;
        opacity: 1;
        left: 8px;
        // height:24px;
        height: calc(100% + 20px);
        transition: height 0.2s;
    }
}

.project img {
  position:relative;
  width:100%;
  height:auto;
  z-index:0;
  left: 0;
  top: 0;
  transition: left .3s ease-out, top .3s ease-out;
}

.left .project:hover img {
  left: 20px;
  transition: left .3s ease-out;
}

.right .project:hover img {
  top: 20px;
  left: -20px;
  transition: left .3s ease-out, top .3s ease-out;
}

.project .detail {
  margin-left:30px;
  padding-left:0px;
  padding-bottom: 16px;
}

.project a {
    text-decoration: none;
}

.project .more {
    display: block;
    position: absolute;
    opacity: 0;
    z-index: 3;
    bottom: 34px;
    right: 16px;
}

// .left .project .more {
//     right: 16px;
// }

.right .project .more {
    right: 32px;
}

.project:hover .more {
    opacity: 1;
}

.project .title {
    position:relative;
    z-index:2;
    margin:0px 0 20px 30px;
    transition: margin .3s ease-out, color .2s ease-in-out;
    text-align: left;
    width: 100%;
    white-space: nowrap;
    font-size: 48px;
}

.right .project:hover .title {
    margin: -8px 0 20px 30px;
    transition: margin .3s ease-out;
    z-index: 10;
    // color: #ffffff;
    // text-shadow: 1px 0 0 #ffffff;
}

.left .project:hover .title {
    margin: -52px 0 20px 30px;
    transition: margin .75s ease-out;
    z-index: 10;
}

.project .description{
    display: flex;
}

.project .period {
    color: $color-gray-71;
    display: flex;
}

.humming {

    &::before {
        // background: linear-gradient(to top, rgba(255, 226, 239, 1) 90%, transparent 90%, transparent);
        background: linear-gradient(to top, rgba($color-pink, .9) 90%, transparent 90%, transparent);
        width: 100%;
        height: 100%;
    }
}
.amour {
    
    &::before {
        background: linear-gradient(to top, rgba($color-aquamarine, .5) 90%, transparent 90%, transparent);
    }
}


.line.humming { background: linear-gradient(to left, #ebebeb 50%, rgba($color-pink, .9) 50%); }
.line.amour { background: linear-gradient(to left, #ebebeb 50%, rgba($color-pink, .9) 50%); }



.project .line {
  width:90px;
  height:21px;
  margin-right:20px;
  float:left;
  background-repeat: no-repeat;
  background-size: 200% 3px;
  background-position: right 8px; 
  transition: background-position 0.4s ease-out;
}

.project:hover .line {
  background-position: left 8px;
}
</style>
