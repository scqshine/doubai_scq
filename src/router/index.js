import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },

  {
    path: '/book',
    name: 'book ',
    component: ()=>import("../views/book.vue")
  },
  {
    path: '/guangbo',
    name: 'guangbo ',
    component: ()=>import("../views/guangbo.vue")
  },
  {
    path: '/group',
    name: 'group ',
    component: ()=>import("../views/group.vue")
  },

  {
    path: '/mine',
    name: 'mine',
    component: ()=>import("../views/mine.vue")
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
