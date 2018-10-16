<template>
	<!-- 赞助商 -->
	<div>
		<div class="main">
			<b-container :fluid="widthFluid" >
				<b-row v-for="dataItem  in data" align-h="center">
					<b-col cols="12" >
						<headline :TitleName="dataItem.name"></headline>  
					</b-col>
					<b-col cols="12" md="10" v-for="dataList in dataItem.list" class="mt-4">
						<headline :TitleName="dataList.name" :fontSize="20" ></headline> 
						<p class="text-center" v-if="dataList.imgUrl">
							<b-img :src="dataList.imgUrl" fluid alt=""></b-img>
						</p> 
						<div v-for="(texts,index) in dataList.text"   :class="[dataList.url ? 'text-center' : 'text-justify' ]"  class="pb-4">
							<span>
								{{texts}}
							</span>
							<span v-if="dataList.url">
								<a @click="OUTER_JOIN(dataList.url)" class="a-style">{{dataList.url}}</a>
							</span>
							
						</div>
						<div v-if="dataList.contact">
								<p v-for="dataContact in dataList.contact">
									<span>{{dataContact.name}}</span>
									<span v-if="dataContact.type == 'link'">
										<a  @click="OUTER_JOIN(dataContact.contactWay)" class="a-style">{{dataContact.contactWay}}</a>
									
									</span>
									<span v-else-if="dataContact.type == 'img'">
										<br><b-img :src="dataContact.contactWay" fluid alt=""></b-img>
									
									</span>
									<span v-else>
										{{dataContact.contactWay}}
									
									</span>
								</p>
							</div>
					</b-col>
				</b-row>
			</b-container>
		</div>
	</div>		
</template>

<script>
import headline  from '@/component/headline/headline'
import { Sponsors } from "../../assets/data/index.js"
import { mapGetters , mapMutations } from 'vuex'

export default {
	data(){
		return{
			data : Sponsors
		}
	},
	created(){
	},
	computed:{
		...mapGetters(['widthFluid'])
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
@import '../../assets/stylus/base.styl'
.a-style
	color #a01c5e !important
	font-weight bold	
	cursor pointer
	
</style>