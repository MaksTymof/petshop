<template lang="pug">
  .product_description
    Slider.wslidr
    ProductTabs
</template>
<script>
import ProductTabs from '@/components/ProductTabs.vue'
import Slider from '@/components/Slider.vue'
export default {
  components:{
    ProductTabs,
    Slider
  }
}
</script>
<style lang="sass">
  .wslidr
    width: 95%

</style>
