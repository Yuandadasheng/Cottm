<template>
	<!-- 展会营销 -->
	<div>
		<div class="main">
			<b-container :fluid="widthFluid" >
				<b-row>
					<b-col cols="12" >
						<headline :TitleName="TitleName"></headline>  
					</b-col>
				</b-row>
				<b-row>
					<b-col>
						<b-img :src="data.imgUrl" rounded fluid-grow></b-img>	
					</b-col>	
				</b-row>
				<b-row>
					<b-col cols="12">
						<p class="title-1">
							{{data.title}}
						</p>
						<p class="desc-1">
							{{data.desc}}
						</p>
					</b-col>	
					<b-col md="6" v-for="items in data.Content">
						
						<div class="desc-1">
							<discList :discList="items">
							</discList>	
						</div>
					</b-col>	
				</b-row>
				<b-row>
					<b-col cols="12" >
						{{data.attention.name}}
					</b-col>
					<b-col cols="12" v-for="item in data.attention.list">
						{{item.name}}&nbsp;{{item.urlText}}
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
				attention:{
					name:"",
					list:{}
				}
			},
		}
	},
	created(){
		axios.get('../static/data/News/ExhibitionMarketing.json').then((res)=>{
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

<style lang="stylus">
@import '../../../assets/stylus/base.styl'

.title-1
	font-size 20px
	font-weight 800	
	padding-top 15px
	
</style>