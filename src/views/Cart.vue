<template lang="pug">
    .wrapper
      h1 Корзина
      .row
          .col.col-2-3
            CartForm.m-b-2
          .col.col-1-3
            Cart
            Summary
      Products
</template>

<script>

import Cart from "@/components/Cart.vue"
import Products from "@/components/Products.vue"
import Summary from "@/components/Summary.vue"
import CartForm from "@/components/CartForm.vue"
export default {
  components: {
    CartForm,
    Cart,
    Products,
    Summary
  }

}
</script>

<style lang="sass">
h1
  padding: 15px 30px
  text-align: left
</style>
