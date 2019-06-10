import Vue from "vue";
import Router from "vue-router";
import PlaygroundView from "@/views/PlaygroundView";
import OctopusView from "@/views/OctopusView";
import EvaluarView from "@/views/EvaluarView";
import ViveView from "@/views/ViveView";
import AlvarezView from "@/views/AlvarezView";
import PrincipitoView from "@/views/PrincipitoView";
import DesignView from "@/views/DesignView";
import Hack from "@/views/Hack";

Vue.use(Router);

export default new Router({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: "/",
            name: "PlaygroundView",
            component: PlaygroundView
        },
        {
            path: "/kds",
            name: "OctopusView",
            component: OctopusView
        },
        {
            path: "/evaluar",
            name: "EvaluarView",
            component: EvaluarView
        },
        {
            path: "/vive1",
            name: "ViveView",
            component: ViveView
        },
        {
            path: "/alvarez-bravo",
            name: "AlvarezView",
            component: AlvarezView
        },
        {
            path: "/principito",
            name: "PrincipitoView",
            component: PrincipitoView
        },
        {
            path: "/design",
            name: "DesignView",
            component: DesignView
        },
        {
            path: "/playground",
            name: "Hack",
            component: Hack
        },
        {
            path: "*",
            redirect: "/playground"
        }
    ]
});
