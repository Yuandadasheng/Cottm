<template>
	<!-- 2019会议 -->
	<div>
		<div class="main">
			<b-container :fluid="widthFluid" >
				<b-row>
					<b-col cols="12" >
						<ConferenceTime :ConferenceTime="data.ConferenceTime" :name="data.ConferenceTime.name"></ConferenceTime>  
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="12" >
						<headline :TitleName="TitleName"></headline>  
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="12" >
						<p>COTTM2019会议日程待更新 </p>
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="12" >
						<p> <br></p>
						<p> <br></p>
						<p> <br></p>
						<p> <br></p>
						
					</b-col>
				</b-row>
			</b-container>
		</div>
	</div>		
</template>

<script>
import headline  from '@/component/headline/headline'
import ConferenceTime from '@/component/ConferenceTime/ConferenceTime'
import { Conference2019 } from "../../../assets/data/index.js"
import { mapGetters , mapMutations } from 'vuex'

export default {
	data(){
		return{
			data : Conference2019
		}
	},
	created(){
	
	},
	computed:{
		
		TitleName(){
			return this.data.name
		},
		...mapGetters(['widthFluid'])
	},
	methods:{
		...mapMutations(['SCREEN_WIDTH','OUTER_JOIN'])
	},
	components:{
		headline,
		ConferenceTime
	}
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/base.styl'
	
</style>