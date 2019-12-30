<template>
<div>
  <div class="header">
    <h3 class="j">剧院</h3>
  </div>
    <div class="main">
      <ul class="out">
        <li v-for="data in datalist" :key="data.id" class="in">
          <div class="box">
            <div class="box1">
               <img :src="data.pic" class="img1">
               <div class="a" @click="handelClick(data.vid)">
                 {{data.name}}
                 <p class="b">{{data.count}}场在售演出</p>
               </div>
            </div>
            <swiper :options="{
                loop:false,
                pagination:{},
                slidesPerView: 3,
                spaceBetween: 30,
                freeMode: true,
            }" class="pict" swipername="pict">
                <div class="swiper-slide"  v-for="item in data.showList" :key="item.id">
                    <div class="box2">
                      <p class="date">{{item.show_time}}</p>
                      <span class="dot"></span>
                    </div>
                    <img :src="item.pic"  class="img2">
                </div>
            </swiper>
          </div>
        </li>
      </ul>
    </div>
</div>
</template>

<script>
import Axios from 'axios'
// import Vue from 'vue'
import swiper from '@/components/Swiper'

// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);a
export default {
  data () {
    return {
      datalist: [],
      showtime: []
    }
  },
  methods: {
    handelClick (id) {
    //   console.log(this.$router)
      this.$router.push(`/search/${id}`)
      localStorage.setItem('vid', id)
    }
  },
  components: {
    swiper
  },
  mounted () {
    Axios({
      url: 'https://api.juooo.com/theatre/index/getTheatreList?page=1&version=6.0.9&referer=2'
    }).then(res => {
    //   console.log(res.data)
      this.datalist = res.data.data.theatre_list
      // localStorage.setItem('vid',res.data.data.theatre_list.)
    })
  }
}
</script>

<style lang="scss" scoped>
  *{
    margin: 0;
    padding: 0
  }
  ul,li{
    list-style: none;
  }
  .header{
    box-sizing: border-box;
    width: 100%;
    position: fixed;
    top: 0;
    height:.43rem;
    line-height: .43rem;
    text-align: center;
    background: #fefefe;
    border-bottom: 0.01rem solid #ebebeb;
    z-index: 1000
  }
  .j{
    font-weight: normal;
    color: #232323;
    padding: 0 0.03rem;
    font-size: 0.2rem
  }
  .main{
    margin-top:0.43rem;
    width:100%
  }
  .out{
    padding: 0.15rem;
    box-sizing: border-box;
  }
  .in{
    box-sizing: border-box;
    border:0.01rem solid #ccc;
    margin-bottom: 0.2rem;
    border-radius: 0.08rem;
    box-shadow: 0px 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,0.08)
  }
  .swiper-slide{
    margin-top: 0.2rem;
    width: 1.1rem !important;
    margin-right: 0 !important;

  }
  .box{
    box-sizing: border-box;
    padding: 0.17rem 0.17rem 0.17rem;
    border-radius: 0.02rem;
    margin-bottom: 0.2rem
  }
  .box1{
    display: flex;
  }
  .a{
    font-size: 0.17rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width:2rem;
    margin-left: 0.1rem;
    margin-top:0.04rem;
    font-weight: bold
  }
  .b{
    color: #666;
    font-size: 0.02rem;
    margin-top: 0.05rem;
    font-weight: 100
  }
  .img1{
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.03rem;
  }
  .img2{
    display: block;
    width: 1rem;
    // overflow: hidden;
  }
  .box2{
    position: relative;
    width: 1.1rem;
    border-bottom: 0.01rem solid red;
    border-radius: 0.01rem;
    margin-bottom: 0.2rem;
    padding-bottom: 0.1rem
  }
  .date{
    font-size: 0.13rem;
    text-align: center;
    color: #b3b3b3
  }
  .dot{
    position: absolute;
    left: 45%;
    display: inline-block;
    width: 0.06rem;
    height:0.06rem;
    background-color:blue;
    bottom: -0.028rem;
    border-radius: 50%
  }
</style>