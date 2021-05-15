<template lang="pug">
    .page
        Header.header Header
        .content
            .content--inner
              transition(name="router-anim"
                        enter-active-class="animate__animated animate__backInLeft"
                        leave-active-class="animate__animated animate__backOutRight")
                <router-view/>
        Footer.footer Footer
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default{
  components: {
      Header,
      Footer
    }
}
</script>
<style lang="sass">
$vstep: 10
$gap: 32
$breakpoints: ('exsmall':568px,'small':767px, 'medium':992px, 'large':1200px) !default
$columnVariants: ((1,2),(2,3),(1,3),(1,4),(1,5))
@mixin respond-to($breakpoint)
  @if map-has-key($breakpoints, $breakpoint)
    @media (min-width: map-get($breakpoints, $breakpoint))
      @content

@each $breakpoint in $breakpoints
      .col-#{nth($breakpoint, 1)}-
        @each $columnVariant in $columnVariants
          &#{nth($columnVariant, 1)}-#{nth($columnVariant, 2)}
            max-width: nth($columnVariant, 1)/nth($columnVariant, 2) * 100%
*
  margin: 0
  padding: 0
  box-sizing: border-box
body, html
  overflow: hidden
  height: 100vh
body
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    font-family: Roboto, sans-serif
.page
    display: flex
    flex-direction: column
    height: 100vh
.header
    background-color: black
    color: #fff
    width: 100%
    padding: 5px 15px
.content
    width: 100%
    overflow-y: scroll
    scroll-behavior: smooth
    flex: 1 1 auto
    position: relative
    z-index: 1
.content--inner
    background: #F2F2F2
    margin-bottom: 123px
.wrapper
  padding-left: 26px
  padding-right: 26px
.footer
  position: fixed
  left: 0
  right: 0
  bottom: 0
  background: #000
  color: #fff
  padding: 15px
  height: 123px !important
.row
  display: flex
  flex-wrap: wrap
  margin-left: -16px
  margin-right: -16px
.col
  width: 100%
  padding-left: 16px
  padding-right: 16px
.col-1-2
  max-width: 100 / 2 * 1%
.col-1-3
  max-width: 100 / 3 * 1%
.col-2-3
  max-width: 100 / 3 * 2%
.col-1-4
  max-width: 100 / 4 * 1%
.col-1-5
  max-width: 100 / 5 * 1%
@for $i from 1 through  10
 .m-b-#{$i}
  margin-bottom: $i * $vstep * 1px
 .m-l-#{$i}
   margin-left: $i * $vstep * 1px
 .setpage-subtitle
   font-family: Roboto, sans-serif
   font-weight: 400
   font-size: 35px
</style>
