<template>
  <b-container fluid class="p-0">
    <b-row align-v="center" class="min-vh-100">
      <b-col lg="6" align-self="center" class="bg-sand text-left p-5">
        <h1 class="font-weight-bold" v-html="data.banner.title"></h1>
        <h3 v-html="data.banner.subtitle"></h3>
        <b-button variant="light" v-html="data.banner.btn1"></b-button>
      </b-col>
      <b-col lg="6" align-self="stretch" class="p-0">
       <!-- <b-img src="https://source.unsplash.com/random/1200x700?nature" fluid class="img-full min-vh-100"></b-img> -->
       <b-img :src="data.banner.img" fluid class="img-full min-vh-50"></b-img>
      </b-col>
    </b-row>
    <section-component :level="1"></section-component>
    <!-- <section-component></section-component> -->
    <!-- <section-component textClass="p-5" imgClass="p-0">
      <template #text></template>
      <template v-slot:img>
        <b-img src="https://source.unsplash.com/random/1200x700?nature" fluid class="img-full min-vh-100"></b-img>
      </template>
    </section-component> -->
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
