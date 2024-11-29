<template>
    <div class="xiangmu_content">
        <div class="tupian">
            <slot name="tupianinfo"></slot>
        </div>
        <div class="biaoti">
            <slot name="biaotiinfo"></slot>

        </div>
        <div class="jianjie">
                <slot name="jianjieinfo">
                </slot>
            
        </div>
        <div class="xinxi">
            <slot name="xinxiinfo"></slot>

        </div>
    </div>
    
</template>

<style lang="scss" scoped>
.xiangmu_content{
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    transition: box-shadow 0.3s ease, transform 0.3s ease;

    .tupian{
        width: 100%;
        height: 106px;
        overflow: hidden;
        min-height: 108px;

    }
    .biaoti{
        width: 100%;
        height: 10%;
        overflow: hidden;
        font-size: 20px;

    }
    .jianjie{
        width: 90%;
        padding-right: 10px;
        padding-left: 10px;
        max-height: 125px;
        min-height: 100px;
        background-color: rgba(180, 180, 180, 0.199);
        overflow: hidden;
        margin: auto;
        margin-top: 5px;
        border-radius: 10px;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        word-break: break-all;
    }
    .xinxi{
        width: 100%;
        height: 15%;
        position: absolute; /* 使用绝对定位 */
        bottom: 0; /* 定位到底部 */
        left: 0;
        
        background-color: rgb(238, 238, 238);
        overflow: hidden;

    }
}
.xiangmu_content:hover{
     /* 增加阴影来模拟弹出效果 */
  
  /* 可选：稍微抬起元素 */
  transform: translateY(-8px);
  
  /* 过渡效果使弹出更平滑 */
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}



@media (max-width: 768px) {
    .xiangmu_content{
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    padding-bottom: 5px;

    .tupian{
        width: 100%;
        height: 100%;
        min-height: 78px;
        overflow: hidden;
    }
    .biaoti{
        width: 100%;
        height: 20%;
        overflow: hidden;
      
       
     
    }
    .jianjie{
        width: 90%;
        max-width: 90%;
        height: auto;
        min-height: 60px;

        max-height: 200px;
        background-color: rgba(180, 180, 180, 0.199);
        border-radius: 5px;

        display: -webkit-box;
        overflow: hidden;
        line-height: 20px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;


    }
    .xinxi{
     display: none;

    }
}

}

</style>