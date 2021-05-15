<template lang="pug">
    .product--wrapper
       router-link(:to="{ name: 'Product', params: { slug: product._id }}")
        .product
          .product--image
              img(:src="product.image")
          .product--title {{ product.title }}
          .product--price {{ product.price }}
</template>

<script>
export default {
  props:['product']
}
</script>

<style lang="sass" scoped>
.product--wrapper
  a
    text-decoration: none
    color: inherit
  .product
    font-family: Roboto, sans-serif
    font-weight: 700
    font-size: 15px

  img
    height: 100%
    width: 100%
    margin-bottom: 25px
  .product--title, .product--price
    margin-bottom: 4px
    text-align: center
    text-decoration-style: none
</style>
