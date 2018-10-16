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
									<div class="nav-col"
										@mouseenter="enter(index)"
								 		@mouseleave="leave()"
	  								 	v-if="menushow"
	  								 	>
	  								 	<router-link :to="navs.url" exact :class='{avtive:(seen&&current == index)}'> 
		  								 	<span class="nav-col-name" >
		  										 {{navs.name}}
		  									</span>
	  									</router-link>
	  									
	  									 <nav-list   v-if="menushow" :nav="navs.childrenList" :ListIndex="index"
	  									  v-show="seen&&current == index"> 
	  									 
	  									</nav-list>

	  								</div>
	  								<div  
	  									
		  								 class="nav-col"
		  								 v-else>
	  									<div class="nav-col-name nav-items" >
	  										<router-link :to="navs.url" exact> 
		  										<span class="nav-item">
		  										 {{navs.name}}
		  										</span>		
		  									</router-link>	
	  										 <span 
	  										 	v-if="navs.childrenList" 
	  										 	class="text-right nav-btu"
	  										 	@click="menuList(index)">
	  											
	  										</span>	
	  									</div>
	  									<div v-show="toggle" :class="{show:navItem==index && navSeen}" :ref="'menu'+index">
	  										<span   class="nav-col-name nav-list-name" v-for="items in navs.childrenList">
	  											<router-link :to="items.url" exact>
	  												<span>
	  													{{items.name}}
	  												</span>	
	  											</router-link>	
	  										</span>
	  										
	  									</div>
	  									
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
import axios from 'axios'
import NavList from '@/component/navList/navList'
import { mapState, mapMutations} from 'vuex'


export default {
	data(){
		return{
			navList:'',
			current: '',
			seen:false,
			menuListShow:'',
			menuListDisplay:'',
			toggle: false,
			navItem: '',
			navSeen:false,
			menuSeen:false,
			navListIndex :''

		}
	},
	created(){
     axios.get('static/data.json').then((res)=>{
          this.navList = res.data.navList
       })
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
		...mapState(['screenWidth','MinFluidWidth','MaxFluidWidth'])
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
			this.navItem = index
			if(this.navSeen){
				this.navSeen= false
			}else{
				this.navSeen= true
			}
		},
		...mapMutations(['SCREEN_WIDTH'])
	},
    //  beforeRouteEnter (to, from, next) {
    //    console.log(to)
    //    console.log(from)
    //    console.log(next)
    //    next();
    // },
    // beforeRouteUpdate (to, from, next) {
    //    console.log(to)
    //    console.log(from)
    //    console.log(next)
    //    next();
    // },
    //  beforeRouteLeave (to, from, next) {
    //    console.log(to)
    //    console.log(from)
    //    console.log(next)
    //    next();
    // },
    
	components:{
		NavList
	}
}
</script>

<style lang="stylus">
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
						padding-left 15px
						&:hover
							color #000
						span
							font-weight 800			
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
				
		

</style>

