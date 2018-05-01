import Vue from 'vue'
Vue.use(Router);
import Router from 'vue-router'

import Login from '@/components/page/Login'
import Main from '@/components/page/Main'
import OrderList from '@/components/page/order/OrderList'
import ArtList from '@/components/page/art/artList'
import UserList from '@/components/page/users/userList'
import GoodsList from '@/components/page/goods/GoodsList'
import Settings from '@/components/page/settings/Settings'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children:[
        {
          path:"/main/order",
          component:OrderList,
        },
        {
          path:"/main/users",
          component:UserList,
        },
        {
          path:"/main/goods",
          component:GoodsList,
        },
        {
          path:"/main/art",
          component:ArtList,
        },
        {
          path:"/main/settings",
          component:Settings,
        }
      ]
    },
  ]
})

