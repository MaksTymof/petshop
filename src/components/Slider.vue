<template lang="pug">
    .slider-container
      .product-slider
        .product-slider--image
          img.thumbsnail(
            v-for="image in images"
            :src="image.picture"
            :key="image._id"
            @click="activeImage=image._id"
            :class="{ isShown: activeImage == image._id}"
          )
      .product-image--test
        img.m-l-1(
        v-for="image in images"
        :src="image.picture"
        :key="image._id"
        v-if="activeImage == image._id"
      )
</template>
<script>
export default {
  data() {
    return {
      activeImage:'1',
      images:[
        {
          _id: 1,
          picture: "/img/NbraceImg-1.png",
          text:"Hello"
        },
        {
          _id: 2,
          picture: "/img/NbraceImg-2.png",
          text:"Hey"
        },
        {
          _id: 3,
          picture: "/img/NbraceImg-3.png",
          text:"Hi"
        }
      ]
    }
  }
}
</script>

<style lang="sass">
.slider-container
  position: relative
  margin-left: -10px
.product-slider--image
  text-align: center
  z-index: 5
  position: absolute
  bottom: 15px
  left: 0
  right: 0
.thumbsnail
  width: 80px
  height: 60px
.product-image--test
  height: 610px
  img
    width: 100%
    height: 100%
</style>
