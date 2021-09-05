<template>
<div class="">
    <div class="absolute z-0" style="width: 400px; height: 400px; background: #EBEBEB; border-radius: 100%" v-rellax="{
      // See: https://github.com/dixonandmoe/rellax#features
      speed: -2,
    }"></div>
    <div class="absolute z-0 right" style="width: 300px; height: 300px; background: #C3C2C2; border-radius: 100%;" v-rellax="{
      // See: https://github.com/dixonandmoe/rellax#features
      speed: -1,
    }"></div>
    <div class="absolute z-0" style="width: 200px; height: 200px; background: #E1E0E0; border-radius: 100%" v-rellax="{
      // See: https://github.com/dixonandmoe/rellax#features
      speed: -0,
    }"></div>
</div>
</template>

<script>
export default {
    name: 'ShapesComponent',
    data() {
        return {
            rellax: {
                speed: -1
            }
        }
    }
}
</script>