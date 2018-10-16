import {
	 SCREEN_WIDTH,
	 OUTER_JOIN
} from './mutation-type.js'

export default{
	[SCREEN_WIDTH](state){
		window.onresize=()=>{
            window.screenWidth = document.body.clientWidth
            state.screenWidth = window.screenWidth
        }
	},
	[OUTER_JOIN](state,url){
		if(url){
			 window.open(url)
		}
	}
}