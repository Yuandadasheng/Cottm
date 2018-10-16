<template lang="html">
	<!-- 赞助机会 -->
  	<div class="main">
		<b-container  :fluid="widthFluid">
      		<b-row >
        		<b-col cols="12">
                    <headline :TitleName="TitleName"></headline>
        		</b-col>
        		<b-col cols="12" >
                    <p class="text-center">
                        <span class="TitleDesc">{{Data.desc}}   <br></span>
                    </p>
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
import headline  from '@/component/headline/headline'
import describe  from '@/component/describe/describe'
import axios from 'axios'
export default {
	data(){
		return{
			Data: '',
		}
	},
    created(){
        axios.get('../static/data/ExhibitorsInformation/Sponsorship.json').then((res)=>{
          this.Data = res.data
        
        })
    },
	computed: {
        TitleName(){
            return this.Data.name
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
        describe 
    }
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/base.styl'
.TitleDesc
    font-size 18px
    padding 10px 0

</style>

