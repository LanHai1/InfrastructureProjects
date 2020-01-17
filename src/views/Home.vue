<template>
  <div class="home">{{res}}</div>
</template>

<script>
// @ is an alias to /src
import { testHttp } from "@/api/test.js";

export default {
  name: "home",
  data() {
    return {
      res: ""
    };
  },
  components: {},
  created() {
    testHttp({
      fnRes: res => {
        this.res = res;
        // console.log("res",res)
      }
    });
  }
};
</script>

<style scoped lang="less">
.home {
  margin: 0 auto;
  width: 325px;
  height: 185px;
  background: yellow;
  border-radius: 10px;
}
</style>
