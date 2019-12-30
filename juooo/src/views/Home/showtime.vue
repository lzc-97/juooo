<template>
    <div class="one">
        
                
            <ul  v-for="sin in sinlist" :key="sin.cat_id">
                <div class="title">
                    <h3>{{ sin.title }}
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==">
                    </h3>
                
                </div>
                <div class="first_img">
                <li v-for="item in sin.list.slice(0,1)"  @click="tiao(item.sche_id)" :key="item.cate_parent_id">
                        <img :src="item.pic" >
                        <span class="yi">
                            <p>
                        <strong>{{item.display_show_time.substring(0,10)}}</strong>
                            &nbsp; <span>{{item.week}} {{item.display_show_time.substring(10,16)}}</span>
                            </p>
                        <h3>{{item.schedular_name}}</h3>
                        <p>{{item.city_name}} | {{item.venue_name}}</p>
                        </span>
                </li>
                </div>
          
                <swiper
                    :options="{
                    loop:false,
                    pagination:{},
                    spaceBetween: 5,
                    slidesPerView: 3,

                    freeMode: true,

                  }"
                    class="aab"
                    swipername="aab"
                  >
                <li  v-for="(items,index) in sin.list.slice(1)" :key="index" @click="tiaos(items.sche_id)" class="swiper-slide lb">
                    <img :src="items.pic" >
                    <h3>{{items.schedular_name}}</h3>
                    <strong>￥{{items.low_price}}</strong>&nbsp;<span>起</span>
                    
                </li> 
                </swiper>
              
            </ul>
        
       
    </div>
</template>
<script>
import swiper from '@/components/Swiper'
import Axios from 'axios'
import '@/style/style.css'
export default {
  data () {
    return {
      sinlist: []
    //  sinslist:[]
    }
  },
  components: {
    swiper
  },
    methods: {
      tiao(id){
        console.log("1111111");
        
        this.$router.push(`/ticket/${id}`)
      },
      tiaos(idi){
        this.$router.push(`/ticket/${idi}`)
      }
    },
  mounted () {
    Axios({
      url: 'https://api.juooo.com/home/index/getFloorShow?city_id=0&version=6.0.9&referer=2'
    }).then(res => {
        this.sinlist = res.data.data
        console.log(this.sinlist)
        
    })
  }
}

</script>
<style lang="scss" scoped>
    // .one{
    //     box-sizing: border-box;
    // }
    .title{
        width: 100%;
        height: 0.4rem;
        display: flex;
        margin-top:0.1rem;
      h3{
          width: 100%;
          height: 0.4rem;
          font-size: 0.2rem;
          padding-left: 0.16rem;
      } 
        img{
            
            height: 0.2rem;
            float: right;
        }
    }
    .first_img{
        position: relative;
        display: flex;
        width:4.14rem;
        height: 1.83rem;
        img{
          position: relative;
            display: block;
            width:1.10rem;
            height:1.50rem;
            top:0.17rem;
            left:0.17rem;
            // padding-top:0.2rem;
            // padding-left: 0.13rem;
            border: 1px solid #ebebeb;
            overflow: hidden;
        }
    }
   
</style>