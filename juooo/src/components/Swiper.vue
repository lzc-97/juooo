<template>
<div :id="swipername">
  <div class="swiper-container">
              <div class="swiper-wrapper">
                <slot></slot>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>

  </div>
</div>

</template>
<script>
import Swiper from 'swiper' // swiper js文件
import 'swiper/css/swiper.min.css' // swiper css
export default {
  mounted () {
    var swiperel = {
      loop: true,
      // direction:"vertical",
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false
      // },
      pagination: {
        el: '.swiper-pagination'

      }

    }

    new Swiper('#' + this.swipername + ' ' + '.swiper-container', { ...swiperel, ...this.options })
  },
  props: ['options', 'swipername']
}

</script>

<style lang="scss" scoped>
.swiper-pagination-bullet-active {
  width: 0.1rem ; 
  background: #fff ;
}

</style>