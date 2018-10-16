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
					</span>
					<span v-if="NewsListHtml.NewsSource">
						来源：<a :href="NewsListHtml.NewsURL" target="_blank">
							 {{NewsListHtml.NewsSource}}
						</a>
						
					</span>
				</p>
				
			</b-col>	
			<b-col cols="12">
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
			AxiosUrl: ''

		}
	},
	created(){

		this.AxiosUrl = '2019/test/news_details_2.asp?id='+this.$route.query.id
			axios({
				method: 'get',
				baseURL : '/api',
				url:this.AxiosUrl ,
				
			}).then(
				(res)=>{
					this.NewsListHtml = JSON.parse(res.data)
				}
			)
	},
	computed:{

		...mapGetters(['widthFluid'])
	},
	methods:{
		GoUrl(){
			this.$router.go(-1);
			
		},

		...mapMutations(['SCREEN_WIDTH','OUTER_JOIN'])
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
</style>