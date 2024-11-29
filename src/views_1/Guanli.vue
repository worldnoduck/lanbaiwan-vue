<template>
  <div class="common-layout">
    <el-container class="outside-container">
      <el-header class="header">后台管理系统</el-header>
      <el-container class="inside-container">
        <el-aside class="aside"><cebian></cebian></el-aside>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import cebian from '../components/Guanli_cebian.vue'
</script>

<style lang="scss" scoped>
.common-layout{
    position: relative;
    width: 100%;
    height: 100%;

    scale: 1;

    .outside-container{
        position: relative;
        width: 100%;
        height: 100%;

        .header{
            width: 100% !important;
            height: 50px !important;

        }
        .inside-container{

            .aside{
                width: auto !important;
            }
        }
    }


}
</style>