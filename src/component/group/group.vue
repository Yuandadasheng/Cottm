<template lang="html">
  	<div class="group">	
		<b-container>
			<b-row class="group-title">
				<b-col class="text-center">
					<span> {{name}} </span>
				</b-col>	
			</b-row>
			<b-row class="group-conent"  v-if="type == 1">
				<b-col md="4" class="text-left" v-for="items in group.newsList">
					<b-row class="group-conent-items">
						<b-col cols="12" class="items-title">
							<span> {{items.name}} </span>
						</b-col>
						<b-col  class="details" cols="12" v-if="group.details">
							<span> {{group.details}} </span>
						</b-col>
						<b-col  cols="12">
							<span> {{items.time}} </span>
						</b-col>	
					</b-row>
				</b-col>	
			</b-row>
			<b-row class="group-conent" v-else-if="type == 2">
				<b-col md="4" class="text-left" v-for="items in contentList">
					<b-row class="group-conent-items">
						<b-col cols="12" class="items-content">
							<span><i>{{items.name}}</i>  </span>
						</b-col>
						<b-col cols="12" class="items-content">
							<span>{{items.units}} </span>
						</b-col>
							
					</b-row>
				</b-col>	
			
			</b-row>	
			<b-row align-h="center" v-if="btuText">
					<b-col cols="10" sm="4" md="3" align-self="center" >
						<router-link :to="btuUrl">
							 <b-button   class="b-btu" variant="red" >
				                {{btuText}}
				            </b-button>
						</router-link>
							
					</b-col>
			</b-row>
			<b-row class="group-conent"  v-if="type == 3">
				<b-col md="4" class="text-left" v-for="(items,index) in NewsLists" :key="index" v-if="index <6">
					<b-row class="group-conent-items">
						<b-col cols="12" class="items-title" @click="NewsListId(JSON.parse(items).id,JSON.parse(items).NewsClass)" >
							<span> {{JSON.parse(items).content}} </span>
						</b-col>
						<b-col  class="details" cols="12" v-if="group.details" @click="NewsListId(JSON.parse(items).id,JSON.parse(items).NewsClass)">
							<span> {{group.details}} </span>
						</b-col>
						<b-col  cols="12">
							<span> {{JSON.parse(items).time}} </span>
						</b-col>	
					</b-row>
				</b-col>	
			</b-row>	
		</b-container>	
  	</div>
</template>

<script>
export default {
	props:{
		group:{
			type: Object
		},
		name:{
			type: String

		},
		type:{
			type: Number
			
		},
		contentList:{
			type: Array
		},
		btuText:{
			type:  String
		},
		btuUrl:{
			type:  String,
			default: ''
		},
		NewsLists:{
			type: null
		}
	},
	methods:{
		NewsListId(value,id){
			
			if(id == 2){
				this.$router.push({path:'/News/TradeNews/NewsDetails',query:{id: value}})
			}else if(id == 1) {
				this.$router.push({path:'/News/ExhibitionNews/NewsDetails',query:{id: value}})
			}
		
		}
	},
	computed:{
		titleName(){
			// return  this.group.name
		}
	}
}
</script>

<style lang="stylus" scoped>
.group
	background #a01c5e
	padding 30px 30px 0
	.group-title
		padding-bottom 20px
		span	
			color #fff
			font-weight 800
			font-size 28px
	.group-conent
		.group-conent-items
			border-left 1px solid #fff
			margin-bottom 20px
			height 155px
			color #fff
			.items-title
				span
					color #fff
					font-size 18px
					font-weight 800
					line-height 28px
					cursor pointer	
			.items-content
				span 
					color #fff
					font-size 14px
					font-weight 200
					line-height 24px	
			.details
				span 	
					font-size 	14px
					line-height 20px	
					cursor pointer
					&:hover
						color 	#33a8b9
					
.b-btu
	width 100%		
	background #fff
	color #a01c5e	
	font-weight 800
	font-size 18px
	height 48px
	line-height 30px
	margin-bottom 20px
	border 0
	vertical-align middle
	&:hover
		background #fff
		color 	#33a8b9
	&:active
		background #fff
		color 	#33a8b9		
			
	
	

</style>

