<template lang="html">
  	<div class="navber">
  		<b-container fluid>
  			<b-row class="menu" v-show="!menushow">
				<b-col class="menu-col text-center" @click="navShow()">
					<span>菜单</span>
				</b-col>	
  			</b-row>
  			<b-row v-show="menushow" :class="{show:menuSeen}"  ref="menuListshow">
  				<b-col class="menuList">
  					<b-container :fluid="menuFluid">
  							
  						<b-row >
  							<b-col   
	  							class="nav-row" 
	  							:class="[MinFluidWidth<screenWidth ? 'flex-row' : 'flex-column']" >
								<div :class="{'men-show':!menushow}" class="menuName" v-for="(navs,index) in navList" >
									<!-- PC导航 -->
									<div class="nav-col"
										@mouseenter="enter(index)"
								 		@mouseleave="leave()"
	  								 	v-if="menushow"
	  								 	>
	  								 	<span v-if="!navs.outerjoin">
	  								 		<router-link :to="navs.url"  :class='{avtive:(seen&&current == index)}'> 
		  								 	<span class="nav-col-name" >
		  										 {{navs.name}}
		  									</span>
	  										</router-link>
	  								 	</span>
	  								 	<span v-else>
	  								 		<a @click="OUTER_JOIN(navs.url)"  :class='{avtive:(seen&&current == index)}'>
	  								 				<span class="nav-col-name" >
				  										 {{navs.name}}
				  									</span>
	  								 		</a>
	  								 	</span>
	  									<transition name="fade">
		  									 <nav-list   v-if="menushow"
				  									  :nav="navs.childrenList" 
				  									  :ListIndex="index"
				  									  v-show="seen&&(current == index)&& !navs.outerjoin" 
				  									  @navIndex="navIndex($event,index)"> 
		  									</nav-list>
										</transition>
	  								</div>
	  								<!-- 移动端导航 -->
	  								<div  class="nav-col"  v-else>
	  									<div class="nav-col-name nav-items" >
	  										<b-container fluid>
  												<b-row>
		  											<b-col cols="9">
														<span v-if="!navs.outerjoin" >
					  								 		<router-link :to="navs.url" > 
						  										<span class="nav-item">
						  										 {{navs.name}}
						  										</span>		
						  									</router-link>	
					  								 	</span>
					  								 	<span v-else>
					  								 		<a @click="OUTER_JOIN(navs.url)" >
					  								 				<span class="nav-item">
							  										 {{navs.name}}
							  										</span>
					  								 		</a>
					  								 	</span>
		  											</b-col>	
		  											<b-col cols="3" class="text-right">
	  													 <span 
				  										 	v-if="navs.childrenList" 
				  										 	class="text-right nav-btu"
				  										 	@click="menuList(index)">
				  											
				  										</span>	
		  											</b-col>
		  										</b-row>	
	  										</b-container>	
	  									</div>
	  									<!-- 移动端下拉 -->

	  									<transition >
		  									<div v-show="navSeen && navItem == index"  :ref="'menu'+index">

		  										<span   class="nav-col-name nav-list-name" v-for="items in navs.childrenList">
		  											<span  v-if="!items.outerjoin">
												  		<router-link :to="items.url" >
			  												<span>
			  													{{items.name}}	
			  												</span>	
			  											</router-link>	
												  	</span>
												  	<span v-else>
												  		<a @click="OUTER_JOIN(items.url)">
													  		<span >{{items.name}}</span>
												  		</a>
												  		
												 	</span>

		  											
		  										</span>
		  										
		  									</div>
	  									</transition>
	  								</div>
								</div>
  								
  							</b-col>	
  						</b-row>	
  					</b-container>	
  				</b-col>
  			</b-row>	
  				
  		</b-container>	
  		
  	</div>
</template>

<script>
import NavList from '@/component/navList/navList'
import { mapState, mapGetters , mapMutations} from 'vuex'
import {nav} from "../../assets/data/index.js"


export default {
	data(){
		return{
			navList : nav,
			current:'',
			seen:false,
			menuListShow:'',
			menuListDisplay:'',
			navItem: 0,
			navSeen:false,
			menuSeen:false,
			navListIndex :''

		}
	},
	created(){
    
	},
	computed:{
		menushow:{
			get:function(){
				if(this.screenWidth<=this.MinFluidWidth) return false
				return true 
			},
			set:function(val){
				
			}
		},
		menuFluid(){
			 if(this.screenWidth && this.screenWidth<this.MaxFluidWidth){
		          return true
		      }
		      return false
		},
		...mapState(['screenWidth','MinFluidWidth','MaxFluidWidth']),
		...mapGetters(['widthFluid'])
	},
	methods:{
		enter(index){
			this.seen = true
			this.current= index
		},
		leave(){
			this.seen = false;
        	this.current = null;
		},
		navShow(){
			this.menuSeen= !this.menuSeen
		},
		menuList(index){
			if(this.navSeen){
				if(this.navItem != index){
					this.navItem = index
					this.navSeen= true
				}else{
					this.navSeen= false
				}
			}else{
				this.navItem = index
				this.navSeen= true
			}
		},
		toggle( ){
			
		},
		// navIndex (val,index){
		// 	   console.log(val)
  //  				 console.log(index)
		// },
		...mapMutations(['SCREEN_WIDTH','OUTER_JOIN'])
	},
   
	components:{
		NavList
	}
}
</script>

<style lang="stylus" scoped>
.navber
	margin-top 20px
	width 100%
	.menu
		background-color #3ab8b7
		.menu-col 
			height 44px
			line-height 44px
			font-weight bold
			color #fff
			font-size 18px
			span
				font-weight bold
	.menuList	
		background-color #a01c5e
		.nav-row
			width 100%
			// height 44px
			margin-top 3px
			font-size 16px
			color #fff
			// .nav-col{
			// 	font-weight 800
			// }
			&.flex-row	
				display flex
				flex-direction row
				flex-wrap nowrap
				justify-content  space-between
				align-items center
				height 44px
				line-height 44px
				.nav-col
					a
						color #fff
					&:hover
						color #6ebcc2
					.nav-col-name
						display inline-block	
						
			&.flex-column
				display flex
				flex-direction column
				flex-wrap nowrap
				justify-content  space-between
				align-items flex-start
				height atuo
				padding 0
				
				.nav-col
					width 100%
					.nav-col-name
						width 100%
						border-bottom 1px solid #aaa
						&:hover
							color #000
						.avtive
							span
								color #000!important
						span
							font-weight 800	
							display block
							a
								display block
					.nav-list-name
						padding-left 30px
						font-size 14px	
						display inline-flex
					.nav-items
						display flex
						justify-content space-between	
						align-items flex-start	
						line-height 44px
						height 44px
						a
							text-decoration none
							&:hover
								text-decoration none	
						.nav-item
							width 100%
							
						.nav-btu
							padding  8px 20px	
							line-height 44px
							height 44px
							background url('../../assets/images/triangle.png')no-repeat
							background-position center center
			.men-show
				width: 100%		
			.menuName
				position relative		
				.nav-col
					font-weight 800	
					cursor pointer
					position relative
					height inherit
					.nav-col-name
						height inherit
						font-weight 800	
						line-height 44px
						a
							text-decoration none
						span
							font-weight 800
							color #fff
.show
	display block!important							
.avtive
	.nav-col-name
		color rgb(51, 168, 185) !important					
				
.fade-enter-active 
	transition all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0)
.fade-leave-active 
	transition all .2s ease
.fade-enter, .fade-leave-to
	opacity 0
	

			
		

</style>

