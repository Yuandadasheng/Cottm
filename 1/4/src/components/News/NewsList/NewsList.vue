<template>
	<!-- 行业新闻 -->
	<div>


				
				<b-row>
					<b-col cols="12">
						<headline :TitleName="TitleName"></headline>  
					</b-col>
					
				</b-row>
				<b-row>
					<b-col cols="12" md="6" v-for="(items,index) in NewList">
						<p @click="NewsListId(JSON.parse(items).id)">
							
							<span class="NewsList-title">
								
								{{JSON.parse(items).content}}
							
							</span>
							
						</p>
						<p>
							<span>
								{{JSON.parse(items).time}}
							</span>
						</p>
					</b-col>
					
				</b-row>		

	</div>		
</template>

<script>
import headline  from '@/component/headline/headline'
import NewsList  from '@/components/News/NewsList/NewsList'
import NewsDetails  from '@/components/News/NewsDetails/NewsDetails'
import aLink  from '@/component/aLink/aLink'
import { TradeNews } from "../../../assets/data/index.js"
import { ExhibitionNews } from "../../../assets/data/index.js"
import { mapGetters , mapMutations } from 'vuex'
import axios from 'axios'

export default {
	props:{
		cid:{
			type:Number,
			default: 1 
		}
	},
	data(){
		return{
			data : TradeNews,
			data2 : ExhibitionNews ,
			NewsListHtml: '',
			NewsIp: 2,
			Newsshow: true,
			NewList: "",
			NewsId: Number,
			AxiosUrl:''
		}
	},
	created(){
		this.AxiosData()

	},
	mounted(){
		
	},
	computed:{
		TitleName(){
			if(this.cid == 2){
				return this.data.name
			}else {
				return this.data2.name
			}
			
		},
		...mapGetters(['widthFluid'])
	},
	methods:{
		AxiosData(){
			this.AxiosUrl = '2019/test/news2.asp?cid='+this.cid
			this.$nextTick(()=>{
				axios({

					method: 'get',
					baseURL : '/api',
					url: this.AxiosUrl
					
				}).then(
					(res)=>{
						this.NewList =res.data
						// this.NewsData=JSON.parse(this.New)
					}	
				)
			})	
		
		},

		NewsListId(value){
			this.Newsshow = false 
			this.NewsId = value
			if(this.cid == 2){
				this.$router.push({path:'/News/TradeNews/NewsDetails',query:{id: value}})
			}else if(this.cid == 1) {
				this.$router.push({path:'/News/ExhibitionNews/NewsDetails',query:{id: value}})
			}
		
		},
		...mapMutations(['SCREEN_WIDTH','OUTER_JOIN'])
	},
	components:{
		headline,
		aLink,
		NewsList,
		NewsDetails
	}
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/stylus/base.styl'
.title-font
	.a-style
		color #a01c5e !important
		font-weight bold  
		cursor pointer
		font-size 18px
.time-style	
	font-size 14px

.NewsList-title
	color #a01c5e
	font-weight 600
	font-size 18px
</style>