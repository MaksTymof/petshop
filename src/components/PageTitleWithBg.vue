<template lang="pug">
  .title_with_bg(:style="{ 'background-image': 'url(' + bgImage + ')' }")

          .page_title {{ title }}
</template>

<script>
export default {
  props:[
    'bgImage',
    'title'
    ]
}
</script>

<style lang="sass" scoped>
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

</style>
