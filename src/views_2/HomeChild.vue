<template>
    <div class="container">
        <div class="shouye_body">
            <div class="daohang">
                <div class="biaoyu">
                    一个分享文件的网站
                    <br>
                    如遇网页无法正常显示等情况，请更换主流浏览器：Edge、谷歌、火狐等！
                </div>
                <video class="lazyload-content" autoplay playsinline loop muted data-src="https://img-baofun.zhhainiao.com/pcwallpaper_ugc/preview/4cb7248a85ab95051774eae96fb9ce18_preview.mp4"></video>
                <div class="mosha">
                    <div class="moshaneirong">
                        <div class="moshadaohang" v-for="(item,index) in daohangitems" :key="index">
                            <div class="daohangicon" @click="navigateTo(item.route)">
                                <div class="daohangicon_img">
                                    <img :src="item.image" />
                                </div>
                                <div class="daohangicon_title">{{ item.title }}</div>
                            </div>
                            <div class="lianjie">
                                <a :href="item.route">{{ item.title }}</a>
                            </div>
                        </div>
                        <div class="moshadaohang">
                            <div class="daohangicon">
                                <div class="daohangicon_img">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTEyLjU5MyAyMy4yNThsLS4wMTEuMDAybC0uMDcxLjAzNWwtLjAyLjAwNGwtLjAxNC0uMDA0bC0uMDcxLS4wMzVxLS4wMTYtLjAwNS0uMDI0LjAwNWwtLjAwNC4wMWwtLjAxNy40MjhsLjAwNS4wMmwuMDEuMDEzbC4xMDQuMDc0bC4wMTUuMDA0bC4wMTItLjAwNGwuMTA0LS4wNzRsLjAxMi0uMDE2bC4wMDQtLjAxN2wtLjAxNy0uNDI3cS0uMDA0LS4wMTYtLjAxNy0uMDE4bS4yNjUtLjExM2wtLjAxMy4wMDJsLS4xODUuMDkzbC0uMDEuMDFsLS4wMDMuMDExbC4wMTguNDNsLjAwNS4wMTJsLjAwOC4wMDdsLjIwMS4wOTNxLjAxOS4wMDUuMDI5LS4wMDhsLjAwNC0uMDE0bC0uMDM0LS42MTRxLS4wMDUtLjAxOC0uMDItLjAyMm0tLjcxNS4wMDJhLjAyLjAyIDAgMCAwLS4wMjcuMDA2bC0uMDA2LjAxNGwtLjAzNC42MTRxLjAwMS4wMTguMDE3LjAyNGwuMDE1LS4wMDJsLjIwMS0uMDkzbC4wMS0uMDA4bC4wMDQtLjAxMWwuMDE3LS40M2wtLjAwMy0uMDEybC0uMDEtLjAxeiIvPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xOC40NDcgNC4xMDZhMSAxIDAgMCAxIC40NDcgMS4zNDFsLTEuMTc0IDIuMzVBOS45OSA5Ljk5IDAgMCAxIDIyIDE2djFhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJ2LTFhOS45OSA5Ljk5IDAgMCAxIDQuMjgtOC4yMDRMNS4xMDYgNS40NDdhMSAxIDAgMSAxIDEuNzg4LS44OTRMOC4wMjggNi44MkExMCAxMCAwIDAgMSAxMiA2YzEuNDExIDAgMi43NTUuMjkyIDMuOTcyLjgybDEuMTM0LTIuMjY3YTEgMSAwIDAgMSAxLjM0MS0uNDQ3TTcuNSAxMmExLjUgMS41IDAgMSAwIDAgM2ExLjUgMS41IDAgMCAwIDAtM205IDBhMS41IDEuNSAwIDEgMCAwIDNhMS41IDEuNSAwIDAgMCAwLTMiLz48L2c+PC9zdmc+" />
                                </div>
                                <div class="daohangicon_title">安卓端</div>
                            </div>
                            
                            
                        </div>
                        <div class="moshadaohang">
                            <div class="daohangicon">
                                <div class="daohangicon_img">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTE1MiAxNDRhMTYgMTYgMCAxIDEtMTYtMTZhMTYgMTYgMCAwIDEgMTYgMTZtMzItMTZhMTYgMTYgMCAxIDAgMTYgMTZhMTYgMTYgMCAwIDAtMTYtMTZtNTkuMTggODIuMzVhMjAgMjAgMCAwIDEtMjQuODMgMjQuODNsLTIzLjI2LTYuODRhODQgODQgMCAwIDEtMTExLjM3LTQxLjIzYTgzLjIgODMuMiAwIDAgMS0yMi44Mi02Ljc3bC0yMy4yNSA2Ljg0QTIwLjIgMjAuMiAwIDAgMSAzMiAxODhhMjAgMjAgMCAwIDEtMTkuMTktMjUuNjRsNi44NC0yMy4yNmE4NCA4NCAwIDAgMSAxNTIuNjgtNzAuMTlhODQgODQgMCAwIDEgNjQgMTE4LjE4Wm0tMTY2LjcyLTQ5LjZBODMuOTQgODMuOTQgMCAwIDEgMTQ1IDY5LjM3QTYwIDYwIDAgMCAwIDQzLjA4IDEzMi4zYTEyIDEyIDAgMCAxIC45MyA5LjA2bC02LjA5IDIwLjcyTDU4LjY0IDE1NmExMiAxMiAwIDAgMSA5LjA2LjkzYTYwIDYwIDAgMCAwIDguNzYgMy44Mk0yMjAgMTUyYTYwIDYwIDAgMSAwLTMxLjcgNTIuOTJhMTIgMTIgMCAwIDEgOS4wNi0uOTNsMjAuNzIgNi4wOWwtNi4wOC0yMC43MmExMiAxMiAwIDAgMSAuOTMtOS4wNkE2MC4xIDYwLjEgMCAwIDAgMjIwIDE1MiIvPjwvc3ZnPg==" />
                                </div>
                                <div class="daohangicon_title">小程序</div>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="daohang_zhanwei" style="width: 100%; height: 800px;"></div>
            <div style="width: 80%;margin: auto;"><Lunbotu :huadonglan="huadonglan" :zhanshishu="zhanshishu"></Lunbotu></div>

            <el-divider />
            <div class="tips" @click="ceshi">
                <div class="customer_tips">本网站仅用于学习用途，如有侵权请联系网站管理，阿里嘎多！</div>
            </div>
            <div style="justify-content: center;display: grid;">
                <div class="jinqigengxin">
                <div class="bar_content">
                    <div class="bar_content_biaoyu">近期更新</div>
                </div>
                <div class="neirong_content">
                    <transition-group name="fade" tag="div" class="fade-group">
                    <!-- 使用 v-for 循环渲染已经加载的项目 -->
                    <div v-for="(item, index) in jinqiloadedData" :key="index" class="item_content">
                        <div class="item">
                            <Xiangmu>
                                <template v-slot:tupianinfo>
                                    <img :src="item.imgurl" :alt="item.biaoti" style="width: 100%;height: 100%;object-fit: cover;">
                                </template>
                                <template v-slot:biaotiinfo>
                                    <h2 style="height: 100%; margin: 0px;">
                                        <a target="_blank" :href="item.biaoti">
                                            <i class="ico icon-talk-hot-1"></i>
                                            {{ item.biaoti }}
                                        </a>
                                    </h2>
                                </template>
                                <template v-slot:jianjieinfo>
                                    <p>{{ item.description }}</p>
                                </template>
                                <template v-slot:xinxiinfo>
                                    <div style="height: 100%;display: flex;align-items: center; padding-left: 10px;">
                                        <el-avatar :src="item.userimg"/>
                                        <div style="margin-left: 10px;">{{ item.username }}</div>
                                    </div>
                                    
                                </template>
                            </Xiangmu>
                        </div>
                    </div>
                    </transition-group>
                </div>
                <div id="jinqi_lazy_load" class="lazy_load" @click="jinqiloadMore" >
                        加载更多
                </div>

                </div>
                <div class="wenjianfenxiang">
                    <div class="bar_content">
                        <div class="bar_content_biaoyu">文件分享</div>
                    </div>
                    <div class="neirong_content">
                        <transition-group name="fade" tag="div" class="fade-group">
                        <!-- 使用 v-for 循环渲染已经加载的项目 -->
                        <div v-for="(item, index) in wenjianloadedData" :key="index" class="item_content">
                            <div class="item">
                                <Xiangmu>
                                    <template v-slot:tupianinfo>
                                        <img :src="item.imgurl" :alt="item.lianjie" style="width: 100%;">
                                    </template>
                                    <template v-slot:biaotiinfo>
                                        <h2 style="height: 100%; margin: 0px;">
                                            <a target="_blank" href="https://www.yssgame.cn/34581.html" >
                                                <i class="ico icon-talk-hot-1"></i>
                                                宠物旅馆2/PETS HOTEL2
                                            </a>
                                        </h2>
                                    </template>

                                </Xiangmu>
                                

                            </div>
                            <!-- 其他内容 -->
                        </div>
                        </transition-group>
                    </div>
                    <div class="lazy_load" @click="wenjianloadMore" >
                            加载更多
                    </div>

                </div>
                <div class="bizhi">
                    <div class="bar_content">
                        <div class="bar_content_biaoyu">壁纸</div>
                    </div>
                    <div class="neirong_content">
                        <transition-group name="fade" tag="div" class="fade-group">
                        <!-- 使用 v-for 循环渲染已经加载的项目 -->
                        <div v-for="(item, index) in bizhiloadedData" :key="index" class="item_content">
                            <div class="item">
                                <Xiangmu>
                                    <template v-slot:tupianinfo>
                                        <img :src="item.imgurl" :alt="item.lianjie" style="width: 100%;">
                                    </template>
                                    <template v-slot:biaotiinfo>
                                        <h2 style="height: 100%; margin: 0px;">
                                            <a target="_blank" href="https://www.yssgame.cn/34581.html" >
                                                <i class="ico icon-talk-hot-1"></i>
                                                宠物旅馆2/PETS HOTEL2
                                            </a>
                                        </h2>
                                    </template>

                                </Xiangmu>
                                

                            </div>
                            <!-- 其他内容 -->
                        </div>
                        </transition-group>
                    </div>
                    <div class="lazy_load" @click="bizhiloadMore" >
                            加载更多
                    </div>

                </div>
                <div class="jiaocheng">
                    <div class="bar_content">
                        <div class="bar_content_biaoyu">教程</div>
                    </div>
                    <div class="neirong_content">
                        <transition-group name="fade" tag="div" class="fade-group">
                        <!-- 使用 v-for 循环渲染已经加载的项目 -->
                        <div v-for="(item, index) in jiaochengloadedData" :key="index" class="item_content">
                            <div class="item">
                                <Xiangmu>
                                    <template v-slot:tupianinfo>
                                        <img :src="item.imgurl" :alt="item.lianjie" style="width: 100%;">
                                    </template>
                                    <template v-slot:biaotiinfo>
                                        <h2 style="height: 100%; margin: 0px;">
                                            <a target="_blank" href="https://www.yssgame.cn/34581.html" >
                                                <i class="ico icon-talk-hot-1"></i>
                                                宠物旅馆2/PETS HOTEL22222222222222233333333333
                                            </a>
                                        </h2>
                                    </template>
                                    <template v-slot:jianjieinfo>
                                        <p style="">1231239hjohd1oi2uhhhhhoduidhwqoidhqwwwwwwwwwwwwww1231239hjohd1oi2uhhhhhoduidhwqoidhqwwwwwwwwwwwwwwwwwoqiwhdioqwhdoiqwhdiohqwiodwwwoqiwhdioqwhdoiqwhdiohqwiod</p>
                                    </template>

                                </Xiangmu>
                                

                            </div>
                            <!-- 其他内容 -->
                        </div>
                        </transition-group>
                    </div>
                    <div class="lazy_load" @click="jiaochengloadMore" >
                            加载更多
                    </div>

                </div>
            </div>
         
            
        </div>
        <div class="footer">
            <div class="list_content">
                <div class="footer_logo">
                    <img src="../../public/img/logo.jpeg" style="width: 100%;">

                </div>
                <ul>
                    <li>联系我们</li>
                    <li>隐私政策</li>
                    <li>开发人员</li>
                    <li>产品建议</li>
                </ul>
                <ul>
                    <li>首页</li>
                    <li>壁纸收藏</li>
                    <li>文件分享</li>
                    <li>教程学习</li>
                </ul>
            </div>
            <div class="beian_content">
                <div>2024 lanbaiwan</div>&nbsp;&nbsp;&nbsp;
                <div><a href="http://www.miitbeian.gov.cn" target="_blank">粤ICP备2023043267号</a></div>
            </div>
        </div>
    </div>

</template>



<script setup lang="ts">
import { onMounted, ref ,computed} from 'vue';
import { useRouter } from 'vue-router';
import store from '../store/index';
import Lunbotu from '../components/Lunbotu.vue';
import Xiangmu from '../components/Xiangmu.vue';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL


function videolazyLoadContent() {
  if ("IntersectionObserver" in window) {
    let lazyContentObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let lazyContent = entry.target as HTMLVideoElement;
          const src = lazyContent.dataset.src; // 获取 data-src 属性
          if (src) { // 确保 src 不是 undefined
            // 使用 fetch 获取视频文件，并转换为 blob
            fetch(src)
              .then(response => response.blob())
              .then(blob => {
                const url = URL.createObjectURL(blob); // 创建一个临时 URL
                // 检查元素是否为 video 标签
                if (lazyContent.tagName === 'VIDEO') {
                  lazyContent.src = url; // 设置 video 元素的 src 属性
                
                } else {
                  console.error('Lazy loaded content is not a video element.');
                }
                lazyContent.classList.remove('lazyload-content');
                observer.unobserve(lazyContent);
              })
              .catch(error => {
                console.error('Error loading video:', error);
              });
          }
        }
      });
    });

    // 观察所有带有 lazyload-content 类的元素
    document.querySelectorAll('.lazyload-content').forEach(lazyContent => {
      lazyContentObserver.observe(lazyContent);
    });
  }
}
const zhanshishu=ref<number>();
const setZhanshishu=()=> {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenWidth < 600) {
    zhanshishu.value = 1; // 小屏幕展示3张
    } else if (screenWidth < 1200) {
    zhanshishu.value = 2; // 中等屏幕展示4张
    } else {
    zhanshishu.value = 4; // 大屏幕展示5张
    }
    }

const data=ref<{ title: string; description: string; image: string,route:string}[]>([])
const daohangitems=ref<{route: string;title:string;image:string}[]>([])
daohangitems.value=[
    {route:"Resume",title:"作者简历",image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjAgMjAiPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik03LjggNi4zNWMuNTYgMCAxLjAxLS40NSAxLjAxLTEuMDFTOC4zNiA0LjMzIDcuOCA0LjMzcy0xLjAxLjQ1LTEuMDEgMS4wMXMuNDUgMS4wMSAxLjAxIDEuMDFaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS44MyA4LjU1YzAtMS4wOC0uOTEtMS44Ni0yLjAzLTEuODZjLTEuMTIgMC0yLjAzLjc4LTIuMDMgMS44NnYuNTFjMCAuMDkuMDQuMTguMS4yNGMuMDYuMDYuMTUuMS4yNC4xaDMuMzhjLjA5IDAgLjE4LS4wNC4yNC0uMWMuMDYtLjA2LjEtLjE1LjEtLjI0di0uNTFaTTUuNzUgMTEuNWEuNzUuNzUgMCAwIDEgLjc1LS43NWg3YS43NS43NSAwIDAgMSAwIDEuNWgtN2EuNzUuNzUgMCAwIDEtLjc1LS43NVptMCAzYS43NS43NSAwIDAgMSAuNzUtLjc1aDdhLjc1Ljc1IDAgMCAxIDAgMS41aC03YS43NS43NSAwIDAgMS0uNzUtLjc1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi41IDIuNWMwLTEuMTAyLjg5OC0yIDItMmg2LjY5Yy41NjIgMCAxLjA5Mi4yMzggMS40NjUuNjMxbC4wMDYuMDA3bDQuMzEyIDQuNzAyYy4zNTkuMzgzLjUyNy44ODQuNTI3IDEuMzZ2MTAuM2MwIDEuMTAyLS44OTggMi0yIDJoLTExYy0xLjEwMiAwLTItLjg5OC0yLTJ2LTE1Wm04LjY4OSAwSDQuNXYxNWgxMVY3LjE5MmwtNC4yOTYtNC42ODVsLS4wMDMtLjAwMWEuMDQxLjA0MSAwIDAgMC0uMDEyLS4wMDZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS4xOS41YTEgMSAwIDAgMSAxIDF2NC43aDQuMzFhMSAxIDAgMSAxIDAgMmgtNS4zMWExIDEgMCAwIDEtMS0xVjEuNWExIDEgMCAwIDEgMS0xWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9nPjwvc3ZnPg=="},
    {route:"Wenjian",title:"文件分享",image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgY29sb3I9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xMS4xIDNjLTMuNjUuMDA3LTUuNTYuMDk2LTYuNzgyIDEuMzE4QzMgNS42MzYgMyA3Ljc1NyAzIDEyczAgNi4zNjQgMS4zMTggNy42ODJTNy43NTggMjEgMTIgMjFzNi4zNjQgMCA3LjY4My0xLjMxOGMxLjIyLTEuMjIxIDEuMzEtMy4xMzMgMS4zMTctNi43ODIiLz48cGF0aCBkPSJtMjEgNi4wMjVsLTEtLjAwMmMtMy43MzctLjAxLTUuNjA1LS4wMTUtNi45MTguOTNjLS40MzcuMzEzLS44Mi42OTUtMS4xMzUgMS4xM0MxMSA5LjM5NiAxMSAxMS4yNjQgMTEgMTVtMTAtOC45NzVhLjcuNyAwIDAgMC0uMTc1LS40NzJDMjAuMDYgNC42NDcgMTguMDcxIDMgMTguMDcxIDNNMjEgNi4wMjVhLjcuNyAwIDAgMS0uMTc0LjQyMkMyMC4wNiA3LjM1MyAxOC4wNyA5IDE4LjA3IDkiLz48L2c+PC9zdmc+"},
    {route:"Shequ",title:"社区",image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik03IDlWNmEyIDIgMCAwIDEgMi0yaDEwYTIgMiAwIDAgMSAyIDJ2MTJhMiAyIDAgMCAxLTIgMmgtNm0wIDB2LTYuMTcyYTIgMiAwIDAgMC0uNTg2LTEuNDE0bC0zLTNhMiAyIDAgMCAwLTIuODI4IDBsLTMgM0EyIDIgMCAwIDAgMyAxMy44MjhWMThhMiAyIDAgMCAwIDIgMmgzbTUgMEg4bTAtNHY0bTkuMDAxLTEySDE3bS4wMDIgNEgxN20uMDAxIDRIMTciLz48L3N2Zz4="},
    {route:"Bizhi",title:"壁纸",image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiPjxjaXJjbGUgY3g9IjgiIGN5PSI5IiByPSIyIi8+PHBhdGggZD0ibTkgMTdsNi4xLTYuMWEyIDIgMCAwIDEgMi44MS4wMUwyMiAxNVY1YTIgMiAwIDAgMC0yLTJINGEyIDIgMCAwIDAtMiAydjEwYTIgMiAwIDAgMCAyIDJoMTZhMiAyIDAgMCAwIDItMk04IDIxaDhtLTQtNHY0Ii8+PC9nPjwvc3ZnPg=="},
    {route:"Jiaocheng",title:"教程",image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xMC4zODYgOS44MzZhMi41IDIuNSAwIDEgMSAzLjYxMS42NjdDMTUuMjEyIDExLjE3MyAxNiAxMi40NiAxNiAxNHYxLjVhLjUuNSAwIDEgMS0xIDBWMTRjMC0xLjcyNC0xLjI3Ni0zLTMtM2MtLjkxIDAtMS4yOTgtLjAyLTEuODA1LS4xMjJjLTEuMjUtLjI1NC0yLjMzMy0xLTMuNTg1LTIuNTY2YS41LjUgMCAxIDEgLjc4LS42MjRjLjkgMS4xMjQgMS42NTMgMS43NCAyLjQzNCAyLjA0M2MuMTU1LjA1Mi4zNDUuMDgzLjU2Mi4xMDVtMS43ODUuMTI4cS4xMjUuMDE1LjI1MS4wMzRMMTIuNSAxMGExLjUgMS41IDAgMSAwLS4zMy0uMDM2TTkuNzggMTEuOTdhLjUuNSAwIDAgMSAuNS41YTEgMSAwIDAgMS0uMDUuMjMxYy0uMTc5LjM4LS4yMy43NzQtLjIzIDEuMzAydjEuNWEuNS41IDAgMSAxLTEgMHYtMS41YzAtLjY1Ny4wNzItMS4xODYuMzA3LTEuNjk2YS41LjUgMCAwIDEgLjQ3My0uMzM3TTUuOTU4IDUuNzcyYS41LjUgMCAwIDEtLjc4LjYyNUwzLjExIDMuODEyYS41LjUgMCAxIDEgLjc4LS42MjR6TTEgMTFoNS41YS41LjUgMCAxIDEgMCAxaC02YS41LjUgMCAwIDEtLjUtLjVWLjVBLjUuNSAwIDAgMSAuNSAwaDEyYS41LjUgMCAwIDEgLjUuNXYzYS41LjUgMCAxIDEtMSAwVjFIMXoiLz48L3N2Zz4="},
    {route:"About",title:"联系我们",image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE1LjYgMTQuNTIyYy0yLjM5NSAyLjUyLTguNTA0LTMuNTM0LTYuMS02LjA2NGMxLjQ2OC0xLjU0NS0uMTktMy4zMS0xLjEwOC00LjYwOWMtMS43MjMtMi40MzUtNS41MDQuOTI3LTUuMzkgMy4wNjZjLjM2MyA2Ljc0NiA3LjY2IDE0Ljc0IDE0LjcyNiAxNC4wNDJjMi4yMS0uMjE4IDQuNzUtNC4yMSAyLjIxNC01LjY2OWMtMS4yNjctLjczLTMuMDA4LTIuMTctNC4zNDItLjc2N00xNCAzYTcgNyAwIDAgMSA3IDdtLTctM2EzIDMgMCAwIDEgMyAzIi8+PC9zdmc+"},

]

const huadonglan=ref<{lianjie:string,imgurl:string}[]>([
    {lianjie:'resume',imgurl:'public/img/ceshi.png'},
    {lianjie:'resume',imgurl:'public/in402.avif'},
    {lianjie:'resume',imgurl:'public/img/ceshi.png'},
    {lianjie:'resume',imgurl:'public/in402.avif'},
  
])
huadonglan.value = [...huadonglan.value, ...huadonglan.value, ]


const jinqidata = ref<jinqidata[]>([
 
]);
const page=ref<number>(0)
interface jinqidata{
    id:number;
    biaoti:string;
    imgurl:string;
    description:string;
    userimg:string;
    username:string;
}
const jiaochengdata = ref<{ lianjie: string; imgurl: string }[]>([
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/in401.avif' },
]);
const wenjiandata = ref<{ lianjie: string; imgurl: string }[]>([
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/in401.avif' },
]);
const bizhidata = ref<{ lianjie: string; imgurl: string }[]>([
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/in401.avif' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/img/logo.jpeg' },
  { lianjie: '', imgurl: 'public/in401.avif' },
]);

// 维护已经加载的项目数量
const jinqiloadedCount = ref(4);
const wenjianloadedCount = ref(4);
const bizhiloadedCount= ref(4);
const jiaochengloadedCount = ref(4);


// 计算属性，根据 loadedCount 获取当前已加载的数据项
const jinqiloadedData = computed(() => jinqidata.value.slice(0, jinqiloadedCount.value));
const wenjianloadedData = computed(() => wenjiandata.value.slice(0, wenjianloadedCount.value));
const bizhiloadedData = computed(() => bizhidata.value.slice(0, bizhiloadedCount.value));
const jiaochengloadedData = computed(() => jiaochengdata.value.slice(0, jiaochengloadedCount.value));


// 加载更多数据的方法
async function jinqiloadMore() {
  // 更新 loadedCount，每次增加 8
  console.log(page.value);
  
  await fetchData();
  if (jinqidata.value && jinqidata.value.length % 4 !== 0) {
    const lazyLoadElement = document.getElementById('jinqi_lazy_load');
    if (lazyLoadElement) {
        lazyLoadElement.style.display = 'none'; // 设置为不可见
    }
  }
  page.value=page.value+1;

  jinqiloadedCount.value += 4;
}

const fetchData=async()=>{
    try {
        const response=await axios.post(`${API_URL}/Jinqidata`,{  Page: page.value });
        if (response) {
          jinqidata.value = jinqidata.value.concat(response.data);
 
        } else {
          
        }
    } catch (error) {
        
    }
}

function wenjianloadMore() {
  // 更新 loadedCount，每次增加 8
  wenjianloadedCount.value += 4;
}
function bizhiloadMore() {
  // 更新 loadedCount，每次增加 8
  bizhiloadedCount.value += 4;
}
function jiaochengloadMore() {
  // 更新 loadedCount，每次增加 8
  jiaochengloadedCount.value += 4;
}
const router = useRouter();

const navigateTo = (page : string) => {
    try{
        console.log(page)
            router.push({ name: page });
    }finally{

}
};


async function ceshi() {
    await store.dispatch('fetchsendMessage');

}
onMounted(
    async()=>{
        window.addEventListener('resize', setZhanshishu); // 监听窗口大小变化
        setZhanshishu();

        videolazyLoadContent();
        jinqiloadMore()
        await store.dispatch('fetchGongNeng');
        data.value=store.state.GongNengState.data;

        await store.dispatch('fetchMessage');
        
        
    }

    
     
  
)
    


</script>



<style lang="scss" scoped>





.funtions_container{
    display: flex; /* 使用 Flexbox 布局 */
    gap: 10px; /* 设置子元素之间的间隔为 100px */
    flex-direction: column; /* 设置主轴方向为垂直排列 */
    align-items: center; /* 使子元素在交叉轴方向上居中 */
}
.container {
    position: relative;
    z-index: 99;
    width: 100%;
    height: auto;
    .shouye_body{
        position: relative;
        width: 100%;
        height: auto;
        .daohang{
            position: absolute;
            width: 100%;
            height: 800px;
            max-height: 800px;
            justify-content: center;
            .biaoyu{
                position: absolute;
                width: auto;
                top: 30%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 40px;
                font-weight: 800;
                color: rgb(255, 255, 255); 
                text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 
                            0 0 10px rgba(255, 255, 255, 0.5);         
                z-index: 3;   
            }
            video{
                width: 100%;
                height: 100%;
                object-fit: cover;
                
            }
            
            
       
            .mosha{
                position: absolute;
                bottom: 0;
                height: 150px;
                width: 100%;
                backdrop-filter: blur(10px);
                z-index: 3;   

                .moshaneirong{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    .moshadaohang{
                        height: 100%;
                        width: 200px;
                        box-sizing: border-box;
                        padding: 20px;
                        .daohangicon{
                            height: 60%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            align-items: center;
                            cursor: pointer;

                            .daohangicon_img{
                                height: 100%;
                                display: flex;
                                align-items: center;

                                img{
                                    height: 60%;
                                }
                            }
                            .daohangicon_title{
                               
                                margin-bottom: 12px;
                                height: 25px;
                                color: #fff;
                                text-shadow: 1px 1px 1px #000;
                                font-weight: 600;
                                font-size: 25px;
                                line-height: 34px;

                            }
                            
                        }
                        .lianjie{
                                width: 100%;
                                display: flex;
                                justify-content: center;
                                a {
                                    color: white; 
                                    text-decoration: none; /* 移除下划线 */
                                }

                                a:hover {
                                    color: pink; /* 鼠标悬停时文字颜色为粉色 */
                                }
                            }
                        
                    }
                }
            }
        }
        .daohang::after {
                content: ''; /* 伪元素需要 content 属性 */
                position: absolute; /* 绝对定位相对于 video 元素 */
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background-color: rgba(0, 0, 0, 0.1); /* 半透明黑色背景，可以调整透明度 */
                z-index: 2; /* 确保遮罩层在视频之上 */
            }
        .tips{
                position: relative;
                display: flex;
                justify-content: center;
                width: 100%;
                
                .customer_tips{
                    width: auto;
                    display: flex;
                    letter-spacing: 2px;
                    font-size: 25px;
                    font-weight: 800;
                    color: rgb(243, 188, 211); 
                }
            }
        .jinqigengxin,.wenjianfenxiang,.bizhi,.jiaocheng{
            position: relative;
            width: 100%;
            height: auto;
            .bar_content{
                height: 50px;
                .bar_content_biaoyu{
                    font-size: 40px;
                    font-weight: 800;
                    color: rgb(150, 148, 148); 
                    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 
                                0 0 10px rgba(255, 255, 255, 0.5);         
                    z-index: 3;   
                }
            }
            .neirong_content{
                width: 100%;
                padding-top: 30px;
                padding-bottom: 30px;
                display: flex;
                justify-content: center;
                .fade-group{
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    width: 100%;
                    max-width: 1200px;
                  

                    .item_content {
                        border-radius: 15px;
                        height: 350px;
                        overflow: hidden;
                        display: flex;
                        min-width: 270px;
                        width: calc(25% - 10px); /* 减去间距 */
                        margin-bottom: 30px; /* 行间距 */
                        box-sizing: border-box;
                        justify-content: center;
                        align-items: center;
                        .item{
                            width: 270px;
                            height: 350px;
                            margin: 10px;
                            border-radius: 15px;
                            overflow: hidden;
                            h2{
                                white-space: nowrap;
                                 overflow: hidden;
                                  text-overflow: ellipsis;
                            }
                            a{
                                width: 100%;
                                font-size: 20px;
                                text-decoration: none;
                                color: #000;
                               
                            }
                            .icon-talk-hot-1{
                                background-color: #fa455f;
                                display: inline-block;
                                border-radius: 3px;
                                margin-left: 3px;
                                height: auto;
                                min-height: 15px;
                            }
                            .icon-talk-hot-1:before {
                                font-style: normal; /* 确保文字不是斜体 */
                                content: '新';
                                color: #ffffff;



                            }
                        }
                    }
                }
                

            }
            .lazy_load{
                height: 50px;
                background-color: rgba(255, 255, 255, 0.8);
                border-radius: 5px;
                margin: auto;
                border: 1px solid rgb(185, 185, 185);
                cursor: pointer;
                box-shadow: #ccc;
                display: flex;          /* 启用Flexbox布局 */
                justify-content: center;/* 水平居中 */
                align-items: center;     /* 竖直居中 */ 
            }
        }
        
        .lunbotu{
            width: 100%;
            height: 200px;
            background-color: antiquewhite;
        }
    }
    .footer {
        width: 100%; /* 设置footer宽度为100%，铺满整个容器 */
        max-height: 300px;        
        background-color: #333; /* 举例设置背景颜色，可以根据需要修改 */
        color: white; /* 设置文字颜色，可以根据需要修改 */
        padding: 20px; /* 设置内边距 */

        .list_content {
            width: 100%; /* 设置list_content宽度为100%，铺满整个footer */
            display: flex; /* 使用Flexbox布局 */
            .footer_logo{
                width: 20vw;
                height: 20vw;
                max-width: 200px;
                max-height: 200px;
            }
            ul {
                list-style-type: none; /* 移除列表项前的默认标记 */
                padding: 0; /* 移除默认的内边距 */
                margin: 0; /* 移除默认的外边距 */
                width: 40vw; /* 设置ul宽度为100% */
                li {
                    height: 50px; /* 举例设置高度，可以根据需要修改 */
                    line-height: 50px; /* 设置行高与高度一致，使文字垂直居中 */
                    text-align: center; /* 文字居中显示 */
                    border-bottom: 1px solid #555; /* 举例设置列表项之间的分隔线 */
                }
                
                /* 为最后一个列表项移除底部边框 */
                li:last-child {
                    border-bottom: none;
                }
            }

        }
        .beian_content{
            height: 100px;
            display: flex;
            justify-content: center
        }
    }







}
.main_nav_container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    justify-content:center; /* 水平居中 */
    align-items: center; /* 垂直居中 */

}
.main_nav_button {
    min-width: 10%;
    max-width: 17%;
    width: 15%;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    background-color: #f0f0f0;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 0.8rem; 
}
.main_nav_button:hover {
    background-color: #e0e0e0;
}


@media (max-width: 768px) {
    
.funtions_container{
    display: flex; /* 使用 Flexbox 布局 */
    gap: 10px; /* 设置子元素之间的间隔为 100px */
    flex-direction: column; /* 设置主轴方向为垂直排列 */
    align-items: center; /* 使子元素在交叉轴方向上居中 */
}
.container {
    position: relative;
    z-index: 99;
    width: 100%;
    height: auto;
    .shouye_body{
        position: relative;
        width: 100%;
        height: auto;
        .daohang{
            position: absolute;
            width: 100%;
            height: 800px;
            max-height: 800px;
            justify-content: center;
            .biaoyu{
                position: absolute;
                width: auto;
                top: 30%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 40px;
                font-weight: 800;
                color: rgb(255, 255, 255); 
                text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 
                            0 0 10px rgba(255, 255, 255, 0.5);         
                z-index: 3;   
            }
            video{
                width: 100%;
                height: 100%;
                object-fit: cover;
                
            }
            
            
       
            .mosha{
                position: absolute;
                bottom: 0;
                height: 150px;
                width: 100%;
                backdrop-filter: blur(10px);
                z-index: 3;   

                .moshaneirong{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    .moshadaohang{
                        height: 100%;
                        width: 200px;
                        box-sizing: border-box;
                        padding: 20px;
                        .daohangicon{
                            height: 60%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            align-items: center;
                            cursor: pointer;

                            .daohangicon_img{
                                height: 100%;
                                display: flex;
                                align-items: center;

                                img{
                                    height: 60%;
                                }
                            }
                            .daohangicon_title{
                               
                                margin-bottom: 12px;
                                height: 25px;
                                color: #fff;
                                text-shadow: 1px 1px 1px #000;
                                font-weight: 600;
                                font-size: 25px;
                                line-height: 34px;

                            }
                            
                        }
                        .lianjie{
                                width: 100%;
                                display: flex;
                                justify-content: center;
                                a {
                                    color: white; 
                                    text-decoration: none; /* 移除下划线 */
                                }

                                a:hover {
                                    color: pink; /* 鼠标悬停时文字颜色为粉色 */
                                }
                            }
                        
                    }
                }
            }
        }
        .daohang::after {
                content: ''; /* 伪元素需要 content 属性 */
                position: absolute; /* 绝对定位相对于 video 元素 */
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background-color: rgba(0, 0, 0, 0.1); /* 半透明黑色背景，可以调整透明度 */
                z-index: 2; /* 确保遮罩层在视频之上 */
            }
        .tips{
                position: relative;
                display: flex;
                justify-content: center;
                width: 100%;
                
                .customer_tips{
                    width: auto;
                    display: flex;
                    letter-spacing: 2px;
                    font-size: 10px;
                    font-weight: 800;
                    color: rgb(243, 188, 211); 
                 
                }
            }
    
        .wenjianfenxiang,.jinqigengxin,.bizhi,.jiaocheng{
            position: relative;
            width: 100%;
            height: auto;
            .bar_content{
                height: 50px;
                .bar_content_biaoyu{
                    font-size: 20px;
                    font-weight: 800;
                    color: rgb(150, 148, 148); 
                    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 
                                0 0 10px rgba(255, 255, 255, 0.5);         
                    z-index: 3;   
                }
            }
            .neirong_content{
                width: 100%;
                padding-top: 30px;
                padding-bottom: 30px;
                display: flex;
                justify-content: center;
                .fade-group{
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    width: 100%;
                    max-width: 1200px;
                  

                    .item_content {
                        border-radius: 5px;
                        height: auto;
                        overflow: hidden;
                        display: flex;
                        min-width: 170px;
                        width: calc(50% - 10px); /* 减去间距 */
                        margin-bottom: 30px; /* 行间距 */
                        box-sizing: border-box;
                        justify-content: center;
                        align-items: center;
                        .item{
                            width: 100%;
                            height: auto;
                            border-radius: 5px;
                            overflow: hidden;
                            a{
                                font-size: 10px;
                                text-decoration: none;
                                color: #000;
                            }
                            .icon-talk-hot-1{
                                background-color: #fa455f;
                                font-size: 10px;
                                border-radius: 3px;
                                margin-left: 3px;
                                min-height:10px;
                                height: 100%;
                            }
                            .icon-talk-hot-1:before {
                                font-style: normal; /* 确保文字不是斜体 */
                                content: '新';
                                color: #ffffff;
                                font-size: 10px;


                            }
                        }
                    }
                }
                

            }
            .lazy_load{
                height: 50px;
                background-color: rgba(255, 255, 255, 0.8);
                border-radius: 5px;
                margin: auto;
                border: 1px solid rgb(185, 185, 185);
                cursor: pointer;
                box-shadow: #ccc;
                display: flex;          /* 启用Flexbox布局 */
                justify-content: center;/* 水平居中 */
                align-items: center;     /* 竖直居中 */ 
            }
        }
      
       
        .lunbotu{
            width: 100%;
            height: 200px;
            background-color: antiquewhite;
        }
    }
    .footer {
        width: 100%; /* 设置footer宽度为100%，铺满整个容器 */
        max-height: 300px;        
        background-color: #333; /* 举例设置背景颜色，可以根据需要修改 */
        color: white; /* 设置文字颜色，可以根据需要修改 */
        padding: 20px; /* 设置内边距 */

        .list_content {
            width: 100%; /* 设置list_content宽度为100%，铺满整个footer */
            display: flex; /* 使用Flexbox布局 */
            .footer_logo{
                width: 20vw;
                height: 20vw;
                max-width: 200px;
                max-height: 200px;
            }
            ul {
                list-style-type: none; /* 移除列表项前的默认标记 */
                padding: 0; /* 移除默认的内边距 */
                margin: 0; /* 移除默认的外边距 */
                width: 40vw; /* 设置ul宽度为100% */
                li {
                    height: 50px; /* 举例设置高度，可以根据需要修改 */
                    line-height: 50px; /* 设置行高与高度一致，使文字垂直居中 */
                    text-align: center; /* 文字居中显示 */
                    border-bottom: 1px solid #555; /* 举例设置列表项之间的分隔线 */
                }
                
                /* 为最后一个列表项移除底部边框 */
                li:last-child {
                    border-bottom: none;
                }
            }

        }
        .beian_content{
            height: 100px;
            display: flex;
            justify-content: center
        }
    }







}
.main_nav_container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    justify-content:center; /* 水平居中 */
    align-items: center; /* 垂直居中 */

}
.main_nav_button {
    min-width: 10%;
    max-width: 17%;
    width: 15%;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    background-color: #f0f0f0;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 0.8rem; 
}
.main_nav_button:hover {
    background-color: #e0e0e0;
}
.daohang{
    display: none;
}
.daohang_zhanwei{
    display: none;

}
swiper-container{
    display: none;

}

}
@media (max-width: 1600px) {

    .jinqigengxin,.wenjianfenxiang,.bizhi,.jiaocheng{
            position: relative;
            width: 100%;
            height: auto;
            .bar_content{
                height: 50px;
                .bar_content_biaoyu{
                    font-size: 40px;
                    font-weight: 800;
                    color: rgb(150, 148, 148); 
                    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 
                                0 0 10px rgba(255, 255, 255, 0.5);         
                    z-index: 3;   
                }
            }
            .neirong_content{
                width: 100%;
                padding-top: 30px;
                padding-bottom: 30px;
                display: flex;
                justify-content: center;
                .fade-group{
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    width: 100%;
                  

                    .item_content {
                        border-radius: 15px;
                        height: 350px;
                        overflow: hidden;
                        display: flex;
                        min-width: 270px;
                        width: calc(25% - 10px); /* 减去间距 */
                        margin-bottom: 30px; /* 行间距 */
                        box-sizing: border-box;
                        justify-content: center;
                        align-items: center;
                        .item{
                            width: 100%;
                            height: auto;
                            border-radius: 5px;
                            overflow: hidden;
                            a{
                                font-size: 20px;
                                text-decoration: none;
                                color: #000;
                            }
                            .icon-talk-hot-1{
                                background-color: #fa455f;
                                display: inline-block;
                                border-radius: 3px;
                                margin-left: 3px;
                                height: auto;
                            }
                            .icon-talk-hot-1:before {
                                font-style: normal; /* 确保文字不是斜体 */
                                content: '新';
                                color: #ffffff;
                                font-size: 20px;



                            }
                        }
                    }
                }
                

            }
            .lazy_load{
                height: 50px;
                background-color: rgba(255, 255, 255, 0.8);
                border-radius: 5px;
                margin: auto;
                border: 1px solid rgb(185, 185, 185);
                cursor: pointer;
                box-shadow: #ccc;
                display: flex;          /* 启用Flexbox布局 */
                justify-content: center;/* 水平居中 */
                align-items: center;     /* 竖直居中 */ 
            }
        }
        
        .daohang,.daohang_zhanwei {
            display: none;
        }
        .footer{
            display: none;
        }
      
}
@media (max-width: 1200px) {

    .jinqigengxin,.wenjianfenxiang,.bizhi,.jiaocheng{
        position: relative;
        width: 100%;
        height: auto;
        .bar_content{
            height: 50px;
            .bar_content_biaoyu{
                font-size: 40px;
                font-weight: 800;
                color: rgb(150, 148, 148); 
                text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 
                            0 0 10px rgba(255, 255, 255, 0.5);         
                z-index: 3;   
            }
        }
        .neirong_content{
            width: 100%;
            padding-top: 30px;
            padding-bottom: 30px;
            display: flex;
            justify-content: center;
            .fade-group{
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                width: 100%;
              

                .item_content {
                    border-radius: 15px;
                    height: 350px;
                    overflow: hidden;
                    display: flex;
                    min-width: 270px;
                    width: calc(25% - 10px); /* 减去间距 */
                    margin-bottom: 30px; /* 行间距 */
                    box-sizing: border-box;
                    justify-content: center;
                    align-items: center;
                    .item{
                        width: 270px;
                        height: 350px;
                        border-radius: 15px;
                        overflow: hidden;
                        .icon-talk-hot-1{
                            background-color: #fa455f;
                            font-size: 15px;
                        }
                        .icon-talk-hot-1:before {
                            font-style: normal; /* 确保文字不是斜体 */
                            content: '新';
                            color: #ffffff;


                        }
                    }
                }
            }
            

        }
        .lazy_load{
            height: 50px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 5px;
            margin: auto;
            border: 1px solid rgb(185, 185, 185);
            cursor: pointer;
            box-shadow: #ccc;
            display: flex;          /* 启用Flexbox布局 */
            justify-content: center;/* 水平居中 */
            align-items: center;     /* 竖直居中 */ 
        }
    }
   
    .daohang,.daohang_zhanwei {
        display: none;
    }
    .footer{
        display: none;
    }
  
}   
</style>