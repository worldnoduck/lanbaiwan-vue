<template>
  <!-- 加载动画 -->
  <div v-if="visable" id="loading" class="loading-overlay">
    <div class="loader"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, defineExpose } from 'vue';

const emit = defineEmits();
const props = defineProps<{
  visable: boolean;
}>();

const loading = {
  in(next: () => void) {
    const container = document.getElementById("loading");
    container?.classList.remove("loading_out");
    setTimeout(() => {
      next();

      emit('triggerCheck');
    }, 1000);
  },
  out() {
    const container = document.getElementById("loading");
    container?.classList.add("loading_out");


  }
};

defineExpose(loading);
</script>

  
  <style lang="scss" scoped>

  .loading_out{

    transform: translateY(-110vh) !important;
    transition:  transform 0.5s ease;

  }
 
  /* Loading Overlay */
  .loading-overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    border-radius: 10px;
    background: rgb(255, 153, 0); /* 半透明背景 */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999999999999999999999; /* 确保覆盖其他内容 */
    transform: translateY(0); /* 初始状态在视口下方 */
    opacity: 1;
    transition: 0.5s ease;
  }

    .loader {
        width: 120px;
        height: 150px;
        background-color: #303030;
        background-repeat: no-repeat;
        background-image: linear-gradient(#464343 50%, #bbb 51%),
            linear-gradient(#535151, #413a3a), linear-gradient(#585757, #6b6868),
            radial-gradient(ellipse at center, #aaa 25%, #363131 26%, #eee 50%, #0000 55%),
            radial-gradient(ellipse at center, #aaa 25%, #131111 26%, #eee 50%, #0000 55%),
            radial-gradient(ellipse at center, #aaa 25%, #1f1d1d 26%, #eee 50%, #0000 55%);
        background-position: 0 20px, 45px 0, 8px 6px, 55px 3px, 75px 3px, 95px 3px;
        background-size: 100% 4px, 1px 23px, 30px 8px, 15px 15px, 15px 15px, 15px 15px;
        position: relative;
        border-radius: 6%;
        transform: scale(0.5); /* 根据需要调整缩放比例 */
        transform-origin: center; /* 确保从中心进行缩放 */
        animation: shake 3s ease-in-out infinite;
        transform-origin: 60px 180px;
    }

    .loader:before {
        content: "";
        position: absolute;
        left: 5px;
        top: 100%;
        width: 7px;
        height: 5px;
        background: #0f0f0f;
        border-radius: 0 0 4px 4px;
        box-shadow: 102px 0 #1b1b1b;
    }

    .loader:after {
        content: "";
        position: absolute;
        width: 95px;
        height: 95px;
        left: 0;
        right: 0;
        margin: auto;
        bottom: 20px;
        background-color: #bbdefb;
        background-image: linear-gradient( to right, #0004 0%, #0004 49%, #0000 50%, #0000 100% ),
            linear-gradient(135deg, #64b5f6 50%, #607d8b 51%);
        background-size: 30px 100%, 90px 80px;
        border-radius: 50%;
        background-repeat: repeat, no-repeat;
        background-position: 0 0;
        box-sizing: border-box;
        border: 10px solid #585151;
        box-shadow: 0 0 0 4px #999 inset, 0 0 6px 6px #0004 inset;
        animation: spin 3s ease-in-out infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg)
        }

        50% {
            transform: rotate(360deg)
        }

        75% {
            transform: rotate(750deg)
        }

        100% {
            transform: rotate(1800deg)
        }
    }

    @keyframes shake {
        65%, 80%, 88%, 96% {
            transform: rotate(0.5deg)
        }

        50%, 75%, 84%, 92% {
            transform: rotate(-0.5deg)
        }

        0%, 50%, 100% {
            transform: rotate(0)
        }
    }
</style>
