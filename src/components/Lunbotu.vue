<template>
    <div class="swiper-container" >

        <swiper
        :modules="modules"
        :slides-per-view=zhanshishu
        :space-between="10"
        :autoplay="{delay:2000}"
        :followFinger=true
        :grabCursor=true
        :loop=true
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        >

            <!-- 使用传入的数据 -->
                <swiper-slide v-for="(item,index) in props.huadonglan" :key="index">
                    <router-link :to="item.lianjie" tag="div" class="image-link">
                        <img :src="item.imgurl" alt="null" />
                    </router-link>

                </swiper-slide>

  
       
        </swiper>
      
    </div>
  </template>
  <script setup lang="ts">
    // import Swiper core and required modules
    import {A11y ,Autoplay} from 'swiper/modules';
  
    // Import Swiper Vue.js components
    import { Swiper,SwiperSlide } from 'swiper/vue';
    import type { Swiper as SwiperType } from 'swiper';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/autoplay';
    // Import Swiper styles
    const modules = [A11y, Autoplay];


    const onSwiper = (swiper:SwiperType) => {
    };
    const onSlideChange = () => {
    };
   // 定义子组件接收的 props
    const props = defineProps<{
        huadonglan: { lianjie: string; imgurl: string }[];
        zhanshishu:number;
    }>();

  </script>
<style scoped>
    .swiper-container {
        width: 100%;/* 设置 Swiper 容器的宽度 */
        height: 100%;
        

        margin: 0 auto; /* 居中显示 */
        
    }
    .swiper{
        display: flex;
        width: 100%;
        height: 100%; /* 设置 Swiper 容器的高度 */
 

    }
    .swiper-slide{

        display: flex;
        justify-content: center;
    }
    img{
        height: 200px;
        min-width: 300px;
        width: 100%;
        object-fit:cover;
    }
    a{
        width: 100%;
    }

</style>