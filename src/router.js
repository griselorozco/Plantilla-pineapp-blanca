import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/pages/Index'),
      children: [
        {
          name: 'Lock',
          path: 'lock',
          component: () => import('@/views/pages/Lock'),
        },
        {
          name: 'Login',
          path: '',
          component: () => import('@/views/pages/Authentication/Login'),
        },
        {
          name: 'Pricing',
          path: 'pricing',
          component: () => import('@/views/pages/Pricing'),
        },
        {
          name: 'UserProfile',
          path: 'user-profile',
          component: () => import('@/views/pages/UserProfile'),
        },
        {
          name: 'Register',
          path: 'register',
          component: () => import('@/views/pages/Register'),
        },
      ],
    },
    {
      path: '/home',
      component: () => import('@/views/container/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: 'dashboard',
          component: () => import('@/views/container/Dashboard'),
        },
        // Users
        {
          name: 'Users',
          path: 'security/users',
          component: () => import('@/views/container/Users/Users'),
        },
        {
          name: 'UsersFrom',
          path: 'security/users/form',
          component: () => import('@/views/container/Users/UsersFrom'),
        },
        {
          name: 'Positions',
          path: 'security/positions',
          component: () => import('@/views/container/Positions/Positions'),
        },
        {
          name: 'PositionForm',
          path: 'company/positions/form',
          component: () => import('@/views/container/Positions/PositionForm'),
        },
        {
          name: 'UserProfile',
          path: 'user-profile',
          component: () => import('@/views/container/UserProfile'),
        },
      ],
    },
    {
      path: '*',
      component: () => import('@/views/pages/Index'),
      children: [
        {
          name: '404 Error',
          path: '',
          component: () => import('@/views/pages/Error'),
        },
      ],
    },
  ],
})
