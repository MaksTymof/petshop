<template lang="pug">
.product-container
  .row
      .col.col-1-3(v-for="product in products" :key="product._id")
        .product
          .product--image
              img.m-b-1(:src="product.images")
          .product--title {{ product.title }}
          .product--price
                span {{ product.price }} грн
        button.button-cart.m-b-1.m-l-4(@click='addToCart(product)') Додати до корзини

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Products',
  computed: mapState(['products']),
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product);
    },
  },
  mounted() {
      this.$store.dispatch('loadProducts')
    }
}
</script>

<style lang="css">
  .product{
    text-align: center;
  }
  img{
    width: 250px;
    height: 250px;
    margin-left: 10px;
  }
  .row{
    display: flex;
    flex-wrap: wrap;
    padding: 0px 15px;
  }
  .product--price span {
    font-weight: bold
  }
.button-cart{
  background-color: #605DD4;
  color: #fff;
  font-size: 15px;
  width: 80%
}
</style>
