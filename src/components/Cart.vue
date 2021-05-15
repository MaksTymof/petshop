<template lang="pug">
  .container
      table.m-b-7
            tbody
            tr(v-for='(product, id) in $store.state.cart' :key='id')
              td
                 img.cartimage(:src="product.image")
              td {{ product.title }}
                  p.scoped-parag {{ product.price }} грн
              td {{ product.quantity }}
              td
                i.fa.fa-trash(aria-hidden='true')(@click='removeFromCart(product)')
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Cart',
  computed: mapState(['cart']),
  mounted() {
    console.log(this.cart)
  },
  methods: {
    removeFromCart(product) {
      let index = this.cart.findIndex(p => p.title === product.title);
      if(index !== -1) {
            this.cart[index].quantity--;
        if(this.cart[index].quantity === 0) this.cart.splice(index, 1);
      }
    },
  },
}
</script>

<style lang="css">
.container {
    padding-left: 45px;
}

table {
  width: 450px;
  text-align: right;
}
.content table{
    width: 0;
}

td {
  padding: 5px;
  margin-bottom: 10px;
  text-align: right;
}

.cartimage{
  height: 100px;
  width: 100px;
}
.scoped-parag{
  font-size: 18px;
}
.content table th{
  border: none;
}
i {
    cursor: pointer;
}




</style>
