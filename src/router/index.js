import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import SeatDetail from '../views/seat/SeatDetail'
import MemberList from '../views/member/MemberList'
import MemberDetail from '../views/member/MemberDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/seat/:id',
    name: 'SeatDetail',
    component: SeatDetail,
    props: true
  },
  {
    path: '/adun',
    name: 'AdunList',
    component: MemberList,
    props: true
  },
  {
    path: '/mp',
    name: 'MpList',
    component: MemberList,
    props: true
  },
  {
    path: '/adun/:state/',
    name: 'AdunStateList',
    component: MemberList,
    props: true
  },
  {
    path: '/mp/:state',
    name: 'MpStateList',
    component: MemberList,
    props: true
  },
  {
    path: '/adun/:state/:code',
    name: 'ADUNDetail',
    component: MemberDetail,
    props: true
  },
  {
    path: '/mp/:state/:code',
    name: 'MPDetail',
    component: MemberDetail,
    props: true
  },
  {
    path: '/person/:id',
    name: 'PersonDetail',
    component: SeatDetail,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
