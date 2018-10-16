<template>
	<!-- 媒体图片及资料下载 -->
	<div>
		<div class="main">
			<b-container :fluid="widthFluid" >
					<b-row>
						<b-col cols="12" >
							<headline :TitleName="TitleName"></headline>  
						</b-col>
						<b-col md="6">
							<b-img :src="data.imgUrl" width="400"  fluid alt="image" />
						</b-col>	
						<b-col md="6">
							<b-list-group>
								  <b-list-group-item v-for="items in data.btu">
								  	<a @click="OUTER_JOIN(items.url)">
									  	<div class="downloads text-center" :style="{'background': 'url(' +data.btuBgImg +')' +'no-repeat','background-position': '0'+'-691px'}">
									  		<span>
									  			{{items.name}}
									  		</span>
									  	</div>
									</a>  	
								  </b-list-group-item>
							</b-list-group>
						</b-col>	
						<b-col cols="12" class="blank-height">
							
						</b-col>	
					</b-row>	
			</b-container>
		</div>
		<div  class="pictureImg" >
			<b-container :fluid="widthFluid">
					<b-row>
						<b-col cols="12" v-for="imgItems in data.pictureImg">
							<b-row>
								<b-col cols="12" >
									<p class="Vintage text-center">
										{{imgItems.name}}
									</p>
								</b-col>	
								<b-col sm="6" md="4" v-for="imgUrl in imgItems.ImgList" class="imgLists">
									<b-img :src="imgUrl" rounded fluid-grow></b-img>
								</b-col>	
							</b-row>
						</b-col>	
					</b-row>	
			</b-container>
		</div>
	</div>			

</template>

<script>
import headline  from '@/component/headline/headline'
import axios from 'axios'
import { mapGetters , mapMutations } from 'vuex'

export default {
	data(){
		return{
			data : {
				
			},
		}
	},
	created(){
		axios.get('../static/data/News/MediaInfo.json').then((res)=>{
			this.data = res.data
      	})
	},
	computed:{
		TitleName(){
			return this.data.name
		},
		...mapGetters([
				'widthFluid'
			])
	},
	methods:{
		...mapMutations(['SCREEN_WIDTH','OUTER_JOIN'])
	},
	components:{
		headline
	}
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/stylus/base.styl'

.blank-height
	height 50px
.pictureImg
	background #a01c5e
.downloads
	width 100%
	height 33px
	color #a01c5e
	font-size 18px
	font-weight 800
.Vintage
	font-size 28px
	color #ffffff
	font-weight 800	
	padding-top 15px
.imgLists
	padding-bottom 10px	
</style>