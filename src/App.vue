<template>
  <div>
    <Header />
    <router-view></router-view>
    <!-- <Footer v-if="$route.path !== '/login' && $route.path !== '/register'" /> -->
    <Footer v-if="!$route.meta.isFooterShow" />
  </div>
</template>

<script>
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Header from "@comps/Header";
import Footer from "@comps/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less" scoped>
</style>

