<template>
  <b-container fluid class="p-0">
    <banner-component
    :title="data.banner.title"
    :subtitle="data.banner.subtitle"
    :btn1="data.banner.btn1"
    :btn2="data.banner.btn2"
    :img1="data.banner.img1"
    ></banner-component>

    <!-- <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section> -->

    <!-- <div v-if="loading">Loading...</div> -->

    <div class="">

    <div class="absolute z-0" style="width: 400px; height: 400px; background: #EBEBEB; border-radius: 100%" v-rellax="{
      // See: https://github.com/dixonandmoe/rellax#features
      speed: -2,
    }"></div>
    <div class="absolute z-0 right" style="width: 300px; height: 300px; background: #C3C2C2; border-radius: 100%;" v-rellax="{
      // See: https://github.com/dixonandmoe/rellax#features
      speed: -1,
    }"></div>
    <div class="absolute z-0" style="width: 200px; height: 200px; background: #E1E0E0; border-radius: 100%" v-rellax="{
      // See: https://github.com/dixonandmoe/rellax#features
      speed: -0,
    }"></div>

    <section-component :level="1"
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
// import data from '../frontaid/frontaid.content.json'
import axios from 'axios'
import BannerComponent from '../components/layout/BannerComponent.vue'
import SectionComponent from '../components/SectionComponent.vue'
import { intersection } from "@/mixins/intersection";
// import { animations } from '@/mixins/animations'

export default {
  name: 'Home',
  mixins: [intersection],
  components:{
    BannerComponent,
    SectionComponent,
  },
  data() {
    return {
      // data: data.page_1,
      data: [],
      loading: true,
      errored: false,
      rellax: {
      speed: -1
    }
    }
  },
  methods: {
  },
    mounted () {

      // editor link https://simplejsoncms.com/editor/ovymt8uqtx
      const url = "https://simplejsoncms.com/api/ovymt8uqtx"
      axios
        .get(url)
        .then(response => {
          this.data = response.data.page_1
          console.log(this.data)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
  }
}
</script>

<style>
.circle{
  background-color:red;
  height: 5em;
  width: 5em;
  border-radius: 100%
}
</style>
