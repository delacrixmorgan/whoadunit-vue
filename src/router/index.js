import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import SeatDetail from '../views/seat/SeatDetail'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
