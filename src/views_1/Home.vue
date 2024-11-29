<script lang="ts" setup>
import HomeHeader from '../views_3/HomeHeader.vue';
import HomeMiddle from '../views_3/HomeMiddle.vue';
import HomeAside from '../views_3/HomeAside.vue';
import Shipeishouji from '../components/Shipeishouji.vue';
import Shipeidiannao from '../components/Shipeidiannao.vue';
import LogandReg from '../components/LogandReg.vue';

import { ref, onMounted, nextTick,watch } from 'vue';
import { useRouter } from 'vue-router';
import store from '../store/index';

import Loading from '../components/Loading.vue';

const loadingRef = ref<InstanceType<typeof Loading> | null>(null);
const router = useRouter();
const check_loading = () => {
  const timer = setInterval(() => {

    if (document.readyState === 'complete') {

      clearInterval(timer);
      loadingRef.value?.out();
    }
  }, 300);
};
// 创建一个响应式数据 message
const showLoginDialog = ref<boolean>(false);

// 定义一个方法，当子组件触发 'update' 事件时被调用
function handleUpdate(value: boolean) {
  showLoginDialog.value = value;
}
onMounted(async () => {
  await nextTick();
  

  check_loading();
  router.beforeEach((to, from, next) => {
    loadingRef.value?.in(() => next());
  });
});

// // 监听userToken和isLoggedIn的变化
// watch(
//       () => [store.state.LoginState.isLoggedIn, localStorage.getItem('userToken')],
//       ([isLoggedIn, userToken]) => {
//         if (!isLoggedIn && !userToken) {
//           showLoginDialog.value = true;
//           console.log(store.state.LoginState.isLoggedIn)
//           console.log( localStorage.getItem('userToken'))

//         }
//       },
//       { immediate: true }
//     );



</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header id="elheader"><HomeHeader /></el-header>
      <el-container>
        <el-aside><HomeAside/></el-aside>
        <el-main>
          <HomeMiddle />
          <Shipeishouji @update:visible="handleUpdate"></Shipeishouji>
          <Shipeidiannao @update="handleUpdate"></Shipeidiannao>
          <Loading ref="loadingRef" :visable="true" @triggerCheck="check_loading" />
          <LogandReg :visible="showLoginDialog" @update:visible="handleUpdate"/>
         </el-main>
      </el-container>
    </el-container>
  </div>
</template>



<style scoped lang="scss">
.common-layout{
  overflow: hidden; /* 避免内容溢出 */
  background-image: url('../../public/indexbg.avif');

  width: 100vw;
  height: auto;
  transition: width 0.8s ease, height 0.8s ease, opacity 0.8s ease; /* 添加宽度、高度和不透明度的过渡效果 */
  .el-container{
    overflow-y: hidden;
    width: 100%;
    height: 100vh;
    transition: width 0.8s ease, height 0.8s ease, opacity 0.8s ease; /* 添加宽度、高度和不透明度的过渡效果 */
    .el-header{
      position: fixed;
      z-index: 10000;
      width: 100%;
      height: 60px;
      padding: 0;      
      transition: width 0.8s ease, height 0.8s ease, opacity 0.8s ease; /* 添加宽度、高度和不透明度的过渡效果 */
    }
  
  
    .el-container{
      margin-top: 60px;
      transition: width 0.8s ease, height 0.8s ease, opacity 0.8s ease; /* 添加宽度、高度和不透明度的过渡效果 */
      .el-aside{
        width: 13%;
        max-width:15%;
        height: 100%;
        background-color: bisque;
        transition: width 0.8s ease, opacity 0.8s ease; 
        display: none;
      }
      .el-main{
        height: 100%;
        padding: 0;
      }
      /* 在小屏幕设备（如手机）上调整样式 */
      
      

    }
  }
}

@media (max-width: 768px) {
        .el-aside {
          width: 0; /* 小屏幕不显示 */
          height: 0; /* 小屏幕不显示 */
          transition: width 0.8s ease, opacity 0.8s ease; 
        }
        .el-container{
          .el-container{
            margin-top: 60px !important;
          }
        }
      }
</style>