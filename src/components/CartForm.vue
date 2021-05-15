<template lang="pug">
.cartform-container
    h2.m-b-2 Адреса доставки
    form.form(method="POST" @submit="sendForm")
          .row
            .col
                input.m-b-1(type="text" placeholder="Прізвище" required)
                input.m-b-1.m-l-1(type="text" placeholder="Імя" required)
            .col
                input.m-b-1(type="text" placeholder="Місто" required)
                input.m-b-1.m-l-1(type="text" placeholder="№ Відділення Нової Пошти" required)
            .col
                input.m-b-1(type="tel" placeholder="Номер телефону" required)
                input.m-b-1.m-l-1(type="email" placeholder="Email" required)

            .col
              textarea(placeholder="Коментар до замовлення")
              h3 Спосіб оплати
              label.m-b-1
                  input.special-helper(type="radio")
                  .making-input
                  .text.m-l-2|Банківська карта
                  img.smallvariant(:src="image")
              label.m-b-10
                  input.special-helper(type="radio")
                  .making-input
                  .text.m-l-2|Готівкою при отриманні
    button(@submit="sendForm()" action="mailto:maksym198858@gmail.com" method="POST") Оформити замовлення
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      image:"../img/5fef330883f67d78816908c3_visa-mastercard.png",
    }
  },
  methods: {
    sendForm() {
      alert("Payment Send")
    }
  }
}
</script>

<style lang="css">
.cartform-container{
    background-color: #fff;
}
input{
    width: 49%;
    height: 50px;
    padding: 10px;
    border: solid 1px #ccc;
}
input::placeholder, textarea::placeholder {
  color: #ccc;
  font-size: 16px;
}
textarea{
    width: 99%;
    height: 100px;
    padding: 10px;
    border: solid 1px #ccc;
}
h2{

  padding-top: 15px;
 padding-left: 20px;
 text-align: left;
}
h3{
    padding: 15px;
}
p{
 font-size: 28px;
 text-align: left;
 font-weight: bold;
 color: #000;
}
label {
  display: flex;
  border: 1px solid #ccc;
  margin-bottom: 2px;
  position: relative;
  cursor: pointer;
  padding: 10px 15px 15px 10px;
  width: 99%;
}
label:hover {
  border-color: #605DD4;
  color: #605DD4;
  cursor: pointer;
}
.making-input {
  height: 20px;
  width: 20px;
  margin-top: 9px;
  background: transparent;
  border-radius: 50%;
  border: 1px solid #605DD4;
  color: #000;
}
.special-helper {
  position: absolute;
  opacity: 0;
  }
.special-helper:checked + .making-input:before{
  content: "";
  width: 12px;
  height: 12px;
  position: absolute;
  left: 14px;
  bottom: 28px;
  background: #605DD4;
  border-radius: 50%;
}
.text {
    line-height: 39px;
}
.smallvariant{
    width: 85px;
    height: 35px;
    margin-left: auto;
}
button {
    width: 100%;
    height: 50px;
    border: none;
    background-color: #605DD4;
    color: #fff;
    font-size: 15px;
}
</style>
