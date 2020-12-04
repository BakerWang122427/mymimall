<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from "./storage/index.js";
import jsonp from "jsonp";
export default {
  name: "app",
  components: {},
  date() {
    return {
      loginUser: {},
      date: {}
    };
  },
  mounted() {
    // storage 使用案例部分
    storage.setItem("a", 1);
    // storage.setItem("user", { a: 1 });
    // storage.setItem("userName", "Baker", "user");
    // storage.setItem("abc", { a: 1 }, "user");
    // storage.clear("a");
    //storage.clear("a", "user");

    //JSONP跨域
    let url = "https://www.imooc.com/activity/servicetime";
    jsonp(url, (err, res) => {
      let result = res;
      this.data = result;
    });

    //Mock方式1--本地加载请求静态json; mock使用案例 json方式
    // this.axios
    //   .get("./mock/user/login.json")
    //   .then(result => {
    //     this.loginUser = result;
    //     window.console.log(result);
    //   })
    //   .catch(err => {
    //     window.console.log(err);
    //   });
    //Mock方式2--使用开源平台easy-mock
    // this.axios
    //   .get("/user/login")
    //   .then(result => {
    //     this.loginUser = result;
    //     window.console.log(result);
    //   })
    //   .catch(err => {
    //     window.console.log(err);
    //   });
    //mock方式3，通过mockjs将mock集成到项目中，不会发起真实的请求，前端代码层就已经拦截下来返回数据了；请求方式与后端接口一致
    this.axios
      .get("/user/login")
      .then(result => {
        this.loginUser = result;
        window.console.log(result);
      })
      .catch(err => {
        window.console.log(err);
      });
  }
};
</script>

<style>
@import "./assets/scss/reset.scss";
</style>
