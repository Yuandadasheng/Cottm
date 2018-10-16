<template>
	<!-- 买家及合作伙伴评价 -->
	<div>
		<div class="main">
			<b-container :fluid="widthFluid" >
				<b-row>
					<b-col cols="12" >
						<headline :TitleName="TitleName"></headline>  
					</b-col>
					<b-col>
						<b-row>
							<b-col md="6">
								<div v-for="appraiseLists in data.appraise">
									<div v-if="appraiseLists.type == 1 ">
										<p class="img-center">
											<b-img  :src="appraiseLists.imgUrl"  fluid alt="image" />
										</p>
										<p class="appraiseLists-content">
											<i>{{appraiseLists.content}}</i>
										</p>
										<p class="appraiser">
											{{appraiseLists.appraiser}}
										</p>
									</div>
								
								</div>
							</b-col>	
							<b-col md="6">
								<div v-for="appraiseLists in data.appraise">
									<div v-if="appraiseLists.type == 2 ">
										<p class="img-center" v-if="appraiseLists.imgUrl">
											<b-img  :src="appraiseLists.imgUrl"  fluid alt="image" />
										</p>
										<p>
											<i>{{appraiseLists.content}}</i>
										</p>
										<p class="appraiser">
											{{appraiseLists.appraiser}}
										</p>
									</div>
								
								</div>
							</b-col>
						</b-row>	
					</b-col>	
					<b-col cols="12" v-for="estimateLists in data.estimate"> 
						<p class="estimate-name">{{estimateLists.name}}</p>
						<ul class="estimate-ul">
							<li  v-for="listItems in estimateLists.list" class="estimate-list">
								
									<span class="estimate-Lists-name">{{listItems.name}}</span>
									<span class="estimate-Lists-name">--</span>
								
								<span>
									{{listItems.text}}
								</span>
							</li>
						</ul>
					</b-col>	
				</b-row>	
			</b-container>
		</div>		
	</div>	
		
</template>

<script>
import headline  from '@/component/headline/headline'
import  { Evaluation } from "../../../assets/data/index.js"
import { mapGetters , mapMutations } from 'vuex'

export default {
	data(){
		return{
			data : Evaluation
		}
	},
	created(){
	
	},
	computed:{
		TitleName(){
			return this.data.name
		},
		...mapGetters([
				'widthFluid'
			])
		
	},
	methods:{
		...mapMutations(['SCREEN_WIDTH'])
	},
	components:{
		headline,
	}
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/stylus/base.styl'

.img-center
	text-align center
.appraiser
	font-size 14px	
.estimate-name
	font-weight bold
	margin 10px 0
.estimate-ul
	padding-left 20px
	.estimate-list
		padding-bottom 20px;
		.estimate-Lists-name
			font-weight 800
</style>