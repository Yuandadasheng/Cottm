<template>
	<!-- COTTM2019 “主题旅行/定制游”展区 -->
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
                       <p v-for="contents in data.content" class="text-justify">
                       		{{contents}}
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
import { ExhibitionArea } from "../../../assets/data/index.js"


export default {
    data(){
        return{
            data: ExhibitionArea 
        }
    },
    created(){
      
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
        headline
    }
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/base.styl'


</style>
