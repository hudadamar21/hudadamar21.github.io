import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      category: 'Web Application',
      tag: '',
      darkmode: false
    }
  },
  mutations: {
    setCategory(state, value){
      state.category =  value
    },
    setTag(state, value){
      state.tag =  value
    },
    setDarkmode(state, value) {
      window.localStorage.setItem('darkmode', value)
      state.darkmode = value
    }
  }
})

export default store