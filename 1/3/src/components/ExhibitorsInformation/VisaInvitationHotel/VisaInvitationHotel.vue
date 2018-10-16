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
						{{VisaInvitationHotel.text1}}{{item.content}}
						<a :href="item.url">点击</a>
						{{VisaInvitationHotel.text2}}
	      			</b-col>	
	      			
		        </b-row>
		 	</b-container>
  		</div>
		
    </div>   		
</template>

<script>
import headline  from '@/component/headline/headline'
import { mapGetters ,mapMutations } from 'vuex'
import axios from 'axios'
export default {
	data(){
		return{
			VisaInvitationHotel: '',
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
		axios.get('../static/data/ExhibitorsInformation/VisaInvitationHotel.json').then((res)=>{
          this.VisaInvitationHotel = res.data
        
      	})
	},
	components:{
		headline 
	}
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/base.styl'

.listsTitle
	font-size 20px
	font-weight 700
</style>
