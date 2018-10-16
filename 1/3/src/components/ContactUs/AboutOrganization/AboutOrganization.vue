<template>
	<!-- 关于组织 -->
		<div>
		<div class="main">
			<b-container :fluid="widthFluid" >
				
				<b-row>
					<b-col cols="12" >
						<headline :TitleName="TitleName"></headline>  
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="12" >
						<TextLayout :TextLayout="data.desc"></TextLayout>
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
		axios.get('../static/data/ContactUs/AboutOrganization.json').then((res)=>{
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
		headline,
		TextLayout
	}
}
</script>

<style lang="stylus" >
@import '../../../assets/stylus/base.styl'
.a-style
	color #a01c5e !important
	font-weight bold	
	cursor pointer
</style>