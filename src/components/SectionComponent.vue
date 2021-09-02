<template>
    <section class="p-0">

        <!-- full width text section -->
        <b-row v-if="level === 1" align-v="center" class="min-vh-75" :class="rowClass">
            <b-col lg="8" offset-lg="2" align-self="center" class="text-center p-5">
                <h5 class="animate text-uppercase font-weight-bold" data-animate="fade-up 1s" v-html="microTitle"></h5>
                <h2 class="animate section-title" data-animate="fade-up 1s" v-html="title"></h2>
                <p class="animate my-4" data-animate="fade-up 1s" v-html="text"></p>
                <b-button variant="info" v-html="btn" class="animate"></b-button>
            </b-col>
        </b-row>
        
        <!-- full width img section -->
        <b-row v-else-if="level === 2" align-v="center" :class="rowClass">
            <b-col lg="12" align-self="stretch" class="animate p-0" :data-animate="fade">
                <b-img v-if="img1" :src="require(`@/assets/img/${img1}`)" fluid 
                class="img-full min-vh-50"></b-img>
                <b-img v-else :src="img2" fluid class="img-full min-vh-50"></b-img>
            </b-col>
        </b-row>

        <!-- 50-50 text-img section -->
        <b-row v-else-if="level === 3" align-v="center" class="bg-light" :class="rowClass">
            <b-col lg="6" align-self="center" class="text-left p-5">
                <h6 class="animate small text-uppercase" data-animate="fade-up 1s" v-html="microTitle"></h6>
                <h2 class="animate h1 font-weight-bold" data-animate="fade-up 1s" v-html="title"></h2>
                <p class="animate my-4" data-animate="fade-up 1s" v-html="text"></p>
                <b-icon icon="arrow-down" font-scale="2" variant="dark" class="animate" data-animate="fade-up 1s"></b-icon>
            </b-col>
            <b-col lg="6" align-self="stretch" class="animate p-0" :class="colClass" :data-animate="fade">
                <b-img v-if="img1" :src="require(`@/assets/img/${img1}`)" fluid 
                class="img-full min-vh-50"
                :class="imgClass"></b-img>
                <b-img v-else :src="img2" fluid class="img-full min-vh-50"></b-img>
            </b-col>
        </b-row>
        
        <!-- 50-50 img-text section -->
        <b-row v-else-if="level === 4" align-v="center" class="bg-linen" :class="rowClass">
            <b-col lg="6" align-self="stretch" class="animate p-0" :class="colClass" :data-animate="fade">
                <b-img v-if="img1" :src="require(`@/assets/img/${img1}`)" fluid 
                class="img-full min-vh-50"></b-img>
                <b-img v-else :src="img2" fluid class="img-full min-vh-50"></b-img>
            </b-col>
            <b-col lg="6" align-self="center" class="text-left p-5">
                <h6 class="animate small text-uppercase" data-animate="fade-up 1s" v-html="microTitle"></h6>
                <h2 class="animate h1 font-weight-bold" data-animate="fade-up 1s" v-html="title"></h2>
                <p class="animate my-4" data-animate="fade-up 1s" v-html="text"></p>
                <b-icon icon="arrow-down" font-scale="2" variant="dark" class="animate" data-animate="fade-up 1s"></b-icon>
            </b-col>
        </b-row>

        <b-row v-if="level === 5" align-v="center" class="bg-dark">
            <b-col lg="8" offset-lg="2" align-self="center" class="text-center text-light p-5">
                <h2 class="animate section-title" data-animate="fade-up 1s" v-html="title"></h2>
                <p class="animate mb-4 mt-2" data-animate="fade-up 1s" v-html="text"></p>
                <b-button variant="info" v-html="btn" class="animate" data-animate="fade-up 1s"></b-button>         
            </b-col>
        </b-row>

  </section>
</template>

<script>
import {intersection} from '@/mixins/intersection'

export default {
    name: 'SectionComponent',
    mixins: [intersection],
    props: {
        level: {
        type: Number,
        required: true
        },
        microTitle: String,
        title: String,
        text: String,
        btn: String,
        btn1: String,
        btn2: String,
        img1: String,
        img2: String,
        rowClass: String,
        colClass: String,
        imgClass: String,
    },
    methods: {
    }
}
</script>