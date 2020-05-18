import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../layouts/layout.vue'
import home from '../views/Home.vue'
import list from '../views/Listing.vue'
import newList from '../views/AddList.vue'
import error from '../views/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component: layout,
    children: [
      { path: '', component: home },
      { path: 'listing', component: list },
      { path: 'listing/new', component: newList }
    ]
  },
  {
    path: '*',
    component: layout,
    children: [
      { path: '', component: error },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
