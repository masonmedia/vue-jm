<template>
    <b-row id="banner" align-v="center" class="min-vh-100 relative z-1 mt-5">
      <div class="bg-circles-trans absolute z-0 left bottom w-100 h-100"></div>
      <div class="bg-circles absolute z-0 left bottom w-100 h-100"></div>
      <b-col lg="5" offset-lg="1" align-self="stretch" class="p-5 left-center text-left mt-4 mt-lg-0 min-vh-75"> 
        <h1 class="site-title font-weight-bold"
        v-html="title"></h1>
        <h3 class="site-subtitle text-dark my-3" 
        v-html="subtitle"></h3>
        <div>
          <b-button href="#mission" variant="outline-dark" class="cta mr-2"
          v-html="btn1"></b-button>
          <b-button variant="dark" 
          class="cta"
          v-html="btn2"></b-button>
        </div>
      </b-col>
      <b-col lg="6" align-self="stretch" class="p-0">
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
gsap.registerPlugin(ScrollTrigger);

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
        tl.from(".bg-circles-trans", {scale: 0.8, rotation: -5, opacity: 0}) //child tweens will inherit the duration and from the parent timeline!
          .from("h1", {y: 200, opacity: 0}) //child tweens will inherit the duration and from the parent timeline!
          .from("h3", {scale: 0, opacity: 0})
          .from(".bg-circles", {scale: 0.8, rotation: -10, opacity: 0})
          .from(".cta", {y: 100, opacity: 0, stagger: 0.1})
          .from("img", {opacity: 0})
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