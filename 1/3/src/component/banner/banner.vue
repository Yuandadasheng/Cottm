<template lang="html">
  	<div class="banner">
  		<b-container fluid>
  			<b-row>
  				<b-col class="banner-row" :style="{'height': heightSize ?'600px':'375px'}">
  					<b-container>
  						<b-row>
  							<b-col>
		  						<b-row class="cottm-banner" align-h="center" >
		  							<b-col  sm="10"  
		  							  lg="7"
		  							  xl="8" 
		  							  class="cottm-banner-col text-center"
		  							  :class = " heightSize ? 'cottm-margin-1' : 'cottm-margin-2'"
 		  							  align-self="center" >
		  								<i :style="{'background-size': screenWidth<=500 ?'120%':'100%'}"></i>
		  							</b-col>	
		  						</b-row>
		  						<b-row class="cottm-banner-btu" align-h="center">
		  							<b-col class="text-center">
										<p class="">
											<b-button class="banner-btu">Find out how</b-button>	
										</p>
		  							</b-col>	
		  						</b-row>	
		  					</b-col>
  						</b-row>	
  					</b-container>	
  					<div class="banner-img banner-img-left" v-show="heightSize">
  						<i></i>	
  					</div>
  					<div class="banner-img banner-img-right" v-show="heightSize">
  						<i></i>
  					</div>
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
         banner :'',
       }
 	},
 	created(){
    	// axios.get('static/data.json').then((res)=>{
     //      this.banner = res.data.banner
     //  	})
  	},
	computed:{
		heightSize:{
			get:function(){
				if(this.screenWidth<=this.MinFluidWidth) return false
				return true 
			},
			set:function(val){
				
			}
		},
		...mapState(['screenWidth','MinFluidWidth','MaxFluidWidth'])
	}
}
</script>

<style lang="stylus">
.banner
	.banner-row
		width 100%
		background url('../../assets/images/banner/water-bg.jpg') no-repeat
		background-size cover 
		position relative
		overflow hidden
		.cottm-banner
			.cottm-margin-1
				margin  50px 0 15px 0
				height 350px
			.cottm-margin-2
				margin  10px 0 
				height 265px
			.cottm-banner-col
				i
					width 100%
					height 100%
					display inline-block
					background url('../../assets/images/banner/Cottm-2019-banner.png') no-repeat
					background-size contain 
					background-position center center
		.cottm-banner-btu
			.banner-btu
				color #3ab8b7
				background #fff	
				font-size 18px		
				border none
				font-weight bold
				border-radius 12px	
				padding 12px 25px 
				position relative
				z-index 10
				&:hover
					color #fff
					background #a01c5e
		.banner-img
			width 650px
			height 650px
			position absolute
			top 0
			i
				position absolute
				width 100%			
		.banner-img-left
			i
				height 100%
				top 0
				left -65px
				display inline-block
				background url('../../assets/images/banner/c.png') no-repeat
				background-size cover 
				background-position center 250px
		.banner-img-right
			right 0	
			i
				height 150%
				right 0
				top -45px
				display inline-block
				background url('../../assets/images/banner/d.png') no-repeat
				background-size 142% 
				background-position center top
			
		
	

</style>

