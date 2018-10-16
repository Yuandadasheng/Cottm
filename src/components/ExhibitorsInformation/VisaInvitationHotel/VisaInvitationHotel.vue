<template lang="html">
	<!-- 签证邀请和酒店 -->
  	<div >
  		<div class="main">
  			<b-container  :fluid="widthFluid">
	      		<b-row >
	      			<b-col  cols="12">
						<headline :TitleName="TitleName"></headline>
	      			</b-col>	
	      			<b-col cols="12" md="6" v-for="item in  VisaInvitationHotel.list">
	      				<p>
	      					<span class="listsTitle">{{item.name}}</span>
	      				</p>
						<TextLayout :TextLayout="item.desc"></TextLayout>
	      			</b-col>	
	      			
		        </b-row>
		 	</b-container>
  		</div>
		
    </div>   		
</template>

<script>
import headline  from '@/component/headline/headline'
import TextLayout from '@/component/TextLayout/TextLayout'
import { mapGetters ,mapMutations } from 'vuex'
import {VisaInvitationHotel} from "../../../assets/data/index.js"
export default {
	data(){
		return{
			VisaInvitationHotel: VisaInvitationHotel,
		}
	},
	computed: {
		  TitleName(){
            return this.VisaInvitationHotel.name
        },
		...mapGetters([
			'widthFluid'
			])
	},
	created(){
		
	},
	components:{
		headline,
		TextLayout
	}
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/stylus/base.styl'

.listsTitle
	font-size 20px
	font-weight 700
</style>
