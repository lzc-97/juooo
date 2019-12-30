<template>
  <div>
    <router-view></router-view>
    <tabbar v-if="$store.state.isShow" ></tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar'
export default {
  components: {
    tabbar
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,body {
  height: 100%;
  font-size: 0.15rem;
  overflow-x: hidden;
}
ul,ol {
  list-style: none;
}
#newAdults{
      p{
        white-space: normal;
        text-align: center;
        font-size:0.14rem;
        line-height: 0.25rem;
        color: #232323;
        }
        img{
          width: 100%;
        }
    }

</style>
