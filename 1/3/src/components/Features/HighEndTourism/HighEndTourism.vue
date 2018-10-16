<template>
	<!-- COTTM高端旅游 -->
	<div>
		<div class="main">
			<b-container :fluid="widthFluid" >
				<b-row>
					<b-col cols="12" >
						<headline :TitleName="TitleName"></headline>  
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="12" class="desc " >
						<p class="font-weight-bold text-center">{{data.desc}}</p>
					</b-col>	
				</b-row>
				<b-row>
					<b-col cols="12" md="6" class="i-bottom" v-for="imgs in data.imgUrl" >
						<b-img :src="imgs" rounded fluid-grow></b-img>
					</b-col>	
				</b-row>
				<b-row>
					<b-col cols="12" md="6" class="i-bottom" >
						<p>
							{{data.leftContent.desc}}
						</p>
					
						<p class="font-weight-bold">
							{{data.leftContent.title}}
						</p>
						<discList :discList="data.leftContent.ListContent" :fontSize="16"></discList>	
					</b-col>	
					<b-col cols="12" md="6" class="i-bottom" >
						<p v-for="Sendtext in data.rightContent.SendWord">
							
							<span>
								{{Sendtext.text}}
							</span> <br>
							<span class="font-weight-bold">
								{{Sendtext.SendThose}}
							</span>
						</p>
						<p>
							{{data.rightContent.desc}}
						</p>
						<p>
							<span v-for="rightDesc in data.rightContent.desc1" v-if="rightDesc.type != 1">
								{{rightDesc.text}}
							</span>
							<span v-else>
								<router-link :to="rightDesc.url">
									{{rightDesc.text}}
								</router-link>	
							</span>
							
						</p>
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
				leftContent:{
					desc: '',
					title: '',
					ListContent :[],

				},
				rightContent:{
					desc: ''
				}
			},
		}
	},
	created(){
		axios.get('../static/data/Features/HighEndTourism.json').then((res)=>{
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

<style lang="stylus" scoped>
@import '../../../assets/stylus/base.styl'

.font-size-2
	span
		font-size 14px !important 
.i-bottom
	margin-bottom 10px	
a
	color #a01c5e
	font-weight bold		
</style>