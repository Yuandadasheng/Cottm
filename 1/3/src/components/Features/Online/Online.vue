<template>
	<!-- COTTM Online -->
	 <div >
        <div class="main">
            <b-container  :fluid="widthFluid">
                <b-row >
                    <b-col cols="12">
                        <headline :TitleName="TitleName"></headline>
                        
                    </b-col>
                
                </b-row>
                <b-row  align-h="center">
                	 <b-col cols="12" md="10">
                       <p class="text-center">
                       		<b-img :src="data.imgUrl" fluid alt=""></b-img>
                       </p>
                    </b-col>
                    <b-col cols="12" md="10">
                       <p class="font-weight-bold ">
                       		{{data.title}}
                       </p>
                    </b-col>
                     <b-col cols="12" md="10">
                       <p >
                       		{{data.desc}}
                       </p>
                    </b-col>
                     <b-col cols="12" md="10">
                       <p class="text-center">
                       		<b-img :src="data.imgUrl1" fluid alt=""></b-img>
                       </p>
                    </b-col>
                    
                </b-row>
                 <b-row  align-h="center">
                	 <b-col cols="12" md="10" v-for="lists in data.list">
                	   <div>
                	 	   <p class="font-weight-bold">
	                       		{{lists.name}}
	                       </p>
	                       
	                       <p >
	                       		<span v-for="descs in lists.desc"> {{descs}}<br></span>
	                       </p>
	                      
	                      <div v-if="lists.deacList">
	                      	<discList :discList="lists.deacList" :fontSize="16"></discList>
	                      </div>
                       		  
                      	  <p class="text-center" v-for="imgUrls in lists.imgUrl">
                       		<b-img :src="imgUrls" fluid alt=""></b-img>
                       	  </p>
                	   </div>
                      
                    </b-col>
                   
                </b-row>
                <b-row  align-h="center">
                	 <b-col cols="12" md="10">
                		<p>
                			<span>
                				{{data.text1}}
                			</span><br>
                			<span>
                				{{data.text2}}
                			</span><br>
                			<span v-for="contacts in data.contact">
                				<span> {{contacts.name}}</span> 
                				<span v-if="contacts.type == 1"><a :href="'mailto:'+contacts.contactWay" target="_blank">{{contacts.contactWay}}</a></span> 
                				<span v-else>{{contacts.contactWay}}</span> 
                				<br>
                			</span>
                		</p>
                	</b-col>	
                </b-row>	

            </b-container>  
        </div>
     </div>
</template>

<script>
import headline  from '@/component/headline/headline'
import discList  from '@/component/discList/discList'
import { mapGetters ,mapMutations } from 'vuex'
import axios from 'axios'


export default {
    data(){
        return{
            data: ''
        }
    },
    created(){
        axios.get('../static/data/Features/Online.json').then((res)=>{
          this.data = res.data
        })
    },
    computed: {
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
        discList
    }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/stylus/base.styl'

a
	color #a01c5e
	font-weight bold	

</style>
