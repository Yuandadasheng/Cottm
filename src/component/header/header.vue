<template lang="html">
  	<div class="header">
  		<b-container :fluid="widthFluid">
  			<b-row>
  				<b-col   sm="6" md="4" lg="3" class="text-center">
            <img :src="headData.logo" :style="{width:logoWidth+'%'}" alt="">
  				</b-col>
  				<b-col sm="6" md="4" lg="5" :class="{'text-center':screenWidth<576}">
            <span class="dtstart">{{headData.title}}</span>
            <span class="timePlace">{{headData.timePlace}}</span>
  				</b-col>
  				<b-col sm="7" md="4" lg="4" >
            <b-row :style="{'margin-top': marginTop+'px'}">
                <b-col sm="10"  lg="9" class="text-center audience"> 
                     <b-button  class="but" @click="OUTER_JOIN(headData.url)">{{headData.but}}</b-button><br>
                       <span class="text">{{headData.reminder}}</span>
               </b-col>
                <b-col sm="2"  lg="3" class="text-center"> 
                  <img :src="headData.ShiftLogo" width="30px" height="20px" alt="" @click="OUTER_JOIN(headData.ShiftLogoUrl)">
                </b-col>
            </b-row> 
             
       
  				</b-col>
  			</b-row>
  		</b-container>
  	</div>
</template>

<script>
import axios from 'axios'
import { mapState, mapGetters , mapMutations} from 'vuex'
import { header }  from "../../assets/data/index.js"

export default {
  data(){
      return{

        headData: header
      }
  },
  created(){
  },
  computed:{

    logoWidth(){
      return this.screenWidth<420 ? 70 :100
    },
    marginTop(){
      return this.screenWidth<768? 15 : 0
    },
     ...mapState(['screenWidthLg','screenWidth']),
     ...mapGetters(['widthFluid'])
  },
  methods:{
    
    ...mapMutations(['SCREEN_WIDTH','OUTER_JOIN'])
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixin'

.header
    margin-top 30px
    margin-bottom 15px
    position relative
    z-index 5
    .dtstart
        font-size 24px
        line-height 36px 
        display block
        font-weight 800
    .timePlace
        font-size 14px
        font-weight 800
    .audience
        .but
            width  80%!important
            background-color #a01c5e!important
            border none
            font-weight bold
            margin-bottom 5px
        .text     
            font-size 12px
        
</style>

