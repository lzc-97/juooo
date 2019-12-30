<template>
  <div>

    <div class="head">
   <div class="head-all">
      <div class="head-a">
        <div class="head-a-div">
          <img src="../assets/3.png">
        </div>
        <span class="head-a-span">橙子</span>
        <span class="head-a-span-a">ID:1212212</span>
      </div>
      <div class="head-b">
        <p>普通会员</p>
      </div>
      <div class="head-c">
        <div class="head-c-1">
           <p class="a">0</p>
          <p>账户余额</p>
          <div></div>
        </div>
        <div class="head-c-1">
          <p class="a">0</p>
          <p>积分</p>
           <div></div>
        </div>
        <div class="head-c-1">
           <p class="a">0</p>
          <p>优惠券</p>
          <div></div>
        </div>
        <a>
           <p class="a">立即开通</p>
          <p>橙PLUS卡</p>
        </a>
      </div>
   </div>
       <a class="vip">
         <img src="../assets/2.png">
       </a>
      <div class="middle">
      <ul class="middle-ul">
        <li class="middle-li" v-for="(item,index) in datalist" :key="index">
          <div class="middle-div">
            <i></i>
            <p>{{item.title}}</p>
          </div>
        </li>
      </ul>
       <ul class="middle-ul">
       <li class="middle-li" v-for="(item,index) in datelist" :key="index">
          <div class="middle-div">
            <i></i>
            <p>{{item.title}}</p>
          </div>
        </li>
      </ul>
    </div>
    <button class="foot" @click="handleScroll()">退出登录</button>
    </div>
    </div>
          
</template>
<style scoped>
.head {
  height: 5.58667rem;
  width: 100%;
  background: url("../assets/4.png") no-repeat top center;
  background-size: 100%;
  position: relative;
  overflow: hidden;
}
.head-all{
  background: #ffffff;
 height: 1.69rem;
 width: 3.4rem;
 margin-top: 0.63rem;
 margin-left: 0.16rem;
 margin-right: 0.16rem;
  border-radius: 0.10667rem;
  position: relative;
}
.head-a{
  padding: 0 0.2rem;
  position: relative;
}
.head-a-div{
  display: inline-block;
  width: 0.64rem;
  height: 0.64rem;
  border-radius: 50%;
   /* border: 0.02667rem solid #ffffff; */
  margin-top: -0.15rem;
  margin-right: 0.26667rem; 
  background: #f5f5f5;
  overflow: hidden;
}
.head-a-div img{
  border: none;
  border-color: transparent;
  vertical-align: middle;
  width: 100%;
  height: 100%;
}
.head-a-span{
  position: absolute;
  top: 0.13rem;
  color: #232323;
  font-size: 0.15rem;
  font-weight: bold;
}
.head-a-span-a{
  position: absolute;
  color: #999999;
  font-size: 0.12rem;
  bottom: 0;
}
.head-b{
  margin-top: -0.09333rem;
  overflow: hidden;
}
.head-b p{
  float: right;
  font-size: 0.13rem;
  color: #b3b3b3;
  font-weight: bold;
  padding: 0.09333rem 0.2rem 0.09333rem 0.38667rem;
  background: #f5f5f5;
  border-radius: 1rem 0px 0px 1rem;
}
.head-c{
  display: flex;
  align-items: center;
}
.head-c .head-c-1{
  flex: 1px;
  text-align: center;
  position: relative;
  padding: 0.16rem 0 0.21rem;
  color: #666666;
  font-size: 0.15rem;
  font-weight: 500;
}
.head-c .head-c-1 div{
  position: absolute;
  width: 1px;
  height: 0.5rem;
  background: #ebebeb;
  top: 0.1rem;
  right: 0.05rem;
}
.head-c .head-c-1 .a{
color: #232323;
}
.head-c a{
  flex: 1px;
  text-align: center;
  position: relative;
  padding: 0.16rem 0 0.21rem;
  color: #666666;
  font-size: 0.15rem;
  font-weight: 500;
}
.head-c a .a{
color: #232323;
}
.vip{
  display: block;
  padding: 0 0.06667rem;
  text-decoration: none;
  outline: none;
}
.vip img{
  display: block;
  max-width: 100%;
  margin: 0 auto;
  border:none;
  border-color: transparent;
  width: 100%;
  height: 100%;
}
.middle{
    padding: 0 0.2rem;
}
.middle-ul{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 0.2rem;
    background-color: #ffffff;
    box-shadow: 0px 0.05333rem 0.4rem 0.02667rem rgba(35, 35, 35, 0.08);
    border-radius: 0.10667rem;
    list-style: none;
}
.middle-li{
    width: 25%;
    text-align: center;
    padding: 0.1rem 0 0.1rem;
    font-size: 0.15rem;
    color: #666666;
}
.foot{
   height: 0.5rem;
    width: 2.81rem;
    margin-left: 0.4rem;
    border-radius: 0.66667rem;
    opacity: 0.4;
    color: white;
    background-image: linear-gradient(50deg, rgb(255, 154, 52), rgb(255, 77, 74));
}
</style>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      datalist: [],
     datelist:[]
    };
  },
  mounted() {
    Axios({
      url:
        "https://api.juooo.com/user/account/getMenuItem?version=6.0.9&referer=1"
    }).then(res=>{
        
        this.datalist = res.data.data.slice(0, 3)
        // console.log(this.datalist)
 this.datelist = res.data.data.slice(4,8)
 console.log(this.datelist)
    })
  },
  methods: {
    handleScroll () {
      this.$router.push("/login")
      alert("退出成功")
      }
      }
};
</script>
