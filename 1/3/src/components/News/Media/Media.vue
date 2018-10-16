<template>
	<!-- 媒体 注册 -->
	<div>
		<div class="main">
			<b-container :fluid="widthFluid" >
				<b-row>
					<b-col cols="12" >
						<headline :TitleName="TitleName"></headline>  
					</b-col>
					<b-col md="6">
						<p class="bold-weight">
							<span>
								{{data.content}}
							</span>
							<span>
								<a :href="'mailto:'+data.Email">{{data.Email}}</a>
							</span>
						</p>
						<h3>
							<b>{{data.title}}</b>
						</h3>
						<p>
							{{data.text}}
						</p>
						 <b-button  :href="data.btuUrl"  class="b-btu">
			                {{data.btuText}}
			            </b-button>
					</b-col>	
					<b-col md="6">
						<b-img :src="data.imgUrl"   fluid alt="image" />
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
		axios.get('../static/data/News/Media.json').then((res)=>{
			this.data = res.data
      	});
 
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
		headline
	}
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/stylus/base.styl'
.bold-weight
	font-weight 800
a
	color #a01c5e	
.b-btu
	background #a01c5e	
	width 114px
	color #fff
	font-weight bold
	border none
	text-align center
	line-height 30px
	&:hover
		border 1px solid #a01c5e
</style>