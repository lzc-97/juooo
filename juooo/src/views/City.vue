<template>
<div>

    <div class="city">
        <span><img src="@/assets/JT.png" @click="imgClick()"></span>
        <h3>城市选择</h3>
    </div>    



 <mt-index-list>
    <mt-index-section index="热门"></mt-index-section>
        <ul id="hot">
            <li>全国</li>
            <li :index="date.id" v-for="date in datelist" :key="date.id" @click="handClick(date.id)">
                {{date.name}}
            </li>
        </ul>
  <mt-index-section :index="data.id" v-for="data in datalist" :key="data.id" >
    <mt-cell :title="item.name" v-for="item in data.list" :key="item.id" @click.native="handleClick(item.id,item.name)"></mt-cell>
  </mt-index-section>
      
</mt-index-list>
    </div>
</template>

<script>
import Axios from 'axios'
    export default{
        data(){
            return {
                datalist:[],
                datelist:[]
            }
        },
        
        
        
        mounted(){
            Axios({
                url:`https://api.juooo.com/city/city/getSortedCityList?version=6.0.9&referer=2`
            }).then(res=>{
            console.log(res)
                this.datalist = res.data.data
                // console.log(this.datalist,red1111111111)       
            }),
            Axios({
                url:`https://api.juooo.com/city/city/getHotCityList?version=6.0.9&referer=2`
            }).then(res=>{
                
                // console.log(this.datelist);
                this.datelist = res.data.data.hot_city_List
            })
            this.$store.commit("hide");
        },
        beforeDestroy() {
    this.$store.commit("show");
  },
        methods:{
            imgClick(){
                this.$router.back()
            },
            handleClick(id,name){
                console.log(id);
                
                localStorage.setItem("city_id",id)
                localStorage.setItem("city_name",encodeURIComponent(name))
            },
            handClick(id){
                 console.log(id);
                localStorage.setItem("cityid",id)
                localStorage.setItem("cityname",encodeURIComponent(name))
            }
           
        }
   
    }
</script>
<style lang="scss" scoped>
    #hot{
        // width: 3.55rem;
        height: 7.33rem;
        display: flex;
        background: #f5f5f5;
        flex-wrap: wrap;
        justify-content: space-around;
        // padding-left: 0.1rem;
        li{
            width: 1rem;
            // margin-right: 0.1rem;
            background: #fff;
            height: 0.40rem;
            text-align: center;
            line-height: 0.4rem
        }
    }
    .city{
        background: white;
        width: 100%;
        height: 0.48rem;
        img{
            margin-top:0.05rem;
            width: 0.5rem;
            height: 0.35rem;
        }
        h3{
            position: relative;
            bottom:0.3rem;
            left:1.5rem;
            font-weight: normal;

        }
    }
</style>