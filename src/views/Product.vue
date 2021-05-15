<template lang="pug">
    .product-page
      .wrapper
        Breadcrumbs.m-b-1
        .row
            .col.col-medium-2-3.m-b-1
              .setpage-subtitle Нашийник “Морський”
            .col.col-medium-1-3.m-b-1
                .product-price від 275 грн
                    img(src="/img/icons/heart.png").m-l-1
        .row
            .col.col-2-3.m-b-1
                ProductDescription
            .col.col-1-3.m-b-1.box-shadow
                ProductFilter
        .subtitle--additional.m-b-1 З цим товаром йдуть
        .row
          .col.col-1-3.m-b-1(v-for="product in products")
            Product(:product="product")
</template>
<script>
import Placeholder from '@/components/Placeholder.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import Product from '@/components/Product.vue'
import ProductFilter from '@/components/ProductFilter.vue'
import ProductDescription from '@/components/ProductDescription.vue'

export default {
  components: {
    Placeholder,
    Breadcrumbs,
    Product,
    ProductFilter,
    ProductDescription
  },
  data () {
      return {
        products:[
        {
          _id: 1,
          title:"Шлея Н-Подібна",
          price:"Від 320 грн",
          image: "/img/NbraceImg-1.png"
        },
        {
          _id: 2,
          title:"Шлея Н-Подібна",
          price:"Від 320 грн",
          image:"/img/NbraceImg-2.png"
        }
      ]
    }
  }
}
</script>
<style lang="sass">
.product-page
  padding-right: 15px
.product-price
  text-align: right
  line-height: 50px
  font-weight: 500
  font-size: 25px
  img
    height: 24px
    width: 24px
    margin-bottom: -5px
.product
  font-weight: 700
  font-size: 15px
.product--title, .product--price
  margin-bottom: 4px
  text-align: center
.subtitle--additional
    font-weight: 400
    font-size: 25px
.box-shadow
  box-shadow: 0px 8px 10px 2px rgba(13, 14, 15, 0.2)
</style>
