<template>
	
	<b-row>
		<b-col cols="12" class="title-name" :style="{textAlign: align,marginBottom : mb + 'px'}">
			<span :style="{ fontSize :  fontSize + 'px',fontWeight:bold, fontStyle : fontStyle,color : fontColor}" >
				<b>{{TitleName}}</b>
			</span>
		</b-col>	
	</b-row>
	
</template>

<script>

export default {
	props:{
		TitleName:{
			type: String
		},
		fontSize:{
			type: Number,
			default: 30
		},
		bold:{
			type: Number,
			default: 800
		},
		align:{
			type: String,
			default: 'center'
		},
		mb:{
			type: Number,
			default: 20
		},
		fontStyle:{
			type: String,
			default: 'normal'
		},
		fontColor:{
			type: String,
			default: '#000000'
		}
	},
	computed: {
		
	}
}
</script>

<style lang="stylus">
</style>