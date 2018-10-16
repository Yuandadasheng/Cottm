<template lang="html">
  	<div class="navlist" v-if="nav">
  		<b-list-group>
		  <b-list-group-item v-for="(items,index) in nav"  >
		 	<router-link :to="items.url" exact > 
		 		<span class="navListAvtive" @click="navIndex">{{items.name}}</span>
		 	</router-link>
		 </b-list-group-item>
		</b-list-group>
  	</div>
</template>

<script>
export default {
	props:['nav','ListIndex'],
	computed:{

	},
	created(){
		// this.navIndex()
	},
	methods:{
		navIndex(){
			let dataIndex = this.ListIndex
			this.$emit('navIndex',dataIndex)
			 // this.$refs.foodsWrapper.querySelectorAll('.avtive')
			// console.log(this.$refs.foodsWrapper.querySelectorAll('.avtive'))
		}
	},
	
	

}
</script>

<style lang="stylus">
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
.avtive
	.navListAvtive
		color #a01c5e !important
</style>

