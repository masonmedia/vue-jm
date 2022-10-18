<template>
  <section>
    <b-row id="banner" align-v="center" class="min-vh-100 relative z-1 mt-5">
      <div class="w-100 d-flex" v-for="(item, index) in data" :key="index">
        <b-col lg="6" class="p-5 bg-sand-gradient left-center text-left mt-4 mt-lg-0 min-vh-75">
          <h1 class="site-title font-weight-bold" v-html="item.title"></h1>
          <h3 class="site-subtitle text-dark my-3" v-html="item.subtitle"></h3>
          <div>
            <b-button href="#mission" variant="outline-dark" class="cta mr-2" v-html="item.btn1"></b-button>
            <a :href="item.btn2link">
              <b-button variant="dark" class="cta" v-html="item.btn2"></b-button>
            </a>
          </div>
        </b-col>
        <b-col lg="6" class="bg-sand p-0">
          <!-- <b-img v-if="img1" :src="require(`@/assets/img/${img1}`)" fluid class="img-full min-vh-50"></b-img> -->
          <b-img :src="`https://content.jenmasonconsulting.ca/cockpit/storage/uploads/${item.img.path}`" fluid class="img-full min-vh-50"></b-img>
          <!-- <b-img v-else :src="img2" fluid class="img-full min-vh-50"></b-img> -->
        </b-col>
      </div>
    </b-row>
  </section>
</template>


<script>
  // import { banner } from "../../mixins/gsap_demo";
  // import { intersection } from "@/mixins/intersection";
  import {
    gsap
  } from "gsap";
  import {
    ScrollTrigger
  } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);

  export default {
    name: 'BannerComponent',
    // mixins: [intersection],
    props: [
      'data',
      'title',
      'subtitle',
      'btn1',
      'btn2',
      'btn2link',
      'img1',
      'img2',
    ],
    methods: {
    },
    mounted() {
      const tl = gsap.timeline({
        defaults: {
          duration: 0.5,
          ease: "sine"
        }
      });
      // tl.from(".bg-circles-trans", {
      //     scale: 0.8,
      //     rotation: -5,
      //     opacity: 0
      //   }) 
        //child tweens will inherit the duration and from the parent timeline!
        tl.from("h1", {
          y: 200,
          opacity: 0
        }) 
        .from("h3", {
          scale: 0,
          opacity: 0
        })
        // .from(".bg-circles", {
        //   scale: 0.8,
        //   rotation: -10,
        //   opacity: 0
        // })
        
        .from("img", {
          opacity: 0
        })
        .from(".cta", {
          y: 100,
          opacity: 0,
          stagger: 0.1
        })
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