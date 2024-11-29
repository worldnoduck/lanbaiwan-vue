<template>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
        <el-sub-menu v-for="(item,index) in routes" :key="item.name" :index="index.toString()">
            <template #title>
                <el-icon><location /></el-icon>
                <span>{{ item.name }}</span>
            </template>
        </el-sub-menu>
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
  import router from '../router/Guanli'
  const routes = ref(router.options.routes);

  const isCollapse = ref(false)
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  
  <style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: auto;
    min-height: 400px;
  }
  </style>
  