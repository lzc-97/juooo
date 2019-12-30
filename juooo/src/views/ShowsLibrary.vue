<template>
  <div>
    <!-- showslibrary{{ myid }} -->
    <library></library>
    <swiper
      :options="{
      loop:false,
      pagination:{},
      slidesPerView: 4,
      spaceBetween: 5,
      freeMode: true,
      freeModeMinimumVelocity : 1
    }"
      class="headerbottom"
      swipername="headerbottom"
    >
    <div class="swiper-slide" v-for="data in this.headerlist" :key="data.id">
      <p>
        {{ data.name }}
      </p>
      </div>
    </swiper>
  </div>
</template>

<script>
import Axios from "axios";
import library from "@/components/Library";
import swiper from "@/components/Swiper";

export default {
  //   props: ["myid"],
  data() {
    return {
      headerlist: []
    };
  },
  components: {
    library,
    swiper
  },
  methods: {
  },
  mounted() {
    Axios({
      url:
        "https://api.juooo.com/Show/Index/getShowCategoryList?version=6.0.9&referer=2"
    }).then(res => {
      // console.log(res.data);
      this.headerlist = res.data.data;
    });

    this.$store.commit("hide");
  },
  beforeDestroy() {
    this.$store.commit("show");
  }
};
</script>

<style lang="scss" scoped>
.headerbottom {
  height: 0.4rem;
  position: fixed;
  top: 0.4rem;
  .swiper-slide {
    width: 0.8rem;
  p {
    // width: 1rem;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
  }
  }
}
</style>