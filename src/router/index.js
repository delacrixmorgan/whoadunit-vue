import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import SeatList from '../views/seat/SeatList'
import SeatDetail from '../views/seat/SeatDetail'
import PersonList from '../views/person/PersonList'
import PersonDetail from '../views/person/PersonDetail'

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
    component: SeatList,
    props: true
  },
  {
    path: '/mp',
    name: 'MpList',
    component: SeatList,
    props: true
  },
  {
    path: '/adun/:state/',
    name: 'AdunStateList',
    component: SeatList,
    props: true
  },
  {
    path: '/mp/:state',
    name: 'MpStateList',
    component: SeatList,
    props: true
  },
  {
    path: '/adun/:state/:code',
    name: 'ADUNDetail',
    component: SeatDetail,
    props: true
  },
  {
    path: '/mp/:state/:code',
    name: 'MPDetail',
    component: SeatDetail,
    props: true
  },
  {
    path: '/person',
    name: 'PersonList',
    component: PersonList,
    props: true
  },
  {
    path: '/person/:id',
    name: 'PersonDetail',
    component: PersonDetail,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
