<script setup lang="ts">
  import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
  import wordcloud from '../components/Wordcloud.vue';
  
  const defaultWords = ref([
    { name: 'Vue', value: 1500 },
    { name: 'JavaScript', value: 1200 },
    { name: 'CSS', value: 1000 },
    // 更多词汇...
  ]);
  const hobbiesList: Array<{ name: string; value: number }> = [
  ['爱做菜', 15],
  ['打游戏', 3],
  ['逛github', 7],
  ['睡觉', 3],
  ['写单元测试', 10],
  ['调样式', 8],
  ['性能优化', 12],
  ['学习新技术', 5],
  ['参加黑客马拉松', 6],
  ['阅读技术博客', 4],
  ['解决bug', 9],
  ['编写文档', 2],
  ['代码审查', 7],
  ['使用Vue.js', 11],
  ['使用React.js', 13],
  ['部署上线', 14],
  ['喝咖啡', 16]
].map(([name, value]) => ({
  name: String(name), // 确保name是字符串
  value: Number(value) // 确保value是数字
}));

// 计算数据

  const myColors = ref(['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd']);
  const router = useRouter();


  const pushroute=()=>{
    try{
            
            router.push('home');
    }finally{

    }
  }
</script>


<template>
    <!-- <div class="resume">
      <header class="resume-header">
        <h1>{{ name }}</h1>
        <p>{{ title }}</p>
        <p>{{ contact }}</p>
      </header>
      <section class="resume-section">
        <h2>个人信息</h2>
        <ul>
            <div v-for="information in personalList" :key="information.id" class="info-item">
                <div>姓名: {{ information.name }}</div>
                <div>年龄: {{ information.age }}</div>
                <div>性别: {{ information.gender }}</div>
                <div>学历: {{ information.education }}</div>
                <div>地址: {{ information.address }}</div>
                <div>电话: {{ information.phone }}</div>
                <div>邮箱: {{ information.email }}</div>
            </div>
        </ul>
      </section>
      <section class="resume-section">
        <h2>教育背景</h2>
        <ul>
          <li v-for="education in educationList" :key="education.id">
            <strong>{{ education.degree }}</strong> at {{ education.institution }} ({{ education.year }})
          </li>
        </ul>
      </section>
  
      <section class="resume-section">
        <h2>工作经历</h2>
        <ul v-if="jobList.length > 0">
          <li v-for="job in jobList" :key="job.id">
            <strong>{{ job.position }}</strong> at {{ job.company }} ({{ job.year }})
            <p>{{ job.description }}</p>
          </li>
        </ul>
        <p v-else>面试中</p>
      </section>
  
      <section class="resume-section">
        <h2>技能</h2>
        <ul>
          <li v-for="skill in skills" :key="skill">{{ skill }}</li>
        </ul>
      </section>
      <section class="resume-section">
        <h2>个人作品</h2>
        <ul>
          <li >
            <strong>蓝白碗</strong>
            <a href="https://www.lanbaiwan.com" target="_blank">https://www.lanbaiwan.com</a>
          </li>
        </ul>
      </section>
    </div> -->
<div class="outside_container">
  <div class="inside_container1">
    <div class="title">
      <p>我的简历</p>
    </div>
    <div class="close_tubiao" @click="pushroute">
      <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="80%" viewBox="0 0 16 16"><path fill="currentColor" d="M15.1 3.1L12.9.9L8 5.9L3.1.9L.9 3.1l5 4.9l-5 4.9l2.2 2.2l4.9-5l4.9 5l2.2-2.2l-5-4.9z"/></svg>
    </div>

  </div>
  <div class="inside_container2">

    <div class="ininside_container">
      <div class="ininc_title"><p>个人信息</p></div>
      <div class="neirong_container">
        <div class="neirong">
          <div class="touxiang">
            <div class="touxiang_img">
              <img src="../../public/img/lanbaiwan.jpeg" alt="描述性文本" width="100%" height="100%">
            </div>
          </div>
          <div class="jieshao1">
            <div><div>姓名：黎奇</div></div>
            <div><div>学历：全日制本科</div></div>
            <div><div>联系方式：MSD_miaosida</div></div>
            
            
          </div>
          <div class="jieshao2">
            <div><div>电话：19928181074</div></div>
            <div><div>邮箱：2416994895@qq.com</div></div>
          </div>
            


        </div>
      </div>
    </div>
    <div class="ininside_container">
      <div class="ininc_title"><p>技能掌握</p></div>
      <div class="neirong_container">
        <div class="neirong">
          <div class="jineng">
            <div class="jineng_bg" style="width: 70%;"><p>Vue3+Element UI</p></div>
            
          </div>
          <div class="jineng"> 
            <div class="jineng_bg" style="width: 65%;">            <p>Entity Framework</p>
            </div>
          </div>
          <div class="jineng">            
            <div class="jineng_bg" style="width: 75%;">            <p>ASP.NET</p>
            </div>
          </div>
          <div class="jineng">            
            <div class="jineng_bg" style="width: 55%;">            <p>Vite</p>
            </div>
          </div>
          <div class="jineng">            
            <div class="jineng_bg" style="width: 60%;">            <p>MySQL</p>
            </div>
          </div>
          <div class="jineng">            
            <div class="jineng_bg" style="width: 70%;">            <p>Git</p>
            </div>
          </div>
          <div class="jineng">            
            <div class="jineng_bg" style="width: 73%;">            <p>Docker</p>
            </div>
          </div>
          <div class="jineng">            
            <div class="jineng_bg" style="width: 75%;">            <p>LINQ</p>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    <div class="ininside_container">
      <div class="ininc_title"><p>教育经历</p></div>
      <div class="neirong_container">
        <div class="neirong">
          <div class="jiaoyu">
            <div class="flex gap-2">
              <el-tag type="primary">全日制本科</el-tag>
                <el-tag type="success">广东理工学院</el-tag>
                <el-tag type="info">信息技术学院</el-tag>
                <el-tag type="warning">软件工程</el-tag>
                <el-tag type="danger">C/C++</el-tag>
                <el-tag type="primary">Java</el-tag>
                <el-tag type="success">Python</el-tag>
                <el-tag type="info">JavaScript</el-tag>
                <el-tag type="warning">HTML/CSS</el-tag>
                <el-tag type="danger">SQL</el-tag>
                <!-- 添加课程 -->
                <el-tag type="primary">高等数学</el-tag>
                <el-tag type="success">线性代数</el-tag>
                <el-tag type="info">概率论与数理统计</el-tag>
                <el-tag type="warning">离散数学</el-tag>
                <el-tag type="danger">物理</el-tag>
                <el-tag type="primary">计算机科学导论</el-tag>
                <el-tag type="success">数据结构与算法</el-tag>
                <el-tag type="info">面向对象程序设计</el-tag>
                <el-tag type="warning">操作系统原理</el-tag>
                <el-tag type="danger">计算机网络</el-tag>
            </div>
          </div>
          <div class="jiaoyu">
           
          </div>
          <div class="jiaoyu"></div>


        </div>
      </div>
    </div>
    <div class="ininside_container">
      <div class="ininc_title"><p>工作经历</p></div>
      <div class="neirong_container">
        <div class="neirong">
          <div class="gongzuojingli"></div>



        </div>
      </div>
    
    </div>
    <div class="ininside_container">
      <div class="ininc_title"><p>个人优势</p></div>
      <div class="neirong_container">
        <div class="neirong">
          <div class="gerenyoushi">
            
            <div class="youshitiao">
              1.熟练掌握HTML5、CSS3、JavaScript、TypeScript，以及Vue 3等前沿前端框架。
            </div>    <el-divider />

            <div class="youshitiao">
              2.擅长使用Element Plus组件库，实现快速且高质量的前端界面开发。
            </div>    <el-divider />

            <div class="youshitiao">
              3.精通Vite构建工具，优化前端页面的开发流程和构建效率。
            </div>    <el-divider />

            <div class="youshitiao">
              4.熟练使用Git进行代码版本控制，包括分支管理、代码合并和代码审查。
            </div>    <el-divider />

            <div class="youshitiao">
              5.精通响应式设计和跨浏览器兼容性问题处理，确保用户在不同设备和浏览器上获得一致体验。
            </div>    <el-divider />

            <div class="youshitiao">
              6.掌握前端性能优化技巧，包括代码分割、懒加载、资源压缩等，显著提升页面加载速度和运行效率。
            </div>    <el-divider />

            <div class="youshitiao">
              7.面对技术难题时，能够迅速进行分析和排查，提出有效的解决方案。
            </div>    <el-divider />

            <div class="youshitiao">
              8.熟练掌握ASP.NET WEB API框架，设计和实现RESTful服务。
            </div>    <el-divider />

            <div class="youshitiao">
              9.跟踪最新的后端开发趋势和技术，如微服务架构、容器化和云服务。
            </div>    <el-divider />

            <div class="youshitiao">
              10.熟练掌握RSA非对称加密算法，确保API数据传输的安全性和完整性。
            </div>    <el-divider />

            <div class="youshitiao">
              11.实施OAuth和JWT等安全协议，确保API的安全性和数据的保护。
            </div>    <el-divider />

            <div class="youshitiao">
              12.熟练使用LINQ查询语法糖，编写类型安全的数据库查询，提高代码的可读性和维护性。
            </div>    <el-divider />

            <div class="youshitiao">
              13.愿意在项目关键时刻接受加班，以确保项目按时交付。
            </div>    <el-divider />



          </div>



        </div>
      </div>
    </div>
    <div class="ininside_container">
      <div class="ininc_title"><p>兴趣爱好</p></div>

      <div class="neirong_container">
        <div class="neirong">
           <wordcloud
              style="
                height: 100%;
                width: 100%;
              "
            />
          <div class="xingqu"></div>
          <div class="wave-container">
            <div class="wave-line"></div>
          </div>


        </div>
      </div>
    </div>
    
  </div>




</div>



</template>
  

<style lang="scss" scoped>

table {
  width: 100%;
  border-collapse: collapse;
  
}

table, th, td {
  border: 1px solid black;
}

th, td {
  padding: 8px;
  text-align: left;
}




*{
  border-radius: 25px;

}
.outside_container{
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding: 10px;
  box-sizing: border-box;
  border: 8px solid rgba(43, 42, 42, 0.5);
  background-color: rgb(240, 243, 243);
  background-image: url('../../public/img/pattern.svg');
  .inside_container1{
    width: 100%;
    height:10%;
    min-height: 100px;
    max-height: 120px;
    background-image: repeating-linear-gradient(45deg, rgb(73, 73, 73) 25%, rgb(128, 128, 128) 25%, rgb(128, 128, 128) 50%, rgb(73, 73, 73) 50%, rgb(73, 73, 73) 75%, rgb(128, 128, 128) 75%);
    background-size: 80px 80px;
    display: flex; /* 设置为Flex容器 */
    align-items: center; /* 垂直居中 */

    
    .title{
      position: relative;
      width: auto;
      height: 100%;
      display: flex;
      justify-content: center;
      margin: auto;
      p{
        padding: 20px;
        letter-spacing: 20px;
        font-size: 50px;
        font-weight: 700;
        color: rgb(230, 230, 230); 
        margin: 0px;
      }

    }
    .close_tubiao{
      position: absolute;
      width: 50px;
      height: 50px;
      right: 30px;
      border-radius: 50px;
      background-color: rgb(231, 231, 231);
      border: 8px solid rgb(54, 54, 54);
      transform: scale(1); /* 原始大小 */
      transition:  0.5s ease-in, transform 0.5s ease-in; /* 过渡效果 */
      display: flex; /* 设置为Flex容器 */
      justify-content: center; /* 水平居中 */
      align-items: center; /* 垂直居中 */
      svg{

      }
    }
  }

  .inside_container2{
    margin-top:10pdx ;
    width: 100%;
    height:auto ;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    
    .ininside_container{
      width: 45%;
      min-width: 330px;
      max-width: 500px;
      height:500px ;
      background-color: rgb(231, 229, 229);
      margin: auto;
      margin-top: 20px;
      position: relative;
      display: flex;
      justify-content: center;
      padding-top: 10px;
      flex-wrap: wrap;
      .ininc_title{
        width: 95%;
        height: 15%;
        min-height: 80px;
        
        background-color: rgb(207, 205, 205);

        position: relative;
      
        display: flex;
        justify-content: center;
        align-items: center;
        p{
          padding: 20px;
          letter-spacing: 20px;
          font-size: 30px;
          font-weight: 800;
          color: rgb(88, 87, 87); 
          margin: 0px;
        }
      }
      .neirong_container{
        width: 90%;
        height:75%;
        background-color: rgb(214, 212, 212);
        padding: 10px;
        
        .neirong{
          width: 100%;
          height:100%;
          display: flex;
          margin: auto;
          flex-wrap: wrap;
          overflow-x: hidden; /* 水平内容隐藏 */
          overflow-y: auto; /* 垂直内容滚动 */
          

          .gerenyoushi{
            width: 100%;
            height: 100%;
            padding: 20px;
            .youshitiao{
              letter-spacing: 2px;
              font-size: 15px;
              font-weight: 800;
              color: rgb(88, 87, 87); 
              margin: 0px;
            }
          }
          .jiaoyu{
            width: 100%;
            padding-top: 20px;
            .flex{
              display: flex;
              flex-wrap: wrap;

              .el-tag {
                width: auto;
                height: 50px;
                line-height: 100px; /* 使文本垂直居中 */
                display: flex;
                align-items: center;
                justify-content: center;
              }

            }
          }
          .touxiang{

            width: 130px;
            height: 160px;
            background-color: aliceblue;

            padding-top: 5px;
            padding-left: 5px;
            .touxiang_img{
              width: 95%;
              height: 95%;
              background-color: rgb(139, 139, 139);
              border-radius: 25px 25px 50px 25px;
              overflow: hidden;
            }
          }
          .jieshao1{
            width: 65%;
            height: 160px;
            background-color: rgb(194, 192, 192);
            margin-left: auto;
            div{
              display: flex;
              margin: auto;
              div{
                display: flex;
                margin-left: 10px;
                margin-top: 10px;

                letter-spacing: 2px;
                font-size: 15px;
                font-weight: 800;
                color: rgb(236, 234, 234); 
              }
            }
          }
          .jieshao2{
            width: 98%;
            height: 200px;
            background-color: rgb(180, 178, 178);
            margin: auto;
            margin-top: 10px;
            div{
              display: flex;
              margin: auto;
              div{
                display: flex;
                margin-left: 10px;
                margin-top: 10px;

                letter-spacing: 2px;
                font-size: 15px;
                font-weight: 800;
                color: rgb(236, 234, 234); 
              }
            }
          }


          .jineng{
            width: 98%;
            height: 50px;
            background-color: rgb(201, 201, 201);
            display: flex;
            margin: auto;
            margin-top: 10px;
            margin-bottom: 0;
            .jineng_bg{
              position:relative;
              height: 100%;
              background-image: linear-gradient(-45deg, #6ac16e  0, #6ac16e 25%, #89c388  0, #89c388  50%, #6ac16e  0, #6ac16e 75%, #89c388  0, #89c388  100%);
              background-size: 50px 50px;
              animation: moveBackground 2s linear infinite;
              justify-content: center;
              animation: widthAnimation 2s forwards; /* 应用动画 */

              p{
                position: absolute;
                padding-left: 20px;
                display: flex;
                width: 200px;
                flex-wrap: nowrap;


              }
              @keyframes widthAnimation {
                  from {
                      width: 0;
                  }
                  to {
                  }
              }
            }
            @keyframes moveBackground {
              from {
                background-position: 0 0;
              }
              to {
                background-position: 50px 50px;
              }
            }
            p{
              letter-spacing: 2px;
              font-size: 15px;
              font-weight: 700;
              color: rgb(139, 137, 137); 
            }
          }
        }
        .neirong::-webkit-scrollbar {
          display: none; /* 隐藏滚动条 */
        }
      }
    }
    .ininside_container:hover{
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
    transition: all 0.3s ease;
    }


  }


}

@media (max-width: 1200px) {
  .jieshao1 {
    width: 50%!important;
    height: 160px;
    background-color: rgb(194, 192, 192);
    margin-left: auto;
  }
  .jieshao1 div {
    display: flex;
    margin: auto;
  }
  .jieshao1 div div {
    display: flex;
    margin-left: 10px;
    margin-top: 10px;
    letter-spacing: 2px;
    font-size: 20px;
    font-weight: 800;
    color: rgb(236, 234, 234); 
  }
  .close_tubiao{
    scale: 0;
  }

}
</style>










































  <!-- <script lang="ts" setup>
  import {ref} from 'vue'
  interface Information {
    id: number;
    name: string;
    age: string;
    address: string;
    phone: string;
    email: string;
    gender: string;
    education: string;
  }


  interface Education {
    id: number;
    degree: string;
    institution: string;
    year: string;
  }
  
  interface Job {
    id: number;
    position: string;
    company: string;
    year: string;
    description: string;
  }
  
  // Define reactive data
  const name = ref('黎奇');
  const title = ref('前端/后端开发工程师');
  const contact = ref('邮箱: 2416994895@qq.com | 电话: 19928181074');
  const personalList = ref<Information[]>([
    {
    id: 1,
    name: '黎奇',
    age: '26',
    address: '广州市天河区',
    phone: '19928181074',
    email: '2416994895@qq.com',
    gender: '男',
    education: '本科'
    },
    ]);
  const educationList = ref<Education[]>([
    { id: 1, degree: '软件工程', institution: '广东理工学院', year: '2020-2024' },
  ]);
  
  const jobList = ref<Job[]>([
    // Uncomment and update with real job data if available
    // { id: 1, position: '前端开发工程师', company: '某科技公司', year: '2021-2023', description: '负责公司官网及管理系统的开发和维护。' },
    // { id: 2, position: '实习前端开发工程师', company: '某初创公司', year: '2020-2021', description: '参与开发内部工具及项目展示页面。' }
  ]);
  
  const skills = ref<string[]>(['JavaScript', 'Vue', 'HTML/CSS', 'Webpack', 'Git','ASP.net']);
  
  </script>
  
  <style scoped>
  .info-item {
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap; /* 允许内容在一行中超出时换行 */
    justify-content: space-between;
  }
.info-item div {
    margin-bottom: 5px;
    margin-right: 2%;
    white-space: nowrap; /* 防止文字换行 */

}
  .resume {
    max-width: 2000px;
    margin: auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .resume-header {
    text-align: center;
  }
  
  .resume-header h1 {
    margin: 0;
  }
  
  .resume-section {
    margin-top: 20px;
  }
  
  .resume-section h2 {
    border-bottom: 2px solid #000;
    padding-bottom: 5px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 10px;

    display: flex;
    flex-wrap: wrap; /* 允许内容在一行中超出时换行 */
  }
  
  li {
    margin-bottom: 10px;
    margin-right: 3%;
  }
  
  strong {
    display: block;
  }
  </style>
   -->