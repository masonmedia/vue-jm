<template>
  <b-container fluid class="p-0">
    <b-row align-v="center" class="min-vh-100 bg-sand">
      <b-col lg="6" align-self="center" class="text-left p-5"> 
        <h1 class="site-title font-weight-bold" v-html="data.banner.title"></h1>
        <h3 class="my-3" v-html="data.banner.subtitle"></h3>
        <b-button variant="outline-dark" class="mr-2" v-html="data.banner.btn1"></b-button>
        <b-button variant="dark" v-html="data.banner.btn2"></b-button>
      </b-col>
      <b-col lg="6" align-self="stretch" class="p-0">
       <b-img :src="data.banner.img" fluid class="img-full min-vh-50"></b-img>
      </b-col>
    </b-row>

    <section-component :level="3"
    :microTitle="data.section_1.microTitle"
    :title="data.section_1.title"
    :text="data.section_1.text"
    :btn1="data.section_1.btn"></section-component>
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
