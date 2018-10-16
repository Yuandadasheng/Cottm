<template lang="html">
  	<div class="group">	
		<b-container>
			<b-row class="group-title">
				<b-col class="text-center">
					<span> {{group.name}} </span>
				</b-col>	
			</b-row>
			<b-row class="group-conent">
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
		</b-container>	
  	</div>
</template>

<script>
export default {
	props:['group'],
	
}
</script>

<style lang="stylus">
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
					font-size 20px
					font-weight 800
					line-height 28px
					
			.details
				span 	
					font-size 	14px
					line-height 20px	
					&:hover
						color 	#33a8b9
					
			
			
	
	

</style>

