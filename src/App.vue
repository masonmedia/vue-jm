<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <nav-component></nav-component>
    <router-view />
  </div>
</template>

<script>
import NavComponent from './components/layout/NavComponent.vue'

export default {
  components: {
    NavComponent,
  }
}
</script>

<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
