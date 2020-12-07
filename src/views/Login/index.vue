<template>
  <div>
    Login...
    <el-button type="primary" @click="handle">登录</el-button>
  </div>
</template>

<script>
import { reqLogin } from "@api/user";

export default {
  name: "Login",
  methods: {
    handle() {
      reqLogin("13700000000", "111111")
        .then((res) => {
          console.log("res:" + res);
        })
        .catch((err) => {
          console.log("err:" + err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
