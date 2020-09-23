import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/get-started',
    name: 'GetStarted',
    component: () => import('../views/GetStarted.vue')
  },
  {
    path: '/tracks',
    component: () => import('../views/Tracks.vue')
  },
  {
    path: '/work-identity',
    component: () => import( '../views/Identity.vue')
  },
  {
    path: '/work-efficiency',
    component: () => import('../views/Efficiency.vue')
  },
  {
    path: '/work-strategy',
    component: () => import( '../views/Strategy.vue')
  },
  {
    path: '/work-mgmt',
    component: () => import( '../views/Management.vue')
  },
  {
    path: '/summary-identity',
    component: () => import( '../views/SummaryIdentity.vue')
  },
  {
    path: '/summary-efficiency',
    component: () => import( '../views/SummaryEfficiency.vue')
  },
  {
    path: '/summary-strategy',
    component: () => import( '../views/SummaryStrategy.vue')
  },
  {
    path: '/summary-mgmt',
    component: () => import('../views/SummaryMgmt.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router