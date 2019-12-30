<template>
    <div v-if="poplist">
        <div class="div">
      <span>
        <h3>
          热门场馆
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg=="
            class="img"
          />
        </h3>
      </span>
    </div>
         <swiper
      :options="{
      loop:false,
      pagination:{},
      spaceBetween: 8,
      slidesPerView: 1.3,

      freeMode: true,

    }"
      class="pop"
      swipername="pop"
    >
     
        <div  class="swiper-slide pop outs" v-for="ite in poplist" :key="ite.id">
            <div class="ht">
                <dl>
              <td><img :src="ite.pic"></td>
              <dd>
              <h3>{{ite.name}}</h3>
              <p>{{ite.count}}场在售演出</p>
              <span>...</span>
              </dd>
                </dl>
            </div>

            <div>
                <ul class="last">
                <li v-for="ites in ite.showList" :key="ites.id" class="f">
                    <img :src="ites.pic">
                <div class="divs">
                <p>
                <span>{{ites.show_time}}</span>
                <span></span>
                </p>
                </div>
                   </li>
                </ul>
            </div>

        </div>
     </swiper> 
    </div>
    
</template>
<script>
import swiper from '@/components/Swiper'
import Axios from 'axios'
import '@/style/popular.css'
export default{
    data(){
        return {
            poplist:null
        }
    },
    components:{
        swiper
    },
    mounted(){
        Axios({
            url:`https://api.juooo.com/home/index/getHotTheatre?version=6.0.9&referer=2`
        }).then(res=>{
            this.poplist = res.data.data.theatre_list
        })
    }
}
</script>

<style lang="scss" scoped>

.div {
//   height: 0.23rem;
  width: 3.6rem;
  margin:0.30rem 0 0.15rem 0.16rem;
  img {
    width: 0.2rem;
    height: 0.2rem;
    float: right;
  }
}
</style>