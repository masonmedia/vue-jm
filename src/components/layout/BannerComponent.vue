<template>
    <b-row id="banner" align-v="center" class="min-vh-100 relative mt-5">
      <div class="animate bg-sand absolute z-0 left bottom w-md-50 h-100" data-animate="fade-in 2s"></div>
      <b-col lg="6" class="left-center text-left p-5 mt-4 mt-lg-0 min-vh-75"> 
        <h1 class="animate site-title text-dark font-weight-bold" 
        data-animate="fade-up 0.5s"
        v-html="title"></h1>
        <h3 class="animate site-subtitle text-focus-in text-dark my-3" 
        data-animate="fade-up 1s"
        v-html="subtitle"></h3>
        <div class="d-inline-block banner-cta">
        <b-button href="#mission" variant="outline-dark" class="animate mr-2" 
        data-animate="fade-up 1.5s"
        v-html="btn1"></b-button>
        <b-button variant="dark" 
        class="animate"
        data-animate="fade-up 2s"
        v-html="btn2"></b-button>
        </div>
      </b-col>
      <b-col lg="6" align-self="stretch" class="animate p-0" data-animate="fade-in 2s">
       <b-img v-if="img1" :src="require(`@/assets/img/${img1}`)" fluid class="img-full min-vh-50"></b-img>
       <b-img v-else :src="img2" fluid class="img-full min-vh-50"></b-img>
      </b-col>
    </b-row>
</template>


<script>
export default {
    name: 'BannerComponent',
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
