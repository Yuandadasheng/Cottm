<template>
	<!-- 为何参观 -->
		<div class="main">
			<b-container :fluid="widthFluid" >
					<b-row>
						<b-col cols="12">
							<headline :TitleName="TitleName"></headline>  
						</b-col>
						<b-col cols="12" >
							<describe :desc="data.desc"></describe>
						</b-col>	
						
						<b-col md="6" v-for= "lists in data.ContentList">
								<p class="listsTitle">{{lists.name}}</p>
								<discList :discList="lists.contents" :cols="lists.cols" :md="lists.md"></discList>
						</b-col>		
				
						<b-col md="6" v-for="imgs in  data.imgUrl" class="img-Col" >
							<b-img :src="imgs" width="400"  fluid alt="image" />
						</b-col>	
					</b-row>	
				</b-container>	
		</div>
				
		
</template>

<script>
import headline  from '@/component/headline/headline'
import describe  from '@/component/describe/describe'
import discList from '@/component/discList/discList'
import  { WhyVisit } from "../../../assets/data/index.js"
import { mapGetters , mapMutations } from 'vuex'

export default {
	data(){
		return{
			data : WhyVisit,
		}
	},
	created(){
		// axios.get('../static/data/VisitInfo/WhyVisit.json').then((res)=>{
		// 	this.data = res.data
  //     	});
      	this.SCREEN_WIDTH();
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
		describe,
		discList
	}
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/stylus/base.styl'
.listsTitle
	font-size 22px
	font-weight 700
.img-Col
	margin-bottom 10px

</style>