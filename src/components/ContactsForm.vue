<template lang="pug">
    .contactsform-container
      form
        label
          | Ваше імя
          input(type="text" placeholder="Ваше імя")
        label
          | Ваше імя
          input(type="text" placeholder="Ваше імя")
        label
          | Ваш E-mail (не обовязково)
          input.m-b-2(type="text" placeholder="Ваше імя")
        p Привід для звернення
        label.occasion
            input.special-helper(type="radio")
            span
            | Хочу зробити замовлення
        label.occasion
            input.special-helper(type="radio")
            span
            | Потрібна допомога
        label.occasion
            input.special-helper(type="radio")
            span
            | Хочу запропонувати співпрацю
        label.occasion
            input.special-helper(type="radio")
            span
            | Інше
        button(@click="sendForm()") Відправити

</template>

<script>
export default {
}
</script>

<style lang="sass">
.contactsform-container
  label
    font-size: 22px
    color: #000
    input
      display: block
      height: 50px
      width: 100%
      border: solid 1px #ccc
      &::placeholder
        color: #ccc
        padding: 15px
  p
    font-size: 26px
    margin-bottom: -15px
  .occasion
    display: block
    width: 100%
    position: relative
    cursor: pointer
    padding: 5px
    font-size: 15px
    color: #000
    span
      display: inline-block
      height: 20px
      width: 20px
      background: transparent
      border: solid 1px #605DD4
      border-radius: 50%
      margin-right: 5px
    .special-helper
      position: absolute
      opacity: 0
    .special-helper:checked + span:before
        content:""
        width: 10px
        height: 10px
        position: absolute
        left: 10px
        bottom: 17px
        border-radius: 50%
        background-color: #605DD4
  button
    padding: 15px
    background-color: #605DD4
    color: #fff
    border: none
    width: 45%


</style>
