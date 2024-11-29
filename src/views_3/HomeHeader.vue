<template>
    <div class="header_container">
        <el-row class="el-row-container" :gutter="0" :justify="'space-between'" :align="'middle'">
            <el-col class="elcol1" :xs="6" :sm="6" :md="8" :lg="8" :xl="8">
                <div class="logo_container">
                    <svg xmlns="http://www.w3.org/2000/svg" height="100%">
                    </svg>
                </div>
            </el-col>
            <el-col class="elcol2" :xs="13" :sm="6" :md="8" :lg="8" :xl="8">
                <div class="search-container">
                    <!-- 当搜索框展开时显示输入框 -->
                    <SearchBox/>
                    
                </div>
            </el-col>
            <el-col class="elcol3" :xs="3" :sm="4" :md="8" :lg="8" :xl="8">
                <CebianlanIcon />
            </el-col>
       
        </el-row>
       
        
        
    </div>
</template>
<!-- ------------------------------------------------------------------------------脚本 -->
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed  } from 'vue';
import SearchBox from '../components/SearchBox.vue';
import CebianlanIcon from '../components/CebianlanIcon.vue';


//搜索框
const searchQuery = ref('');
const isFocused=ref(false);
const handleSearch = () => {
  console.log('搜索内容:', searchQuery.value);
  
};



//右侧导航栏
const activeIndex = ref('0');
const handleSelect = (index: string) => {
  activeIndex.value = index;
};

//nav栏动态响应
const collapsed = ref(window.innerWidth < 768); // 用于控制折叠状态的响应式变量
const isCollapsed = computed(() => collapsed.value);
const handleResize = () => {

  collapsed.value = window.innerWidth < 768;
};
onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize(); // 初始化时设置状态
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>


<!-- ------------------------------------------------------------------------------样式 -->
<style lang="scss" scoped>
.elcol1{
    height: 100%;
    transition: all 0.5s ease; /* 小屏幕下也添加过渡效果 */

    display: flex;

}
.elcol2{
    display: flex;
    justify-content: center;

}
.elcol3{
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
}

.el-row-container {
    height: 100%;
  transition: all 0.5s ease; /* 添加整体过渡效果 */
}



.search-container {
  transition: width 0.5s ease; /* 搜索框的过渡效果 */
}
.header_container{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    justify-content: center;
    align-content: center;
    z-index: 9999;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    /* Scale factor */
    --scale: 1;
    transform: scale(var(--scale));
    backdrop-filter: blur(4px);
    background-color: rgb(243, 182, 192, 0.35);

    .search_container{
        display: flex;
        align-items: center;
   

        

       
        
        
    }
    .nav_container{
        position: relative;
        display: flex;
        justify-content: flex-end; /* 靠右对齐 */
        
    }
    
}


@media (max-width: 768px) {
           
            
    .el-col-container, .search-container {
        transition: all 0.5s ease; /* 小屏幕下也添加过渡效果 */
    }

    .elcol1{
        transform: translatex(-100vw) !important;

        transition: all 0.5s ease; /* 小屏幕下也添加过渡效果 */

    }
    .elcol2{
        transform: translatex(-6vw) !important;

        transition: all 0.5s ease; /* 小屏幕下也添加过渡效果 */

    }
}    

.el-menu-item{
    padding-right: 0px;
}


.el-row-container{
    width: 100%;
    .el-col-container{
        width: 100%;
}
}

//左侧logo

.logo_container{
    height: 100%;
    
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中（如果需要） */
    span {

        display: flex;
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中（如果需要） */
        width: 100%;
        font-size:2vw;
        color: rgba(195, 195, 221, 0.363); /* 设置文字颜色为蓝色 */
        font-family: 'Arial', sans-serif; /* 设置为黑体 */
        font-weight: bold; /* 设置文字加粗 */
    }
}


</style>