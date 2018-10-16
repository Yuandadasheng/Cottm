<template>
	<!-- COTTM会议 -->
	<div>
		<div class="main">
			<b-container :fluid="widthFluid" >
				<b-row>
					<b-col cols="12" >
						<headline :TitleName="TitleName"></headline>  
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="12" >
						<p>
							{{data.desc}}
						</p>
					</b-col>
				</b-row>
				<b-row>
					
				</b-row>
				<b-row v-for="topicsItems in data.topics">
					<b-col cols="12" >
						<p>
							<span v-for="descItems in topicsItems.desc" :style="{'color': descItems.type ? '#a01c5e' :'#000'}">
								{{descItems.text}}
							</span>
						</p>
					</b-col>
					<b-col cols="12" >
						<p>
							<span class="font-weight-bold">
							{{topicsItems.name}}
							</span>
						</p>
					</b-col>
					<b-col cols="12" >
						<discList 
								:discList="topicsItems.topicsList" 
								:type="topicsItems.type"></discList>
					</b-col>
				</b-row>
				<b-row >
					<b-col cols="12" >
						<p>
							<span class="font-weight-bold">
								{{data.evaluate.name}}
							</span>
						</p>
					</b-col>
					<b-col cols="12" v-for="evaluateLists in data.evaluate.evaluateList">
						<p class="font-size-2">
							<span class="font-weight-bold">{{evaluateLists.appraiser}} —— </span> 
							<span>{{evaluateLists.text}}</span>
						</p>
					</b-col>
				</b-row>
			</b-container>
		</div>
	</div>		
</template>

<script>
import headline  from '@/component/headline/headline'
import discList  from '@/component/discList/discList'
import axios from 'axios'
import { mapGetters , mapMutations } from 'vuex'

export default {
	data(){
		return{
			data : {
				evaluate:{
					name : '',
					evaluateList: []
				}
			},
		}
	},
	created(){
		axios.get('../static/data/Features/Meeting.json').then((res)=>{
			this.data = res.data
      	});
  
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
		discList
	}
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/stylus/base.styl'

.font-size-2
	span
		font-size 14px !important 
</style>