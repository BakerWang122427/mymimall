import Vue from "vue";

import Routers from "./router/router.js";
import axios from "axios";
import VueAxios from "vue-axios"; //该插件便于axios的使用；即把axios挂载到vue的实例对象中去；this.axios.get() ……

import App from "./App.vue";
Vue.use(VueAxios, axios);
//接口请求拦截
//baseURL 如何设定 得根据前端的跨域方式来做处理  /a/b: /api/a/b ==> /a/b
axios.defaults.baseURL = "./api";
//请求超时 设置  一般为 5-8 秒 较为合适
axios.defaults.timeout = 8000;
//接口错误拦截统一处理，同理可统一处理对返回信息进行统一处理 因为所有后端返回信息都会走response
axios.interceptors.response.use(function(response) {
  let res = response.data;
  if (res.status == 0) {
    //这里涉及到前后端 确认的返回信息规范问题；具体状态码代表什么意思 前后端人员沟通确认  该项目中 只要是成功 返回码为 0
    return res.data;
  } else if (res.status == 10) {
    // 返回状态码为10  为需要登录 所以统一跳转到登录页面
    window.location.href == "./#/login"; // 改处是无法使用vue路由的 所以只能使用href
  } else {
    console.log(res.msg);
  }
});

Vue.config.productionTip = false; //Vue 生产环境的一些提示，设为false即不给这些提示

new Vue({
  router: Routers,
  render: h => h(App)
}).$mount("#app");
