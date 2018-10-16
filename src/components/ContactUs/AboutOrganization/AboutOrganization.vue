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
					<b-col cols="12" class="text-center">
						<b-img :src="data.img" fluid></b-img>
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
import { AboutOrganization } from "../../../assets/data/index.js"
import { mapGetters , mapMutations } from 'vuex'

export default {
	data(){
		return{
			data : AboutOrganization
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
.a-style
	color #a01c5e !important
	font-weight bold	
	cursor pointer
</style>