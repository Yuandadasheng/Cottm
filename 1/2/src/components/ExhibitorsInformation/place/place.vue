<template lang="html">
	<!-- 场地 -->
  	<div class="main">
		<b-container  :fluid="widthFluid">
      		<b-row >
      			<b-col  cols="12">
						<h1>{{place.title}}</h1>
      			</b-col>	
      			<b-col cols="12">
      				<p>{{place.site}}</p>
      				<p v-for="items in place.traffic">
      					<span>{{items.name}}</span><span>{{items.disc}}</span>
      				</p>
      				
      			</b-col>
      			<b-col cols="12">
      				<p>
      					{{place.text}}
      				</p>
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
			place: '',
		}
	},
	computed: {
		...mapGetters([
			'widthFluid'
			])
	},
	created(){
		axios.get('static/data.json').then((res)=>{
          this.place = res.data.place
        
      	})
	},
}
</script>

<style lang="css">


</style>

