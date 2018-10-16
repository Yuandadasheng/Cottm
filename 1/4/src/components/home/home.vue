<template lang="html">
  	<div >
  		<v-banner :banner="home.banner"></v-banner>
  		<b-container>
  			<b-row class="conent">
  				<b-col class="text-center mt-4">
  					<headline :TitleName="home.conent.title"></headline>    
  				</b-col>	
  			</b-row>
  			<b-row class="text">
  				<b-col class="text-center">
  					<headline :TitleName="home.conent.text" :fontSize="home.conent.TextfontSize"></headline> 
  				</b-col>	
  			</b-row>
  			<b-row>
  				<b-col class="text-center">
  					<headline :TitleName="home.conent.video.title" :fontSize="home.conent.video.fontSize" :fontColor="home.conent.video.fontColor"></headline> 
  					
  				</b-col>
  			</b-row>
  			<b-row class="text">
  				<b-col class="text-center">
  					<v-video :videoUrl="home.conent.video.url">
  					</v-video>	
  				</b-col>	
  			</b-row>	
  			<b-row>
  				<b-col> &nbsp;
  				</b-col>	
  			</b-row>	
  	
  			<b-row class="publicity">
  				<b-col md="4" v-for="items in  home.conent.publicit">
					<b-row align-h="center" class="publicity-row-1">
						<b-col cols="11" md="12" >
							<!-- {{items}} -->
							<b-img :src="items.imgUrl" fluid></b-img>
							
						</b-col>	
					</b-row>
					<b-row class="publicity-row-2">
						<b-col class="text-center mt-3 mb-3">
							<headline :TitleName="items.title" :fontSize="home.conent.video.fontSize" :mb="items.mb"></headline>
							
						</b-col>	
					</b-row>
					<b-row class="publicity-row-3">
						<b-col class="text-center mb-3">
							<span v-if="items.type == 1">
								<router-link :to="items.url" class="a-style">  
											{{items.btuText}}	
									</router-link>	
							</span>
							<span v-else>
								<a @click="OUTER_JOIN(items.url)" class="a-style">{{items.btuText}}</a>
							</span>
							
						</b-col>	
					</b-row>	
  				</b-col>	
  			</b-row>	
  				
  		</b-container>	
  		<v-group :group="home.news" :name="home.news.name" :type="home.news.type"></v-group>
  		<logo-list 
  			:sponsor="home.Logos.sponsor"
  			:support="home.Logos.support"
  			:GoldSponsor="home.Logos.GoldSponsor"
  			:StrategicPartner="home.Logos.StrategicPartner"
  			:TechnicalPartner="home.Logos.TechnicalPartner"
  			:AirlinePartners="home.Logos.AirlinePartners"
  			:CooperativePartner="home.Logos.CooperativePartner"
  			>
  			
  		</logo-list>
  	</div>
</template>

<script>
import axios from 'axios'
import VBanner from '@/component/banner/banner'
import VVideo from '@/component/video/video'
import VGroup from '@/component/group/group'
import LogoList from '@/component/LogoList/LogoList'
import headline  from '@/component/headline/headline'
import { mapState, mapGetters , mapMutations} from 'vuex'
import home from "../../assets/data/home/home.js"
export default {
	data(){
		return{
			home : home
		}
	},
	created(){

	},
	computed:{
		...mapGetters(['widthFluid'])
	},
	methods:{
		...mapMutations(['SCREEN_WIDTH','OUTER_JOIN'])
	},
	components:{
		VBanner,
		VVideo,
		VGroup,
		LogoList,
		headline 
	}
	
}
</script>

<style lang="stylus" scoped>
.main
	.conent
		padding 30px 0 15px
		h1
			font-size 32px
			font-weight 800
	.video-title
		color #a01c5e		
	.text
		margin-top 10px
		margin-bottom 30px
		span
			font-size 20px
			font-weight 400
	.publicity
		margin-bottom 20px	
		.publicity-row-1
			margin-bottom 20px	
		.publicity-row-2
			margin-bottom 20px	
			span
				font-size 18px
				font-weight 700
		.publicity-row-3
			margin-bottom 20px	
			span
				font-size 16px
				color #a01c5e
				font-weight 800
				cursor pointer
				
			
.a-style
	color #a01c5e !important
	cursor pointer
	font-weight 800	
	&:hover
		text-decoration none

</style>

