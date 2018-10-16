<template lang="html">
	<!-- 签证邀请和酒店 -->
  	<div class="main">
		<b-container  :fluid="widthFluid">
      		<b-row >
      			<b-col  cols="12">
						<h1>{{VisaInvitationHotel.title}}</h1>
      			</b-col>	
      			<b-col cols="12" md="6" v-for="item in  VisaInvitationHotel.list">
      				<h3>{{item.name}}</h3>
					{{VisaInvitationHotel.text1}}{{item.content}}
					<a :href="item.url">点击</a>
					{{VisaInvitationHotel.text2}}
      			</b-col>	
      			
	        </b-row>
	 	</b-container>
    </div>   		
</template>

<script>
import { mapGetters ,mapMutations } from 'vuex'
import axios from 'axios'
export default {
	data(){
		return{
			VisaInvitationHotel: '',
		}
	},
	computed: {
		...mapGetters([
			'widthFluid'
			])
	},
	created(){
		axios.get('static/data.json').then((res)=>{
          this.VisaInvitationHotel = res.data.VisaInvitationHotel
        
      	})
	},
}
</script>

<style lang="css">


</style>
