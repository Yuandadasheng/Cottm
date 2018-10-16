<template lang="html">
  	<div >
  		<v-banner></v-banner>
  		<b-container>
  			<b-row class="conent">
  				<b-col class="text-center">
  					<h1>{{home.title}}</h1>
  				</b-col>	
  			</b-row>
  			<b-row class="text">
  				<b-col class="text-center">
  					<span>{{home.text}}</span>
  				</b-col>	
  			</b-row>
  			<b-row>
  				<b-col class="text-center">
  					<span class="video-title">{{video.title}}</span>	
  				</b-col>
  			</b-row>
  			<b-row class="text">
  				<b-col class="text-center">
  					<v-video :videoUrl="video.url">
  					</v-video>	
  				</b-col>	
  			</b-row>	
  			<b-row>
  				<b-col> &nbsp;
  				</b-col>	
  			</b-row>	
  			<b-row class="publicity">
  				<b-col md="4" v-for="items in  home.publicity ">
					<b-row align-h="center" class="publicity-row-1">
						<b-col cols="11" md="12" >
							<img :src="items.imgUrl" width="100%">
						</b-col>	
					</b-row>
					<b-row class="publicity-row-2">
						<b-col class="text-center">
							<span>{{items.title}}</span>
						</b-col>	
					</b-row>
					<b-row class="publicity-row-3">
						<b-col class="text-center">
							<span>{{items.btuText}}</span>
						</b-col>	
					</b-row>	
  				</b-col>	
  			</b-row>	
  				
  		</b-container>	
  		<v-group :group="group"></v-group>
  		<logo-list 
  			:sponsor="logos.sponsor"
  			:support="logos.support"
  			:GoldSponsor="logos.GoldSponsor"
  			:StrategicPartner="logos.StrategicPartner"
  			:TechnicalPartner="logos.TechnicalPartner"
  			:AirlinePartners="logos.AirlinePartners"
  			:CooperativePartner="logos.CooperativePartner"
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
export default {
	data(){
		return{
			home:"",
			video:"",
			group:"",
			logos: ""
		}
	},
	created(){
		axios.get('static/data.json').then((res)=>{
          this.home = res.data.home.conent
          this.video = res.data.home.conent.video
          this.group = res.data.home.news
          this.logos = res.data.home.Logos
      	})
	},
	components:{
		VBanner,
		VVideo,
		VGroup,
		LogoList
	}
	
}
</script>

<style lang="stylus">
.main
	.conent
		padding 30px 0 15px
		h1
			font-size 32px
			font-weight 800
	.video-title
		font-size 	24px
		font-weight bold
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
				
			
		

</style>

