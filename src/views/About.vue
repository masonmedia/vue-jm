<template>
  <div class="about">
    <b-container fluid class="p-0" v-if="content.hero">

      <b-row id="banner" align-v="center" class="min-vh-100 mt-5">
        <b-col md="6" align-self="stretch" class="p-5 bg-sand-gradient left-center text-left mt-4 mt-lg-0 min-vh-75">
          <h1 class="site-title font-weight-bold"
          v-html="content.hero.title"></h1>
          <h3 class="site-subtitle text-dark my-3" v-html="content.hero.subtitle"></h3>
          <div>
            <b-button :href="content.hero.btn1Link" variant="outline-dark" class="cta mr-2" v-html="content.hero.btn1"></b-button>
            <a :href="content.hero.btn2link">
              <b-button variant="dark" class="cta" v-html="content.hero.btn2"></b-button>
            </a>
          </div>
        </b-col>
        <b-col md="6" align-self="stretch" class="bg-sand p-0">
          <b-img :src="`https://content.jenmasonconsulting.ca/cockpit/storage/uploads/${content.hero.img.path}`" fluid class="img-full min-vh-50"></b-img>
        </b-col>
    </b-row>

    <div class="row min-vh-100" id="mission">
      <div class="col-lg-8 offset-lg-2 min-vh-100 p-5 center-center">
        <h5 class="up text-uppercase font-weight-bold" v-html="content.mission.microtitle"></h5>
        <h2 class="up section-title" v-html="content.mission.title"></h2>
        <div class="up mb-4" v-html="content.mission.text"></div>
        <b-button :href="content.mission.btnLink" variant="info" v-html="content.mission.btn" class="up"></b-button>
      </div>
      <div class="col-lg-12 p-0 center-center">
        <b-img :src="`https://content.jenmasonconsulting.ca/cockpit/storage/uploads/${content.mission.img.path}`" fluid class="img-full min-vh-50"></b-img>
      </div>
    </div>
    
    <div class="row min-vh-100 bg-linen" id="services">
      <div class="col-lg-8 offset-lg-2 min-vh-100 p-5 center-center">
        <h5 class="up text-uppercase font-weight-bold" v-html="content.servicesIntro.microtitle"></h5>
        <h2 class="up section-title" v-html="content.servicesIntro.title"></h2>
        <div class="up mb-4" v-html="content.servicesIntro.text"></div>
        <b-button :href="content.servicesIntro.btnLink" variant="info" v-html="content.servicesIntro.btn" class="up"></b-button>
      </div>
    </div>
    
    <div class="row min-vh-100" id="team-restoration"
    v-for="(item, index) in content.services" :key="index">
      <div v-if="index % 2 === 0" class="w-100 d-flex flex-wrap flex-md-nowwrap">
        <div class="col-lg-6 min-50 align-left-center my-auto p-5 m-0 order-12 order-lg-1">
          <h6 class="up text-uppercase small" v-html="item.microtitle"></h6>
          <h2 class="up section-title" v-html="item.title"></h2>
          <div class="up mb-4" v-html="item.text"></div>
          <a href="#listening">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down" width="60" height="60" viewBox="0 0 24 24" stroke-width=".5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="18" y1="13" x2="12" y2="19" />
                <line x1="6" y1="13" x2="12" y2="19" />
              </svg>
            </a>
        </div>
        <div class="col-lg-6 min-vh-50 p-0 order-1 order-lg-12">
          <img width="1000" height="600" :src="`https://content.jenmasonconsulting.ca/cockpit/storage/uploads/${item.img.path}`" class="w-100 h-100 object-fit" alt="">
        </div>
      </div>

      <div v-else class="w-100 d-flex flex-wrap flex-md-nowwrap">
        <div class="col-lg-6 min-vh-50 p-0">
          <img width="1000" height="600" :src="`https://content.jenmasonconsulting.ca/cockpit/storage/uploads/${item.img.path}`" class="w-100 h-100 object-fit" alt="">
        </div>
        <div class="col-lg-6 min-50 align-left-center my-auto p-5 m-0">
          <h6 class="up text-uppercase small" v-html="item.microtitle"></h6>
          <h2 class="up section-title" v-html="item.title"></h2>
          <div class="up mb-4" v-html="item.text"></div>
          <a href="#listening">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down" width="60" height="60" viewBox="0 0 24 24" stroke-width=".5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="18" y1="13" x2="12" y2="19" />
                <line x1="6" y1="13" x2="12" y2="19" />
              </svg>
            </a>
        </div>
      </div>
    </div>

  

    
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
// import data from '../frontaid/frontaid.content.json'
// import BannerComponent from '../components/layout/BannerComponent.vue'
// import SectionComponent from '../components/SectionComponent.vue'
// import { animations } from '../mixins/animations'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'About',
  // mixins:[animations],
  components: {
    // BannerComponent,
    // SectionComponent
  },
  data() {
    return {
      content: [],
      errored: false,
    }
  },
  methods: {
    // disableGSAP() {
    //   tl.disable()
    // }
  },
  mounted() {
        // .get("https://matt.andrewmasonmedia.com/cockpit/api/singletons/get/home_page?token=06c536262b429358a68bd7871ba330")
        // .get("https://content.jenmasonconsulting.ca/cockpit/api/singletons/home_page?token=API-35730b481f916fd2dd1631d62fbbc805b5b80381")
      axios
        .get("https://content.jenmasonconsulting.ca/cockpit/api/content/item/home_page")
        .then(response => {
          this.content = response.data
          console.log(this.content)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        // .finally(() => this.loading = false)

  }
}
</script>

<style>

.gs_reveal {
  opacity: 0;
  visibility: hidden;
  will-change: transform, opacity;
}

.circle {
  height: 500px;
  width: 500px;
  border-radius: 100%;
}
</style>
