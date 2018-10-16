import {
	 SCREEN_WIDTH
} from './mutation-type.js'

export default{
	[SCREEN_WIDTH](state){
		window.onresize=()=>{
            window.screenWidth = document.body.clientWidth
            state.screenWidth = window.screenWidth
        }
	}
}