<template lang="html">
  	<div class="footer">
  		<b-container fluid>
  			<b-row class="QuickLinks">
  				<b-col>
  					<b-container :fluid="widthFluid">
			  			<b-row class="title">
			  				<b-col>
			  					<span>{{footer.title}}</span>
			  				</b-col>	
			  			</b-row>	
			  			<b-row class="lists">
			  				<b-col md="6" class="list" v-for="(items,key) in footer.lists">
			  					<b-row v-for="item in items">
			  						<b-col class="listItem">
			  							<div class="itemName" :style="{'background-position': '0 '+item.iconTop+'px'}" >
			  								
			  								<div @click="showModal" class="font-weight-bold " v-if="item.type == 1">
			  									{{item.name}}
												
			  								</div>
			  								<div class="font-weight-bold "  v-else-if=" item.type == 2">
			  									<router-link :to="item.url">  
													{{item.name}}	
												</router-link>	
			  								</div>
			  								<span class="font-weight-bold " @click="OUTER_JOIN(item.url)" v-else>
			  									{{item.name}}
			  								</span>
			  								
			  							</div>
										
			  						</b-col>	
			  					</b-row>	
			  				</b-col>
			  				<b-col>
			  					<b-modal ref="myModalRef" hide-footer title="关注微信">
										<div class="d-block text-center">
											 <b-img :src="footer.wechatImg" fluid></b-img>	

										</div>
								</b-modal>
			  				</b-col>	
			  			</b-row>
			  			
			  		</b-container>	
  				</b-col>	
  			</b-row>	
  			<b-row class="foot">
  				<b-col class="text-center" >
  					<span>{{footer.copyright}}</span><span>{{footer.filing}}</span>
  				</b-col>
  			</b-row>		
  		</b-container>	

  	</div>
</template>

<script>
import { footer } from "../../assets/data/index.js"
import aLink  from '@/component/aLink/aLink'
import { mapState,mapGetters, mapMutations} from 'vuex'
export default {
	data(){
		return{
			footer: footer
			
		}
	},
	created(){
		
      	this.SCREEN_WIDTH();

	},
	computed:{
		...mapGetters([
			'widthFluid'
		])
	},
	methods:{
		 showModal () {
	      this.$refs.myModalRef.show()
	    },
	    hideModal () {
	      this.$refs.myModalRef.hide()
	    },
		...mapMutations(['SCREEN_WIDTH','OUTER_JOIN'])
	},
	components:{
		 aLink
	}
}
</script>

<style lang="stylus" scoped>
.footer
	.QuickLinks
		padding 30px 0 20px
		background #eee
		.title
			margin-bottom 20px
			span
				color #000
				font-size 22px
				color 30px
				font-weight 800
		.lists
			.list
				.listItem
					cursor pointer
					.itemName
						border-bottom 1px solid #777	
						padding 8px 0
						font-size 16px 
						padding-left 45px
						color #000
						font-weight 800
						background url('../../assets/images/icons-sprite.png') no-repeat
						span
							display inline-block
							width 100%
							hieght 100%
	.foot
		padding 20px 0 20px
		background #000
		span
			font-size 14px
			color #fff
			font-weight 800
			line-height 20px
a
	text-decoration none
	font-weight bold
	color #000
	&:hover
		color #000
		text-decoration none
</style>

