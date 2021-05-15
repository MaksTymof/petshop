<template lang="pug">
    .crumbs
      ul
        li.m-l-1(v-for="crumb in crumbs")
            a(href="#") {{ crumb }} >

        li.m-l-1 {{ current }}
</template>

<script>
export default {
  data() {
    return {
      current: 'Нашийник "Морський"',
      crumbs:[
        'Каталог',
        'Нашийники'
      ]
    }
  }
}
</script>
<style lang="sass">
  .crumbs
    padding-top: 5px
    font-size: 10px
    font-weight: 500
    li
      display: inline-block
    a
      font-size: 15px
.crumbs

</style>
