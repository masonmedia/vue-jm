<template>
    <b-row id="banner" align-v="center" class="min-vh-100 relative mt-5">
      <div class="fade-up bg-sand absolute z-0 left bottom w-md-50 h-100" data-animate="fade-in 2s"></div>
      <b-col lg="6" class="left-center text-left p-5 mt-4 mt-lg-0 min-vh-75"> 
        <h1 class="fade-up site-title text-dark font-weight-bold"
        v-html="title"></h1>
        <h3 class="fade-up site-subtitle text-focus-in text-dark my-3" 
        v-html="subtitle"></h3>
        <div class="d-inline-block banner-cta">
        <b-button href="#mission" variant="outline-dark" class="fade-up mr-2"
        v-html="btn1"></b-button>
        <b-button variant="dark" 
        class="fade-up"
        v-html="btn2"></b-button>
        </div>
      </b-col>
      <b-col lg="6" align-self="stretch" class="fade-in p-0">
       <b-img v-if="img1" :src="require(`@/assets/img/${img1}`)" fluid class="fade-in img-full min-vh-50"></b-img>
       <b-img v-else :src="img2" fluid class="img-full min-vh-50"></b-img>
      </b-col>
    </b-row>
</template>


<script>
import { intersection } from "@/mixins/intersection";

export default {
    name: 'BannerComponent',
    mixins: [intersection],
    props: [
        'title',
        'subtitle',
        'btn1',
        'btn2',
        'img1',
        'img2',
    ]
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