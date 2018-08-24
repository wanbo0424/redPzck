import Vue from 'vue'
import Router from 'vue-router'
import layOut from '../components/layOut'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layOut',
      component: layOut
    }
  ]
})
