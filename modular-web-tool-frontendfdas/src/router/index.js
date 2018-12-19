import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ThatTextBox from '@/components/ThatTextBox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ThatTextBox',
      component: ThatTextBox
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
