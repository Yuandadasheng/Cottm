import Vue from 'vue'
import Router from 'vue-router'
/*首页*/
import Home from '@/components/home/home'
/*参展信息*/
import AlreadyExhibition from '@/components/ExhibitorsInformation/AlreadyExhibition/AlreadyExhibition'
import place from '@/components/ExhibitorsInformation/place/place'
import Sponsorship from '@/components/ExhibitorsInformation/Sponsorship/Sponsorship'
import VisaInvitationHotel from '@/components/ExhibitorsInformation/VisaInvitationHotel/VisaInvitationHotel'
import WhyParticipation from '@/components/ExhibitorsInformation/WhyParticipation/WhyParticipation'
/*参观信息*/
import WhyVisit from '@/components/VisitInfo/WhyVisit/WhyVisit'
import WhoVisit from '@/components/VisitInfo/WhoVisit/WhoVisit'
import HowVisit from '@/components/VisitInfo/HowVisit/HowVisit'
import Evaluation from '@/components/VisitInfo/Evaluation/Evaluation'
/*新闻中心*/
import ExhibitionMarketing from '@/components/News/ExhibitionMarketing/ExhibitionMarketing'
import ExhibitionNews from '@/components/News/ExhibitionNews/ExhibitionNews'
import Media from '@/components/News/Media/Media'
import MediaInfo from '@/components/News/MediaInfo/MediaInfo'
import TradeNews from '@/components/News/TradeNews/TradeNews'
/*买家报名*/
import Buyers from '@/components/Buyers/Buyers/Buyers'
/*赞助商*/
import Sponsors from '@/components/Sponsors/Sponsors/Sponsors'
/*合作伙伴*/
import TopOperators from '@/components/Partners/TopOperators/TopOperators'
import SupportedBy from '@/components/Partners/SupportedBy/SupportedBy'
import ConferencePartner from '@/components/Partners/ConferencePartner/ConferencePartner'
import ServiceProvider from '@/components/Partners/ServiceProvider/ServiceProvider'
import DomesticMedia from '@/components/Partners/DomesticMedia/DomesticMedia'
import ForeignMedia from '@/components/Partners/ForeignMedia/ForeignMedia'
/*展会特色*/
import ExhibitionArea from '@/components/Features/ExhibitionArea/ExhibitionArea'
import HighEndTourism from '@/components/Features/HighEndTourism/HighEndTourism'
import Meeting from '@/components/Features/Meeting/Meeting'
import Online from '@/components/Features/Online/Online'
/*COTTM会议*/
import Conference2017 from '@/components/Conference/2017Conference/2017Conference'
import Conference2018 from '@/components/Conference/2018Conference/2018Conference'
import Conference2019 from '@/components/Conference/2019Conference/2019Conference'
/*联系我们*/
import ContactUs from '@/components/ContactUs/ContactUs/ContactUs'
import AboutOrganization from '@/components/ContactUs/AboutOrganization/AboutOrganization'

Vue.use(Router)

export default new Router({
  'mode': 'history',
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
      path: '/WhyParticipation',
      name: 'WhyParticipation',
      component: WhyParticipation
    },{
      path: '/AlreadyExhibition',
      name: 'AlreadyExhibition',
      component: AlreadyExhibition
    },{
      path: '/place',
      name: 'place',
      component: place
    },{
      path: '/Sponsorship',
      name: 'Sponsorship',
      component: Sponsorship
    },{
      path: '/VisaInvitationHotel',
      name: 'VisaInvitationHotel',
      component: VisaInvitationHotel
    },{
      path: '/WhyVisit',
      name: 'WhyVisit',
      component: WhyVisit
    },{
      path: '/WhoVisit',
      name: 'WhoVisit',
      component: WhoVisit
    },{
      path: '/HowVisit',
      name: 'HowVisit',
      component: HowVisit
    },{
      path: '/Evaluation',
      name: 'Evaluation',
      component: Evaluation
    },{
      path: '/ExhibitionMarketing',
      name: 'ExhibitionMarketing',
      component: ExhibitionMarketing 
    },{
      path: '/ExhibitionNews',
      name: 'ExhibitionNews',
      component: ExhibitionNews
    },{
      path: '/Media',
      name: 'Media',
      component: Media
    },{
      path: '/MediaInfo',
      name: 'MediaInfo',
      component: MediaInfo
    },{
      path: '/TradeNews',
      name: 'TradeNews',
      component: TradeNews
    },{
      path: '/Buyers',
      name: 'Buyers',
      component: Buyers
    },{
      path: '/Sponsors',
      name: 'Sponsors',
      component: Sponsors
    },{
      path: '/TopOperators',
      name: 'TopOperators',
      component: TopOperators
    },{
      path: '/SupportedBy',
      name: 'SupportedBy',
      component: SupportedBy
    },{
      path: '/ConferencePartner',
      name: 'ConferencePartner',
      component: ConferencePartner
    },{
      path: '/ServiceProvider',
      name: 'ServiceProvider',
      component: ServiceProvider
    },{
      path: '/DomesticMedia',
      name: 'DomesticMedia',
      component: DomesticMedia
    },{
      path: '/ForeignMedia',
      name: 'ForeignMedia',
      component: ForeignMedia
    },{
      path: '/ExhibitionArea',
      name: 'ExhibitionArea',
      component: ExhibitionArea
    },{
      path: '/HighEndTourism',
      name: 'HighEndTourism',
      component: HighEndTourism
    },{
      path: '/Meeting',
      name: 'Meeting',
      component: Meeting
    },{
      path: '/Online',
      name: 'Online',
      component: Online
    },{
      path: '/Conference2017',
      name: 'Conference2017',
      component: Conference2017
    },{
      path: '/Conference2018',
      name: 'Conference2018',
      component: Conference2018
    },{
      path: '/Conference2019',
      name: 'Conference2019',
      component: Conference2019
    },{
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    },{
      path: '/AboutOrganization ',
      name: 'AboutOrganization ',
      component: AboutOrganization 
    }
  ]
})


