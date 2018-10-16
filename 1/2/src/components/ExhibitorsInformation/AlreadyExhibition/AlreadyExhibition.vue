<!-- <template lang="html">
	
  	<div>Already exhibition
		

  	</div>
</template>

<script>
export default {
}
</script>

<style lang="css">


</style>
 -->
 <!-- 我要参展 -->
 <template>
    <div>
        <div v-for="(list,index) in siYuan" class="aa" :class="{ red:changeRed == index}" @click="change(index)">{{list.a}}</div>
    </div>
</template>
 
<script>
export default {
    data(){
        return{
            siYuan:[
                {"a":"田"},
                {"a":"心"},
                {"a":"水"},
                {"a":"原"}
            ],
            changeRed:-1
        }
    },
    methods:{
        change(index){
            this.changeRed = index;
        }
    }
    
}
</script>
 
<style>
    .aa{
        cursor: pointer;
    }
    .red{
        color: red;
    }
</style>
