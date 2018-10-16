<template lang="html">
  	<div class="LogoList">
  		<b-container >
			<b-row class="text-left">
				<b-col md="3"  v-for="items in  sponsor">
					<b-row>
						<b-col cols="12" class="Name text-center" >
							<span>{{items.name}}</span>
						</b-col>
						<b-col class="Img text-center">
							<img :src="items.imgUrl" alt="">
						</b-col>	
					</b-row>
				</b-col>
				<b-col md="9" v-for="items in  support">
					<b-row >
						<b-col cols="12" class="Name text-center">
							<span>{{items.name}}</span>
						</b-col>	
						<b-col cols="6" sm="4" lg="3" v-for="item in items.imgUrl" class="Img text-center">
							<img :src="item.url" alt="" >
						</b-col>	
					</b-row>	
				</b-col>	
			</b-row>	
			<b-row>
				<b-col md="3">
					<b-row class="text-center">
						<b-col v-for="items in  GoldSponsor">
							<b-col cols="12" class="Name">
								<span>{{items.name}}</span>
							</b-col>	
							<b-col class="Img">
								<img :src="items.imgUrl" alt="" >
							</b-col>
						</b-col>		
					</b-row>	
				</b-col>
				<b-col md="3">
					<b-row >
						<b-col v-for="items in  StrategicPartner" class="text-center">
							<b-col cols="12" class=" StrategicPartnerName text-center">
								<span>{{items.name}}</span>
							</b-col>
							<b-col class="text-center">
								<b-row>
									<b-col md="12" lg="12" xl="6" v-for="item in items.imgUrl" class="StrategicPartnerImg">
										<img :src="item" alt="" >
									</b-col>
								</b-row>	
							</b-col>	
						</b-col>		
					</b-row>	
				</b-col>
				<b-col md="3">
					<b-row class="text-center">
						<b-col v-for="items in TechnicalPartner">
							<b-col cols="12" class="Name">
								<span>{{items.name}}</span>
							</b-col>	
							<b-col class=" Img">
								<img :src="items.imgUrl" alt="" >
							</b-col>
						</b-col>		
					</b-row>	
				</b-col>
				<b-col md="3">
					<b-row class="text-center">
						<b-col v-for="items in AirlinePartners">
							<b-col cols="12" class="Name">
								<span>{{items.name}}</span>
							</b-col>	
							<b-col class="Img">
								<img :src="items.imgUrl" alt="" >
							</b-col>
						</b-col>		
					</b-row>	
				</b-col>	
			</b-row>	
			<b-row class="text-center">
				<b-col v-for="items in CooperativePartner">
					<b-col cols="12" class="Name">
						<span>{{items.name}}</span>
					</b-col>	

					<b-col cols="12">
						<b-row>
							<b-col cols="12" sm="6" md="4" lg="3" v-for="item in items.imgUrl" class="CooperativePartnerImg">
								<img :src="item" alt="" >
							</b-col>	
						</b-row>
						
					</b-col>
				</b-col>	
			</b-row>	
  		</b-container>	
  	</div>
</template>

<script>
export default {
	props:[
		'sponsor',
		'support',
		'GoldSponsor',
		'StrategicPartner',
		'TechnicalPartner',
		'AirlinePartners',
		'CooperativePartner'
	],
	data(){
		return{
			
			// sponsor:{}	
			
			
		}
	}
}
</script>

<style lang="stylus">
.LogoList
	margin 30px 
	.Name
		margin-bottom 20px
	.Img
		margin-bottom 10px
		img
			width 140px
			height 100px
			border 1px solid #aaa				
	.StrategicPartnerName
		margin-bottom 20px
	.StrategicPartnerImg	
		img
			width 130px
			height 100px
			border 1px solid #aaa	
	.CooperativePartnerImg
		margin-bottom 10px
		img
			width 190px
			height 75px
			border 1px solid #aaa					
	

</style>

