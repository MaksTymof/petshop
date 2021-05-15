<template lang="pug">
.set-page
  PageTitleWithBg(:bgImage="bgImage", :title="title")
  .content--inner
    .wrapper
      .setpage-subtitle Товар з цього комплекту
        .row
          .col.col-1-3.m-b-2(v-for="product in products")
            Product(:product="product")
        .row
            .col.col-1-2.m-b-1
              Contacts
            .col.col-1-2.m-b-1
              ContactsForm
</template>

<script>
import Placeholder from '@/components/Placeholder.vue'
import PageTitleWithBg from '@/components/PageTitleWithBg.vue'
import Product from '@/components/Product.vue'
import Contacts from '@/components/Contacts.vue'
import ContactsForm from '@/components/ContactsForm.vue'

export default {
  components: {
    Placeholder,
    PageTitleWithBg,
    Product,
    Contacts,
    ContactsForm
  },
  data () {
    return {
        bgImage: "img/title-bg1.png",
        title: "Назва комплекту",
        products:[
          {
            _id: 1,
            image: 'img/NbraceImg-1.png',
            title: "Шлея Н-Подібна",
            price: "Від 320 грн"
          },
          {
            _id: 2,
            image: 'img/NbraceImg-2.png',
            title: "Шлея Н-Подібна",
            price: "Від 320 грн"
          },
          {
            _id: 3,
            image: 'img/NbraceImg-3.png',
            title: "Шлея Н-Подібна",
            price: "Від 320 грн"
          },
        ]
    }
  }
}
</script>

<style lang="sass">

.product
  font-family: Roboto, sans-serif
  font-weight: 700
  font-size: 15px
img
  width: 100%
  margin-bottom: 25px
.product--title, .product--price
  margin-bottom: 4px
  text-align: center

</style>
