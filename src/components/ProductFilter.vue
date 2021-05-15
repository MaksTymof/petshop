<template lang="pug">
.wrapper
  .product-filter(v-for="filter in filters")
    .product-filter--header
      .product-filter--title {{ filter.title }}
      .product-filter--mesh {{ filter.mesh }}
    .product-filter--list
        label.m-b-1(v-for="width in filter.widths")
            p {{ width }}
            input(type="radio")
            span
        label.m-b-1(v-for="length in filter.lengths")
            p {{ length }}
            input(type="radio")
            span
        label.m-b-1(v-for="type in filter.types")
            p {{ type }}
            input(type="radio")
            span
</template>

<script>
export default {
  data () {
    return {
      filters:[
        {
          _id: 1,
          title: "Ширина",
          mesh: "Розмірна сітка",
          widths:[
            '4 cm', '8 cm', '10 cm'
          ]
        },
        {
          _id: 2,
          title: "Довжина",
          mesh: "Розмірна сітка",
          lengths: [
            '15-25 cm','20-30 cm', '30-45cm', '30-45cm'
          ]
        },
        {
          _id: 3,
          title: " Фурнітура",
          mesh: " ",
          types: [
            'Classic','Total Black', 'Metallic', 'Rose Gold'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="sass">
  .product-filter--header, label
    display: flex
    justify-content: space-between
    align-items: center
    padding: 16px
  .product-filter--title
    font-weight: 500
    font-size: 15px
    color: #000
  .product-filter--mesh
    font-weight: 500
    font-size: 12px
    color: #605DD4
  label
    border: 1px solid #D0CFFF
    position: relative
    span
      height: 20px
      width: 20px
      background: transparent
      border-radius: 50%
      border: 1px solid #605DD4
    input
      position: absolute
      opacity: 0
      &:checked + span:before
        content: ""
        width: 10px
        height: 10px
        position: absolute
        background: #605DD4
        bottom: 35px
        right: 21px
        border-radius: 50%
  label:hover
      border-color: #605DD4
      color: #605DD4
      cursor: pointer
  input, span
      display: inline-block
</style>
