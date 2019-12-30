<template>
    <div v-if="showlist.length" class="big">
         <div class="div">

        <h3>
          巡回演出

        </h3>

       <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg=="
            class="img"
          />
    </div>

        <swiper
      :options="{
       watchSlidesProgress: true,
	slidesPerView: 'auto',
	centeredSlides: true,
	loop: true,
	loopedSlides: 5,
	autoplay: false,
  pagination:{},

on: {
		progress: function(progress) {
			for (i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i);
				var slideProgress = this.slides[i].progress;
				modify = 1;
				if (Math.abs(slideProgress) > 1) {
					modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
				}
				translate = slideProgress * modify * 260 + 'px';
				scale = 1 - Math.abs(slideProgress) / 5;
				zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
				slide.transform('translateX(' + translate + ') scale(' + scale + ')');
				slide.css('zIndex', zIndex);
				slide.css('opacity', 1);
				if (Math.abs(slideProgress) > 3) {
					slide.css('opacity', 0);
				}
			}
		},
  setTransition: function(transition) {
			for (var i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i)
				slide.transition(transition);
			}

		}
	}

    }"
      class="certify"
      swipername="certify" style=" box-sizing:border-box">
      <div class="swiper-slide show" v-for="data in showlist" :key="data.id">
        <img :src="data.pic" />
        <h3>{{data.show_name}}</h3>
        <p>{{data.schedular_num}}场巡演</p>

      </div>

    </swiper>
    </div>
</template>
<script>
// :class="'swiper-container'+' '+swipername"
import Axios from 'axios'
import swiper from '@/components/Swiper'
export default {
  data () {
    return {
      showlist: []
    }
  },
  components: {
    swiper
  },
  mounted () {
    Axios({
      url: `https://api.juooo.com/home/index/getTourRecommendList?city_id=0&version=6.0.9&referer=2`
    }).then(res => {
      // console.log(res.data);
      this.showlist = res.data.data.tour_show_list
    })
  }
}
</script>

<style lang="scss" scoped>
     .big{
       background: whitesmoke;
       box-sizing: border-box;

     }
    .div{
       width: 3.6rem;
       height: 0.25rem;
       margin:0.30rem 0 0.15rem 0.16rem;

       h3{
         float: left;

       }

  // margin:0.30rem 0 0.15rem 0.16rem;
  img {
    width: 0.2rem;
    height: 0.2rem;
    float: right;
  }
    }
    .show{

      p{
      height: 0.13rem;
      position: absolute;
      top:2rem;
      left:1.5rem;

    }
       img{
        width: 2.45rem;
        height: 1.40rem;
        margin:0 auto;
    }

    p,h3{
        text-align: center;
        background: whitesmoke;

    }
    h3{
      // width: 2.70rem;
        display: -webkit-box;
       -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      font-size: 0.14rem;
      margin: 0 auto;
      overflow: hidden;
    // white-space: nowrap;
    // text-overflow: ellipsis;
    }

    }
  #certify {
    position:relative;
    margin:0 auto
}

#certify .swiper-slide {

    height:2.20rem;

}
#certify .swiper-slide img {
    display:block;

}

</style>
