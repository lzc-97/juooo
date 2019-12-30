<template>
  <div class="header">
    <span @click="headerld">&lt;</span>
    <h3>演出</h3>
    <span>...</span>
  </div>
</template>

<script>
import Vue from "vue";

import { Popup } from "mint-ui";

Vue.component(Popup.name, Popup);
export default {
  data() {
    return {
    };
  },
  methods: {
    headerld() {
      this.$router.go(-1);
    }
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  display: flex;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.18rem;
  border-bottom: 1px solid #ccc;
  width: 100%;
  span {
    flex: 1;
    text-align: left;
    font-size: 0.3rem;
  }
  h3 {
    flex: 1;
    text-align: center;
  }
  span:last-of-type {
    line-height: 0.25rem;
    text-align: right;
  }
}
</style>