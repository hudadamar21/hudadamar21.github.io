import { reactive } from "vue";

export const state = reactive({
  category: 'Web Application',
  tag: ''
})

export const setCategory = (value) => {
  state.category = value
}

export const setTag = (value) => {
  state.tag = value
}
