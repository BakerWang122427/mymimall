<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from "./storage/index.js";
export default {
  name: "app",
  components: {},
  date() {
    return {};
  },
  mounted() {
    //storage.setItem("a", 1);
    //storage.setItem("user", { a: 1 });
    storage.setItem("userName", "Baker", "user");
  }
};
</script>

<style></style>
