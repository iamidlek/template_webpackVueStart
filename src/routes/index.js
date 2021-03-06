import { createRouter, createWebHashHistory } from "vue-router";
import Home from './Home'
import About from './About'

export default createRouter({
  // hash, history 모드
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes:[
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
  ]
})
