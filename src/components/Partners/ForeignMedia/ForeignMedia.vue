<template>
	<!-- 国外媒体 -->
	<div>
		<div class="main">
			<b-container :fluid="widthFluid" >
				<b-row>
					<b-col cols="12" >
						<headline :TitleName="TitleName"></headline> 
					</b-col>			
				</b-row>
				<b-row>
					<b-col cols="12" md="6">
						<div v-for="items in data.contentList">
							<div v-if="items.type == 1">
								<headline :TitleName="items.name" :fontSize="20" :align="items.textAlign"></headline> 
								<TextLayout :TextLayout ="items.desc"></TextLayout> 
								<p v-if="items.ImgUrl">
									<b-img :src="items.ImgUrl" rounded  fluid height="100"></b-img>
								</p>
								
							</div>
						</div>
					</b-col>	
					<b-col cols="12" md="6">
						<div v-for="items in data.contentList">
							<div v-if="items.type == 2">
								<headline :TitleName="items.name" :fontSize="20" :align="items.textAlign"></headline> 
								<TextLayout :TextLayout ="items.desc"></TextLayout> 
								<p v-if="items.ImgUrl">
									<b-img :src="items.ImgUrl" rounded  fluid height="100"></b-img>
								</p>
								
							</div>
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
import { ForeignMedia } from "../../../assets/data/index.js"
import { mapGetters , mapMutations } from 'vuex'

export default {
	data(){
		return{
			data : ForeignMedia
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
		discList,
		TextLayout,
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