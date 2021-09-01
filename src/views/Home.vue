<template>
  <b-container fluid class="p-0">
    <b-row id="banner" align-v="center" class="min-vh-100 relative mt-5">
      <div class="bg-sand absolute z-0 left bottom w-md-50 h-100"></div>
      <b-col lg="6" class="left-center text-left p-5 mt-4 mt-lg-0 min-vh-75"> 
        <h1 class="site-title text-dark font-weight-bold" v-html="data.banner.title"></h1>
        <h3 class="site-subtitle text-focus-in text-dark my-3" v-html="data.banner.subtitle"></h3>
        <div class="d-inline-block banner-cta">
        <b-button href="#mission" variant="outline-dark" class="up mr-2" v-html="data.banner.btn1"></b-button>
        <b-button variant="dark" v-html="data.banner.btn2"></b-button>
        </div>
      </b-col>
      <b-col lg="6" align-self="stretch" class="p-0">
       <b-img v-if="data.banner.img1" :src="require(`@/assets/img/${data.banner.img1}`)" fluid class="img-full min-vh-50"></b-img>
       <b-img v-else :src="data.banner.img2" fluid class="img-full min-vh-50"></b-img>
      </b-col>
    </b-row>

    <!-- <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section> -->

    <!-- <div v-if="loading">Loading...</div> -->

    <div class="">
    <section-component :level="1"
    id="mission"
    rowClass="light"
    :microTitle="data.section_1.microTitle"
    :title="data.section_1.title"
    :text="data.section_1.text"
    :btn="data.section_1.btn"></section-component>
    
    <section-component :level="2"
    :img1="data.section_2.img1"
    :img2="data.section_2.img2"></section-component>

    <section-component :level="1"
    id="services"
    rowClass="linen"
    :microTitle="data.section_3.microTitle"
    :title="data.section_3.title"
    :text="data.section_3.text"
    :btn="data.section_3.btn"></section-component>

    <!-- services -->

    <section-component :level="3"
    v-for="item in data.section_4.services.slice(0,1)" :key="item.id"
    :microTitle="item.microTitle"
    :title="item.title"
    :text="item.text"
    :img1="item.img1"
    :img2="item.img2"></section-component>


    <section-component :level="4"
    v-for="item in data.section_4.services.slice(1,2)" :key="item.id"
    :microTitle="item.microTitle"
    :title="item.title"
    :text="item.text"
    :img1="item.img1"
    :img2="item.img2"
    ></section-component>

    <section-component :level="3"
    v-for="item in data.section_4.services.slice(2,3)" :key="item.id"
    :microTitle="item.microTitle"
    :title="item.title"
    :text="item.text"
    :img1="item.img1"
    :img2="item.img2"></section-component>

    <section-component :level="4"
    v-for="item in data.section_4.services.slice(3,4)" :key="item.id"
    :microTitle="item.microTitle"
    :title="item.title"
    :text="item.text"
    :img1="item.img1"
    :img2="item.img2"
    ></section-component>

    <section-component :level="3"
    v-for="item in data.section_4.services.slice(4,5)" :key="item.id"
    colClass="relative"
    imgClass="absolute z-0"
    :microTitle="item.microTitle"
    :title="item.title"
    :text="item.text"
    :img1="item.img1"
    :img2="item.img2"></section-component>

    <section-component :level="4"
    v-for="item in data.section_4.services.slice(5,6)" :key="item.id"
    :microTitle="item.microTitle"
    :title="item.title"
    :text="item.text"
    :img1="item.img1"
    :img2="item.img2"
    ></section-component>

  <!-- about jen -->

    <section-component :level="1"
    id="about"
    :microTitle="data.section_5.microTitle"
    :title="data.section_5.title"
    :text="data.section_5.text"
    :btn="data.section_5.btn"></section-component>

    <section-component :level="2"
    :img1="data.section_6.img1"
    :img2="data.section_6.img2"></section-component>
    
    <section-component :level="5"
    :title="data.section_7.title"
    :text="data.section_7.text"
    :btn="data.section_7.btn"></section-component>

    <section-component :level="2"
    :img1="data.section_8.img1"
    :img2="data.section_8.img2"></section-component>

    </div>
  </b-container>

</template>

<script>
import data from '../frontaid/frontaid.content.json'
// import axios from 'axios'
import SectionComponent from '../components/SectionComponent.vue'
import { animations } from "@/mixins/animations";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Home',
  mixins: [animations],
  components:{
    SectionComponent,
  },
  data() {
    return {
      data: data.page_1,
      // data: [],
      // loading: true,
      // errored: false
    }
  },
  methods: {
  },
    mounted () {
      // const url = "https://simplejsoncms.com/api/ovi1p6mj138"
      // axios
      //   .get(url)
      //   .then(response => {
      //     this.data = response.data.page_1
      //     console.log(this.data)
      //   })
      //   .catch(error => {
      //     console.log(error)
      //     this.errored = true
      //   })
      //   .finally(() => this.loading = false)
  }
}
</script>
