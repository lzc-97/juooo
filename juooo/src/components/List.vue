<template>
  <div>
    <ul>
      <li
        v-for="data in this.$store.state.classifyList"
        :key="data.id"
        @click="headle(data.category_id)"
      >
        <img :src="data.pic" alt />
        <p>{{ data.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.$store.state.classifyList.length === 0) {
      this.$store.dispatch("one")
    } else {
      // console.log("缓存");
    }
  },
  methods: {
    headle(id) {
      this.$router.push(`/showsLibrary/${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  height: 1.5rem;
  li {
    width: 20%;
    text-align: center;
    img {
      width: 0.5rem;
    }
    p {
      text-align: center;
    }
  }
}
</style>