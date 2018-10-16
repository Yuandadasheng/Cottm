<template lang="html">
	<!-- 场地 -->
  	<div class="main">
      <div>
          <b-container  :fluid="widthFluid">
                <b-row >
                  <b-col  cols="12">
                    <headline :TitleName="TitleName"></headline>
               
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
    </div>   		
</template>

<script>
import headline  from '@/component/headline/headline'
import { mapGetters ,mapMutations } from 'vuex'
import axios from 'axios'
export default {
	data(){
		return{
			place: '',
		}
	},
  created(){
    axios.get('../static/data/ExhibitorsInformation/place.json').then((res)=>{
          this.place = res.data
        
        })
  },
	computed: {
    TitleName(){
            return this.place.name
        },
		...mapGetters([
			'widthFluid'
			])
	},
	components:{
        headline
    }
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/base.styl'


</style>

