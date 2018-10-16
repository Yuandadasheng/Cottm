<template>
	<!-- 新闻详情 -->
	<div>
		
		<b-row>
			<b-col cols="12">
				<headline :TitleName="NewsListHtml.NewsTitle"></headline>  
			</b-col>
			<b-col cols="12">
				<p style="border-bottom:1px solid #0A5E8E">
					<span>
					{{NewsListHtml.NewsDate}}
					</span>&nbsp;
					<span v-if="NewsListHtml.NewsSource">
						来源：<a :href="NewsListHtml.NewsURL" target="_blank" class="NewsUrl">
							 {{NewsListHtml.NewsSource}}
						</a>
						
					</span>
				</p>
				
			</b-col>	
			<b-col cols="12" class="text-p">
				<div v-html="NewsListHtml.NewsContent">
					
				</div>
			</b-col>	
			<b-col cols="12">
				<b-button  variant="danger" @click="GoUrl">
					返回
				</b-button>	
			</b-col>		
		</b-row>		
	</div>		
</template>

<script>
import headline  from '@/component/headline/headline'
import aLink  from '@/component/aLink/aLink'
import { mapGetters , mapMutations } from 'vuex'
import axios from 'axios'

export default {
	data(){
		return{

			NewsListHtml: {
				NewsTitle: ""
			},
			AxiosUrl: '',
			RequestId: this.$route.query.id
		}
	},
	created(){
		// this.AxiosRequest()
		
	},
	mounted(){
		
	},
	computed:{

		...mapGetters(['widthFluid'])
	},

	beforeRouteEnter (to, from, next) {
	   

	    let AxiosU =process.env.API_HOST + '2019/test/news_details_2.asp?id='+ to.query.id
			// this.AxiosUrl ='2019/test/news_details_2.asp?id='+this.$route.query.id
				axios({
					method: 'get',
					// baseURL : '/api',
					url: AxiosU ,
					
				}).then(
					(res)=>{
						next(vm => vm.NewsListHtml = JSON.parse(res.data))
					
					}
				)
	},
	beforeRouteUpdate (to, from, next) {
		 let AxiosU =process.env.API_HOST + '2019/test/news_details_2.asp?id='+ to.query.id
			// this.AxiosUrl ='2019/test/news_details_2.asp?id='+this.$route.query.id
				axios({
					method: 'get',
					// baseURL : '/api',
					url: AxiosU ,
					
				}).then(
					(res)=>{
						this.NewsListHtml = JSON.parse(res.data)
						  next()
					}
				)
    	
	   
	},
	methods:{
		// AxiosRequest(){
		// 		this.AxiosUrl =process.env.API_HOST + '2019/test/news_details_2.asp?id='+ this.$route.query.id
		// 	// this.AxiosUrl ='2019/test/news_details_2.asp?id='+this.$route.query.id
		// 		axios({
		// 			method: 'get',
		// 			// baseURL : '/api',
		// 			url:this.AxiosUrl ,
					
		// 		}).then(
		// 			(res)=>{
		// 				this.NewsListHtml = JSON.parse(res.data)
		// 			}
		// 		)
		// },
		
		GoUrl(){
			this.$router.go(-1);
			
		},

		...mapMutations(['SCREEN_WIDTH','OUTER_JOIN'])
	},
	watch:{
		 // '$route.query': 'AxiosRequest',
		// $route(){

		// 	this.RequestId = this.$route.query.id
		// 	console.log(this.RequestId )
		// 	console.log(this)
		// 	this.AxiosRequest()
		// },
		// RequestId:(val,oldVal)=>{
		// console.log('new: %s, old: %s', val, oldVal)
			// if(val == undefined){
			// 	this.AxiosRequest(this.$route.query.id)
			// }else{
			// 	this.AxiosRequest(val)
			// }
		// }
	},
	components:{
		headline,
		aLink 
	}
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/base.styl'
.title-font
	.a-style
		color #a01c5e !important
		font-weight bold  
		cursor pointer
		font-size 18px
.time-style	
	font-size 14px
.text-p
	span
		color #333333 !important
.NewsUrl
	color #a01c5e !important
	cursor pointer	
	text-decoration none
</style>