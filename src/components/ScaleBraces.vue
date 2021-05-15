<template lang="pug">
.row
  .col.col-medium-2-3
    .container(v-for="scalebrace in scalebraces")
        .scalebrace-product-titles.m-l-2
          .scalebrace-header.bold {{ scalebrace.header }}
          .scalebrace-product-length-title Довжина (охват шиї)
          .scalebrace-product-width-title Ширина
          .scalebrace-product-breeds-title Рекомендовано для порід
        .scalebrace-product-measures.m-l-4
          .scalebrace-product-measure
          .measures-length {{ scalebrace.length }}
          .measures-width {{ scalebrace.width }}
          .measures-breeds {{ scalebrace.breeds }}
  .col.col-medium-1-3
    .scatch-size
      img.img-spec(src="/img/Sobaka.png")
      .necksize
          span.m-l-3 Шия
      .neckline
</template>
<script>
import Placeholder from '@/components/Placeholder.vue'
export default {
  components:{
    Placeholder
  },
  data() {
    return {
      scalebraces:[
          {
            _id: 1,
            header: 'XS',
            length: '15-25 см',
            width: '1.5 см',
            breeds: 'Йорк міні, чіхуахуа, мальтезе міні, той терєр.'
          },
          {
            _id: 2,
            header: 'S',
            length: '20-30 см',
            width: '2 см',
            breeds: `Йокшерський терєр, басерджі, італійський грейхаунд,
            бішон фрізе басенджі, лавретка, папільйон,
            померанський шпіц, джек рассел, такса.`
          },
          {
            _id: 3,
            header: 'M',
            length: '30-45 см',
            width: '2,5 см',
            breeds: `Бігль, мопс, французький бульдог, шиба-іну,
            кокер, спаніель, пудель, бультерєр,
            джек рассел, коргі, вест хайленд.`
          },
          {
            _id: 4,
            header: 'L',
            length: '45-60 см',
            width: '2.5 см',
            breeds: `Басет хаунд, акіта-іну, стаффорширський терєр,
            хаскі, лайка, маламут, лабрадор,
            доберман, пітбультерєр..`
          },

      ]
    }
  }
}
</script>

<style lang="sass">
.scalebrace-product-measure
  height: 25px
.container
  display: flex
  border-bottom: 2px solid #ccc
  padding-bottom: 10px
  padding-top: 15px
  font-family: 'Roboto', sans-serif
  line-height: 25px
.scalebrace-product-titles
  color: #ccc
.scalebrace-product-measures
  color: #000
  font-size: 15px
  font-weight: 400
  width: 275px
.scatch-size
  width: 100%
  height: 267px
.img-spec
    height: auto
    max-width: 100%
.bold
  font-size: 15px
  font-weight: 900
  color:#000
.scatch-size
  position: relative
.necksize
      width: 28px
      height: 29px
      background-image: url('/img/necksign.png')
      background-repeat: no-repeat
      background-size: cover
      position: absolute
      top: 10px
      left: 90px
      span
        color: #ccc
        padding-top: 5px

.neckline
  width: 75px
  height: 45px
  background-image: url('/img/neckline.png')
  background-repeat: no-repeat
  background-size: cover
  position: absolute
  top: 55px
  left: 45px
</style>
