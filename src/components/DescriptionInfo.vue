<template lang="pug">
  .info-container
    .info-block(v-for="item in infoBlocks")
      .info-image
        img(:src="item.image")
      .info-block--descr
        .info-header {{ item.header }}
        .info-text(v-html="toHTML(item.text)")
</template>

<script>
var markdown = require( "markdown" ).markdown;
export default {
  methods: {
  toHTML(data) {
    return markdown.toHTML(data)
  }
},
  data() {
    return {
      infoBlocks: [
        {
          _id: 1,
          image:'/img/icons/5971988181594941410-32.png',
          header: 'Рекомендації по догляду',
          text:'Рекомендоване ручне прання при 30 C.'
        },
        {
          _id: 2,
          image:'/img/icons/16925921701535701996-128.png',
          header: 'Надміцні матеріали',
          text: `Використовуємо посилену нейлонову стропу, спаяну та литу металеву фурнітуру.
          Фурнітура витримує ривки собак будь якої сили.`
        },
        {
          _id: 3,
          image:'/img/icons/sewing-machine.png',
          header: 'Hand made',
          text: 'В кожен наш виріб вкладена часточка любові до наших хвостатих друзів.'
        },
        {
          _id: 4,
          image:'/img/icons/dimension.png',
          header: 'Регульовані розміри',
          text: `Ви з легкістю зможете відрегулювати розмір нашийника
          чи шлеї з врахуванням анатомічних особливостей.
          Амуніція підійде на виріст для цуценят.`
        },
        {
          _id: 5,
          image:'/img/icons/belt.png',
          header: 'Зручна застібка',
          text: 'Нашийник чи шлея з легкістю застібається в один клік.'
        },
        {
          _id: 6,
          image:'/img/icons/equalizer.png',
          header: 'Кастомний дизайн',
          text: `Вам достатньо обрати дизайн та тип фурнітури і ми виготовимо ідеальну амуніцію
          для вашої собачки.`
        },
        {
          _id: 7,
          image:'/img/icons/saveplanet.png',
          header: 'Не використовуємо натуральну шкіру та поліетилен',
          text: `Ми дбаємо про тварин та навколишнє середовище, віримо, що наш невеликий вклад зробить
          цей світ кращим.`
        },
        {
          _id: 8,
          image:'/img/icons/color-palette.png',
          header: 'Стильний дизайн',
          text: `В нашому асортименті велике різноманіття дизайнів на будь-який смак.`
        }
      ]
    }
  }
}
</script>
<style lang="sass">
  .info-block
    display: flex
    align-items: center
    border-bottom: 2px solid #E4E4E4
    padding: 15px
  .info-image
    width: 45px
    height: 45px
    padding-top: 10px
    img
      width: 100%
      height: 100%
.info-block--descr
  margin-left: 10px
.info-header
  padding: 15px
  font-size: 15px
  font-weight: 500
  color: #000
.info-block--descr
  p
    color: #CCCCCC
    font-size: 15px
    font-weight: 400
</style>
