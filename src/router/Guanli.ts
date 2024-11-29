import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../views_1/Home.vue';

// 定义路由配置
const routes: Array<RouteRecordRaw> = [
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: () => import('../Guanli_views1/Dashboard.vue')
  },
  {
    path: '/Content_Management',
    name: 'Content_Management',
    component: () => import('../Guanli_views1/Content_Management.vue')
  },
  {
    path: '/User_Management',
    name: 'User_Management',
    component: () => import('../Guanli_views1/User_Management.vue')
  },
  {
    path: '/Comment_Management',
    name: 'Comment_Management',
    component: () => import('../Guanli_views1/Comment_Management.vue')
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: () => import('../Guanli_views1/Settings.vue')
  },
  {
    path: '/Design_Themes',
    name: 'Design_Themes',
    component: () => import('../Guanli_views1/Design_Themes.vue')
  },
  {
    path: '/Plugins_Extensions',
    name: 'Plugins_Extensions',
    component: () => import('../Guanli_views1/Plugins_Extensions.vue')
  },
  {
    path: '/E-commerce_Management',
    name: 'E-commerce_Management',
    component: () => import('../Guanli_views1/E-commerce_Management.vue')
  },
  {
    path: '/Analytics_Reports',
    name: 'Analytics_Reports',
    component: () => import('../Guanli_views1/Analytics_Reports.vue')
  },
  {
    path: '/Backup_Restore',
    name: 'Backup_Restore',
    component: () => import('../Guanli_views1/Backup_Restore.vue')
  },
  {
    path: '/System_Maintenance',
    name: 'System_Maintenance',
    component: () => import('../Guanli_views1/System_Maintenance.vue')
  },
  
  // 可以添加更多路由
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
