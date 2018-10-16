<template>
	
	<div>
		<span v-if="aLinkType == 1">
			<router-link :to="aLink" :class="{fontActive: fontActive}" 
					:style="{
					'fontSize': fontSize +'px' , 
					'padding':padding }">
				{{aLinkText}}
			</router-link>	
		</span>
		<span>
			<a href=""></a>
		</span>
	</div>
</template>

<script>
export default {
	props:{
		aLink : {
			type: String
		},
		aLinkText : {
			type: String
		},
		aLinkType :{
			type: Number,
			default: 1
		},
		fontSize:{
			type: Number,
			default: 16
		},
		padding: {
			type: String,
			default: 0
		},
		fontActive:{
			type: Boolean,
			default: false
		},
		fontColor:{
			type: String,
			default: '#a01c5e'
		}
	},
}
</script>

<style lang="stylus" scoped>
a
	 
	display inline-block
	width 100%
	height 100%
	font-weight bold
	text-decoration none
.fontActive	
	color #a01c5e
	&:hover
		color #fff	
		text-decoration none

</style>