import Vue from 'vue'
import VueRouter from 'vue-router'
import Show from '@/views/Show'
import ShowsLibrary from '@/views/ShowsLibrary'
import Theater from '@/views/Theater'
import Search from '@/views/Search'
import Ditu from '@/views/Ditu'
import City from '@/views/City'



import Ticket from '@/views/Ticket'

Vue.use(VueRouter)

const routes = [
  {
    path: '/show',
    component: Show,
  },
  {
    path: '/showsLibrary/:myid',
    component: ShowsLibrary,
    props: true
  },
  {
    path: '/theater',
    component: Theater,
      
  },
  {
    path: '/ditu',
    component: Ditu,
  },
  {
    path: '/city',
    component :City
},

  {
    path: '/search/:myid',
    component: Search,
    props: true
  },
  {
    path: '/myjuooo',
    component: () => import('@/views/Myjuooo')
  },
  {
    path: '/ticket/:myid/:showid',
    component: Ticket,
    props: true
  },
  {
    path: '*',
    redirect: '/show'
  }
]

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

export default router
