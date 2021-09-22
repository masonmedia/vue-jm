<template>
  <div id="app" class="page-fade">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <nav-component></nav-component>
    <router-view />
    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from './components/layout/FooterComponent.vue'
import NavComponent from './components/layout/NavComponent.vue'
import smoothscroll from 'smoothscroll-polyfill';

export default {
  components: {
    NavComponent,
    FooterComponent,
  },
  mounted() {
    // kick off the polyfill!
    smoothscroll.polyfill();
  }
}
</script>

<style>
#n
    FooterComponentav a.router-link-exact-active {
  color: #42b983;
}
</style>
