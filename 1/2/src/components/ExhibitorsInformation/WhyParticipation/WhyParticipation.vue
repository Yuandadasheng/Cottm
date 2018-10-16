<template lang="html">
	<!-- 为何参展 -->

  	<div class="main">
		<b-container  :fluid="widthFluid">
      		<b-row >
        		<b-col cols="12">
						<h1 class="Title">{{Data.title}}</h1>
        		</b-col>
        		<b-col cols="12">
						<span class="TitleDesc" v-for="item in Data.desc">{{item}}   <br></span>
        		</b-col>
        		<b-col cols="12" md="6"  v-for="items in Data.content">
        			<img :src="items.img" alt=""> <br>
        			<span>{{items.title}}</span>
        			<b-row>
        				<b-col>
        					<ul class="disc-ul">
		        				<li class="disc-li" v-for="text in items.desc">{{text}}</li>
		        				
		        			</ul>
		        			<div  v-for="btu in items.btu">
		        					{{btu.text}}
		        			</div>
        				</b-col>	
        			</b-row>	
        			
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
			Data: '',
		}
	},
	computed: {
		...mapGetters([
			'widthFluid'
			])
	},
	created(){
		axios.get('static/data.json').then((res)=>{
          this.Data = res.data.WhyParticipation
        
      	})
	},
	methods:{
		// ...mapMutations(['SCREEN_WIDTH'])
	}
}
</script>

<style lang="stylus">


</style>

