<template>
	<div>
		<div v-for="item in TextLayout">
			<p v-if="item.type == 1" class="text-justify">
				<span>{{item.text}}</span>
			</p>
			<p v-else-if="item.type == 2" class="text-justify">
				<span v-for="itemConetnt in item.content">
					<span v-if="itemConetnt.type == 1">
						{{itemConetnt.text}}
					</span>
					<span v-if="itemConetnt.type == 2">
						<a :href="itemConetnt.url" class="a-style" target="_blank">{{itemConetnt.text}}</a>
					</span>
					<span v-if="itemConetnt.type == 3">
						{{itemConetnt.text} <br>
					</span>
				</span>
			</p>
			<p v-else-if="item.type == 3" class="text-justify">
				<span v-for="itext in item.text">
						{{itext}} <br>
				</span>
			</p>
			<p v-else-if="item.type == 4" class="text-justify">
				<headline :TitleName="item.text" :fontSize="item.headfontSize" :align="item.textAlign" :mb="item.mb"></headline> 
			</p>
			<p v-else-if="item.type == 5" :style="{textAlign: item.align}">
				<span v-for="itemConetnt in item.content">
					<span v-if="itemConetnt.type == 1">
						{{itemConetnt.text}}
					</span>
					<span v-if="itemConetnt.type == 2">
						<a :href="itemConetnt.url" class="a-style" target="_blank">{{itemConetnt.text}}</a>
					</span>
					<span v-if="itemConetnt.type == 3">
						{{itemConetnt.text} <br>
					</span>
				</span>
			</p>
		</div>
	</div>
</template>

<script>
import headline  from '@/component/headline/headline'
export default {
	props:{
		TextLayout:{
			type: Array
		},
		 align:{

		},
		headfontSize:{
			type: Number,
			default: 30
		}
	},
	computed: {
		
	},
	components:{
		headline,
	
	}
}
</script>

<style lang="stylus">
.a-style
	color #a01c5e !important
	font-weight bold	
	cursor pointer
.title-name
	margin-bottom 20px
</style>