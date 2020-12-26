import Vue from 'vue'
import Vuex from 'vuex'

const key = 'user' //localStorage中存储用户信息的key
const isLogin = 'isLogin' //登录状态0未登录 1已登录

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem(key)),
    isLogin: localStorage.getItem(isLogin),
    indexTop: 0,
    goodsTop: 0,
    excludeName: [],
    openFlag:false,//开源提示开关
	pcUrl: process.env.VUE_APP_PC_NAME
  },
  getters: {
    getUesr: function (state) { //获取登录信息
      if (!state.user) {
        state.user = JSON.parse(localStorage.getItem(key))
        //state.isLogin = localStorage.getItem(isLogin)
      }
      return state.user
    },
    getiSLogin: function (state) {
      if(!state.isLogin){
        state.isLogin = localStorage.getItem(isLogin)
      }
      return state.isLogin
    },
    excludeName: function (state) {
      return state.excludeName
    }
  },
  mutations: {
    $_setLogin(state, value) { //设置登录状态
      state.isLogin = value
      localStorage.setItem(isLogin, value)
    },
    $_setUser(state, value) { //设置登录信息
      state.user = value
      localStorage.setItem(key, JSON.stringify(value))
    },
    $_removeStorage(state) { //移除登录信息
      state.user = null
      state.isLogin = false
      localStorage.removeItem(key)
    },
    $_setIndexTop(state, value){
      state.indexTop = value
    },
    $_setgoodsTop(state, value){
      state.goodsTop = value
    },
    setExcludeName (state,value) {
      state.excludeName = value
    },
    /*更新开源开关*/ 
    updateOpenFlag(state,item){
      state.openFlag=item;
    }
  },
  actions: {
    setExcludeName({commit},value){
      commit('setExcludeName',value)
    }
  }

})

export default store