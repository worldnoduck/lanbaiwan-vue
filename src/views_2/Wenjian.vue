
<style scoped  lang="scss">
.container{
    width: 100%;

    
    .header{
      height: 50px;
      background-color: rgb(223, 223, 223);
    }
    .content{
        width: 100%;
        height: 100%;

        .table-container{
          height: auto;
          background-color: rgb(255, 255, 255);
          justify-items: center;
        }
        .upload-container{
            height: auto;
            margin: auto;
            width: 50%;
            margin-top: 20px;
            margin-bottom: 20px;

            position: relative;
            background-color: rgb(255, 255, 255);
            .ml-3-container{
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              align-items: flex-end;
              .ml-3{
             
                margin-bottom: 10px;
                margin-right: 10px;
                
                
              }
            }
            
            .upload-custom{
                width: 100%;
                height: auto; 
                background-color: rgb(255, 255, 255);

                
                   
                
              
            }
        }

    }
}

 
.upload-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.drag-area {
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  margin-bottom: 10px;
}

          
</style>


<template>
    <div class="container">
      <div class="header">

      </div>
      <div class="content">
        <div class="upload-container">
          <!-- 拖拽区域 -->
          <div
            id="drag-area"
            class="drag-area"
            @drop.prevent="handleDrop"
            @dragover.prevent="handleDragOver"
          >
            <!-- 选择文件按钮 -->
            <button id="browse" @click="handleBrowseClick">选择文件</button>
            <!-- 开始上传按钮，当有文件时启用 -->
            <button id="start_upload" @click="startUpload" :disabled="!hasFiles">开始上传</button>
            <button @click="stopFile">暂停上传</button>

          </div>
          <div>
            <ul>
              <li v-for="file in files" :key="file.id">
                {{  file.name}}
                <div style="display: flex;">
                  <el-progress style="width: 80%;" :percentage="file.percent" />
                  <button @click="removeFile(file.id)">取消上传</button>

                </div>
           

              </li>
            </ul>
          </div>
        </div>
        <div class="table-container">
          <el-table 
          :data="paginatedData"
          style="width: 100%" 
          height="90%" 
          >
            <el-table-column fixed prop="title" label="标题"  />
            <el-table-column prop="status" label="状态"  />
            <el-table-column prop="downloads" label="下载次数"  />
            <el-table-column prop="size" label="大小">
              <template #default="scope">
                {{ formatSize(scope.row.size) }}
              </template>
            </el-table-column>
            <el-table-column prop="uploadDate" label="日期" />
            <el-table-column prop="author" label="作者"  />



            <el-table-column  align="right">
              <template #header>
                <el-input v-model="search" size="small" placeholder="Type to search" />
              </template>
              <template #default="scope">
                <!-- 检查状态是否为共享 -->
                <el-button
                  v-if="scope.row.status === '共享'"
                  type="success"
                  @click="debounceHandleDownload(scope.row.id)">
                  &nbsp;&nbsp;&nbsp;&nbsp;下载&nbsp;&nbsp;&nbsp;&nbsp;
                </el-button>
                <!-- 如果不是共享，可以显示一个不可点击的按钮或者不显示 -->
                <el-button
                  v-else
                  type="info"
                  disabled>
                  不可下载
                </el-button>
              </template>

            </el-table-column>

          </el-table>
          <el-pagination
            layout="prev, pager, next"
            :total="total"
            v-model:page-size="pageSize"
            v-model:default-page-size="pageSize"
            @current-change="handlePaginationChange"
          />  


        </div>
      </div>
    </div>

  </template>
  
  <script setup lang="ts">
 import {  onMounted, onUnmounted } from 'vue';
import plupload, { Uploader } from 'plupload';
import { ElMessage } from 'element-plus';
import store from '../store/index';

 

// 定义文件对象的接口，扩展 File 接口
interface FileWithProgress extends File {
  percent: number; // 文件上传进度的百分比
  name:string;
  id: string; // plupload 中的文件 id
}

// 使用 ref 创建一个响应式的文件数组，每个文件都有 id 和 percent 属性
const files = ref<FileWithProgress[]>([]);

// 声明响应式变量来跟踪是否有文件被选中
const hasFiles = ref(false);
// 创建一个响应式引用来存储plupload上传实例
const uploader = ref<plupload.Uploader | null>(null);

// 处理选择文件按钮点击事件
const handleBrowseClick = () => {
  // 刷新plupload实例以触发文件选择
  if (uploader.value) {
    uploader.value.refresh();
  }
  
};

//
const stopFile=()=>{
  uploader.value?.stop();
}

//删除队列里单个文件
const removeFile = (id: string) => {
  if (uploader.value) {
    uploader.value.removeFile(id);
  } else {
  }
};

// 处理拖拽文件到上传区域的事件
const handleDrop = (event: DragEvent) => {
  event.preventDefault();

  
};

// 处理拖拽进入上传区域的事件，防止默认行为
const handleDragOver = (event: DragEvent) => {
  event.preventDefault();
};


// 开始上传文件
const startUpload = () => {
  if (uploader.value) {
    // 调用plupload实例的start方法开始上传
    uploader.value.start();
  }
};

// 初始化plupload上传实例
const initUploader = () => {

  // 从localStorage获取JWT令牌，并确保其存在
 

  
  uploader.value = new plupload.Uploader({
    // 选择文件按钮的ID
    browse_button: 'browse',
    // 拖拽上传区域的ID
    drop_element: 'drag-area',
    //分片大小
    chunk_size:'10240kb',
    // 文件上传到的服务器地址
    url: `${API_URL}`+"/upload", 
  


  });

  // 初始化上传实例
  uploader.value.init();

  // 绑定文件添加事件
  uploader.value.bind('FilesAdded', (up: plupload.Uploader, droppedFiles:any[]) => {
    hasFiles.value = true;
     // 将新添加的文件添加到 files 数组中
     const newFiles: FileWithProgress[] = Array.from(droppedFiles as FileWithProgress[]).map(file => ({
      ...file,
      percent: 0, // 初始化进度为 0
      id: file.id, // 确保你有一个唯一标识符
      name: file.name
    }));
    files.value = [...files.value, ...newFiles];

  });

  // 绑定上传进度事件
  uploader.value.bind('UploadProgress', (up: plupload.Uploader, droppedFile: any) => {
    // droppedFile.percent
      // 查找 files 数组中对应的文件对象
    const fileIndex = files.value.findIndex(file => file.id === droppedFile.id);
    if (fileIndex !== -1) {
      // 更新文件的 percent 属性
      files.value[fileIndex].percent = droppedFile.percent;
    } else {
    }
  
  


  });

  // 绑定文件上传完成事件
  uploader.value.bind('ChunkUploaded', (up: plupload.Uploader, droppedFile:any, response:plupload_chunk_response) => {
  });
 
// 当上传队列中所有文件都上传完成后触发
uploader.value.bind('UploadComplete', (up: plupload.Uploader, pluploadFiles:any[]) => {
  
});
uploader.value.bind('FileUploaded', function(up: plupload.Uploader, file:any, responseObject:plupload_response) {
    // 检查服务器返回的HTTP状态码
    if (responseObject.status == 401) {
        // 处理401错误，例如显示错误消息，更新UI等
        console.error('上传失败，401 Unauthorized');
        file.status = plupload.FAILED; // 将文件状态设置为失败
    } else if (responseObject.status == 200) {
        // 遍历所有上传成功的文件
        files.value.forEach(file => {
          const dragAreaElement = document.getElementById('elheader');    
          if (dragAreaElement) {
            // 为每个文件单独显示消息提示
            ElMessage({
              message: `文件上传成功！： ${file.name}`,
              type: 'success',
              duration: 2000, // 持续时间以毫秒为单位
              appendTo: dragAreaElement,
            });
          } else {
          }
        });
        // 清空uploadedFiles数组，为下一次上传做准备
        files.value = [];
        tableData.value=[];
        getWenjian(0);

    }
});
  //绑定文件移除
  uploader.value.bind('FilesRemoved', (up: plupload.Uploader, pluploadFiles: any[]) => {
    // 移除 files 数组中对应的文件
    files.value = files.value.filter(file => file.id !== pluploadFiles[0].id);
  });
  uploader.value.bind('BeforeUpload', (up: plupload.Uploader, pluploadFile: any) => {
    up.setOption({
      headers: {
        'Authorization': `Bearer ${store.state.LoginState.userToken}` // 使用Bearer schema
      },
      });

  });

   // 绑定上传错误事件
   uploader.value.bind('Error', (up: plupload.Uploader, err: plupload_error) => {
    // 遍历所有上传成功的文件
    files.value.forEach(file => {
      const dragAreaElement = document.getElementById('elheader');    
      if (dragAreaElement) {
        // 为每个文件单独显示消息提示
        ElMessage({
          message: `请先登录，文件上传失败！： ${file.name}`,
          type: 'error',
          duration: 2000, // 持续时间以毫秒为单位
          appendTo: dragAreaElement,
        });
      } else {
      }
    });
    // 清空uploadedFiles数组，为下一次上传做准备
    files.value = [];

  });
};

// 在组件挂载时初始化plupload
onMounted(() => {
  initUploader();
  checkUserToken();
  getWenjian(currentPage.value-1);
  

});

// 在组件卸载时销毁plupload实例
onUnmounted(() => {
  if (uploader.value) {
    uploader.value.destroy();
  }
});

const checkUserToken=async()=>{
  try {

    if(store.state.LoginState.userToken==null){
      const response=await axios.post(`${API_URL}/checktoken`,[],{
        headers:{
          'Authorization': `Bearer ${localStorage.getItem('userToken')}` // 使用Bearer schema
        }
      });
      var newToken=response.data['newToken'];
      var name = getUserNameFromToken(newToken);
      store.dispatch('refreshlog',name);
      store.state.LoginState.username=name;
      localStorage.setItem('userToken', newToken);
      store.state.LoginState.userToken=newToken;

    }
  }catch(error:any){
    if (error.response && error.response.status === 401) {
      console.log('Token 失效');
      // 处理401错误，例如清除localStorage中的token和Vuex状态
      localStorage.removeItem('userToken');
      store.dispatch('logout');
    } else {
      console.error('Error checking token:', error);
    }
  }

   
}

const formatSize=(sizeInBytes:any)=> {
    if (sizeInBytes === 0) return '0 MB';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(sizeInBytes) / Math.log(k));
    return `${parseFloat((sizeInBytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  }

function getUserNameFromToken(token:string) {
    // 分割Token
    const base64Url = token.split('.')[1];
    // Base64Url解码
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    // 解码Payload
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    try {
        // 将JSON字符串转换为对象
        const payload = JSON.parse(jsonPayload);
        // 提取用户名
        return payload.Name;
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
}
const getWenjian=async(page:number)=>{
  try {
    const response=await axios.post(`${API_URL}/WenjianDownload/wenjianget`,{  Page:page });
    if(response.data.length!=0){
      console.log(tableData.value.length)
      tableData.value=tableData.value.concat(response.data)
      getWenjian(page+1);

    }else{
      
    }
  } catch (error) {
    
  }
}

  import {  computed, ref } from 'vue'
  import axios from 'axios'
  import {debounce} from '../composables/utils'

  const API_URL = import.meta.env.VITE_API_URL;
  const chunkSize = 10 * 1024 * 1024; // 2MB 分片大小
  const currentPage=ref(1);  // 当前页码
  const pageSize= ref(10); // 每页显示的行数
  const total= ref(0); // 总条目数
  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    total.value=filterTableData.value.length
    return filterTableData.value.slice(start, end);
});
  const uploadedChunks = ref<number[]>([]);
  interface Data {
    uploadDate: string
    title: string
    status: string
    downloads:number
    author:string
    size:number
    id:number
  }
  

const tableData = ref<Data[]>([]);
const search = ref('')
const filterTableData = computed(() =>
  tableData.value.filter(
    (data) =>
      !search.value ||
      data.title.toLowerCase().includes(search.value.toLowerCase())
  )
);
 // 分页变化处理函数
 const handlePaginationChange = (newPage: number) => {
      currentPage.value = newPage;
    };
  


/**
 * 处理文件下载的函数。
 * 
 * @param {int} id - 下载链接
 * @returns {void}
 */
 const handleDownload = async (id:string) => {
  const intId = parseInt(id, 10);
  try {
    // 检查响应状态
    if (!store.state.LoginState.userToken) {
      throw new Error('token失效或不存在');
    }

    // 使用axios发送GET请求
    const response = await axios.get(`${API_URL}/checkToken`, {
      params: { id: intId },
      headers: {
        'Authorization': `Bearer ${store.state.LoginState.userToken}`
      }
    });
    if (response.data.randomName && response.data.id) {
      // 假设响应中包含下载链接，例如：response.data.downloadUrl
      

 



      // 创建一个<a>元素
      const link = document.createElement('a');
      link.href = `${API_URL}/getfile?id=${response.data.id}&randomname=${response.data.randomName}&user=${store.state.LoginState.username}`;
      link.setAttribute('download', ''); // 设置下载属性，允许下载文件而不是导航

      // 模拟点击<a>元素
      document.body.appendChild(link);
      link.click();

      // 移除<a>元素
      document.body.removeChild(link);
    } else {
      console.error('下载链接未找到');
      alert('下载链接未找到');
    }
    // 这里可以处理响应结果，例如：
    // const file_response=await axios.get(`${API_URL}/getfile`, {
    //   params: { id: response.data.id,randomname:response.data.randomName },
      
    // });
  } catch (error) {
    console.error('Download error:', error);
    alert('请重新登录，文件下载失败');
  }
};
 
/**
 * 节流处理文件下载的函数，用于避免频繁触发下载请求。
 * 
 * @param {Function} func - 需要节流的函数。
 * @param {number} wait - 节流的时间间隔，单位为毫秒。
 * @returns {Function} - 节流后的函数。
 */
 const debounceHandleDownload=debounce(handleDownload,500);


  </script>