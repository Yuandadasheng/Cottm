<template>
	
	<b-row>
		<b-col cols="12" md="6" xs="8" lg="5">
			<b-row>
				<b-col cols="12"  >
					<headline :TitleName="name" :align="align" :fontSize="fontSize" :mb="mb"></headline>  
				</b-col>	
				<b-col cols="12"  >
					<p>
						{{ConferenceTime.desc}}
					</p>
				</b-col>
			</b-row>
			<b-row v-for="timeItems in ConferenceTime.times">
				<b-col cols="4"  sm="3"  md="3"  lg="3" >
					<span class="time">{{timeItems.date}}</span>
				</b-col>	
				<b-col cols="3"  >
					<span class="time">{{timeItems.week}}</span>
				</b-col>
				<b-col cols="5"  >
					<span class="time">{{timeItems.time}}</span>
				</b-col>
			</b-row>
		</b-col>	
	</b-row>
	
</template>

<script>
import headline  from '@/component/headline/headline'
export default {
	props:{
		ConferenceTime:{
			type: Object
		},
		name:{
			type: String
		},
		fontSize:{
			type: Number,
			default: 16
		},
		align:{
			type: String,
			default: 'left'
		},
		mb:{
			type: Number,
			default: 0
		}
	},
	components:{
		 headline
	},
	computed: {
		
	}
}
</script>

<style lang="stylus">
.time 
	font-size 14px 
</style>