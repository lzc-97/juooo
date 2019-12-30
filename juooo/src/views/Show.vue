<template>
    <div>
      <div class="hezi"></div>
      <div class="header">
      <p @click="handleClick()">全国</p>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAXVBMVEUAAACzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MU5mdkAAAAHnRSTlMA+fES5d1bGgytwpCJIDy9p6Z+eWMpCKRv1sjGlU+Yw8sxAAAA/0lEQVQ4y+2TWXKDMBBENVrAYjHGGPD67n/MVEhiKiORcv7dX6Lr0UMLybz1D+2KQxAI8eT+wqbB8iPb7Da58QLgq9iFZbHf4Pb2M2dc1u3RgjzyeRa68vnoIkguc7rA/MtpwGcqDdApq4d7ui8WW2rPI9ozBTRG6wyD9g4wJqATKu0FvEl1Q7S1vqvm6N4QM2ANbQJ2GXAGXTsQMmCVfmOENt1c4aq9ExzNK6azWF1wCrkxDcS0c5+5BB4a/QNtmTu3Av1unVsDtcnpIeDP7iv/FAAo8nfBA3I71HMlgK03SXcXnupLU2ySphyWMLke2+9TKmZTrl27FhLNWy/oA9CZFFU7WU6aAAAAAElFTkSuQmCC"
      class="imga">
      <input type="text" placeholder="搜索热门演出" class="int">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAyCAYAAAAX1CjLAAACzElEQVRoge2avWsUQRiHn/MsjhMkWKUIGLghhzZ+NUIKBVGLgAgRbAXzBwgKgoJHDiwCkZDKSrRJIVhdSCEqaGmRoIWK8C4YbGIjR4rDwlOLmeWiZudmZ/bukss+zSyz78z8frez87FzkJOT00sKSTcqlYpL+fNAA1gBrmSg5xkwBVwSkRfdgguFRPnsCxQyCZSA6cB6YqZNfZOhFYUa27HsTxF7HLgIHAbKW/JinmSkCeCyUmrcXLeAdeC5iLxzrcDlHasAj4Azfhoz5Q1wXUQisL9j3YydBF4BIyb7B/DepADj6CcYNxpK/OOtA1/MdQk4ZlKAJnBORNZ8jR0EPgOjQBuoA/PorhFzD5g199N06yR+AkWgJiL1OFMpVQZumfaKwAZQjaJoM6ki2+BxA20KYAZtrPVPTANYQxvOgnlTX2Nrpoi0jNEZkzVq9CVie2IfgSOmoVMhan0QkW3zlVKr6FfkUxRFR5PK257YhEm7TpR9JtYzYQuyGSua9FsmcrIj1lO0BblM0L/DtWSKk549vfIY4+8VRl9QSiXdGnMpbxsVd1oX/I8oihL17+muOEu2C9xQrgG1bkEuxpp01m19wzJBN13KD21XzI3tNobWmO8e6hD6a5J1vRaCUqoNrIjId5/yvsbuADc9y6bhAXqDmRpfYw+BTXrblX8BS76FfY1F6B11z0iax1wZ2sEjN7bb8H3HysAFx9hV4KtnO974GqvjPty/BU57tuONr7HHKcq+9mwjCF9jH+jywXLQDO3g4WLsQM9VpMNJj83YhklPhGvJlFjPhi3IZuylSafQZ2QDRylVQeuBjr5tsRlbMGkJWEafhQ0Mc8K5TOecbCE5uvvBX3z+Bfqw7yl6+Hb6oJIRI8BZ4CodUzURqYecaALcBu7Tw01lCtrAXRGZg/C/Q8wBVWARvV1pZyAwDW3T7iJQjU3l5OTk9IQ/tjaTwi5mCEYAAAAASUVORK5CYII="
      class="imgb">
      </div>
      
      <div class="bbox">
         <swiper :options="{
             autoplay: {
                 delay: 2500,
                 disableOnInteraction: false,
           }}"  class="actories" swipername="actories" v-if="$store.state.slideList.length">
      <div class="swiper-slide bz" v-for="data in $store.state.slideList" :key="data.id">
        <img :src="data.image_url"/>
      </div>
         </swiper>
         </div>
          <ul class="lii">
            <li v-for="sec in $store.state.classifyList" :key="sec.id">
                <img :src="sec.pic">
                <p>{{sec.name}}</p>
            </li>
        </ul>

        <list></list>
        <list_show></list_show>
        <showtime></showtime>
        <popular></popular>
        <router-view></router-view>
        <div id="foot"></div>
    </div>
</template>
<script>
import swiper from '@/components/Swiper'
// import Axios from 'axios'
import list from '@/views/Home/List'
import list_show from '@/views/Home/List_show'
import showtime from '@/views/Home/showtime'
import popular from '@/views/Home/popular'
export default {
  components: {
    swiper,
    list,
    list_show,
    showtime,
    popular
  },
  data () {
    return {
      looplist: [],
      seclist: []
    }
  },

  mounted () {
    // Axios({
    //     url:"https://api.juooo.com/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.9&referer=2",
    // }).then(res=>{
    //     console.log(res.data);
    //     this.looplist = res.data.data.slide_list
    //     this.seclist = res.data.data.classify_list
    // })
    if (this.$store.state.slideList.length === 0) {
      this.$store.dispatch('one')
    } else {
      console.log('缓存')
    }
    if (this.$store.state.classifyList.length === 0) {
      this.$store.dispatch('one')
    } else {

    }
  },
  methods:{
    handleClick(){
      this.$router.push({path:'/city'})
      // console.log(1111);
      
    }
  }
}
</script>
<style lang="scss" scoped>
  .bz{
    img{
      width:100%;
      height: 1.56rem;
      
    }
  }

   ul{
        display: flex;
        width:100%;
        height: 1.48rem;
        flex-wrap:wrap;
        li{
            width: 20%;
            height: 0.71rem;
            text-align: center;
            font-size: 0.13rem;
            img{
                width:0.44rem ;
                height: 0.44rem;
                margin-left: 0.15rem
            }

        }
    }
    .lii p{
      margin-left: 0.1rem;
    }
    #foot {
      height: 0.51rem;
    }
    .bbox{
      border: 1px solid #ccc;
      width: 3.50rem;
      height: 1.54rem;
      border-radius: 0.1rem;
      margin-left: 0.13rem;
      margin-bottom:0.11rem; 
      overflow: hidden;
    }
    .int{
      width: 2.56rem;
      height: 0.32rem;
      border: 0.01rem solid #ccc;
      border-radius: 0.2rem;
      background: #f5f5f5;
      display: block; 
      outline: none;
      position: relative;
      left: 0.76rem;
      bottom:0.15rem;
      box-sizing: border-box;
      padding-left: 0.26rem;
    }
    .header{
      width: 100%;
      box-sizing: border-box;
      height: 0.48rem;
      background: white;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABOFBMVEUAAAD/YUT/fD3/fD3/YUX/bUH/fD3/jDj/fTz/YkT/bUD/dz7/jTj/YEX/ZkP/cj//ez3/aEL/fjz/izj/cz//jjf/fzv/bEH/cUD/hzn/gTv/jjj/hzr/gTv/cED/YUT/dz7/gjv/gTv/izj/YEX/cED/jTj/ej3/aUL/fjz/hjn/fjz/dj//cj//akL/b0D/ej3/iDn/ZET/gTv/jTj/eT7/Z0P/gjv/bkH/dD//Y0T/hzr/eT7/ckD/aEP/izj/eD7/bUH/fD3/hjr/dj//Z0P/YUX/dD//YEX/jTj/jjj/YkT/hTr/YEX/jTj/hTr/YkT/a0H/bkH/ZEP/iDn/fjz/iTn/gTv/cED/jDj/Z0P/cj//dz7/gzv/dT7/eT3/akL/aEP/ZkP/aUL/fD3/gDz/dD//ez1zbBWgAAAAT3RSTlMAAxEMpZcH+/r49OvrypeIbVMwKyIiCvv78+fS0cnAtK2spKOgnJiOiX5gUkdCLykc+PX09PPt6+jl3d3T0MzMw7KysaidkZGPjYd0dGlWcCOHIgAAAcNJREFUOMud0tV2AjEQBuAALdpibam3SCkudXdXWFy2uLz/G3QJySRB9oL/cs53dvY/EzRTtGHf1noutb7lDWtV2JLPUCjkcqlU6q/YNXoTU5jrw1AGV+zm88aAa5Jb2SyLrtOvXy9PWLtQxpB3ddkSH/secTlwHcXJNcvIN/WbY64/cLXejV6An+AUqLg8ddWSTVhsGC9Sx65aWuOX7zN3FnLqdM6QhbpSZp453TEU9mjJidwycRmzDuAvFPEgyDNxkuRgm6nbcHFrLohrWGF2R3/QjrjYFafARvsWRgu0cJKHSeykdvMURtQdISFmvLhZacGEXnhDhOcD1660sjA5IJfr6oWzYtesZE0wuqIHifIwOnSt7CWMnuiFH3n4QFx2F0bfcOEIcw5JGrr0F3u08BJOYnQWM0uNoUsnEGQbXoxs0+JTB1cHhbFbRCwR9qR7azt+/84qKay4tIODmm32pPGFaWHFLWoQF6dRcBniFGiKIyF2eNLYSdSlf9BIAsSRxdS9o7Hcy+CgMDQW4gYHhXfRxLyNFt5DU2ITC1vR1Myzwvh7KpIVntMgVdlog1OPtVkBp56XFjj1aIKHpldws+QfBznqO/3Ch6wAAAAASUVORK5CYII=);
      background-repeat:no-repeat;
      background-size:0.22rem;
      background-position:0.15rem 0.12rem;
      // position: relative;
      position: fixed;
      top:0;
      z-index: 3;

      p{
        display: inline-block;
        position: relative;
        top:0.1rem;
        left:0.38rem
      }
      .imgb{
        width: 0.29rem;
        height: 0.27rem;
        position: relative;
        left: 3.4rem;
        bottom:0.45rem;
      }
      .imga{
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        position: relative;
        left: 0.5rem;
        top:0.14rem;
        z-index:2;
      }
    }
    .hezi{
      height: 0.48rem;
      width: 100%;
    }
</style>
