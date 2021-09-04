<template>
  <div class="about">
    <b-container fluid>
      <banner-component
    :title="data.banner.title"
    :subtitle="data.banner.subtitle"
    :btn1="data.banner.btn1"
    :btn2="data.banner.btn2"
    :img1="data.banner.img1"
    ></banner-component>

    <section-component :level="20"
    id="mission"
    rowClass="bg-light"
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

      <b-row class="min-vh-100" align-v="center">
        <b-col lg="12" class="p-5">
          <h1 class="gs_reveal fade">Big time</h1>
          <div class="circle"></div>
          <p class="gs_reveal up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque distinctio, adipisci veritatis inventore voluptates, magni, facere rerum illo explicabo magnam ea dolorum tempore. Laudantium voluptatem debitis optio nihil et sapiente.</p>
          <p class="gs_reveal up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque distinctio, adipisci veritatis inventore voluptates, magni, facere rerum illo explicabo magnam ea dolorum tempore. Laudantium voluptatem debitis optio nihil et sapiente.</p>
        </b-col>
      </b-row>

      <b-row class="min-vh-100" align-v="center">
        <b-col lg="6" class="p-5">
          <h1 class="gs_reveal fade">Big time</h1>
          <p class="gs_reveal up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque distinctio, adipisci veritatis inventore voluptates, magni, facere rerum illo explicabo magnam ea dolorum tempore. Laudantium voluptatem debitis optio nihil et sapiente.</p>
        </b-col>
        <b-col lg="6" class="p-0">
          <b-img src="https://source.unsplash.com/1600x900/?nature,water"
          class="right w-100"></b-img>
        </b-col>
      </b-row>

      <b-row class="min-vh-100" align-v="center">
        <b-col lg="6" class="p-0">
          <b-img src="https://source.unsplash.com/1600x900/?nature,water"
          class="right w-100"></b-img>
        </b-col>
        <b-col lg="6" class="p-5">
          <h1 class="gs_reveal fade">Big time</h1>
          <p class="gs_reveal up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque distinctio, adipisci veritatis inventore voluptates, magni, facere rerum illo explicabo magnam ea dolorum tempore. Laudantium voluptatem debitis optio nihil et sapiente.</p>
        </b-col>
      </b-row>

      <section-component :level="20"
    id="mission"
    rowClass="bg-light"
    :microTitle="data.section_1.microTitle"
    :title="data.section_1.title"
    :text="data.section_1.text"
    :btn="data.section_1.btn"></section-component>

    </b-container>
  </div>
</template>

<script>
import data from '../frontaid/frontaid.content.json'
import BannerComponent from '../components/layout/BannerComponent.vue'
import SectionComponent from '../components/SectionComponent.vue'
import { animations } from '../mixins/animations'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'About',
  mixins:[animations],
  components: {
    BannerComponent,
    SectionComponent
  },
  data() {
    return {
      data: data.page_1
    }
  },
  methods: {},
  mounted() {
          // gsap.to('.circle', {x:500, duration: 3})

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
