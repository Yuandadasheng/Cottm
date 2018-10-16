export default {
	widthFluid: state => {
			 if(state.screenWidth && state.screenWidth<state.MaxFluidWidth){
		          return true
		      }
		      return false
	 	}
}	