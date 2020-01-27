import Vue from "vue";
import router from "@/router";

import _ from "lodash/core";

const loadGlobalHelpers = () => {
  Vue.prototype.$_ = _;
};

const loadGlobalCSS = () => {
  require("@/assets/theme/assets/css/font-awesome.min.css");
  require("@/assets/theme/assets/css/main.css");
};

const loadGlobalJS = () => {
  // It would be great if we can dynamically import global scripts here :)
};

export default {
  load: function(App) {
    
    loadGlobalHelpers();
    loadGlobalCSS();
    loadGlobalJS();

    Vue.config.productionTip = false;

    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
};
