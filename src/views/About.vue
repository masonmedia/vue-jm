<template>
  <div class="about">
    <h1 v-html="data.banner.title"></h1>
    <h3 v-html="data.banner.subtitle"></h3>
    <b-button variant="light" v-html="data.banner.btn1"></b-button>
  </div>
</template>

<script>
import data from '../frontaid/frontaid.content.json'

export default {
  name: 'About',
  data() {
    return {
      data: data.page_1
    }
  }
}
</script>
