import Vue from 'vue'
import Router from 'vue-router'
import layOut from '../components/layOut'
import redPacket from '../components/redPacket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'redPacket',
      component: redPacket,
    }
  ,
    {
      path: '/layOut',
      name: 'layOut',
      component: layOut,
    }
  ]
})
