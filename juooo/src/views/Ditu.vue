<template>
    <div>
        <span @click="headerld">&lt;</span>
        <div id="container"></div>
    </div>
</template>

<script>
export default {
    mounted (){
        var map = new BMap.Map("container");          // 创建地图实例  
        var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
        map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别  
        map.enableScrollWheelZoom(true);
        this.$store.commit("hide");
    },
    beforeDestroy() {
    this.$store.commit("show");
  },
    methods: {
    headerld() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
span {
    position: absolute;
    width: 0.3rem;
    height: 0.3rem;
    top: 10px;
    left: 10px;
    background: #000;
    opacity: .4;
    z-index: 9999999999999;
    border-radius: 50%;
    color: aliceblue;
    font-size: 0.2rem;
    line-height: 0.3rem;
    text-align: center;

}
#container {
    height: 1000px;
}
</style>