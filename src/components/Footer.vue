<template lang="pug">
    .footer-container
      .row
        .col.col-1-5
          .logo
              a(href="/")
                  img(src="../assets/logo.png")
        .col.col-1-5
          .connect
            a(href='tel:+38 (066) 736 49 24') +38 (066) 736 49 24 (Аня)
            a(href='mailto:mrsnoopythedog00@gmail.com') mrsnoopythedog00@gmail.com
            span м.Івано-Франківськ вулю Чорновола 20Б
        .col.col-1-5
          .schedule.m-l-2
            span Графік роботи
            span Пн-Пт: 8.00 - 20.00
            span Сб-Нд: вихідний
        .col.col-1-5
          .info-footer
            .catalog
              a(href="/category/leash") Каталог
              .about Про нас
              .coop Співпраця
        .col.col-1-5
          .addinfo
            span Доставка і оплата
            span Обмін та повернення
            span  Контакти
</template>
<script>
export default {
}
</script>
<style lang="sass">
.footer-container
  color: #Fff
  font-size: 15px
  line-height: 35px
  span
    display: block
    font-size: 15px
    line-height: 35px
  a
    text-decoration: none
    line-height: 35px
    color: #Fff
  .logo
    padding-top: 35px
</style>
