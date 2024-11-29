<template>
    <div v-if="visible"  class="login-dialog">
      <div class="dialog-overlay" @click.self="closeDialog"></div>
      <div v-loading="loading" class="dialog-content">
        <h2>登录</h2>
        <form class="login-form" @submit.prevent="login" v-show="!isRegisterMode">
          <div>
            <label for="username">登陆账号:</label>
            <input type="text" id="loginAccount" v-model="loginAccount" name="LoginAccount" required>
          </div>

          <div>
            <label for="password">密码:</label>
            <input type="password" id="password" v-model="password" name="Password" required>
          </div>

           

            <div style="display: flex; margin-top: 10px">
              <button type="submit">登录</button>
              <button type="button" @click="closeDialog">取消</button>
              <button type="button" @click="gotoReg">去注册</button>
            </div>
          

        </form>
        <form class="register-form" @submit.prevent="register" v-show="isRegisterMode">
            <h2>注册</h2>
            <div class="form-group">
                <label for="registerLoginAccount">登陆账号:</label>
                <input type="text" id="registerLoginAccount" name="LoginAccount" v-model="loginAccount" required maxlength="12" minlength="12">
                <p v-if="errors.loginAccount" class="error">{{ errors.loginAccount }}</p>
            </div>
            <div class="form-group">
                <label for="registerUsername">用户名:</label>
                <input type="text" id="registerUsername" name="Username" v-model="username" required  maxlength="24" minlength="12">
                <p v-if="errors.username" class="error">{{ errors.username }}</p>
            </div>
            <div class="form-group">
                <label for="registerPassword">密码:</label>
                <input type="password" id="registerPassword" name="Password" v-model="password"  required maxlength="24"minlength="8">
                <p v-if="errors.password" class="error">{{ errors.password }}</p>
            </div>
            <div class="form-group">
                <label for="reregisterPassword">确认密码:</label>
                <input type="password" id="reregisterPassword" v-model="confirmPassword" required maxlength="40" minlength="8">
                <p v-if="errors.confirmPassword" class="error">{{ errors.confirmPassword }}</p>
            </div>
            <div class="form-group">
                <label for="registerEmail">邮箱:</label>
                <input type="email" id="registerEmail" name="Email"  v-model="email" required maxlength="24" minlength="8">
                <p v-if="errors.email" class="error">{{ errors.email }}</p>
            </div>
            <div class="form-group">
                <button type="submit">注册</button>
                <button type="button" @click="gotoLog">去登陆</button>
                <button type="button">取消</button>
            </div>
        </form>
      </div>
      
    </div>
  </template>
  
 
  <script setup lang="ts">
  import { defineProps, defineEmits, ref, watch } from 'vue';
  import store from '../store';
import { ElMessage } from 'element-plus';
  interface ErrorInfo {
  loginAccount?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
  email?: string;
}
  const loginAccount = ref('');
  const username = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  const email = ref('');
  const errors = ref<ErrorInfo>({});
  // 定义子组件接收的 props
  const props = defineProps<{
    visible?: boolean;
  }>();
const emits = defineEmits(['update:visible']);

// 定义一个方法来改变 visible 的值，并通知父组件
function toggleVisible() {
  emits('update:visible', !props.visible);
}


  const isRegisterMode = ref(false); // 控制是否显示注册表单
  
  // 定义方法
  const loading = ref(false)
  const login = async() => {
    // 在这里添加登录逻辑
    loading.value=true;
    store.dispatch('login', { LoginAccount:loginAccount.value, Password:password.value})
    .then(() => {
      // 登录成功，弹窗提示 
      loading.value=false;

      const dragAreaElement = document.getElementById('elheader');    
      if (dragAreaElement) {
        // 为每个文件单独显示消息提示
        ElMessage({
          message: `登陆成功`,
          type: 'success',
          duration: 2000, // 持续时间以毫秒为单位
          appendTo: dragAreaElement,
        });
      } else {
      }
      closeDialog(); // 登录成功，关闭对话框
    })
    .catch(() => {
      const dragAreaElement = document.getElementById('elheader');   
      // 登录失败，弹窗提示 
      if (dragAreaElement) {
        // 为每个文件单独显示消息提示
        ElMessage({
          message: `登陆失败`,
          type: 'error',
          duration: 2000, // 持续时间以毫秒为单位
          appendTo: dragAreaElement,
        });
      } else {
      } 
    });
  };
  
  const closeDialog = () => {
    toggleVisible();

  };
  
  const gotoReg = () => {
    isRegisterMode.value = !isRegisterMode.value; // 切换到注册表单
    username.value = '';
    password.value = '';
  };
  const gotoLog = () => {
    isRegisterMode.value = !isRegisterMode.value; // 切换到登陆表单
  };
  const register = async () => {
      // 清空之前的错误信息
      errors.value = {};

      // 验证密码是否匹配
      if (password.value !== confirmPassword.value) {
        errors.value.confirmPassword = '密码不匹配，请重新输入！';
        return;
      }

      // 验证表单数据
      if (!loginAccount.value) {
        errors.value.loginAccount = '用户名是必填项。';
      }
      if (!username.value) {
        errors.value.username = '用户名是必填项。';
      }
      if (!email.value) {
        errors.value.email = '邮箱是必填项。';
      }
      if (!password.value) {
        errors.value.password = '密码是必填项。';
      }

      if (Object.keys(errors.value).length > 0) {
        console.log("错误多")
        return;
      }
      loading.value=true;

      store.dispatch('reg', { LoginAccount:loginAccount.value,Username: username.value, Password:password.value ,Email: email.value})
      .then(() => {
          // 注册成功，弹窗提示 
          loading.value=false;

          const dragAreaElement = document.getElementById('elheader');    
          if (dragAreaElement) {
            // 为每个文件单独显示消息提示
            ElMessage({
              message: `注册成功`,
              type: 'success',
              duration: 2000, // 持续时间以毫秒为单位
              appendTo: dragAreaElement,
            });
          } else {
          }
          gotoLog(); // 注册成功，关闭对话框
        }
      
    
    
      ).catch(() => {
      const dragAreaElement = document.getElementById('elheader');   
      // 登录失败，弹窗提示 
      if (dragAreaElement) {
        // 为每个文件单独显示消息提示
        ElMessage({
          message: `注册失败`,
          type: 'error',
          duration: 2000, // 持续时间以毫秒为单位
          appendTo: dragAreaElement,
        });
      } else {
      } 
    });

     
    };

  </script>
  <style lang="scss" scoped>
  .login-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999999999999999;
    .dialog-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
  }
  .dialog-content {
        width: 50%;
        min-width: 300px;
        height: 30%;
        min-height: 200px;
        background-image: url('../../public/indexbg.avif');
        padding: 20px;
        border-radius: 5px;
        z-index: 99;
        display: grid;
        grid-template-columns:100%; 
        grid-template-rows: 30% 70% ; 
        justify-items: center;
        align-items: center;
        .login-form{
          width: 100%;
          height: 100%;
          justify-items: center;
        

        }
        .register-form{
        }
    }
  }
 
  </style>