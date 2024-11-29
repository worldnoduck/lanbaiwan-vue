<template>
    <div class="kanban_container">
        <div class="kanban_content">
            <img src="https://n.sinaimg.cn/sinakd10118/317/w440h677/20200320/d678-ireifzf9745197.jpg">

        </div>
    </div>
</template>

<script lang="ts"setup>

</script>

<style lang="scss" scoped>
    .kanban_container{
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden; /* 防止出现滚动条 */

        .kanban_content{
            height: 100%;
            width: 100%;

            overflow: hidden; /* 防止出现滚动条 */
            display: flex; /* 使用 Flexbox 对齐图片 */
            justify-content: center; /* 水平居中图片 */
            align-items: center; /* 垂直居中图片 */
            img{    
                position: absolute; /* 使其绝对定位相对于父容器 */
                bottom: 0; /* 将图片对齐到容器底部 */

                height: auto;
                max-width: 90%;
                width: 80%;
                bottom: 0px;
                overflow: hidden; /* 防止出现滚动条 */

            }
        }
       
    }
</style>