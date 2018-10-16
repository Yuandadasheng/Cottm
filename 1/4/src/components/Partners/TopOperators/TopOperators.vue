<template>
	<!-- 中国出境旅游顶级运营商 -->
	<div>
		<div class="main">
			<b-container :fluid="widthFluid" >
				<b-row>
					<b-col cols="12" >
						<headline :TitleName="TitleName"></headline>  
					</b-col>
				</b-row>
				<b-row  v-for="items in data.content">
					<b-col cols="12" class="mt-4"  v-if="items.type == 1">
						<headline :TitleName="items.name" :align="items.leftAlgin" :fontSize="20"></headline>  
						<b-row class="mt-4" v-for="itemContent in items.contentList">
							<b-col>
								<headline :TitleName="itemContent.name" :align="items.leftAlgin" :fontSize="20"></headline>  
								<p>
									{{itemContent.desc}}
								</p>
								<p v-if="itemContent.advantage">
									<headline :TitleName="itemContent.advantage.name" :align="items.leftAlgin" :fontSize="16"></headline>  
									<discList :discList="itemContent.advantage.list" :fontSize="14"></discList>
								</p>
								<p>
									<b-img :src="itemContent.imgUrl" rounded  ></b-img>
								</p>
							</b-col>	
						</b-row>	
					</b-col>
					<b-col cols="12" class="mt-4" v-else>
						<headline :TitleName="items.name" :align="items.leftAlgin" :fontSize="20"></headline>  
						<b-row class="mt-4" >
				
							<!-- <b-col cols="12" md="6" v-if="itemContent.type == 1">
								<headline :TitleName="itemContent.name" :align="items.leftAlgin" :fontSize="20"></headline>  
								<p>
									{{itemContent.desc}}
								</p>
								<p>
									{{itemContent.type}}
								</p>
								<p>
									<b-img :src="itemContent.imgUrl" rounded  height="105"></b-img>
								</p>
							</b-col>	
							<b-col cols="12" md="6" v-if="itemContent.type == 2">
								<headline :TitleName="itemContent.name" :align="items.leftAlgin" :fontSize="20"></headline>  
								<p>
									{{itemContent.desc}}
								</p>
								<p>
									{{itemContent.type}}
								</p>
								<p>
									<b-img :src="itemContent.imgUrl" rounded  height="105" width="100"></b-img>
								</p>
							</b-col> -->
							<b-col cols="12" md="6" v-for="itemContent in items.contentList">
								<headline :TitleName="itemContent.name" :align="items.leftAlgin" :fontSize="20"></headline>  
								<p>
									{{itemContent.desc}}
								</p>
								
								<p>
									<b-img :src="itemContent.imgUrl" rounded fluid  height="105"></b-img>
								</p>
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
import discList  from '@/component/discList/discList'
import { TopOperators } from "../../../assets/data/index.js"
import { mapGetters , mapMutations } from 'vuex'

export default {
	data(){
		return{
			data : TopOperators
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
		discList
	}
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/base.styl'
	
</style>