<template>
	<!-- 如何参观 -->
	<div>
		<div class="main">
			<b-container :fluid="widthFluid" >
				<b-row>
					<b-col cols="12" class="TitleName">
						<headline :TitleName="TitleName"></headline>  
					</b-col>
					<b-col cols="12" v-for="desc in data.desc" class="desc">
						<span >{{desc}} <br></span>
					</b-col>	
					<b-col md="6" v-for="imgs in data.img">
						<b-img :src="imgs" width="400"  fluid alt="image" />
					</b-col>
					<b-col md="6">
						<b-row >
							<b-col cols="12" v-for="types in data.type" >
								<div v-if="types.type != 'C'">
									<p class="listsTitle title-m-top" >{{types.name}}</p>
									<b-row>
										<b-col cols="12" v-for="items in  types.content">
											<span :style="{fontWeight: 800}">{{items.name}}</span>
											<span>
												<span v-if="items.type">
													<span v-for="item in items.text ">
														<span v-if="item.type == 'url'">
															<a :href="item.url">{{item.text}}</a>
														</span>
														<span v-else-if="item.type == 'url2'">
																<router-link :to="item.url" > 
															 		<span class="navListAvtive" >{{item.text}}</span>
															 	</router-link>
														</span>
														<span v-else>
															{{item.text}}
														</span>	
														
													</span>
												</span>
												<span v-else>
													{{items.text}}
												</span>
												
											</span>
											<span v-if="items.textList"><br></span>
											<span v-for="item in items.textList">
												{{item}} <br>
											</span>
										</b-col>	
									</b-row>	
									
								</div>
								
							</b-col>
						</b-row>	
					</b-col>	
					<b-col md="6">
						<b-row >
							<b-col cols="12" v-for="types in data.type" >
								<div v-if="types.type == 'C'">
									<p class="listsTitle title-m-top" >{{types.name}}</p>
									<b-row>
										<b-col cols="12" v-for="items in  types.content">
											<span :style="{fontWeight: 800}">{{items.name}}</span>
											<span>
												<span v-if="items.type">
													<span v-for="item in items.text ">
														<span v-if="item.type == 'Email'">
															<a :href="'mailto:'+item.url">{{item.text}}</a>
														</span>
														
														<span v-else>
															{{item.text}}
														</span>	
														
													</span>
												</span>
												<span v-else>
													{{items.text}}
												</span>
												
											</span>
											<span v-if="items.textList"><br></span>
											<span v-for="item in items.textList">
												{{item}} <br>
											</span>
										</b-col>	
									</b-row>	
									
								</div>
								
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
import { mapGetters , mapMutations } from 'vuex'
import  { HowVisit } from "../../../assets/data/index.js"

export default {
	data(){
		return{
			data : HowVisit
		}
	},
	created(){

	},
	computed:{
		TitleName(){
			return this.data.name
		},
		...mapGetters([
			'widthFluid'
		])
		
	},
	methods:{
		...mapMutations(['SCREEN_WIDTH'])
	},
	components:{
		headline,

	}
}
</script>


<style lang="stylus" scoped>
@import '../../../assets/stylus/base.styl'

.desc
	margin-bottom 8px;
	text-align center
	span
		font-size 18px
.listsTitle
	font-size 20px
	font-weight 700	
.title-m-top
	margin-top 10px	
a
	color #a01c5e
</style>