<template lang="html">
  	<div class="navlist" v-if="nav">
  		<b-list-group>
		  <b-list-group-item v-for="(items,index) in nav"  class="b-list-group-item-padding">
		  	<span  v-if="!items.outerjoin">
		  		<router-link :to="items.url" > 
			 		<span class="navListAvtive" >{{items.name}}</span>
			 	</router-link>
		  	</span>
		  	<span v-else>
		  		<a @click="OUTER_JOIN(items.url)">
		  			
			  		<span class="navListAvtive" >{{items.name}}</span>
			  		
		  		</a>
		  		
		 	</span>
		 
		
		 </b-list-group-item>
		</b-list-group>
  	</div>
</template>

<script>
import {  mapMutations} from 'vuex'
export default {
	props:['nav','ListIndex'],
	computed:{

	},
	methods:{
		// outerJoin(url){
		// 	this.OUTER_JOIN(url)
		// },
		...mapMutations([
				'OUTER_JOIN'
			])
				
	}
}
</script>

<style lang="stylus" scoped>
.navlist
	width 200px
	height atuo
	position absolute
	left 0
	padding-top 10px
	padding-bottom 20px
	background-color #000
	color  #fff
	z-index 1
	.list-group-item
		border none!important
		font-weight 800
		line-height 24px
		background-color #000
		a
			color #fff
			text-decoration: none;	
			span 
				color #fff
				font-size 14px
				font-weight 800
				line-height 24px
				&:hover
					color #764b61
	.b-list-group-item-padding
		padding 0
		span
			display inline-block
			width 100%
			height 100%
			padding 5px 10px	
			a
				display inline-block
				width 100%
				height 100%
							
.avtive
	.navListAvtive
		color #a01c5e !important
</style>

