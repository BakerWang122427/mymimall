import Vue from "vue";
import Router from "vue-router";
import Home from "./../pages/home";
import Index from "./../pages/index";
//import resolve from "url";

Vue.use(Router); // 固定写法，vue应用router
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: { name: "index" }, // “/” 访问重定向到index页面
      children: [
        {
          path: "/index",
          name: "index",
          component: Index
        },
        {
          path: "/product/:id",
          name: "product",
          component: resolve => require(["../pages/index.vue"], resolve) //设置路由按需加载 解决首页打开慢的问题 使用resolve方式；
        },
        {
          path: "/detail/:id", //商品详情
          name: "detail",
          component: resolve => require(["../pages/productDetail.vue"], resolve)
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../pages/login.vue") //设置路由按需加载第二中方法 这里使用到了ES7语法，需要安装  syntax-dynamic-import 插件：https://router.vuejs.org/zh/guide/advanced/lazy-loading.html#把组件按组分块
    }
  ]
});
