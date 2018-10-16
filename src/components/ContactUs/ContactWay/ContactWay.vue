<template>
	<!-- 联系我们 -->
	<div>
		<div class="main">
			<b-container :fluid="widthFluid" >
				
				<b-row>
					<b-col cols="12" >
						<headline :TitleName="TitleName"></headline>  
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="12" v-for="listItem in data.ContactLists">
						<p>
							<headline :mb="listItem.mb"
								:align = "listItem.align"
								:fontSize = "listItem.fontSize"
								:TitleName="listItem.name">
							</headline>  
						</p>
						 <div v-for="ContactsItems in listItem.lists">
						 	<p v-if="ContactsItems.name">
								<headline 
									:align = "listItem.align"
									:fontSize = "ContactsItems.fontSize"
									:TitleName="ContactsItems.name">
								</headline>  
							</p>
							<b-row align-h="center">
								<b-col cols="10" md="11">
										<b-row>
											<b-col cols="12" lg="4" md="6" sm="6"  v-for="items in ContactsItems.Contacts">
												<p class="font-weight-bold fontSize-24">
													{{items.name}}
												</p>
												<p class="font-weight-bold mb-1">
													{{items.post}}
												</p>
												<p  class="font-weight-bold mb-1">
													<span v-if="items.email">
														<a :href="'mailto:' + items.email " target="_blank" class="a-style">{{items.email}}</a>
													</span>
												</p>
												<p>
													{{items.phone}}
												</p>
											</b-col>	
										</b-row>	
								</b-col>	
							</b-row>	
							
						 </div>  
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="12" >
						<p><br></p>
						<p><br></p>
						<p><br></p>
						<p><br></p>
						<p><br></p>

					</b-col>
				</b-row>
				
			</b-container>
		</div>
	</div>		
</template>

<script>
import headline  from '@/component/headline/headline'
import TextLayout from '@/component/TextLayout/TextLayout'
import { ContactWay } from "../../../assets/data/index.js"
import { mapGetters , mapMutations } from 'vuex'

export default {
	data(){
		return{
			data : ContactWay 
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
		TextLayout
	}
}
</script>

<style lang="stylus" >
@import '../../../assets/stylus/base.styl'
.fontSize-24
	font-size: 20px;
.a-style
	color #a01c5e !important
	font-weight bold	
	cursor pointer
</style>