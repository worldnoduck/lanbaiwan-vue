<template>
    <div class="container">
      <div class="content">
        <div class="stream_item">
          <div class="header">
            <div class="title">
              <span>全部</span>
            </div>
          </div>
        </div>
        <div class="dashboard"></div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import webrtc from 'webrtc-adapter';
  
  
  onMounted(() => {
   
  });
  
  onUnmounted(() => {
   
  });
  </script>
  
  <style lang="scss" scoped>
  /* 添加一些基本样式 */
  .container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:center;

    .content{
    
      width: 70%;
      max-width: 2000px;
      height: 100%;
      display: flex;
  
      .stream_item{
        background-color: aqua;
        width: 65%;
        min-width: 350px;
        height: 100%;
        border-radius: 20px;
        overflow: hidden;
        .header{
          width: 100%;
          height: 80px;
          background-color: rgb(18, 127, 223);
          display: flex;
          padding-left: 10px;
          align-items: center;
          .title{
            
            font-size: 35px;
            color: beige;
          }
        }
      }
      .dashboard{
        width: 35%;
        height: 100%;
        background-color: azure;
      }
    }
  }
  </style>