<template>
    <div>
    <header class="header">
        <div class="search-input">
            <span class="search-icon"></span>
            <form action="">
                <input type="search" placeholder="搜索热门演出" class="text">
            </form>
            <span class="cancel-icon"></span>
        </div>
        <span class="cancel" @click="handelClick()">取消</span>
    </header>
    <ul class="main">
        <li class="one" v-for="data in datalist" :key="data.id" @click="handelClicks(data.schedular_id,data.show_id)">
          <img :src="data.pic" class="img">
          <div class="p">
            <img :src="data.method_icon" class="img1">
            {{data.name}}
          </div>
          <p class="show">2020.{{data.show_time_top}}</p>
          <p class="money">
            ￥{{data.min_price}}
            <span class="qi">起</span>
          </p>
          <p class="tip">
            <span class="tips"  v-for="(item,index) in data.support_desc" :key="index">
             {{item}}
            </span>
          </p>
        </li>
    </ul>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      itemlist: []
    }
  },
  methods: {
    handelClick () {
      this.$router.push('/show')
    },
    handelClicks (myid,showid) {
      this.$router.push(`/ticket/${myid}/${showid}`)
    }
  },
  mounted () {
    Axios({
      url: `https://api.juooo.com/Show/Search/getShowList?keywords=&venue_id=${localStorage.getItem('vid')}&page=1&sort_type=1&version=6.0.9&referer=2`
    }).then(res => {
    //   console.log(res.data)
      this.datalist = res.data.data.list
      // this.itemlist = res.data.data.list[0].support_desc
    })
    this.$store.commit("hide");
  },
  beforeDestroy() {
    this.$store.commit("show");
  }

}

</script>
<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0
    }
    .header{
        height:0.44rem;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        padding: 0 0.15rem;
        position: fixed;
        background-color: #fefefe;
        z-index: 10;
        align-items: center;
        box-orient: vertical;
        justify-content: space-between;
    }
    .search-input{
        width: 3.02rem;
        height: 0.3rem;
        background-color: #f5f5f5;
        border-radius: 0.2rem;
        box-sizing: border-box;
        border: 0.01rem solid #ebebeb;
        display: flex;
        box-align: center;
        align-items: center;
        padding: 0 0.085rem 0 0.14rem
    }
    .cancel{
        width: 0.28rem;
        font-size: 0.14rem;
        color: #666;
        right: 0
    }
    .text{
        width: 2.35rem;
        height: 0.1998rem;
        line-height: 0.1998rem;
        color: #232323;
        border:none;
        background-color: #f5f5f5;
        outline: none;
        letter-spacing: 0px;

    }
    .search-icon{
        background-image: url(/img/search_icon.c387af4.png);
        background-repeat: no-repeat;
        background-position: center center;
        width: 0.1998rem;
        height: 0.1998rem;
        background-size: 0.1998rem
    }
    .cancel-icon{
        background-image: url(/img/cancel.4cc4580.png);
        background-repeat: no-repeat;
        background-position: center center;
        background-size:cover;
        width: 0.1998rem;
        height: 0.1998rem;
    }
    .main{
      width: 100%;
      box-sizing: border-box;
      padding: 0 0.15rem;
      padding-top: 0.6rem;
      display:flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .one{
      width: 1.695rem;
      border-radius: 0.07rem;
      overflow: hidden;
      background-color: #fefefe;
      border: 0.01rem solid #ebebeb;
      margin-top: 0.08rem;
    }
    .img{
      width: 100%;
      border: none;
    }
    .p{
      color: #232323;
      font-size: 0.14rem;
      line-height: 0.18rem;
      width:1.473rem;
      overflow: hidden;
      text-overflow:ellipsis;
      display:-webkit-box;
      -webkit-line-clamp:2;
      -webkit-box-orient:vertical;
      margin-left: 0.11rem
    }
    .img1{
      width: 0.3348rem;
      height: 0.1698rem
    }
    .show{
      width: 1.473rem;
      line-height: 0.19rem;
      font-size: 0.09rem;
      color: #666;
      margin-top: 0.05rem;
      margin-left: 0.11rem
    }
    .money{
      width: 1.473rem;
      height: 0.2rem;
      color: #FF6743;
      font-size: 0.16rem;
      margin-top: 0.05rem;
      margin-left: 0.11rem
    }
    .qi{
      color: #999;
      font-size: 0.12rem;
    }
    .tip{
      overflow: hidden;
      margin-top: 0.05rem;
      margin-left:0.11rem;
      width: 1.473rem
    }
    .tips{
      background-color: #fff1ef;
      color: #FF6743;
      font-size: 0.12rem;
      // padding:0.001rem 0.06rem;
      margin-right: 0.06rem;
      border-radius: 0.1rem;
      display: inline-block
    }
</style>