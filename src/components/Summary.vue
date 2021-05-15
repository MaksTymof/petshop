<template lang="html">
  <div class="summary-container">
    <div class="summary-inner">
      <p class="total">Загальна сума <span> {{ cartTotal }} </span> грн.</p>
    </div>
 </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Cart',
  computed: mapGetters(['cartTotal']),
  methods: {
	checkout() {
		console.log('Welcome to payment!');
	 }
  }
}
</script>

<style lang="sass">
.summary-inner button
    margin: 0 auto
.total
  text-align: center
  font-size: 24px
.total span
  font-weight: bold
</style>
