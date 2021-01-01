import particlesOptions from '../config/particle.js'

export default {
	namespaced: true,

	state : () => (particlesOptions),

	mutations: {
		CHANGE_COLOR(state, value) {
			state.particles.color.value = value
		},
		SET_SHOW(state, value) {
			state.show = value
		}
	},

	getters: {
		particlesColor(state) {
			return state.particles.color.value
		}
	}
}