const nav=[
		{
			name :"首页",
			url : "/home",
			childrenList:""
		},{
			name:"参展信息",
			url :  "/ExhibitorsInformation",
			childrenList:[
				{
					name: "为何参展?",
					url: "/ExhibitorsInformation/WhyParticipation"
				},{
					name: "我要参展",
					url : "/ExhibitorsInformation/AlreadyExhibition"
				},{
					name: "展商手册",
					outerjoin: true,
					url  :  ""
				},{
					name: "赞助机会",
					url  :  "/ExhibitorsInformation/Sponsorship"
				},{
					name: "场地",
					url : "/ExhibitorsInformation/place"
				},{
					name: "签证邀请和酒店",
					url : "/ExhibitorsInformation/VisaInvitationHotel"
 				}
			]
		},{
			name:"展商名录",
			outerjoin: true,
			childrenList:"",
			url:  "http://prereg.cottm.cn/2019/exhibitor_list/exhibitor-list.asp"
		},{
			name:"参观信息",
			url:  "/VisitInfo",
			childrenList:[
				{
					name: "为何参观?",
					url:  "/VisitInfo/WhyVisit"
				},{
					name: "谁来参观",
					url:  "/VisitInfo/WhoVisit"
				},{
					name: "如何参观",
					url:  "/VisitInfo/HowVisit"
				},{
					name: "买家及合作伙伴评价",
					url:  "/VisitInfo/Evaluation"
				}
			]

		},{
			name:"新闻中心",
			url:  "/News",
			childrenList:[
				{
					name: "媒体注册",
					url:  "/News/Media"
				},{
					name: "展会新闻",
					url:  "/News/ExhibitionNews"
				},{
					name: "媒体图片及资料下载",
					url:  "/News/MediaInfo"
				},{
					name: "展会营销",
					url:  "/News/ExhibitionMarketing"
				},{
					name: "行业新闻",
					url:  "/News/TradeNews"
				}
			]
		},{
			name:"展会日程",
			url:  "/Conference2019",
			childrenList:""
		},{
			name:"买家报名",
			url:  "/Buyers",
			childrenList:[
				{
					name: "VIP 买家",
					outerjoin: true,
					url:  ""
				},{
					name: "高端/奢华买家",
					outerjoin: true,
					url:  ""
				}
			]
		},{
			name:"展会特色",
			url:  "/Features",
			childrenList:[
				{
					name: "COTTM会议",
					url:  "/Features/Meeting"
				},{
					name: "COTTM2019高端旅游",
					url:  "/Features/HighEndTourism"
				},{
					name: "COTTM2019 “主题旅行/定制游”展区",
					url:  "/Features/ExhibitionArea"
				},{
					name: "COTTM Online",
					url:  "/Features/Online"
				}
			]
		},{
			name:"赞助商",
			childrenList:"",
			url:  "/Sponsors"
		},{
			name:"合作伙伴",
			url:  "/Partners",
			childrenList:[
				{
					name: "中国出境旅游顶级运营商",
					url:  "/Partners/TopOperators"
				},{
					name: "支持机构",
					url:  "/Partners/SupportedBy"
				},{
					name: "会议合作伙伴",
					url:  "/Partners/ConferencePartner"
				},{
					name: "技术服务商",
					url:  "/Partners/ServiceProvider"
				},{
					name: "国内媒体",
					url:  "/Partners/DomesticMedia"
				},{
					name: "国外媒体",
					url:  "/Partners/ForeignMedia"
				}
			]
		},{
			name:"COTTM Online",
			childrenList:"",
			url:  "/Online"
		},{
			name:"COTTM 会议",
			url:  "/Conference",
			childrenList:[
				{
					name: "2019COTTM会议日程",
					url:  "/Conference/Conference2019"
				},{
					name: "2018COTTM会议日程",
					url:  "/Conference/Conference2018"
				},{
					name: "2017COTTM会议日程",
					url:  "/Conference/Conference2017"
				}
			]
		},{
			name :"联系我们",
			url  :  "/ContactUs",
			childrenList:[
				{
					name: "联系我们",
					url:  "/ContactUs/ContactWay"
				},{
					name: "关于组织者",
					url:  "/ContactUs/AboutOrganization"
				}
			]
		}
	]

export default nav;	