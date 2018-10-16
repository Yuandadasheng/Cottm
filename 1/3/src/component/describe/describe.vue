<template>
	
	<b-row>
		<b-col cols="12" class="desc ">
			<p class="text-justitf" :style="{ fontSize :  fontSize + 'px'}">{{desc}}</p>
		</b-col>	
	</b-row>
	
</template>

<script>
export default {
	props:{
		desc : {
			type: String
		},
		fontSize:{
			type: Number,
			default: 16
		}
	},
}
</script>

<style lang="stylus">
.desc

	font-weight 400

</style>