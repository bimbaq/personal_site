<template>
    <div>
        <div id="header">
            <div id="logotexte">
                <h1 class="bi-title color-blau bi-txt-xl font-400">
                    Byron Imbaquingo
                </h1>
                <br>
                <p class="color-black bi-txt-m font-400">
                    Hi there, I am a UI Designer & Frontend Developer.
                </p>
            </div>
            <div id="menu">
                <a class="bi-link color-blau" href="mailto:freiheit1991@me.com">
                    <span class="bi-link-label bi-aquamarine">freiheit1991@me.com</span>
                </a>
            </div>
        </div>

        <PlaygroundGrid 
            id="grid" 
            class=""
            v-for="(col, index) in row" 
            :key="index" 
            :col="col"
        />

        <MainPanel/>
        <MainToolbar :justPlayground="true"/>
        <Modal :show="showModal" :class="{'is-visible': showModal}" @close="showModal = !showModal">
            <button class="bi-close" @click="closeModal()">Cerrar</button>
            <div class="embed-container mt-32">
                <iframe src="https://www.youtube.com/embed/9fL8fMX19YY?rel=0&amp;controls=0" frameborder="0" allowfullscreen></iframe>
            </div>
        </Modal>
    </div>  
</template>

<script>
    import PlaygroundGrid from "../components/home/PlaygroundGrid";
    import MainToolbar from "../components/MainToolbar";
    import MainPanel from "../components/MainPanel";
    import Modal from "../components/common/Modal";

    export default {
        name: "Hack",
        components: {
            PlaygroundGrid,
            MainToolbar,
            MainPanel,
            Modal
        },
        data() {
            return {
                row: {
                    col_1: [
                        // {
                        //     model: "web",
                        //     title: "Knowbly",
                        //     img: "01a.jpg",
                        //     description: "UI Designer & Frontend Developer / (Vue.js)",
                        //     position: ["left", "first"],
                        //     color: "humming",
                        //     label: "View project",
                        //     path: "kds"
                        // },
                        {
                            model: "web",
                            title: "Evaluar",
                            img: "02a.jpg",
                            description: "UI Designer / Code (Angular)",
                            position: ["left", "first"],
                            color: "humming",
                            label: "View project",
                            path: "evaluar"
                        },
                        {
                            model: "web",
                            title: "Vive1",
                            img: "03a.jpg",
                            description: "UI Designer / Code (Angular)",
                            position: ["right", "first"],
                            color: "humming",
                            label: "View project",
                            path: "vive1"
                        }
                    ],
                    col_2: [
                        {
                            model: "video",
                            title: "Por siempre juntos",
                            img: "10.jpg",
                            description: "Design / After Effects",
                            position: "left",
                            color: "humming",
                            link: "https://www.youtube.com/watch?v=9fL8fMX19YY",
                            label: "Watch video"
                        },
                        {
                            model: "web",
                            title: "Alvarez Bravo",
                            img: "04a.jpg",
                            description: "UI Designer / Web development",
                            position: "right",
                            color: "humming",
                            label: "View project",
                            path: "alvarez-bravo"
                        }
                    ],
                    col_3: [
                        {
                            model: "web",
                            title: "El Principito",
                            img: "05a.jpg",
                            description: "Design / Campaigns for social",
                            position: "left",
                            color: "humming",
                            label: "View project",
                            path: "principito"
                        },
                        {
                            model: "link",
                            title: "Rimashun",
                            img: "07.jpg",
                            description: "Design / Prototyping",
                            position: "right",
                            color: "humming",
                            label: "View project",
                            link: "http://bit.ly/2Dno48A"
                        }
                    ],
                    col_4: [
                        {
                            model: "link",
                            title: "Multiservice",
                            img: "06.jpg",
                            description: "Design / Prototyping",
                            position: "left",
                            color: "humming",
                            label: "View project",
                            link: "http://bit.ly/2ru2MEy"
                        }
                    ]
                },
                showModal: false
            };
        },
        methods: {
            openModel() {
                this.showModal = true;
            },
            closeModal() {
                this.showModal = false;
            }
        }
    };
</script>

<style lang="scss">

// color-black
// color-blau
// color-blue

    .embed-container { 
        position: relative; 
        padding-bottom: 56.25%; 
        height: 0; 
        overflow: hidden; 
        max-width: 100%; 
    } 

    .embed-container iframe, 
    .embed-container object, 
    .embed-container embed { 
        position: absolute; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
    }

#header {
  position:absolute;
  z-index:2;
  width:78%;
  // height:160px; 
  top:65px;
  left:50%;
  margin-left:-39%;
}

#logotexte {
    width: 50%;
    float:left;
    transition: color 0.3s 2.4s ease-out;
}

#menu {
  float:right;
}

/************* HOMEPAGE ********************************/

#grid {
  position: relative;
  width:78%;
  max-height:auto;  
  // left:11%;
  margin: 0 auto;
  z-index:1;
  top:240px;
  opacity:1;
  -moz-transition: max-height 0s 2.3s ease-out, top 1.5s cubic-bezier(0.260, 0.010, 0.000, 1.005), opacity 1.4s ease-out;
    -o-transition: max-height 0s 2.3s ease-out;
    -ms-transition: max-height 0s 2.3s ease-out;
  -webkit-transition: max-height 0s 2.3s ease-out;
    transition: max-height 0s 2.3s ease-out, top 1.5s cubic-bezier(0.260, 0.010, 0.000, 1.005), opacity 1.4s ease-out;
}

#grid.fix {
  position:fixed;
}

#grid.launch {
  top:100%; 
  opacity:0;
}


.left {
  position:relative;
  float:left; 
  width:46%;
  margin-top:0;
}

#grid.transitionlaunch .left {
  -moz-transition: margin-top 1.5s cubic-bezier(0.260, 0.010, 0.000, 1.005);
    -o-transition:  margin-top 1.5s cubic-bezier(0.260, 0.010, 0.000, 1.005);
    -ms-transition:  margin-top 1.5s cubic-bezier(0.260, 0.010, 0.000, 1.005);
  -webkit-transition:  margin-top 1.5s cubic-bezier(0.260, 0.010, 0.000, 1.005);
    transition: margin-top 1.5s cubic-bezier(0.260, 0.010, 0.000, 1.005);
}

.right {
  position:relative;
  float:right;  
  width:46%;
}

.right.first {
  margin-top:60px;
}

#grid.transitionlaunch .right {
  transition:none;
}

#grid.launch .left {
  margin-top:400px;
}

.projet {
  position:relative;  
  width:100%;
  cursor:pointer;
  margin-bottom:70px;
  background: #ffffff;
}

.projet .fond {
  position:relative;
  width:100%;
  height:auto;
  background-size: 100% 20px;
  background-position: center bottom;
  margin:0;
  -moz-transition: all 0.2s ease-out;
    -o-transition: all 0.2s ease-out;
    -ms-transition: all 0.2s ease-out;
  -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
}

.left .projet:hover .fond {
  margin:0px 0 0 -10px; 
  /* padding-top:20px; */
}

.right .projet:hover .fond {
  margin:0px 0 0 10px;  
  /* padding-top:20px; */
}

.projet01 .fond { background: linear-gradient(to top, rgba(#77FBE3, .5) 90%, transparent 90%, transparent); }

#grid a {
    text-decoration: none;
}

.projet img {
  position:relative;
  width:100%;
  max-width: 517px;
  max-height: 345px;
  min-height: 180px;
  height:auto;
  z-index:0;
  -moz-transition: all 0.2s ease-out;
    -o-transition: all 0.2s ease-out;
    -ms-transition: all 0.2s ease-out;
  -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
  cursor:pointer;
}

.left .projet:hover img {
  margin:0px 0 0 20px; 
}

.right .projet:hover img {
  margin:20px 0 0 -20px;  
}

.projet h2 {
  position:relative;
  z-index:2;
  font-size: 28px;;
  font-weight: 400;
  text-transform:uppercase;
  line-height:28px;
  margin:0px 0 1px 30px;
    transition: all 0.2s ease-out;
}

.projet:hover h2 {
  margin:-28px 0 25px 30px;
}

.projet .info {
  margin-left:30px;
  padding-left:0px;
  font-size:16px; 
  letter-spacing:2px;
  line-height:21px;
}

.projet01 .line { background: linear-gradient(to top, rgba(#77FBE3, .5) 90%, transparent 90%, transparent); }

.projet .line {
  width:90px;
  height:50px;
  margin-right:20px;
  float:left;
  background-repeat: no-repeat;
  background-size: 200% 3px;
  background-position: right 8px; 
  -moz-transition: background-position 0.4s ease-out;
    -o-transition: background-position 0.4s ease-out;
    -ms-transition: background-position 0.4s ease-out;
  -webkit-transition: background-position 0.4s ease-out;
    transition: background-position 0.4s ease-out;
}

.projet:hover .line {
  background-position: left 8px;
}

@media screen and (min-width: 1400px){
  h2 {
    font-size:40px;
    line-height:44px; 
  }
}

@media screen and (max-width: 1260px){

}

@media screen and (max-width: 1180px){  
  .projet h2 {
    font-size: 38px;
    line-height: 42px;
    margin: -23px 0 25px 30px;
  }
}

/*mobile*/

@media screen and (max-width: 960px){
  body { 
    overflow-x: hidden;
  }
    
  #header {
    text-align:center;  
    top:0px;
  }
  
  #menu {
    position: absolute;
    top: 160px;
    float: none;
    border-top: 1px solid #888888;
    clear: both;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    text-align: center;
    -moz-transition: border 0.3s 2.4s ease-out;
      -o-transition: border 0.3s 2.4s ease-out;
      -ms-transition: border 0.3s 2.4s ease-out;
    -webkit-transition: border 0.3s 2.4s ease-out;
      transition: border 0.3s 2.4s ease-out;
  }
    
  #logotexte {
    position:absolute;
    top:21px;
    text-align:center;
    width:100%;
    margin-top:15px;
  }

  .left, .right {
    float:none;
    width:100%;
    margin:0;
  }
  
  #grid {
    top:270px;  
  }
  
  .left .projet .fond, .right .projet.projet02 .fond, .right .projet.projet06 .fond, .right .projet.projet10 .fond, .left .projet:hover .fond, .right .projet.projet02:hover .fond, .right .projet.projet06:hover .fond, .right .projet.projet10:hover .fond {
    margin:0 0 0 4%;
  }
  
  .right .projet .fond, .left .projet.projet03 .fond, .left .projet.projet11 .fond, .left .projet.projet07 .fond, .right .projet:hover .fond, .left .projet.projet03:hover .fond, .left .projet.projet11:hover .fond, .left .projet.projet07:hover .fond {
    margin:0;
  }
  
  .left .projet img, .right .projet.projet02 img, .right .projet.projet06 img, .right .projet.projet10 img, .left .projet:hover img, .right .projet.projet02:hover img, .right .projet.projet06:hover img, .right .projet.projet10:hover img {
    width: 100%;
    margin: 4% 0 0 -4%;
  }
  
  .right .projet img, .left .projet.projet03 img, .left .projet.projet11 img, .left .projet.projet07 img, .right .projet:hover img, .left .projet.projet03:hover img, .left .projet.projet11:hover img, .left .projet.projet07:hover img {
    width: 100%;
    margin: 4% 0 0 4%;
  }
  
  .projet {
    margin-bottom:50px; 
  }
  
  .projet .fond {
    width:96%;
  }
  
  .projet .line {
    width:40px;
    background-position: left 8px;  
  }
  
  .projet h2, .right .projet.projet02 h2, 
  .right .projet.projet06 h2, 
  .right .projet.projet10 h2, 
  .projet:hover h2, .right .projet.projet02:hover h2, 
  .right .projet.projet06:hover h2, 
  .right .projet.projet10:hover h2 {
    font-size: 26px;
    line-height: 30px;
    letter-spacing: 3px;
    margin: 8px 0 15px 15px;
  }
  
  .projet:hover h2 {
    margin: -16px 0 15px 15px;
  }
  
  .right .projet h2, 
  .left .projet.projet03 h2, 
  .left .projet.projet11 h2, .left .projet.projet07 h2, 
  .right .projet:hover h2, 
  .left .projet.projet03:hover h2, 
  .left .projet.projet11:hover h2, 
  .left .projet.projet07:hover h2 {
    margin: 8px 0 15px 25px;
  }
  
  .left .projet .info, 
  .projet.right .projet02 .info, 
  .right .projet.projet06 .info, 
  .right .projet.projet10 .info, 
  .left .projet:hover .info, 
  .projet.right .projet02:hover .info, 
  .right .projet.projet06:hover .info, 
  .right .projet.projet10:hover .info {
    margin-left:15px; 
  }
  
  .right .projet .info, 
  .left .projet.projet03 .info, 
  .left .projet.projet11 .info, 
  .left .projet.projet07 .info, 
  .right .projet:hover .info, 
  .left .projet.projet03:hover .info, 
  .left .projet.projet11:hover .info, .left 
  .projet.projet07:hover .info {
    margin-left:25px; 
  } 
}
</style>