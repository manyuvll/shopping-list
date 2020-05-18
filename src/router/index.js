import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../layouts/layout.vue'
import home from '../views/Home.vue'
import list from '../views/Listing.vue'
import newList from '../views/AddList.vue'
import listDetail from '../views/ListDetail.vue'
import addItem from '../views/AddItem.vue'
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
      { path: 'listing/new', component: newList },
      { path: 'listing/:slug', component: listDetail },
      { path: 'listing/:slug/add', component: addItem }
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
