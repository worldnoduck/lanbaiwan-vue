<template>
  <div id="app">
   <!-- 主页显示 -->
   <keep-alive><router-view></router-view></keep-alive>
 </div>
</template>
<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import Loading from './components/Loading.vue';
import { defineComponent } from 'vue';

defineComponent({
 name: 'App',
});
// 解决 ERROR ResizeObserver loop completed with undelivered notifications.
// 重写 ResizeObserver 的构造函数，并在其中定义并调用防抖函数
window.ResizeObserver = class ResizeObserver extends window.ResizeObserver {
 constructor(callback: ResizeObserverCallback) {
   const debounceDelay = 16 // 防抖延迟时间
   let timer: NodeJS.Timeout | null = null
   const debouncedCallback: ResizeObserverCallback = (entries: ResizeObserverEntry[], observer: ResizeObserver) => {
     if (timer) clearTimeout(timer)
     timer = setTimeout(() => callback(entries, observer), debounceDelay);
   }

   super(debouncedCallback)
 }
}
</script>
<style scoped>
#app {
 width: 100%;
 height: 100%;
}
</style>
