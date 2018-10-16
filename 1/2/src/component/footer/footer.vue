<template lang="html">
  	<div class="footer">
  		<b-container fluid>
  			<b-row class="QuickLinks">
  				<b-col>
  					<b-container :fluid="Fluid">
			  			<b-row class="title">
			  				<b-col>
			  					<span>{{title}}</span>
			  				</b-col>	
			  			</b-row>	
			  			<b-row class="lists">
			  				<b-col md="6" class="list" v-for="(items,key) in lists">
			  					<b-row v-for="item in items">
			  						<b-col class="listItem">
			  							<div class="itemName" :style="{'background-position': '0 '+item.iconTop+'px'}">
			  								{{item.name}}
			  							</div>
										
			  						</b-col>	
			  					</b-row>	
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
import axios from 'axios'
import { mapState, mapMutations} from 'vuex'
export default {
	data(){
		return{
			footer: '',
			lists: '',
			title: ''
		}
	},
	created(){
		axios.get('static/data.json').then((res)=>{
          this.footer = res.data.footer
          this.lists = res.data.footer.QuickLinks.lists
          this.title = res.data.footer.QuickLinks.title
         
      	})
	},
	computed:{
		Fluid(){
			 if(this.screenWidth && this.screenWidth<this.MaxFluidWidth){
		          return true
		      }
		      return false
		},
		...mapState(['screenWidth','MinFluidWidth','MaxFluidWidth'])
	}
}
</script>

<style lang="stylus">
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
	.foot
		padding 20px 0 20px
		background #000
		span
			font-size 14px
			color #fff
			font-weight 800
			line-height 20px

</style>

