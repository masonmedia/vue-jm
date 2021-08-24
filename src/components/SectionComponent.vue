<template>
    <b-container fluid class="p-0">

        <!-- full width text section -->
        <b-row v-if="level === 1" align-v="center" class="min-vh-75 bg-light" :class="rowClass">
            <b-col lg="8" offset-lg="2" align-self="center" class="text-center p-5">
                <h5 class="text-uppercase font-weight-bold" v-html="microTitle"></h5>
                <h2 class="section-title" v-html="title"></h2>
                <p class="my-4" v-html="text"></p>
                <b-button variant="info" v-html="btn1"></b-button>
            </b-col>
        </b-row>
        
        <!-- full width img section -->
        <b-row v-else-if="level === 2" align-v="center" class="min-vh-75">
            <b-col lg="12" align-self="stretch" class="p-0">
                <b-img v-if="img1" :src="require(`@/assets/img/${img1}`)" fluid class="img-full min-vh-50"></b-img>
                <b-img v-else :src="img2" fluid class="img-full min-vh-50"></b-img>
            </b-col>
        </b-row>

        <!-- 50-50 text-img section -->
        <b-row v-else-if="level === 3" align-v="center" class="min-vh-75 bg-light" :class="rowClass">
            <b-col lg="6" align-self="center" class="text-left p-5">
                <h6 class="small text-uppercase" v-html="microTitle"></h6>
                <h2 class="h1 font-weight-bold" v-html="title"></h2>
                <p class="my-4" v-html="text"></p>
                <b-icon icon="arrow-down" font-scale="2" variant="dark"></b-icon>
            </b-col>
            <b-col lg="6" align-self="stretch" class="p-0" :class="colClass">
                <b-img v-if="img1" :src="require(`@/assets/img/${img1}`)" fluid 
                class="img-full min-vh-50"
                :class="imgClass"></b-img>
                <b-img v-else :src="img2" fluid class="img-full min-vh-50"></b-img>
            </b-col>
        </b-row>
        
        <!-- 50-50 img-text section -->
        <b-row v-else-if="level === 4" align-v="center" class="min-vh-75 bg-linen" :class="rowClass">
            <b-col lg="6" align-self="stretch" class="p-0">
                <b-img v-if="img1" :src="require(`@/assets/img/${img1}`)" fluid class="img-full min-vh-50"></b-img>
                <b-img v-else :src="img2" fluid class="img-full min-vh-50"></b-img>
            </b-col>
            <b-col lg="6" align-self="center" class="text-left p-5">
                <h6 class="small text-uppercase" v-html="microTitle"></h6>
                <h2 class="h1 font-weight-bold" v-html="title"></h2>
                <p class="my-4" v-html="text"></p>
                <b-icon icon="arrow-down" font-scale="2" variant="dark"></b-icon>
            </b-col>
        </b-row>

  </b-container>
</template>

<script>
export default {
    name: 'SectionComponent',
    // props: [
    //     'microTitle',
    //     'title',
    //     'text',
    //     'cta',
    //     'textClass',
    //     'imgClass',
    //     'imgUrl'
    // ],
    props: {
        level: {
        type: Number,
        required: true
        },
        microTitle: String,
        title: String,
        text: String,
        btn1: String,
        btn2: String,
        img1: String,
        img2: String,
        rowClass: String,
        colClass: String,
        imgClass: String,
        
    },
    data() {
        return {
            leftLayout: null,
            article:{
                "title": "Article title",
                "description": "Lorem ipsum is the description",
                "id": 1
            }
        }
    },
    // methods: {
    //     leftLayout() {
    //         this.leftLayout = true;
    //     },
    //     rightLayout() {
    //         this.leftLayout = false;
    //     }
    // }
}
</script>