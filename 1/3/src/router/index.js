import Vue from 'vue'
import Router from  'vue-router'
/*首页*/
const  Home = r => require.ensure([], () => r(require('@/components/home/home')), 'home')
/*参展信息*/
const ExhibitorsInformation = r => require.ensure([], () => r(require('@/components/ExhibitorsInformation/ExhibitorsInformation')), 'home')
const AlreadyExhibition = r => require.ensure([], () => r(require('@/components/ExhibitorsInformation/AlreadyExhibition/AlreadyExhibition')), 'home')
const place = r => require.ensure([], () => r(require('@/components/ExhibitorsInformation/place/place')), 'home')
const Sponsorship = r => require.ensure([], () => r(require('@/components/ExhibitorsInformation/Sponsorship/Sponsorship')), 'home')
const VisaInvitationHotel = r => require.ensure([], () => r(require('@/components/ExhibitorsInformation/VisaInvitationHotel/VisaInvitationHotel')), 'home')
const WhyParticipation = r => require.ensure([], () => r(require('@/components/ExhibitorsInformation/WhyParticipation/WhyParticipation')), 'home')
/*参观信息*/
const VisitInfo = r => require.ensure([], () => r(require('@/components/VisitInfo/VisitInfo')), 'home')
const WhyVisit = r => require.ensure([], () => r(require('@/components/VisitInfo/WhyVisit/WhyVisit')), 'home')
const WhoVisit = r => require.ensure([], () => r(require('@/components/VisitInfo/WhoVisit/WhoVisit')), 'home')
const HowVisit = r => require.ensure([], () => r(require('@/components/VisitInfo/HowVisit/HowVisit')), 'home')
const Evaluation = r => require.ensure([], () => r(require('@/components/VisitInfo/Evaluation/Evaluation')), 'home')
/*新闻中心*/
const News = r => require.ensure([], () => r(require('@/components/News/News')), 'home')
const ExhibitionMarketing = r => require.ensure([], () => r(require('@/components/News/ExhibitionMarketing/ExhibitionMarketing')), 'home')
const ExhibitionNews = r => require.ensure([], () => r(require('@/components/News/ExhibitionNews/ExhibitionNews')), 'home')
const Media = r => require.ensure([], () => r(require('@/components/News/Media/Media')), 'home')
const MediaInfo = r => require.ensure([], () => r(require('@/components/News/MediaInfo/MediaInfo')), 'home')
const TradeNews = r => require.ensure([], () => r(require('@/components/News/TradeNews/TradeNews')), 'home')
/*买家报名*/
const Buyers = r => require.ensure([], () => r(require('@/components/Buyers/Buyers')), 'home')
/*赞助商*/
const Sponsors = r => require.ensure([], () => r(require('@/components/Sponsors/Sponsors')), 'home')
/*合作伙伴*/
const Partners = r => require.ensure([], () => r(require('@/components/Partners/Partners')), 'home')
const TopOperators = r => require.ensure([], () => r(require('@/components/Partners/TopOperators/TopOperators')), 'home')
const SupportedBy = r => require.ensure([], () => r(require('@/components/Partners/SupportedBy/SupportedBy')), 'home')
const ConferencePartner = r => require.ensure([], () => r(require('@/components/Partners/ConferencePartner/ConferencePartner')), 'home')
const ServiceProvider = r => require.ensure([], () => r(require('@/components/Partners/ServiceProvider/ServiceProvider')), 'home')
const DomesticMedia = r => require.ensure([], () => r(require('@/components/Partners/DomesticMedia/DomesticMedia')), 'home')
const ForeignMedia = r => require.ensure([], () => r(require('@/components/Partners/ForeignMedia/ForeignMedia')), 'home')
/*展会特色*/
const Features = r => require.ensure([], () => r(require('@/components/Features/Features')), 'home')
const ExhibitionArea = r => require.ensure([], () => r(require('@/components/Features/ExhibitionArea/ExhibitionArea')), 'home')
const HighEndTourism = r => require.ensure([], () => r(require('@/components/Features/HighEndTourism/HighEndTourism')), 'home')
const Meeting = r => require.ensure([], () => r(require('@/components/Features/Meeting/Meeting')), 'home')
const Online = r => require.ensure([], () => r(require('@/components/Features/Online/Online')), 'home')
/*COTTM会议*/
const Conference = r => require.ensure([], () => r(require('@/components/Conference/Conference')), 'home')
const Conference2017 = r => require.ensure([], () => r(require('@/components/Conference/2017Conference/2017Conference')), 'home')
const Conference2018 = r => require.ensure([], () => r(require('@/components/Conference/2018Conference/2018Conference')), 'home')
const Conference2019 = r => require.ensure([], () => r(require('@/components/Conference/2019Conference/2019Conference')), 'home')
/*联系我们*/
const ContactUs = r => require.ensure([], () => r(require('@/components/ContactUs/ContactUs')), 'home')
const ContactWay = r => require.ensure([], () => r(require('@/components/ContactUs/ContactWay/ContactWay')), 'home')
const AboutOrganization = r => require.ensure([], () => r(require('@/components/ContactUs/AboutOrganization/AboutOrganization')), 'home')

Vue.use(Router)

export default new Router({
  'mode': 'history',
  base: '',
  linkActiveClass: 'avtive',
  routes: [
  	{
  		path:'/',
  		redirect:'/home'
  	},{
      path: '/home',
      name: 'Home',
      component: Home
    },{
      path: '/ExhibitorsInformation',
      name: 'ExhibitorsInformation',
      component: ExhibitorsInformation,
      children:[

        {
          path: '',
          redirect: 'WhyParticipation'
        },{
          path: 'WhyParticipation',
          name: 'WhyParticipation',
          component: WhyParticipation
        },{
          path: 'AlreadyExhibition',
          name: 'AlreadyExhibition',
          component: AlreadyExhibition
        },{
          path: 'place',
          name: 'place',
          component: place
        },{
          path: 'Sponsorship',
          name: 'Sponsorship',
          component: Sponsorship
        },{
          path: 'VisaInvitationHotel',
          name: 'VisaInvitationHotel',
          component: VisaInvitationHotel
        }
      ]
    },{
      path: '/VisitInfo',
      component: VisitInfo,
      children:[
        {
          path: '',
          redirect: 'WhyVisit'
        },{
          path: 'WhyVisit',
          name: 'WhyVisit',
          component: WhyVisit
        },{
          path: 'WhoVisit',
          name: 'WhoVisit',
          component: WhoVisit
        },{
          path: 'HowVisit',
          name: 'HowVisit',
          component: HowVisit
        },{
          path: 'Evaluation',
          name: 'Evaluation',
          component: Evaluation
        }
      ]
    },{
      path: '/News',
      component: News,
      children:[
        {
          path: '',
          redirect: 'Media'
        },{
          path: 'ExhibitionMarketing',
          name: 'ExhibitionMarketing',
          component: ExhibitionMarketing 
        },{
          path: 'ExhibitionNews',
          name: 'ExhibitionNews',
          component: ExhibitionNews
        },{
          path: 'Media',
          name: 'Media',
          component: Media
        },{
          path: 'MediaInfo',
          name: 'MediaInfo',
          component: MediaInfo
        },{
          path: 'TradeNews',
          name: 'TradeNews',
          component: TradeNews
        }
      ]
    },{
      path: '/Conference2019',
      name: 'Conference2019',
      component: Conference2019
    },{
      path: '/Buyers',
      name: 'Buyers',
      component: Buyers
    },{
      path: '/Partners',
      component: Partners,
      children: [
        {
          path: '',
          redirect: 'TopOperators'
        },{
          path: 'TopOperators',
          name: 'TopOperators',
          component: TopOperators
        },{
          path: 'SupportedBy',
          name: 'SupportedBy',
          component: SupportedBy
        },{
          path: 'ConferencePartner',
          name: 'ConferencePartner',
          component: ConferencePartner
        },{
          path: 'ServiceProvider',
          name: 'ServiceProvider',
          component: ServiceProvider
        },{
          path: 'DomesticMedia',
          name: 'DomesticMedia',
          component: DomesticMedia
        },{
          path: 'ForeignMedia',
          name: 'ForeignMedia',
          component: ForeignMedia
        }
      ]
    },{
      path: '/Sponsors',
      name: 'Sponsors',
      component: Sponsors
    },{
      path: '/Features',
      component: Features,
      children:[
        {
          path: '',
          redirect: 'Meeting'
        },{
          path: 'ExhibitionArea',
          name: 'ExhibitionArea',
          component: ExhibitionArea
        },{
          path: 'HighEndTourism',
          name: 'HighEndTourism',
          component: HighEndTourism
        },{
          path: 'Meeting',
          name: 'Meeting',
          component: Meeting
        },{
          path: 'Online',
          name: 'Online',
          component: Online
        }
      ]
    },{
      path: '/Conference',
      component: Conference,
      children:[
        {
          path: '',
          redirect: 'Conference2019'
        },{
          path: 'Conference2017',
          name: 'Conference2017',
          component: Conference2017
        },{
          path: 'Conference2018',
          name: 'Conference2018',
          component: Conference2018
        },{
          path: 'Conference2019',
          name: 'Conference2019',
          component: Conference2019
        }

      ]
    },{
      path: '/Online',
      name: 'Online',
      component: Online
   },{
      path: '/ContactUs',
      component: ContactUs,
      children:[
        {
          path: '',
          redirect: 'ContactWay'
        },{
          path: 'ContactWay',
          name: 'ContactWay',
          component: ContactWay
        },{
          path: 'AboutOrganization',
          name: 'AboutOrganization',
          component: AboutOrganization 
        }
      ]
    }
  ]
})


