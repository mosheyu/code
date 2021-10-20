/*
 * @Explain: 
 * @version: 
 * @Author: SuperLy
 * @Date: 2021-10-19 16:15:15
 * @LastEditors: SuperLy
 * @LastEditTime: 2021-10-19 21:22:33
 */
import Vue from 'vue'
import App from './App.vue';
// 引入 element-ui 配置
import Element from './element-ui/index.js'
Vue.use(Element);
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app')