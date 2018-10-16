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
                    <p>
                       <a class="a-style" @click="OUTER_JOIN(place.url)">
                       
                      <span :style="{ fontSize :  place.fontSize + 'px', fontStyle : place.fontStyle,color : place.fontColor}" >
                         <b>{{place.site}}</b>
                      </span>
                      <!--  <headline 
                            :TitleName="place.site" 
                            :align="place.align" 
                            :fontSize="place.fontSize"
                            :mb="place.mb" 
                            :fontColor="place.fontColor"></headline> -->
                     </a>
                    </p>
                   
                    <p v-for="items in place.traffic">
                     <strong><span>{{items.name}}</span><span>{{items.disc}}</span></strong>
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
import { place } from "../../../assets/data/index.js"

export default {
	data(){
		return{
			place:  place,
		}
	},
  created(){

  },
	computed: {
    TitleName(){
            return this.place.name
        },
		...mapGetters([
			'widthFluid'
			])
	},
  methods:{
    ...mapMutations(['SCREEN_WIDTH','OUTER_JOIN'])
  },
	components:{
        headline
    }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/stylus/base.styl'
.a-style
  color #a01c5e !important
  font-weight bold  
  cursor pointer

</style>

