<template>
  <div class="about">
    <van-rate v-model="val"></van-rate>
  </div>
</template>

<script>
import { Rate } from "vant";
export default {
  components: {
    [Rate.name]: Rate
  },
  data() {
    return {
      val: 5
    };
  }
};
</script>

<style>
</style>
