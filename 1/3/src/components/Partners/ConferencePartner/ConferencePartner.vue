<template>
	<!-- 会议合作伙伴 -->
	<div>
		<div class="main">
			<b-container :fluid="widthFluid" >
				<b-row align-h="center">
					<b-col cols="12" md="10">
						<headline :TitleName="TitleName"></headline> 
					</b-col>			
				</b-row>
				<b-row align-h="center">
					<b-col cols="12" md="10">
							<p class="text-center">
								<b-img :src="data.imgUrl" rounded  fluid></b-img>
							</p>
					</b-col>			
				</b-row>
				<b-row align-h="center">
					<b-col cols="12" md="10">
							<p class="text-justify">
								{{data.desc}}
							</p>
					</b-col>			
				</b-row>
				<b-row align-h="center">
					<b-col cols="12" md="10">
						<div v-for="items in data.contentList">
							
							<headline :TitleName="items.name" :fontSize="20" :align="items.textAlign"></headline> 
							
						
							<p v-if="items.img" v-for="item in items.img" class="text-center">
								<b-img :src="item" rounded  fluid></b-img>
							</p>
							<TextLayout :TextLayout="items.desc" ></TextLayout>	
							
						</div>
					</b-col>			
				</b-row>
			</b-container>
		</div>
	</div>		
</template>

<script>
import headline  from '@/component/headline/headline'
import discList  from '@/component/discList/discList'
import TextLayout  from '@/component/TextLayout/TextLayout'
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
		axios.get('../static/data/Partners/ConferencePartner.json').then((res)=>{
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
		discList,
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