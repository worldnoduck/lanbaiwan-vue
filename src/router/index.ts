import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../views_1/Home.vue';

// 定义路由配置
const routes: Array<RouteRecordRaw> = [
  {path: '/',redirect:'/home'},
  {
    path: '/',
    name: '/',
    component: HomePage,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views_2/HomeChild.vue'),
        children:[
          
        ]
      },
      {
        path:'gongjuxiang',
        name:'Gongjuxiang',
        component:()=> import('../views_2/Gongjuxiang.vue'),
      },
      {
        path: 'resume',
        name: 'Resume',
        component: () => import('../views_2/MyResume.vue')
      },
      {
        path: 'shequ',
        name: 'Shequ',
        component: () => import('../views_2/Shequ.vue')
      },
      {
        path: 'bizhi',
        name: 'Bizhi',
        component: () => import('../views_2/Bizhi.vue')
      },
      {
        path: 'jiaocheng',
        name: 'Jiaocheng',
        component: () => import('../views_2/Jiaocheng.vue')
      },
      {
        path: 'wenjian',
        name: 'Wenjian',
        component: () => import('../views_2/Wenjian.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views_2/About.vue')
      },
      {
        path:'xiaoyouxi',
        name:'Xiaoyouxi',
        component:()=> import('../views_2/Xiaoyouxi.vue'),
      },
      {
        path: 'guanli',
        name: 'Guanli',
        component: () => import('../views_1/Guanli.vue')
      }
      // {
      //   path: '/image-analysis',
      //   name: 'ImageAnalysis',
      //   component: () => import('../views_2/ImageAnalysis.vue') 
      // },
      // {
      //   path: '/data-analysis',
      //   name: 'DataAnalysis',
      //   component: () => import('../views_2/DataAnalysis.vue') 
      // },
      // {
      //   path: '/color-picker',
      //   name: 'ColorPicker',
      //   component: () => import('../views_2/ColorPicker.vue') 
      // },
      // {
      //   path: '/3d-model',
      //   name: '3DModel',
      //   component: () => import('../views_2/Model3D.vue') 
      // },
      // {
      //   path: '/kanban-girl',
      //   name: 'KanbanGirl',
      //   component: () => import('../views_2/KanbanGirl.vue') 
      // },
      // {
      //   path: '/mini-games',
      //   name: 'MiniGames',
      //   component: () => import('../views_2/MiniGames.vue') 
      // },
      // {
      //   path: '/feedback',
      //   name: 'Feedback',
      //   component: () => import('../views_2/Feedback.vue') 
      // },
      // {
      //   path: '/more',
      //   name: 'More',
      //   component: () => import('../views_2/More.vue')
      // }
    ]
  },
  {
    path: '/guanli',
    name: 'Guanli',
    component: () => import('../views_1/Guanli.vue')
  }
  // 可以添加更多路由
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
