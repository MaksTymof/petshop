<template lang="pug">
.product-tabs
    .product-tabs--headings
        .product-tabs--heading.m-b-1
            .product-tab--heading.m-l-2(
              v-for="tab in tabs"
              :key="tab._id"
              @click="activeTab=tab._id"
              :class="{ isActive: activeTab == tab._id}"
            ) {{ tab.title }}
        .product-tab--text(
            v-for="tab in tabs"
            :key="tab._id"
            v-html="toHTML(tab.text)"
            v-if="activeTab == tab._id"
        )
        DescriptionInfo(v-if="activeTab == '1234'")
        ScaleBraces(v-if="activeTab == '456'")
        AdditionalInfo(v-if="activeTab == '789'")
</template>
<script>
import DescriptionInfo from '@/components/DescriptionInfo.vue'
import ScaleBraces from '@/components/ScaleBraces.vue'
import AdditionalInfo from '@/components/AdditionalInfo.vue'
var markdown = require( "markdown" ).markdown;
export default {
  components:{
    DescriptionInfo,
    ScaleBraces,
    AdditionalInfo
  },
methods: {
  toHTML(data) {
    return markdown.toHTML(data)
  }
},
 data() {
   return {
     activeTab:'1234',
      tabs:[
        {
          _id:"1234",
          title: "Опис товару",
          text:`Нашийник для собак “Морський” виготовлений з посиленої нейлонової стропи з декорованою стрічкою.
          Колір не вигорає та не затирається. Рекомендується ручне прання при 30 градусах.
          Матеріал приємний до тіла собаки, не викликає подразнення та не затирає шерсть.


Металева фурнітура покрита титановим сплавом. Фарба не облазить та
стійка до механічних та хімічних зовнішніх ушкоджень.


Можливість підбору фурнітури залежить від обраного розміру. Фото фурнітури в фотогалереї товару.
Підходить для собак будь-яких порід та розмірів згідно
[розмірної сітки](#)`
        },
        {
          _id:"456",
          title: "Розмірна сітка",
          text:``
        },
        {
          _id:"789",
          title: "Додаткова інформація",
          text:``
        }
      ]
    }
  }
}
</script>
<style lang="sass">
.product-tabs--heading
  display: flex
  box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset
.product-tab--heading
  padding: 10px
.product-tab--text
    p
      color: #CCCCCC
      font-weight: 500
      font-size: 15px
.isActive
  color: #605DD4
  border-bottom: 2px solid #605DD4
</style>
