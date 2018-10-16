<template>
	<!-- 技术服务商 -->
	<div>
		<div class="main">
			<b-container :fluid="widthFluid" >
				<b-row>
					<b-col cols="12" >
						<p  class="text-center">
							<b-img :src="data.img" rounded  fulid></b-img>
						</p>
					</b-col>			
				</b-row>
				<b-row>
					<b-col cols="12" v-for="items in data.contentList">
						<p  class="text-justify">
							<TextLayout :TextLayout="items.desc"  ></TextLayout>	
						</p>
					</b-col>			
				</b-row>
				<!-- <b-row>
					<b-col cols="12" md="6">
						<div v-for="items in data.contentList">
							<div v-if="items.type == 1">
								<headline :TitleName="items.name" :fontSize="20" :align="items.textAlign"></headline> 
								<div v-for="item in items.desc">
									<p v-if="item.type == 1" class="text-justify">
										<span>{{item.text}}</span>
									</p>
									<p v-else-if="item.type == 2" class="text-justify">
										<span v-for="itemConetnt in item.content">
											<span v-if="itemConetnt.type == 1">
												{{itemConetnt.text}}
											</span>
											<span v-if="itemConetnt.type == 2">
												<a :href="itemConetnt.url" class="a-style" target="_blank">{{itemConetnt.text}}</a>
											</span>
											<span v-if="itemConetnt.type == 3">
												{itemConetnt.text} <br>
											</span>
										</span>
									</p>
								</div>
								<p v-if="items.ImgUrl">
									<b-img :src="items.ImgUrl" rounded  ></b-img>
								</p>
								
							</div>
						</div>
					</b-col>	
					<b-col cols="12" md="6">
						<div v-for="items in data.contentList">
							<div v-if="items.type == 2">
								<headline :TitleName="items.name" :fontSize="20" :align="items.textAlign"></headline> 
								<div v-for="item in items.desc">
									<p v-if="item.type == 1" class="text-justify">
										<span>{{item.text}}</span>
									</p>
									<p v-else-if="item.type == 2" class="text-justify">
										<span v-for="itemConetnt in item.content">
											<span v-if="itemConetnt.type == 1">
												{{itemConetnt.text}}
											</span>
											<span v-if="itemConetnt.type == 2">
												<a :href="itemConetnt.url" class="a-style" target="_blank">{{itemConetnt.text}}</a>
											</span>
											<span v-if="itemConetnt.type == 3">
												{itemConetnt.text} <br>
											</span>
										</span>
									</p>
								</div>
								<p v-if="items.ImgUrl">
									<b-img :src="items.ImgUrl" rounded   height="100"></b-img>
								</p>
								
							</div>
						</div>
					</b-col>			
				</b-row> -->
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
		axios.get('../static/data/Partners/ServiceProvider.json').then((res)=>{
			this.data = res.data
      	});
  
	},
	computed:{
		
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