<template>
    <section class="p-0">

        <!-- full width text section -->        
        <b-row v-if="level === 1" align-v="center" class="min-vh-100" :class="rowClass" :style="rowStyle">
            <b-col lg="8" offset-lg="2" align-self="center" class="text-center p-5">
                <h5 class="up text-uppercase font-weight-bold" v-html="microTitle"></h5>
                <h2 class="up section-title" v-html="title"></h2>
                <p class="up my-4" v-html="text"></p>
                <b-button :href="btnLink" variant="info" v-html="btn" class="up"></b-button>
                <!-- <b-button @click="gsapDisable" variant="danger" class="up">Disable gsap</b-button> -->
                <!-- <b-button @click="gsapEnable" variant="danger" class="up">Enable gsap</b-button> -->
            </b-col>
        </b-row>
        
        <!-- full width img section -->
        <b-row v-else-if="level === 2" align-v="center" class="min-vh-75" :class="rowClass">
            <b-col lg="12" align-self="stretch" class="blur p-0">
                <b-img v-if="img1" :src="require(`@/assets/img/${img1}`)" fluid 
                class="img-full min-vh-50"></b-img>
                <b-img v-else :src="img2" fluid class="img-full min-vh-50"></b-img>
            </b-col>
        </b-row>
        
        <!-- 50-50 text-img section -->
        <b-row v-else-if="level === 3" align-v="center" class="min-vh-75 bg-light" :class="rowClass">
            <b-col lg="6" class="left-center min-vh-75 p-5" order="2" order-lg="1">
                <h6 class="up small text-uppercase" v-html="microTitle"></h6>
                <h2 class="up section-title font-weight-bold" v-html="title"></h2>
                <p class="up" v-html="text"></p>
                <b-icon icon="arrow-down" font-scale="2" variant="dark" class="up"></b-icon>
            </b-col>
            <b-col lg="6" align-self="stretch" class="blur p-0" :class="colClass" order="1" order-lg="2">
                <b-img v-if="img1" :src="require(`@/assets/img/${img1}`)" fluid 
                class="img-full aspect-16 min-vh-50"
                :class="imgClass"></b-img>
                <b-img v-else :src="img2" fluid class="img-full aspect-16 min-vh-50"></b-img>
            </b-col>
        </b-row>
        
        <!-- 50-50 img-text section -->
        <b-row v-else-if="level === 4" align-v="center" class="min-vh-75 bg-linen" :class="rowClass">
            <b-col lg="6" align-self="stretch" class="blur p-0" :class="colClass">
                <b-img v-if="img1" :src="require(`@/assets/img/${img1}`)" fluid 
                class="img-full aspect-16 min-vh-50"></b-img>
                <b-img v-else :src="img2" fluid class="img-full aspect-16 min-vh-50"></b-img>
            </b-col>
            <b-col lg="6" class="left-center min-vh-75 p-5">
                <h6 class="up small text-uppercase" v-html="microTitle"></h6>
                <h2 class="up section-title font-weight-bold" v-html="title"></h2>
                <p class="up my-4" v-html="text"></p>
                <b-icon icon="arrow-down" font-scale="2" variant="dark" class="up"></b-icon>
            </b-col>
        </b-row>

        <b-row v-if="level === 5" align-v="center" class="bg-dark">
            <b-col lg="8" offset-lg="2" align-self="center" class="text-center text-light p-5">
                <h2 class="up section-title" v-html="title"></h2>
                <p class="up mb-4 mt-2" v-html="text"></p>
                <b-button variant="info" v-html="btn" class="up"></b-button>         
            </b-col>
        </b-row>

  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'SectionComponent',
    data() {
        return {
            isDisabled: false,
        }
    },
    props: {
        level: {
        type: Number,
        required: true
        },
        microTitle: String,
        title: String,
        text: String,
        btn: String,
        btn1: String,
        btn2: String,
        btnLink: String,
        img1: String,
        img2: String,
        rowClass: String,
        rowStyle: String,
        colClass: String,
        imgClass: String,
    },
    methods: {
        gsapDisable() {
            ScrollTrigger.kill();
            console.log("GSAP disabled")
        },
        gsapEnable() {
            ScrollTrigger.create();
            console.log("GSAP enabled")
        },
        animateOnScroll() {
            gsap.utils.toArray(".up").forEach(layer => {
                gsap.from(layer, {
                y: 70,
                opacity: 0,
                stagger: 0.3,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: layer,
                }
            });
        })
        },
        
    },
    mounted() {

       gsap.utils.toArray('.blur').forEach(step => {
            ScrollTrigger.create({
                trigger: step,
                toggleClass: 'blur',
                once: true,
                scrub: 1
            });
        });
        
        gsap.utils.toArray('.up').forEach(step => {
            ScrollTrigger.create({
                trigger: step,
                stagger: 0.3,
                toggleClass: 'fade-up',
                once: true,
                scrub: 1
            });
        });

    }
}
</script>