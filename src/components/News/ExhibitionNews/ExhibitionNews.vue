<template>
	<!-- 行业新闻 -->
	<div>
		<div class="main">
		
			<b-container :fluid="widthFluid" >
				<b-row>
					<b-col>
						
						<keep-alive >
								<router-view :cid="1"></router-view> 
						</keep-alive>	
					</b-col>	
				</b-row>	
			</b-container>	
			
		</div>
	</div>		
</template>

<script>
import headline  from '@/component/headline/headline'


import { mapGetters , mapMutations } from 'vuex'
import axios from 'axios'

export default {
	data(){
		return{
			
		}
	},
	created(){
		
		
	},
	mounted(){
		
	},
	computed:{
		
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
@import '../../../assets/stylus/base.styl'
.title-font
	.a-style
		color #a01c5e !important
		font-weight bold  
		cursor pointer
		font-size 18px
.time-style	
	font-size 14px

.NewsList-title
	color #a01c5e
	font-weight 600
	font-size 18px
	
</style>