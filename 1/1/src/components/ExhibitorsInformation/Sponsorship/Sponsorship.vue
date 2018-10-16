<template lang="html">
	<!-- 赞助机会 -->
  	<div class="main">
		<b-container  :fluid="widthFluid">
      		<b-row >
        		<b-col cols="12">
						<h1 class="Title">{{Data.title}}</h1>
        		</b-col>
        		<b-col cols="12">
						<span class="TitleDesc">{{Data.desc}}   <br></span>
        		</b-col>
        		<b-col cols="12" md="6" v-for="items in Data.content">
        			<b-img :src="items.img"  fluid  alt=""/> <br>
        			<p v-for="(item, index) in items.text">
        				{{item}}
        				<span v-if="(index+1)==items.text.length">Sarah Hu：{{items.contact.phone}}，或Email：<a :href="'mailto:'+items.contact.Email"></a>{{items.contact.Email}}。</span>
        			</p>
        			
        			
        		</b-col>	
        		<b-col cols="12" md="6" v-for="items in Data.content">
        			<p>
        				<h3>{{Data.second.title}}</h3>
        			</p>
        			<ul class="disc-ul">
        				<li class="disc-li" v-for="list in Data.second.list">
        					{{list}}
        				</li>
        			</ul>
        			
        			
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
          this.Data = res.data.Sponsorship
        
      	})
	},
}
</script>

<style lang="css">


</style>

