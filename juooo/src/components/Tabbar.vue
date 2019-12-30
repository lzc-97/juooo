<template>
  <nav>
    <ul>
      <router-link to="/show" tag="li" activeClass="active">
        <span class="a"></span>
        <p>首页</p>
      </router-link>
      <router-link to="/theater" tag="li" activeClass="active">
        <span class="b"></span>
        <p>剧院</p>
      </router-link>
      <router-link to="/myjuooo" tag="li" activeClass="active">
        <span class="c"></span>
        <p>我的</p>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
.active {
    color: #3e3e3e;
  .a,.b,.c {
    background-position-y: -0.3rem;
  }
}

nav {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 0.5rem;
  text-align: center;
  background: white;
  border-top: 1px solid #ccc;
  z-index: 9999999999;
  ul {
    display: flex;
    height: 0.5rem;
    li {
      flex: 1;
        height: 0.5rem;
      span {
        display: block;
        height: 0.3rem;
        width: 0.3rem;
        margin: 0 auto;
      }
      .a {
        background: url('https://image.juooo.com/group1/M00/01/81/rAoKmVuQecmATGXZAAAUKcf_gA0402.png' ) no-repeat;
        background-size: 0.3rem;
      }
      .b {
        background: url('https://image.juooo.com/group1/M00/02/7F/rAoKNVwtUeGAOGfGAAAKR4Zrvs0487.png') no-repeat;
        background-size: 0.3rem;
      }
      .c {
        background: url('https://image.juooo.com/group1/M00/01/81/rAoKmVuQedqADpfXAAAQDvkHt5o350.png') no-repeat;
        background-size: 0.3rem;
      }
      p {
        line-height: 0.2rem;
      }
    }
  }
}
</style>
