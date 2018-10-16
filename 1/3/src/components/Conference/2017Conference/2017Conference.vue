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
						<p>
							<describe :desc="data.desc" ></describe>   
						</p>
						
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="12" >
						<p>
							<headline 
								:mb="data.Meeting.mb"
								:align = "data.Meeting.align"
								:fontSize = "data.Meeting.fontSize"
								:fontStyle="data.Meeting.fontStyle"
								:TitleName="data.Meeting.name">
								
							</headline>  
								
						</p>
						<div v-for="forumList in data.Meeting.forums">
							<p>
								<headline 
									:mb="data.Meeting.mb"
									:align = "data.Meeting.align"
									:fontSize = "forumList.fontSize"
									:TitleName= "forumList.date">
								</headline> 
							</p>
							<p>
								<TextLayout :TextLayout="forumList.desc"></TextLayout>
							</p>
							<b-row>
								<b-col cols="12" md="10">
									<div v-for="forumItem in forumList.lists" class="mt-2">
										<b-row>
											<b-col cols="12" md="3">
												<p>
													{{forumItem.time}}
												</p>
											</b-col>	
											<b-col cols="12" md="9" >
												<p>
													{{forumItem.title}}
												</p>
												<div v-if="forumItem.desc">
													<p v-for="forumDesc in forumItem.desc">
														<span v-for="forumText in forumDesc.text">
															{{forumText}} <br>
														</span>
														
													</p>
													
												</div>
												<div v-if="forumItem.vhtml">
													<p v-html="forumItem.vhtml"></p>	
												</div>
											</b-col>
										</b-row>	
										
									</div>
								</b-col>	
							</b-row>	
							
						</div>	
					</b-col>
				</b-row>
				<b-row>
					<b-col>
						<p>
							<headline :mb="data.ExhibitorsSpeech.mb"
								:align = "data.ExhibitorsSpeech.align"
								:fontSize = "data.ExhibitorsSpeech.fontSize"
								:fontStyle="data.ExhibitorsSpeech.fontStyle"
								:TitleName="data.ExhibitorsSpeech.name">
							</headline>  
						</p>
						<div>
							<b-row>
								<b-col cols="12" v-for="lectureItmes in data.ExhibitorsSpeech.lecture">
									<p>
										<headline :mb="data.ExhibitorsSpeech.mb"
											:align = "data.ExhibitorsSpeech.align"
											:fontSize = "lectureItmes.fontSize"
											:TitleName="lectureItmes.date">
										</headline>  
									</p>
									<b-row v-for="itemsList in lectureItmes.lists">
										
										<b-col>
											<p>
												<span>
													{{itemsList.time}}
												</span><br>
												<span>
													{{itemsList.text}}
												</span>
											</p>

										</b-col>	
									</b-row>	
								</b-col>	
							</b-row>	
						</div>
					</b-col>	
				</b-row>	
			</b-container>
		</div>
	</div>		
</template>

<script>
import headline  from '@/component/headline/headline'
import ConferenceTime from '@/component/ConferenceTime/ConferenceTime'
import describe from '@/component/describe/describe'
import TextLayout from '@/component/TextLayout/TextLayout'
import axios from 'axios'
import { mapGetters , mapMutations } from 'vuex'

export default {
	data(){
		return{
			data : {
				ConferenceTime:{
					name: '',
				},
				Meeting:{
					name: '',
					mb: 0,
					align : '',
					fontSize: 0,
					fontStyle: '',
					forums : []
				},
				ExhibitorsSpeech:{
					name: '',
					mb: 0,
					align : '',
					fontSize: 0,
					fontStyle: '',
					lecture : []
				}
			},
		}
	},
	created(){
		axios.get('../static/data/Conference/Conference2017.json').then((res)=>{
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
		ConferenceTime,
		describe,
		TextLayout
	}
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/base.styl'
	
</style>