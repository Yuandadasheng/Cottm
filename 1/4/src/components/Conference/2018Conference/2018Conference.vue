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
						<headline 
							:TitleName="data.about.name" 
							:mb="data.about.mb" 
							:align="data.about.align" 
							:fontSize="data.about.fontSize">
								
						</headline>  
						<p class="text-justify">
							{{data.about.text1}}
						</p>
						<p class="text-center">
							<b-img :src="data.about.img" rounded  fluid ></b-img>
						</p>
						<p class="text-justify">
							{{data.about.text2}}
						</p>
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="12" >
						<headline 
							:TitleName="data.meetingBg.name" 
							:mb="data.meetingBg.mb" 
							:align="data.meetingBg.align" 
							:fontSize="data.meetingBg.fontSize">
								
						</headline>  
						<p class="text-justify" v-for="items in data.meetingBg.desc">
							{{items}}
						</p>
						
					</b-col>
				</b-row>
				<b-row v-for="forumItems in data.forumList">
					<b-col cols="12" md="8">
						<p>
							<headline 
								:TitleName="forumItems.name" 
								:mb="forumItems.mb" 
								:align="forumItems.align" 
								:fontSize="forumItems.fontSize">
									
							</headline>  
						</p>
						<p v-if="forumItems.presideOver">
								<headline 
									:TitleName="forumItems.presideOver" 
									:mb="forumItems.mb" 
									:align="forumItems.align" 
									:fontSize="forumItems.fontSize">
									
								</headline> 
						</p>
						<div class="text-justify" v-for="forum in forumItems.forums">
							<p>
								<headline 
									:TitleName="forum.date" 
									:mb="forumItems.mb" 
									:align="forumItems.align" 
									:fontSize="forumItems.fontSize">
									
								</headline> 
							</p>
							
							
							<p v-if="forum.titleDesc">
								<headline 
									:TitleName="forum.titleDesc" 
									:mb="forumItems.mb" 
									:align="forumItems.align" 
									:fontSize="forumItems.fontSize">
									
								</headline> 
							</p>
							<p v-if="forum.customization">
								<span class="font-weight-bold">
									{{forum.customization.title}} <br>
								</span>	
								<span v-for="customizationDesc in forum.customization.desc">
									{{customizationDesc}} <br>
								</span>
							</p>
							<div v-for="itemList in forum.lists">
									<b-row v-if="itemList.type == 3">
										<b-col cols="12" md="12">
											<p class="font-weight-bold">
												{{itemList.title}}
											</p>
											<p v-if="itemList.desc">
												{{itemList.desc}}
											</p>
										</b-col>	
									</b-row>	
									<b-row v-else>
										<b-col cols="3" md="3" >
											<span>
												{{itemList.time}}
											</span>
										</b-col>
										<b-col cols="9" md="9">
											<p  v-if="itemList.type == 1">
												 {{itemList.title}}
											</p>
											<p  v-else-if="itemList.type == 2" class="font-weight-bold">
												 {{itemList.title}}
											</p>

											<div v-if="itemList.desc">
												<p v-for="descItem in itemList.desc">
													<span v-for="textItem in descItem.text">
														{{textItem}} <br>
													</span>
												</p>
											</div>
										</b-col>
									</b-row>			
							</div>
						</div>
					</b-col>
				</b-row>
				<b-row>
					<b-col sm="3" md="5">

					</b-col>
					<b-col sm="9" md="7">
						{{data.UpdateTime}}	
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="12" md="9" class="text-justify mt-4" >
							<p>
								<headline 
									:TitleName="data.schedule.name" 
									:mb="data.schedule.mb" 
									:align="data.schedule.align" 
									:fontSize="data.schedule.fontSize">
									
								</headline> 
							</p>
							
							<div v-for="scheduleList in data.schedule.scheduleLists">
								<div class="mt-2">
									<headline 
										:TitleName="scheduleList.date" 
										:mb="data.schedule.mb" 
										:align="data.schedule.align" 
										:fontSize="data.schedule.fontSize">
										
									</headline> 
								</div>
								
								<div v-for="scheduleItem in scheduleList.lists" class="mt-2">
									<b-row v-if=" scheduleItem.type == 1">
										<b-col cols="3" >
												{{scheduleItem.time}}
										</b-col>	
										<b-col cols="9"  >
												{{scheduleItem.desc}}
										</b-col>
									</b-row>	
									<b-row v-else>
										<b-col cols="12" >
												{{scheduleItem.desc}}
										</b-col>
									</b-row>	
								</div>
								<!-- <b-row v-if="scheduleList == 3">
									<b-col cols="12" >
										<p v-if="itemList.desc">
											{{itemList.desc}}
										</p>
									</b-col>	 -->
								<!-- </b-row>	 -->
									<!--<b-row v-else>
										<b-col cols="3" md="3" >
											<span>
												{{itemList.time}}
											</span>
										</b-col>
										<b-col cols="9" md="9">
											<p  v-if="itemList.type == 1">
												 {{itemList.title}}
											</p>
											<p  v-else-if="itemList.type == 2" class="font-weight-bold">
												 {{itemList.title}}
											</p>

											<div v-if="itemList.desc">
												<p v-for="descItem in itemList.desc">
													<span v-for="textItem in descItem.text">
														{{textItem}} <br>
													</span>
												</p>
											</div>
										</b-col>
									</b-row>		 -->	
							</div>
					</b-col>
				</b-row>
				<b-row align-h="center" class="mt-5">
					<b-col cols="12" >
						<div v-for="items in data.contentList">
							
							<headline :TitleName="items.name" :fontSize="20" :align="items.textAlign"></headline> 
							
						
							<p v-if="items.img" v-for="item in items.img" class="text-center">
								<b-img :src="item" rounded  fluid></b-img>
							</p>
							<TextLayout :TextLayout="items.desc" ></TextLayout>	
							
						</div>
					</b-col>			
				</b-row>
				<b-row>
					<b-col cols="12">
						<p class="text-center">
							<b-img :src="data.CodeImg" fluid width="200"></b-img>
						</p>
						<p class="text-center">
							{{data.wechat}}
						</p>
					</b-col>	
				</b-row>	
			</b-container>
		</div>
	</div>		
</template>

<script>
import headline  from '@/component/headline/headline'
import ConferenceTime from '@/component/ConferenceTime/ConferenceTime'
import TextLayout  from '@/component/TextLayout/TextLayout'
import { Conference2018 } from "../../../assets/data/index.js"
import { mapGetters , mapMutations } from 'vuex'

export default {
	data(){
		return{
			data : Conference2018
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
		ConferenceTime,
		TextLayout
	}
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/base.styl'
.a-style
	color #a01c5e !important
	font-weight bold	
	cursor pointer
		
</style>