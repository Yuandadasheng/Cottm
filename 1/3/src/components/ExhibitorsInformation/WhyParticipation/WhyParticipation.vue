<template lang="html">
	<!-- 为何参展 -->

  	<div >
  		<div class="main">
  			<b-container  :fluid="widthFluid">
	      		<b-row >
	        		<b-col cols="12">
	        			<headline :TitleName="TitleName"></headline>
						
	        		</b-col>
	        		<b-col cols="12">
	        			<p class="text-center">
	        				<span class="TitleDesc" v-for="item in data.desc">{{item}}   <br></span>
	        			</p>
							
	        		</b-col>
	        		<b-col cols="12" md="6"  v-for="items in data.content">
	        			<p>
	        				<img :src="items.img" alt="">
	        			</p>	
	        			<p>
	        				<span class="listsTitle">{{items.title}}</span>
	        			</p>
	        			
	        			<b-row>
	        				<b-col>
	        					<ul class="disc-ul">
			        				<li class="disc-li" v-for="text in items.desc">{{text}}</li>
			        				
			        			</ul>
			        			<div  v-for="btu in items.btu" class="text-center">
			        				 <b-button  :href="url"  class="b-btu" variant="red">
						              	 {{btu.text}}
						            </b-button>
			        					
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
import { mapGetters ,mapMutations } from 'vuex'
import axios from 'axios'


export default {
	data(){
		return{
			data: '',
			url:''
		}
	},
	
	created(){
		axios.get('../static/data/ExhibitorsInformation/WhyParticipation.json').then((res)=>{
          this.data = res.data
      	});
      	
	},
	computed: {
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
		headline
	}
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/stylus/base.styl'

.listsTitle
	font-size 20px
	font-weight 700
.b-btu
	background #a01c5e	
	width 114px
	font-weight bold
	border none
	color #fff
	text-align center
	line-height 30px
	&:hover
		background #fff
		border 1px solid #a01c5e	
		color 	#a01c5e
	&:active
		background #fff
		border 1px solid #a01c5e	
		color 	#a01c5e	
</style>

