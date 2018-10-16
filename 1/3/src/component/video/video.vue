<template lang="html">
  	<div>
  		<b-container>
  			<b-row>
  				<b-col>
  					<video-player 
  							class="  vjs-custom-skin"
  							ref="videoPlayer"
  							:playsinline="true"
  							:options="playerOptions"
  							@play="onPlayerPlay($event)"
      						@pause="onPlayerPause($event)"
      						@statechanged="playerStateChanged($event)"
      						@ready="playerReadied"
  							>
  					</video-player>	
  				</b-col>	
  			</b-row>	
  			
  		</b-container>	
  	</div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'  
export default {
	props:{
		videoUrl :String
	},
	data(){
		return{
			playerOptions:{
				 width: document.documentElement.clientWidth,
				 autoplay : false,
				 muted : false,
				 loop : true,
				 language: 'zh-CN',
				 aspectRatio: '16:9',
				 fluid: true,
				 sources:[{
				 	type: "video/mp4",
				 	src : this.videoUrl
				 }],
				 notSupportedMessage: "此视频暂无法播放，请稍后再试",
			}
		}
	},
	computed:{
		player(){
			return this.$refs.videoPlayer.player
		}
	},
	methods:{
		onPlayerPlay(player){

		},
		onPlayerPause(player){

		},
		playerStateChanged(playerCurrentState) {
	        // console.log('player current update state', playerCurrentState)
	    },
		playerReadied(player) {
	        // console.log('the player is readied', player)
	        // you can use it to do something...
	        // player.[methods]
	    }
	},
	components:{
		videoPlayer
	},
	watch:{
		videoUrl(val){
			this.$nextTick(()=>{
				this.playerOptions.sources[0].src = val
			})
		}
	}
}
</script>

<style lang="css">


</style>

