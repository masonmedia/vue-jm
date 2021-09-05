<template>
    <b-row id="banner" align-v="center" class="min-vh-100 relative z-1 mt-5">
      <div class="bg-circles absolute z-0 left bottom w-100 h-100"></div>
      <b-col lg="6" class="left-center text-left p-5 mt-4 mt-lg-0 min-vh-75"> 
        <h1 class="site-title font-weight-bold"
        v-html="title"></h1>
        <h3 class="site-subtitle text-dark my-3" 
        v-html="subtitle"></h3>
        <div class="d-inline-block banner-cta">
        <b-button href="#mission" variant="outline-dark" class="mr-2"
        v-html="btn1"></b-button>
        <b-button variant="dark" 
        class=""
        v-html="btn2"></b-button>
        </div>
      </b-col>
      <b-col lg="6" align-self="stretch" class="fade-in p-0">
       <b-img v-if="img1" :src="require(`@/assets/img/${img1}`)" fluid class="img-full min-vh-50"></b-img>
       <b-img v-else :src="img2" fluid class="img-full min-vh-50"></b-img>
      </b-col>
    </b-row>
</template>


<script>
// import { banner } from "../../mixins/gsap_demo";
// import { intersection } from "@/mixins/intersection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
gsap.registerPlugin(ScrollTrigger, CSSPlugin);

export default {
    name: 'BannerComponent',
    // mixins: [intersection],
    props: [
        'title',
        'subtitle',
        'btn1',
        'btn2',
        'img1',
        'img2',
    ],
    mounted() {
      const tl = gsap.timeline({ defaults: {duration: 0.8, ease: "sine"} } );
        // tl.from("#banner h1", {y: -200, opacity: 0, color: "#D6D6D6"}) //child tweens will inherit the duration and from the parent timeline!
        tl.fromTo("#banner h1", {y: 200, opacity: 0, color: "#FFFFFF"}, {y: 0, opacity: 1, color: "#343a40"}) //child tweens will inherit the duration and from the parent timeline!
          .from("h3", {scale: 0, opacity: 0})
          // .from(".banner-cta", {x: -180, opacity: 0})
          .from(".bg-circles", {scale: 0.8, rotation: -10, opacity: 0})
          .from("img", {opacity: 0})
          .from(".banner-cta", {x: -180, opacity: 0})
          }
}

 

</script>

<style>
/* #banner {
  position: fixed;
  height: 100vh;
  width: 100%;
  max-width: 1400px;
} */
</style>