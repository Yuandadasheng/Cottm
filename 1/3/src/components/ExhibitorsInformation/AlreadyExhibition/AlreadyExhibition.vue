<template lang="html">
    <!-- 为何参展 -->
    <div >
        <div class="main">
            <b-container  :fluid="widthFluid">
                <b-row >
                    <b-col cols="12">
                        <headline :TitleName="TitleName"></headline>
                        
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
            data: ''
        }
    },
    created(){
        axios.get('../static/data/ExhibitorsInformation/AlreadyExhibition.json').then((res)=>{
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
        headline
    }
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/base.styl'


</style>

