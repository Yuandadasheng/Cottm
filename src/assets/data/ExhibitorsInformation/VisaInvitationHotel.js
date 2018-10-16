const VisaInvitationHotel={
	name: "签证邀请和酒店",
	text1:"若您是我们的参展商并需要我",
	text2:"下载、填妥该表格，将其发送给表格中的指定联系人",
	list :[
		{
			name: "签证邀请函 ",
			desc : [
				{
					type: 2,
					content: [
						{
							type: 1,
							text : "若您是我们的参展商并需要我主办方出具签证邀请函，请联系：Sarah Email:"
						},{
							type: 2,
							text : "shu@tarsus.co.uk",
							url: "mailto:shu@tarsus.co.uk"
						}
					]
				},{
					type: 1,
					text : "电话：+86 (0)21 6439 6310"
				}
			]
		},
		{
			name: "酒店预定 ",
			desc : [
				{
					type: 2,
					content: [
						{
							type: 1,
							text : "若您是我们的参展商并需要我们协助订酒店，请"
						},{
							type: 2,
							text : "点击",
							url: "http://www.cottm.cn/downloads/Hotel%20&%20Pick-up%20Booking.pdf"
						},{
							type: 1,
							text: "下载、填妥该表格，将其发送给表格中的指定联系人"
						}
					]
				}
			]
		}
	],
	
}
export default VisaInvitationHotel