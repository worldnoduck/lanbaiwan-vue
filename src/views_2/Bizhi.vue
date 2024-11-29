<template>
    <div class="container">
        <div class="bar">
            <el-row :gutter="10">
                <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="4">
                    <div class="head_logo" >
                        <img src="../../public//img//logo.jpeg" alt="" >
                    </div>

                </el-col>
                <el-col :xs="0" :sm="0" :md="0" :lg="0" :xl="14">
                    <div class="head_content">
                        <ul>
                            <li v-for="(item,index) in bar" :key="index">
                                <a>
                                    {{item.biaoti}}
                                </a>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="6">
                    <div class="head_footer">
                        <div></div>
                        <div></div>
                        <div></div>

                    </div>
                </el-col>
               
            </el-row>
          
        </div>
        <div class="content">
            <div class="lunbotu"><Lunbotu :huadonglan="huadonglan" :zhanshishu="1"></Lunbotu></div>
            <div class="waterfall">
                <Waterfall 
                    :list="list" 
                    :align="align"
                    :breakpoints="{
                        3000:{rowPerView:5},

                        2000:{rowPerView:4},
                        1600:{rowPerView:4},
                        1200:{rowPerView:4},
                        800:{rowPerView:3},
                        500:{rowPerView:2}
                        }"
                    :gutter=10
                    :hasAroundGutter="true"
                    :backgroundColor="'rgba(255, 240, 255, 0)'"
                    >

                    <!-- v2.6.0之前版本插槽数据获取 -->
                    <!-- <template #item="{ item, url, index }"> -->
                    <!-- 新版插槽数据获取 -->
                    <template #default="{ item, url, index }">
                        <div class="card">
                            <LazyImg :url="url" class="lazy-img" />
                            <p class="text">这是具体内容</p>
                        </div>
                    </template>
                </Waterfall>
            </div>
        </div>
        <div class="gongxian_user"></div>
        <div class="footer"></div>
    </div>
</template>
<script setup lang="ts">
import Lunbotu from '../components/Lunbotu.vue';
import { onMounted, ref ,computed} from 'vue';

const huadonglan=ref<{lianjie:string,imgurl:string}[]>([
    {lianjie:'resume',imgurl:"public/img/bg.jpg"},
    {lianjie:'resume',imgurl:"public/img/bg.jpg"},
    {lianjie:'resume',imgurl:"public/img/bg.jpg"},
    {lianjie:'resume',imgurl:"public/img/bg.jpg"},
    {lianjie:'resume',imgurl:"public/img/bg.jpg"},
])
huadonglan.value = [...huadonglan.value, ...huadonglan.value, ]


//瀑布流
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next'
import 'vue-waterfall-plugin-next/dist/style.css'
const align = 'center';
const bar=ref<{ lianjie: string; biaoti: string }[]>([
    {lianjie:'',biaoti:'首页'},
    {lianjie:'',biaoti:'动漫'},
    {lianjie:'',biaoti:'人物'},
    {lianjie:'',biaoti:'风景'},
    {lianjie:'',biaoti:'科幻'},
    {lianjie:'',biaoti:'动物'},
    {lianjie:'',biaoti:'植物'},
    {lianjie:'',biaoti:'建筑'},
    {lianjie:'',biaoti:'食物'},

])
// 数据
  const list= [
  {
      src: "public/img/ceshi.png",
    },  
  {
      src: "public/img/heimao.jpg",
    },
    {
      src: "public/in403.png",
    },
    {
        src:"public/img/bg.jpg",

    },
    {
        src:"public/img/lanbaiwan.jpeg",

    },
    {
      src: "public/in403.png",
    },
    {
        src:"public/img/bg.jpg",

    },
    {
        src:"public/img/lanbaiwan.jpeg",

    },
    {
      src: "public/in403.png",
    },
    {
        src:"public/img/bg.jpg",

    },
    {
        src:"public/img/lanbaiwan.jpeg",

    },
    {
      src: "public/in403.png",
    },
    {
        src:"public/img/bg.jpg",

    },
    {
        src:"public/img/lanbaiwan.jpeg",

    },
    {
      src: "public/img/ceshi.png",
    },  
  {
      src: "public/img/heimao.jpg",
    },
    {
      src: "public/in403.png",
    },
    {
        src:"public/img/bg.jpg",

    },
    {
        src:"public/img/lanbaiwan.jpeg",

    },
    {
      src: "public/in403.png",
    },
    {
        src:"public/img/bg.jpg",

    },
    {
        src:"public/img/lanbaiwan.jpeg",

    },
    {
      src: "public/in403.png",
    },
    {
        src:"public/img/bg.jpg",

    },
    {
        src:"public/img/lanbaiwan.jpeg",

    },
    {
      src: "public/in403.png",
    },
    {
        src:"public/img/bg.jpg",

    },
    {
        src:"public/img/lanbaiwan.jpeg",

    },
  ]

</script>

<style lang="scss" scoped>
.container{
    margin: auto;
    width: 90%;;
    height: 100%;
    
    .bar{
        background-color: rgb(255, 255, 255);
        width: 100%;
        height: 50px;
        z-index: 99999;
        display: flex;
        border-radius: 25px;
        overflow: hidden;
        .el-row{
            width: 100%;
            .el-col{
                height: 100%;
                border: 1px solid #000;
            }
        }
        .head_logo{
            width: 250px;
            height: 100%;
            overflow: hidden;
            img{
                height: 100%;
                object-fit: cover;
            }
        }
        .head_content{
            height: 100%;
            width: auto;
            ul{
                list-style-type: none; /* 去除列表项前的标点 */
                display: flex;
                height: 100%;
                margin: 0px;
                align-items: center;

                li {
                    display: inline-block; /* 使列表项横向排列 */
                    /* 你可以根据需要添加更多的样式，比如间距 */
                    margin-right: 10px; /* 列表项之间的间距 */
                    height: 100%;
                    display: flex;
                    min-width: 100px;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;

                }
                li:hover{
                    background-color: rgb(237, 238, 239);

                }
            }
        }
    }
    .content{
        width: 100%;
        height: 100%;
        .lunbotu{
            width: auto;
            height: 30%;
            max-height: 600px;
            border-radius: 25px;
            overflow: hidden;
        }
        .waterfall{
            .card{
                border-radius: 25px;
                background: #ffffff;
                overflow: hidden;
                transition: transform 0.3s ease; /* 平滑的变换效果 */

               
              
            }
            .card:hover {
                    transform: scale(1.1); /* 鼠标悬停时放大1.1倍 */
                    position: relative; /* 相对定位，确保放大效果在卡片内部 */

                }
            
        }
    }

}

</style>