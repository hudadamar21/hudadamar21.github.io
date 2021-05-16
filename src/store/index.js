import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      darkmode: false
    }
  },
  mutations: {
    setDarkmode(state, value) {
      window.localStorage.setItem('darkmode', value)
      state.darkmode = value
    }
  }
})

export default store