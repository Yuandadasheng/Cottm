<template>
	<!-- 谁来参观 -->
	<div >
		<div class="main">
			<b-container :fluid="widthFluid" >
				<b-row>
					<b-col cols="12" v-for="desc in data.desc" class="desc">
						<span >{{desc}} <br></span>
					</b-col>
					<b-col cols="12">
						<headline :TitleName="TitleName"></headline>  
					</b-col>	
					
					<b-col md="6" class="leftContent">
						<b-col  v-for="contents in data.leftContent" class="left-col-padding">
							<p class="listsTitle" v-for="titleName in contents.name">{{titleName}}</p>
							
							<discList :discList="contents.content" :fontSize="contents.fontsize" :bold="contents.bold"></discList>
						</b-col>	
					</b-col>
					<b-col md="6">
							<p class="listsTitle" >{{rightTitleName}}</p>
							<b-row>
								<b-col md="6" v-for="items in data.rightContent.content">
									<p>
										<span class="company">{{items.company}}</span><br>
										<span class="post">{{items.post}}</span>
									</p>
								</b-col>	
							</b-row>	
					</b-col>
					
				</b-row>	
			</b-container>
		</div>
		
		<b-container fluid>
			<b-row>
				<b-col>
					<v-group 
						:name="data.bottomConent.name" 
						:type="data.bottomConent.type" 
						:contentList="data.bottomConent.content" 
						:btuText="data.bottomConent.btu.text"
						:btuUrl="data.bottomConent.btu.url">
					</v-group>
				</b-col>	
			</b-row>	
		</b-container>	
	</div>			
	
</template>

<script>
import headline  from '@/component/headline/headline'
import discList from '@/component/discList/discList'
import VGroup from '@/component/group/group'
import axios from 'axios'
import { mapGetters , mapMutations } from 'vuex'

export default {
	data(){
		return{
			data : {
				rightContent: {
					name: '',
					content:{}
				},
				bottomConent:{
					name:'',
					type:0,
					content : [],
					btu:{
						name: '',
						url: ''
					}
				}
			},
			
		}
	},
	created(){
		axios.get('../static/data/VisitInfo/WhoVisit.json').then((res)=>{
			this.data = res.data
      	});
	},
	computed:{
		TitleName(){
			return this.data.name
		},
		rightTitleName(){
			
			return this.data.rightContent.name
		},
		group(){
			return this.data.bottomConent
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
		discList,
		VGroup
	}
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/stylus/base.styl'


.listsTitle
	font-size 20px
	font-weight 700
.desc
	margin-bottom 8px;
	text-align center
	span
		font-size 18px
.contents
	margin-top 20px	
.leftContent
	margin-bottom 10px		
.left-col-padding
	padding 0	
.company
	font-weight 800
	font-size  16px
.post
	font-size  14px	
.container-fluid
	padding 0					
</style>