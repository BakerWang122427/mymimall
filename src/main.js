import Vue from "vue";
import App from "./App.vue";
import Routers from "./router/router.js";

Vue.config.productionTip = false;

new Vue({
  router: Routers,
  render: h => h(App)
}).$mount("#app");
