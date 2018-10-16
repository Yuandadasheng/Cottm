<template>
	<div >
		<b-container fluid>
			<router-view></router-view>
		</b-container>	
		
	</div>
</template>

<script>
import { mapGetters  } from 'vuex'
export default {
	computed: {
		...mapGetters([
			'widthFluid'
			])
	}
}
</script>

<style lang="stylus">
@import '../../assets/stylus/base.styl'
.container-fluid
	padding-left 0
	padding-right 0
	

</style>