<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="true"
    @select="handleSelect"
  >
    <el-sub-menu index="1">
      <template #title>首页</template>
      <el-menu-item index="/home">首页</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>壁纸分享</template>
      <el-menu-item index="/bizhi">壁纸分享</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>文件分享</template>
      <el-menu-item index="/wenjian">文件分享</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title>教程学习</template>
      <el-menu-item index="/jiaocheng">教程学习</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="5">
      <template #title>关于我们</template>
      <el-menu-item index="/about">关于我们</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const activeIndex = ref('/resume');

const handleSelect = (index: string, indexPath: string[]) => {
  // 使用Vue Router进行路由跳转
  router.push({ path: index });
};
</script>

<style lang="scss" scoped>
.el-menu{
  width: 100%;
  justify-content: end;
  height:100% ;
  background:none;
  transform: scale(1); /* 默认缩放比例为 1 */
  transform-origin: top left; /* 缩放时的基准点 */
}
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}

</style>