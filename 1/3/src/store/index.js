import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './actions'
import getters from './getter'


Vue.use(Vuex)

const state={
	screenWidthLg: 992,
	MaxFluidWidth:  1280,
	MinFluidWidth: 960,
    screenWidth: document.body.clientWidth,
    url: '' 
}
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})