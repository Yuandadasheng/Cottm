<template>
	<!-- 买家报名 -->
	<div>
		<div class="main">
			<b-container :fluid="widthFluid" >
				<b-row>
					<b-col cols="12" >
						<headline :TitleName="TitleName"></headline>  
					</b-col>
				</b-row>
			
				<b-row>
					<b-col cols="12" md="6" v-for="but in data.btuText" class="text-center but-a">
						<b-button @click="OUTER_JOIN(but.url)" class="b-btu">{{but.name}}</b-button>
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="12"class="text-center ">
						<p>{{ data.text}} <a href="'mailto:'+data.Email" target="_blank">{{data.Email}}</a></p>
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="12" md="4" v-for="IMGURLS in data.imgUrl" class="imgPadding text-center">
						<b-img :src="IMGURLS" rounded fluid> </b-img>
					</b-col>
				</b-row>
			</b-container>
		</div>
	</div>		
</template>

<script>
import headline  from '@/component/headline/headline'
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
		axios.get('../static/data/Buyers/Buyers.json').then((res)=>{
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
		headline
	}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/base.styl'

.imgPadding
	padding 10px
	
.b-btu
	background #a01c5e	
	color #fff
	font-weight bold
	border none
	text-align center
	line-height 30px
	&:hover
		border 1px solid #a01c5e
		background #fff
		color #a01c5e
.but-a
	padding-bottom 10px
a
	color #a01c5e
	font-weight 800
</style>