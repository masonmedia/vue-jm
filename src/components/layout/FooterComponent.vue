<template>
    <section class="p-0 relative">
        <b-container fluid class="p-0">
        <!-- <b-container fluid class="p-0" style="position: absolute; bottom: 0px; z-index: 10000;"> -->
            <b-row align-v="center" class="bg-dark">
                <b-col lg="8" offset-lg="2" align-self="center" class="up text-center text-light p-5">
                    <b-button variant="outline-light" style="pointer-events: none;" class="up my-3 font-weight-bold" v-html="data.footer.text"></b-button>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import data from '@/frontaid/frontaid.content.json'

export default {
    name: 'FooterComponent',
    data() {
        return {
            data: data.page_1
        }
    },
    props: {
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
}
</script>