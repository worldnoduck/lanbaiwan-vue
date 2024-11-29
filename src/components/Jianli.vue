<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const gotoMyResume=(page:string)=>{
    try{
        
            router.push({ name: page });
    }finally{

}

}
</script>





<template>
<div class="gamedetail_container" @click="gotoMyResume('Resume')">
    <div class="gamedetail_content">
        <div class="gamedetail_details">
            <strong >个人简历</strong>
            <p>
                生成个人简历模板
                <br>
                找工作真的好难~
            </p>
        </div>
        <div class="gamedetail_img">
            <img src="https://sytech-web.cn/wp-content/themes/sytech/img/services/mg_maker.svg">
        </div>
        
    </div>
    
</div>
</template>






<style lang="scss" scoped>
.gamedetail_container{
    border: 1px solid #ccc; /* 修正边框样式 */
    border-radius: 10px;
    width: 80%;
    margin: auto; /* 居中容器 */
    height: auto;
    transition: all 0.3s ease; /* 平滑过渡效果 */

    .gamedetail_content{
        display: flex; /* 使用 Flexbox 布局 */
        align-items: center; /* 垂直居中对齐 */
        justify-content: center; /* 水平居中对齐 */
        text-align: center; /* 让文本居中 */
        .gamedetail_img{
            width: 40%;
            display: flex; /* 使用 Flexbox 对齐图片 */
            justify-content: center; /* 水平居中图片 */
            align-items: center; /* 垂直居中图片 */

        }
        .gamedetail_img img {
            max-width: 100%; /* 确保图片适应容器 */
            height: auto; /* 保持比例 */
        }
        .gamedetail_details{
            width: 40%; /* 调整内容宽度 */
            strong{
                font-size:larger;
                white-space: nowrap; /* 使文字不换行 */
            }
        }
    }
   
}
.gamedetail_container:hover{
    background-color: #f0f0f0; /* 改变背景颜色 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
    transform: scale(1.02); /* 放大容器 */
    transition: all 0.3s ease; /* 平滑过渡效果 */

}
</style>