<template>
		<b-row>
			<b-col :cols="cols" :md="md" v-for="items in discList" >
				<ul>
					<li>
						
						<div v-if="type == 1">
							<p>
								<span :style="{ fontSize :  fontSize + 'px',fontWeight:bold}" class="font-color-1">{{items.topicsName}}</span>
							</p>
							<p>
								<span v-for="item in items.list">
									{{item}} <br>
								</span>
							</p>
						</div>
						<div  >
							<span :style="{ fontSize :  fontSize + 'px',fontWeight:bold}">{{items}}</span>
						</div>
						
					</li>
				</ul>
			</b-col>	
		</b-row>
	
	
</template>

<script>
export default {
	props:{
		discList:{
			type: Array
			
		},
		cols:{
			type: Number,
			default : 12
		},
		md:{
			type: Number,
			default : 12
		},
		fontSize:{
			type: Number,
			default : 14
		},
		bold:{
			type: Number,
			default: 200
		},
		type:{
			type: Number,
			default: 2
		}

	},
}
</script>

<style lang="stylus">

ul
	padding-left 20px
	margin-bottom 7px
	li
		list-style disc
		span 
			font-weight 500
			text-align justify
.font-color-1
	color #a01c5e			
</style>