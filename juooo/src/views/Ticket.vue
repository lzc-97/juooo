<template>
  <div class="out">
    <link rel="stylesheet" href="/iconfont/iconfont.css" />
    <div class="header"  v-if="datalist">
      <img :src="datalist.pic" class="img" />
      <div class="mask">
        <span class="head">
          <i class="left" @click="handelClick()">
            <span class="icon iconfont to">&#xe6f0;</span>
          </i>
          演出详情
          <i class="share">
            <span class="icon iconfont">&#xe691;</span>
          </i>
          <i class="home">
            <span class="icon iconfont">&#xe62b;</span>
          </i>
        </span>
        <div class="content">
          <span class="image" v-if="datalist">
            <img :src="datalist.pic" class="img1"/>
          </span>
          <div class="right">
            <p class="name">{{datalist.show_name}}</p>
            <div class="risk"></div>
            <p class="price">
              <span class="priced">￥{{datalist.price_range}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="second">
      <div class="second1">
        <div class="date">
          <span class="date1">{{`${date.$y}.${date.$M+1}.${date.$D}`}} - {{`${item.$M+1}.${item.$D}`}}</span>
          <!-- <span v-for="(item,index) in date" :key="index">{{item.date1}}------{{date.date2}}</span> -->
          <span></span>
        </div>
        <div class="location"  v-if="datalist">{{datalist.city.city_name}} | {{datalist.venue.venue_name}}</div>
        <div class="address"  v-if="datalist">{{datalist.venue.venue_address}}</div>
        <span id="ditu" @click="ditu()"></span>
      </div>
    </div>
    <div class="plus">
      <div class="pluscard">
        <span class="card">橙PLUS卡</span>
        <span class="save">开通送￥100 最高省118元</span>
        <p class="now">立即开卡</p>
      </div>
    </div>
    <div class="detail" >
      <div class="quan">
        <span class="gettick">领券</span>
        <span class="dot">:</span>
        <div class="coupon">
        <span class="coupon1" v-for="(items,index) in itemlist" :key="index" >
        满{{items.goal_money}}减{{items.rebate_money}}
       </span>
      </div>
      </div>
      <p class="line"></p>
      <div class="quan" v-if="dataslist.length !== 0">
        <span class="gettick">优惠</span>
        <span class="dot">:</span>
        <div class="coupon2">
            <div class="up" v-for="(datas,index) in dataslist" :key="index">
              <p class="zhekou">{{datas.tag}}</p>
              <p class="zao">{{datas.desc}}</p>
            </div>
        </div>
      </div>
      <p class="line"></p>
      <div class="quan">
        <span class="gettick">VIP+</span>
        <span class="dot">:</span>
        <div class="vhui">
          <p class="xiang">V+会员享</p>
          <p class="mianyou">国内免邮 + 双倍积分</p>
        </div>
      </div>
      <p class="line"></p>
      <div class="quan">
        <span class="gettick">入场</span>
        <span class="dot">:</span>
        <p class="enter" v-if="datalist">{{datalist.tips.desc}}</p>
      </div>
      <p class="line"></p>
      <div class="quan">
        <span class="gettick">支持</span>
        <span class="dot">:</span>
        <span class="enter" v-if="datalist"><p class="dian">{{datalist.support.list[0].substring(0,6)}}</p>{{datalist.support.list[0].substring(35,40)}}<p class="dian">{{datalist.support.list[0].substring(47)}}</p></span>
      </div>
    </div>
    <div class="introduce1">
      <h2 class="introduce">演出介绍</h2>
      <div id="newAdults" class="Adults" v-html="datalist.show_desc.desc" style="width:3.45rem" v-if="datalist"></div>
      <!-- <img :src="datalist.show_desc.desc" > -->
    </div>
  </div>
</template>
<script>

import Axios from 'axios'
import dayjs from 'dayjs'
export default {
  data () {
    return {
      datalist: null,
      date: [],
      item: [],
      itemlist: [],
      dataslist: []
    }
  },
  mounted () {
    Axios({
      url: `https://api.juooo.com/Schedule/Schedule/getScheduleInfo?schedular_id=${this.$route.params.myid}&version=6.0.9&referer=2`
    }).then(res => {
      this.datalist = res.data.data.static_data
      // console.log(this.datalist, 11111111111111)
      var starttime = res.data.data.static_data.show_time_data.show_time_start
      this.date = dayjs.unix(starttime)
      var endtime = res.data.data.static_data.show_time_data.show_time_end
      this.item = dayjs.unix(endtime)
    })
    // console.log(this.$route.params.showid, 222222222222)
    Axios({
      url: `https://api.juooo.com/Coupon/coupon/getShowCouponList?show_id=${this.$route.params.showid}&city_id=1&venue_id=1079&method=1&cate_parent_id=38&cate_child_id=55&version=6.0.9&referer=2`
    }).then(res => {
      // console.log(res.data)
      this.itemlist = res.data.data.list
      // console.log(this.itemlist)
    })
    Axios.post('https://api.juooo.com/Promotion/Promotion/getPromotionList?version=6.0.9&referer=2', `show_id=${this.$route.params.showid}&city_id=1&venue_id=1078`).then(res => {
      this.dataslist = res.data.data.act_map
    })
    this.$store.commit("hide");
  },
  beforeDestroy() {
    this.$store.commit("show");
  },

  methods: {
    handelClick () {
      this.$router.go(-1)
    },
    ditu () {
        // var map = new BMap.Map("allmap");
        // var point = new BMap.Point(116.331398,39.897445);
        // map.centerAndZoom(point,12);

        // var geolocation = new BMap.Geolocation();
        // geolocation.getCurrentPosition(function(r){
	    // if(this.getStatus() == BMAP_STATUS_SUCCESS){
		//     var mk = new BMap.Marker(r.point);
		//     map.addOverlay(mk);
		//     map.panTo(r.point);
		// alert('您的位置：'+r.point.lng+','+r.point.lat);
	    // }
	    // else {
		//     alert('failed'+this.getStatus());
	    // }        
        // });
        this.$router.push('/ditu')
        
    }
  }
}
</script>
<style lang="scss" scoped>
// @import url(https://m.juooo.com/static/css/app.ee6880b9975f83257f4a.css);
.Adults p img{
    width: 3.45rem !important ;
}
#ditu {
    width: 0.3rem;
    height: 0.3rem;
    display: block;
    border-radius: 50%;
    background: #f5f5f5;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABOFBMVEUAAAD/YUT/fD3/fD3/YUX/bUH/fD3/jDj/fTz/YkT/bUD/dz7/jTj/YEX/ZkP/cj//ez3/aEL/fjz/izj/cz//jjf/fzv/bEH/cUD/hzn/gTv/jjj/hzr/gTv/cED/YUT/dz7/gjv/gTv/izj/YEX/cED/jTj/ej3/aUL/fjz/hjn/fjz/dj//cj//akL/b0D/ej3/iDn/ZET/gTv/jTj/eT7/Z0P/gjv/bkH/dD//Y0T/hzr/eT7/ckD/aEP/izj/eD7/bUH/fD3/hjr/dj//Z0P/YUX/dD//YEX/jTj/jjj/YkT/hTr/YEX/jTj/hTr/YkT/a0H/bkH/ZEP/iDn/fjz/iTn/gTv/cED/jDj/Z0P/cj//dz7/gzv/dT7/eT3/akL/aEP/ZkP/aUL/fD3/gDz/dD//ez1zbBWgAAAAT3RSTlMAAxEMpZcH+/r49OvrypeIbVMwKyIiCvv78+fS0cnAtK2spKOgnJiOiX5gUkdCLykc+PX09PPt6+jl3d3T0MzMw7KysaidkZGPjYd0dGlWcCOHIgAAAcNJREFUOMud0tV2AjEQBuAALdpibam3SCkudXdXWFy2uLz/G3QJySRB9oL/cs53dvY/EzRTtGHf1noutb7lDWtV2JLPUCjkcqlU6q/YNXoTU5jrw1AGV+zm88aAa5Jb2SyLrtOvXy9PWLtQxpB3ddkSH/secTlwHcXJNcvIN/WbY64/cLXejV6An+AUqLg8ddWSTVhsGC9Sx65aWuOX7zN3FnLqdM6QhbpSZp453TEU9mjJidwycRmzDuAvFPEgyDNxkuRgm6nbcHFrLohrWGF2R3/QjrjYFafARvsWRgu0cJKHSeykdvMURtQdISFmvLhZacGEXnhDhOcD1660sjA5IJfr6oWzYtesZE0wuqIHifIwOnSt7CWMnuiFH3n4QFx2F0bfcOEIcw5JGrr0F3u08BJOYnQWM0uNoUsnEGQbXoxs0+JTB1cHhbFbRCwR9qR7azt+/84qKay4tIODmm32pPGFaWHFLWoQF6dRcBniFGiKIyF2eNLYSdSlf9BIAsSRxdS9o7Hcy+CgMDQW4gYHhXfRxLyNFt5DU2ITC1vR1Myzwvh7KpIVntMgVdlog1OPtVkBp56XFjj1aIKHpldws+QfBznqO/3Ch6wAAAAASUVORK5CYII=);

background-repeat: no-repeat;
    background-size: 0.18rem ;
    background-position: center;
    position: absolute;
    top: 60px;
    left: 280px;
    z-index: 9999999;
}
.out{
  background-color:#ccc;
}
.header {
  width: 100%;
  height: 2.175rem;
  position: relative;
}
.img {
  color: #fff;
  // background: rgba(1,17,27,0.5);
  width: 3.55rem;
  height: 1.975rem;
  filter: blur(0.17rem);
  padding: 0.1rem;
  border-radius: 0.1rem;
  // transform:scaleX(1.5)
  
}
.mask {
  top: 0;
  left: 0;
  right: 0;
  height: 2.175rem;
  background-color: rgba(0, 0, 0, 0.39);
  overflow: hidden;
  z-index: 10;
  position: absolute;
  // opacity: 0;
}
.head {
  width: 100%;
  height: 0.445rem;
  text-align: center;
  font-size: 0.17rem;
  color: #fefefe;
  line-height: 0.442rem;
  display: block;
  font-weight: bold;
}
.left {
  display: inline-block;
  height: 0.445rem;
  width: 0.39rem;
  left: 0;
  text-align: center;
  line-height: 0.445rem;
  color: white;
  position: absolute;
}
.icon {
  font-size: 0.22rem;
  font-weight: 100;
}
.to {
  font-size: 0.28rem;
}
.share {
  right: 0.55rem;
  position: absolute;
  height: 0.445rem;
  line-height: 0.445rem;
}
.home {
  right: 0.2rem;
  position: absolute;
  height: 0.445rem;
  line-height: 0.445rem;
}
.content{
  display: flex;
  padding: 0 0.12rem;
  // background: yellow;
  height: 1.5798rem
}
.image{
  width: 1.1rem;
  height: 1.5rem;
}
.img1{
  width: 1.05rem;
  height: 1.43rem;
  margin-top: 0.1rem
}
.right{
  margin-top: 0.17rem;
  margin-left: 0.145rem;
  display: flex;
  flex-direction: column;
  box-orient: vertical;
  box-direction: normal;
  display: flex;
}
.name{
  font-size: 0.169rem;
  min-height: 0.2rem;
  // width: 1.3592rem;
  color: #fefefe;
  font-weight: bold;
  line-height: 0.19rem;
  word-break: break-all
}
.risk{
  width: 0.46rem;
  height: 0.1698rem;
  line-height: 0.1698rem;
  background: url(/img/refund_insurance_tag.7d07719.png) no-repeat ;
  background-size: 100%;
  align-items: center;
  box-align: center;
  display: flex;
  margin-left: 0.08rem;
  margin-top: 0.1rem
}
.price{
  display: flex;
  // margin-top: 0.3rem;
  box-flex: 1;
  box-align: end;
  align-items: flex-end;
  padding-bottom: 0.05rem;
  flex-grow: 1
}
.priced{
  font-size: 0.19rem;
  height: 0.19rem;
  line-height: 0.19rem;
  color: #fefefe;
  font-weight: bold;
}
.second{
  padding: 0 0.15rem 0.215rem 0.15rem;
  display: flex;
  box-align: end;
  align-items: flex-end;
  background-color: white
}
.second1{
  display: flex;
  box-orient: vertical;
  box-direction: normal;
  flex-direction: column;
  box-flex: 1;
  flex-grow: 1;
  position: relative;
}
.date{
  margin-top: 0.225rem;
  color: #232323;
  display: flex;
  cursor: pointer;
  box-align: start;
  align-items: flex-start;
}
.date1{
  font-weight: bold;
  height:0.1698rem;
  line-height: 0.1698rem;
  margin-right: 0.045rem;
  display: flex;
  box-align: center;
  font-size: 0.18rem;
}
.location{
  font-size: 0.15rem;
  font-weight: bold;
  color: #232323;
  margin:0.15rem 0.25rem 0 0
}
.address{
  font-size: 0.12rem;
  margin:0.045rem 0.25rem 0 0;
  color: #666;
}
.plus{
  padding: 0 0.15rem 0.165rem 0.15rem;
  background-color: white
}
.pluscard{
  overflow: hidden;
  width: 100%;
  height: 0.4398rem;
  background-image: linear-gradient(-4deg,#1e1e1e,#464542);
  border-radius: 0.05rem;
  display: flex;
  box-align: center;
  align-items: center;
}
.card{
  font-size: 0.1rem;
  top: 50%;
  margin-left: 0.13rem;
  transform-origin: 0 0;
  background-image: linear-gradient(0deg, #f5dea9, #f8d583);
  border-radius: 0.02rem;
  width: 0.56rem;
  height: 0.1749rem;
  text-align: center;
  line-height: 0.1749rem
}
.save{
  font-size: 0.14rem;
  color: #f5dea9;
  margin-left: 0.097rem;
  white-space: nowrap;
  line-height: 0.16rem;
  box-flex: 1;
  flex: 1
}
.now{
  font-size: 0.12rem;
  line-height: 0.16rem;
  font-weight: 500;
  color: #f5dea9;
  margin-right: 0.2rem
}
.detail{
  margin-top: 0.2rem;
  background-color:white
}
.quan{
  padding: 0.115rem 0.15rem 0.115rem 0.15rem;
  display: flex;
}
.gettick{
  width: 0.45rem;
  height: 0.24rem;
  line-height: 0.24rem;
  font-size: 0.14rem;
  color: #999;
  display: inline-block;
  text-align: justify;
  text-align-last: justify;
  flex-shrink: 0;
}
.dot{
  font-size: 0.14rem;
  color: #999;
  height: 0.24rem;
  line-height: 0.24rem;
}
.coupon{
  display: flex;
  box-align: center;
  align-items: center;
  line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.coupon1{
  margin-left: 0.15rem;
  display: inline-block;
  width: 0.9rem;
  background-position: center;
  background-size: 0.9rem 100%;
  background-image: url(/img/download.png);
  font-size: 0.12rem;
  line-height: 0.12rem;
  color: #fefefe;
  text-align: center;
  background-repeat: no-repeat;
  white-space: nowrap;
  overflow: hidden;
  padding: 0.07rem 0 0.05rem 0;
}
.line{
  margin:0 0.15rem ;
  border-bottom: 0.01rem solid #ebebeb;
}
.up{
  display: flex;
  box-align: center;
  align-items: center;
  margin-left: 0.15rem;
  margin-top: 0.03rem
}
.zhekou{
  display: inline-block;
  font-size: 0.05rem;
  height: 0.155rem;
  line-height: 0.155rem;
  color: #ff6743;
  padding: 0 0.05rem 0 0.05rem;
  box-sizing: border-box;
  border: 0.01rem solid #ff6743;
  border-radius: 0.03rem
}
.zao{
  width: 2.1951rem;
  margin-left: 0.19rem;
  font-size: 0.13rem;
  line-height: 0.125rem;
  color: #232323;
  text-overflow: ellipsis;
}
.vhui{
  display: flex;
  height: 100%;
  box-align: center;
  align-items: center;
  font-size: 0.12rem;
  color: #222;
  padding: 0.01rem 0 0 0.15rem;
  line-height: 0.25rem;
}
.enter{
  font-size: 0.13rem;
  display: flex;
   box-align: center;
  align-items: center;
  padding: 0.01rem 0 0 0.15rem;
}
.mianyou{
  color: #ff6743;
  margin-left:0.1rem;
}
.dian{
  color: #999;
  font-size: 0.12rem
}
.introduce{
  font-size: 0.19rem;
  color: #232323;
  margin-top: 0.165rem;
  font-weight: bold
}
.introduce1{
  height: 6.3348rem;
  background-color: #fefefe;
  padding: 0 0.15rem;
  // overflow: hidden;
  box-sizing: border-box;
  margin-top: 0.2rem;
  img{
    width: 100%;
  }
}
.Adults{
  margin-top: 0.12rem;
}
.p1{
  font-size: 0.15rem;
  line-height: 0.25rem;
  // height:0.25rem
}
.img2{
  border: none;
  vertical-align: middle;
  width: 100%;
  height: 100%;
}

</style>