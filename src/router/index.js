import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/content/HelloWorld'
import Main from '@/components/main'
import Login from '@/components/layout/login'
import Test from '@/components/content/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        // {
        //   path: '/',
        //   name: 'HelloWorld',
        //   component: 'HelloWorld',
        // },
        {
          path: '/hl',
          name: 'HelloWorld',
          component: HelloWorld,
        },
        {
          path: '/test',
          name: 'Test',
          component: Test,
        }
      ]
    },{
      path: '/',
      name: 'Login',
      component: Login,
    }
  ]
})
