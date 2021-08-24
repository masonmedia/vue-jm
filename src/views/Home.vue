<template>
  <b-container fluid class="p-0">
    <b-row align-v="center" class="min-vh-100 relative">
      <div class="absolute z-0 left top bg-sand w-50 h-100"></div>
      <b-col lg="6" align-self="center" class="text-left p-5 min-vh-50"> 
        <h1 class="relative site-title-stroke font-weight-bold" v-html="data.banner.title"></h1>
        <h3 class="my-3" v-html="data.banner.subtitle"></h3>
        <b-button href="#mission" variant="outline-dark" class="mr-2" v-html="data.banner.btn1"></b-button>
        <b-button variant="dark" v-html="data.banner.btn2"></b-button>
      </b-col>
      <b-col lg="6" align-self="stretch" class="p-0">
       <b-img v-if="data.banner.img1" :src="require(`@/assets/img/${data.banner.img1}`)" fluid class="img-full min-vh-50"></b-img>
       <b-img v-else :src="data.banner.img2" fluid class="img-full min-vh-50"></b-img>
      </b-col>
    </b-row>

    <section-component :level="1"
    id="mission"
    :microTitle="data.section_1.microTitle"
    :title="data.section_1.title"
    :text="data.section_1.text"
    :btn1="data.section_1.btn"></section-component>
    
    <section-component :level="2"
    :img1="data.section_2.img1"
    :img2="data.section_2.img2"></section-component>

    <section-component :level="1"
    id="services"
    :microTitle="data.section_3.microTitle"
    :title="data.section_3.title"
    :text="data.section_3.text"
    :btn1="data.section_3.btn"></section-component>

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

  </b-container>

</template>

<script>
import data from '../frontaid/frontaid.content.json'
import SectionComponent from '../components/SectionComponent.vue'

export default {
  name: 'Home',
  components:{
    SectionComponent,
  },
  data() {
    return {
      data: data.page_1,
    }
  },
  methods: {
        leftLayout() {
            this.leftLayout = true;
        },
        rightLayout() {
            this.leftLayout = false;
        }
    }
}
</script>
