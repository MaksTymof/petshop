<template lang="pug">
.header-container
    .logo
        a(href="/")
            img(src="../assets/logo.png")
    .info
      .catalog
          a(href="/category/leash") Каталог
      .about.m-l-1 Про нас
      .coop.m-l-1 Співпраця
      .cont.m-l-1 Контакти
    .cart
      a(href="/cart")
        i.fas.fa-shopping-cart
</template>
<script>
export default {

}
</script>
<style lang="sass" >
  .header-container
    display: flex
    justify-content: space-around
  .info
    display: flex
    justify-content: space-around
  .header-container a
    text-decoration: none
    color: #fff
  .logo a img
    width: 57px
    height: 28px
</style>
