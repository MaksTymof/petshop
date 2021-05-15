<template lang="pug">
    .main-wrapper
      .row
          .col.col-1-2
           a(href="/category/leash")
             img(src='img/gavgav.png')
          .col.col-1-4
              img.h(src='img/scotsetter.png')
          .col.col-1-4
              .row
                  img(src='img/bigl.png')
              .row
                  img.my-mb-2(src='img/dalmat.png')
      h2 Комплекти
          .inner-wrapper-complects
            .row
              .col.col-1-2(v-for="complect, idx in complects" :key="complect.idx")
                  a(href="/setpage")
                    .complect-card.m-l-2.m-b-2(:style="{ 'background-image': 'url(' + complect.bgImage + ')'}")
                      .card-title.m-b-1 {{ complect.title }}
                      .card-price {{ complect.price }}
      .blog-wrapper
        .row
            .col.col-1-2
              .instablog
                 i.fa.fa-instagram(aria-hidden='true')
                 span.m-l-2 Instagram
            .col.col-1-2
                p Наш інстаграм - це кумедні історії з життя, їх лісові пригоди
                  | і розповіді про майстерню, де вони трудяться над
                  | створенням аксесуарів Hunting Pony. Давайте дружити, у нас весело!
      .photo-blog
        .row
            .col.col-1-4
                img(src='img/blog/f1.png')
            .col.col-1-4
                img(src='img/blog/f2.png')
            .col.col-1-4
                img(src='img/blog/f3.png')
            .col.col-1-4
                img(src='img/blog/f4.png')
        .row
            .col.col-1-4
                img(src='img/blog/f5.png')
            .col.col-1-4
                img(src='img/blog/f6.png')
            .col.col-1-4
                img(src='img/blog/f7.png')
            .col.col-1-4
                img(src='img/blog/f8.png')
        button Підписатись
      .contacts
        .row.m-b-1
            .col.col-1-2.m-b-1
              Contacts
            .col.col-1-2.m-b-1
              ContactsForm
</template>

<script>
import PageTitleWithBg from '@/components/PageTitleWithBg.vue'
import ContactsForm from '@/components/ContactsForm.vue'
import Contacts from '@/components/Contacts.vue'
export default {
  components: {
    ContactsForm,
    Contacts
  },
  data(){
    return {
      complects:[
        {
        title: "Назва комплекту",
        bgImage: "../img/compBlack.png",
        price: "275 грн"
       },
        {
        title: "Назва комплекту",
        bgImage: "../img/compBlue.png",
        price: "275 грн"
       },
        {
        title: "Назва комплекту",
        bgImage: "../img/compDarkBlue.png",
        price: "275 грн"
       },
        {
        title: "Назва комплекту",
        bgImage: "../img/compPink.png",
        price: "275 грн"
       }
     ]
    }
  }
}
</script>

<style lang="sass">
.main-wrapper, .photo-blog
  padding: 15px
.col
  padding: 0px
.row
  margin: 0px
a
  display: block
  width: 100%
  height: 100%
  text-decoration: none
.main-wrapper
  img
    width: 100%
    height: 100%
.my-mb-2
  margin-top: 10px
.inner-wrapper-complects
  padding-top: 25px

.complect-card
  height: 380px
  background-position: center
  background-size: cover
  background-repeat: no-repeat
  color: #fff
  padding: 40px
  position: relative
  z-index: 2
  &::before
    content: ""
    position: absolute
    left: 0
    bottom: 0
    width: 100%
    height: inherit
    background-color: #000
    opacity: 0.2
.card-price, .card-title
  width: 80px
  background-color: #000
  border-radius: 75px/70px
  text-align: center
  color: #fff
  font-size: 18px
.card-title
  width: 170px
.instablog, p
  padding: 15px
  color: #000
i
  font-size: 36px
  line-height: 15px
span
  font-size: 28px
.photo-blog
  text-align: center
button
  margin-top: 25px
  width: 25%
  height: 50px
  border: none
  background-color: #605DD4
  color: #fff
  font-size: 15px
  cursor: pointer
.contacts
  padding-top: 25px
</style>
