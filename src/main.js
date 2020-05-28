import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import MyTabbar from './components/MyTabbar'
//导入Vant
import VantUI from "vant";
import "vant/lib/index.css";
Vue.use(VantUI);

axios.defaults.baseURL = 'http://127.0.0.1'
Vue.prototype.axios = axios;
Vue.config.productionTip = false
//通过Vue.use()方法使用MintUI插件
Vue.use(MintUI);

// 全局底部导航
Vue.component("my-tabbar",MyTabbar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
