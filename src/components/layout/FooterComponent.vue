<template>
    <section class="p-0">

        <!-- full width text section -->
        <b-row align-v="center" class="bg-dark">
            <b-col lg="8" offset-lg="2" align-self="center" class="text-center p-5">
                <p class="my-3" v-html="data.footer.text"></p>
            </b-col>
        </b-row>
        
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