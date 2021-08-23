<template>
    <b-container fluid class="p-0">

        <b-row v-if="level === 1" align-v="center" class="min-vh-100">
            <b-col lg="6" align-self="center" class="text-left p-5">
                <h5 :v-html="microTitle"></h5>
                <h2 :v-html="title"></h2>
                <p :v-html="text"></p>
                <b-button variant="info" :v-html="cta"></b-button>
            </b-col>
            <b-col lg="6" align-self="center" class="p-0">
                <b-img :src="imgUrl" fluid class="img-full min-vh-100"></b-img>
            </b-col>
        </b-row>
        
        <b-row v-else-if="level === 2" align-v="center" class="min-vh-100">
            <b-col lg="6" align-self="stretch" class="p-0">
                <b-img :src="imgUrl" fluid class="img-full min-vh-100"></b-img>
            </b-col>
            <b-col lg="6" align-self="center" class="text-left p-5">
                <h5 :v-html="microTitle"></h5>
                <h2 :v-html="title"></h2>
                <p :v-html="text"></p>
                <b-button variant="info" :v-html="cta"></b-button>
            </b-col>
        </b-row>
        
        <b-row v-else-if="level === 3" align-v="center" class="min-vh-100">
            <b-col lg="6" align-self="center" class="text-center min-vh-100 p-5">
                <h5 :v-html="microTitle"></h5>
                <h2 :v-html="title"></h2>
                <p :v-html="text"></p>
                <b-button variant="info" :v-html="cta"></b-button>
            </b-col>
        </b-row>
        
        <b-row v-else-if="level === 4" align-v="center" class="min-vh-100">
            <b-col lg="12" align-self="stretch" class="p-0">
                <b-img src="https://source.unsplash.com/random/1200x700?sand" fluid class="img-full min-vh-100"></b-img>
            </b-col>
        </b-row>
        
        <!-- <b-row align-v="center" class="min-vh-100">
            <b-col lg="6" align-self="center" :class="imgClass">
                <slot name="img">
                    <b-img :src="imgUrl" fluid class="img-full min-vh-50 bg-warning"></b-img>
                </slot>
            </b-col>
            <b-col lg="6" align-self="center" :class="textClass">
                <slot name="text" :props="props">
                    <h5>{{microTitle}}</h5>
                    <h2>Subtitle</h2>
                    <p :v-html="text"></p>
                    <b-button variant="info">Learn more</b-button>
                </slot>
            </b-col>
        </b-row> -->
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
        cta: String,
        imgUrl: String
        
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