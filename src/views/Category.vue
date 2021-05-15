<template lang="pug">
.category_page
     .title_with_bg.m-b-2(:style="{ 'background-image': 'url(' + bgImage + ')'}")
       .page_title {{ title }}
     .row
        .col.col-1-3.m-b-1(v-for="product in products")
          .product.m-l-1
            .product--image
                img(v-for="image in images" :src="image")
            .product--title {{ product.title }}

            .product--price {{ product.price }} грн
            
            a(href="/cart")
              button.button-cart.m-b-1(@click='addToCart(product)') Додати до корзини

     div(v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }")
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import PageTitleWithBg from '@/components/PageTitleWithBg'
import axios from "axios"
export default {
  computed: mapState(['cart']),
  components: {
    PageTitleWithBg,
  },
  data() {
    return {
      bgImage: "/img/bgImage-2.png",
      title: "Повідки",
        products:[],
        images:[],
        page: 1,
        limit: 4,
        lastPage: 0,
        buzy: false,
        noRecords: false,
        intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
      }
    }
  },
      methods: {
          onWaypoint ({ going, direction }) {
            setTimeout(() => this.loadProducts (), 2700)
        // going: in, out
       // direction: top, right, bottom, left
           // if (going === this.$waypointMap.GOING_IN) {
           //   console.log('waypoint going in!')
           // }
           //
           // if (direction === this.$waypointMap.DIRECTION_TOP) {
           //   console.log('waypoint going top!')
           // }
        },
    loadProducts() {
      const path = this.makeProductsUrl()
          if (this.noRecords || this.buzy) {
           return false
         }
      axios.get(path)
        .then(res => {
           this.buzy == false
              if(!res.data.length){
                this.noRecords == true
                return false
              }
              this.products = this.products.concat(res.data)
              res.data.forEach(item => {
              this.images = item.images
              this.page++
              })
            })
            .catch(err => console.log(err))
    },
    makeProductsUrl() {

      const queryPage = ["page", this.page].join("=")
      const queryLimit = ["limit", this.limit].join("=")
      const query = [queryPage, queryLimit].join('&')
      return ['http://localhost:3000/api/products', query].join('?')
    },
    addToCart(product) {
      this.$store.commit('addToCart', product);
    },
  }
}

</script>

<style lang="sass">
  .category-page
    height: 100vh
    padding: 0px 15px
  .title_with_bg
    height: 50vh
    background-repeat: no-repeat
    background-position: center
    background-size: cover
    display: flex
    flex-direction: column
    flex: 1 1 auto
    height: 50vh
    text-align: center
    justify-content: center
    .page_title
      font-family: 'Roboto Mono', monospace
      font-size: 55px
      color: #fff
  .product
    font-family: Roboto, sans-serif
    font-weight: 700
    font-size: 15px
    text-align: center
    button
      width: 80%
      height: 50px
      border: none
      background-color: #605DD4
      color: #fff
      font-size: 15px
      cursor: pointer
  img
    width: 100%
    margin-bottom: 25px
  .product--title, .product--price
    margin-bottom: 4px
    text-align: center
    text-decoration-style: none
  .row
    margin: 0 auto

</style>
