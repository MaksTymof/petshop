<template lang="pug">
  .additional-info-container
    .additional-info-titles
      .additional-info-width Ширина
      .additional-info-length Довжина
      .additional-info-load Максимальне навантаження
      .additional-info-accessories Застібка/Фурнітура
    .additional-info-measures(v-for="measure in measures")
      .info-measures-width {{ measure.width }}
      .info-measures-length {{ measure.length }}
      .info-measures-load {{ measure.load }}
      .info-measures-accessories {{ measure.accessories }}
</template>

<script>
export default {
data() {
  return {
    measures: [
      {
        width: "2cm / 2.5cm",
        length: "1.2 м / 2 м / 3 м",
        load: "10 кг",
        accessories: "Пласмасова / Golden Rose",

      }
    ]
  }
}
}
</script>

<style lang="sass">
.additional-info-container
  display: flex
  justify-content: space-between
  line-height: 25px
  width: 95%
  height: 500px
.additional-info-titles
  color: #ccc
  font-size: 15px
  font-weight: 400
.additional-info-measures
  text-align: right

</style>
