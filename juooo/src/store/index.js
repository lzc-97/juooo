import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow: true,
    slideList: [],
    classifyList: [],
    headerlist: [],
  },
  mutations: {
    show (state) {
      state.isShow = true
    },
    hide (state) {
      state.isShow = false
    },
    slide(state,paylode){
      state.slideList = paylode
    },
    classify(state,paylode){
      state.classifyList = paylode
    },
    headerlist(state,paylode){
      state.list = paylode
    },
    fun (state, payload) {
      state.looplist = payload
    },
    funs (state, payload) {
      state.seclist = payload
    }
  },
  actions: {
    one (store) {
      Axios({
        url: 'https://api.juooo.com/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.9&referer=2'
      }).then(res => {
        // console.log(res.data);
        store.commit('slide',res.data.data.slide_list)
        store.commit('classify',res.data.data.classify_list)
      })
    },
    list (store) {
      Axios({
        url: ''
      }).then(res => {
        // console.log(res.data)
        store.commit('headerlist',res.data.data)
      })
    }
  },
  modules: {
  }
})
