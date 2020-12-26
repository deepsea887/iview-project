import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import './styles/common.css';
import axios from './libs/request'
Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axio

Vue.use(VueRouter);
Vue.use(iView);

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
    // //路由中设置的needLogin字段就在to当中 
    // if(window.sessionStorage.data){
    //   console.log(window.sessionStorage);
    //   // console.log(to.path) //每次跳转的路径
    //   if(to.path === '/'){
    //     //登录状态下 访问login.vue页面 会跳到index.vue
    //     next({path: '/index'});
    //   }else{
    //     next();
    //   }
    // }else{
    //   // 如果没有session ,访问任何页面。都会进入到 登录页
    //   if (to.path === '/') { // 如果是登录页面的话，直接next() -->解决注销后的循环执行bug
    //     next();
    //   } else { // 否则 跳转到登录页面
    //     next({ path: '/' });
    //   }
    // }
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
