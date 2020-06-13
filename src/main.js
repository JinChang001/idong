import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import MyTabbar from './components/MyTabbar'
import MyHeader from './components/MyHeader'
//通过Vue.use()方法使用MintUI插件
Vue.use(MintUI);

//导入Vant
import VantUI from "vant";
import "vant/lib/index.css";
Vue.use(VantUI);

//导入moment
import moment from 'moment';
Vue.prototype.moment = moment;

axios.defaults.baseURL = 'http://127.0.0.1:9001'
Vue.prototype.axios = axios;
Vue.prototype.qs = qs;
Vue.config.productionTip = false;
//全局顶部
Vue.component("my-header",MyHeader);

// 全局底部导航
Vue.component("my-tabbar",MyTabbar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
