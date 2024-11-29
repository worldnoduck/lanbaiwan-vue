// store/index.js or index.ts
import { createStore } from 'vuex';
import * as signalR from '@microsoft/signalr';
import * as forge from 'node-forge';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL
const SIGNALR_URL =import.meta.env.VITE_SIGNALR_URL
const SHIPING_URL =import.meta.env.VITE_SHIPING_URL

const API_gongnengtu=import.meta.env.VITE_API_GongNeng;
const API_gameshow=import.meta.env.VITE_API_GameShow;
const API_lunbo=import.meta.env.VITE_API_LunBo;


export default createStore({
  state: {
    publicKey: null, // 添加 publicKey 到状态
    GongNengState:{
      state:false,
      data:[],
      error:null
    },
    GameShowState:{
      state:false,
      data:[],
      error:null
    },
    LunBoState:{
      state:false,
      data:[],
      error:null
    },
    Connection:{
      homeconn:null,
      shipinconn:null as signalR.HubConnection | null // 明确声明 shipinconn 可能为 null,
    },
    LoginState:{
      isLoggedIn: false,
      username:null,
      usertouxiang:null,
      userToken:null,

    }
  },
  mutations: {
    setUserToken(state, token) {
      state.LoginState.userToken = token;
    },
    setPublicKey(state, publicKey) {
      state.publicKey = publicKey;
    },
    //功能列表
    setGongNengState(state){
      state.GongNengState.state=true;   // 设置为加载中
    },
    setGongNengData(state,data){
      state.GongNengState.state = false; 
      state.GongNengState.data=data;
    },
    setGongNengError(state,error){
      state.GongNengState.state = false;
      state.GongNengState.error=error;
    },
     //游戏列表
    setGameShowState(state){
      state.GameShowState.state=true;   // 设置为加载中
    },
    setGameShowgData(state,data){
      state.GameShowState.state = false; 
      state.GameShowState.data=data;
    },
    setGameShowError(state,error){
      state.GameShowState.state = false;
      state.GameShowState.error=error;
    },
    //轮播列表
    setLunBoState(state) {
      state.LunBoState.state = true;
    },
    // 成功获取数据
    setLunBoData(state, data) {
      state.LunBoState.state = false;
      state.LunBoState.data = data;
    },
    // 获取数据时发生错误
    setLunBoError(state, error) {
      state.LunBoState.state = false;
      state.LunBoState.error = error;
    },
    //获取websocket连接
    setHomeconn(state,conn){
      state.Connection.homeconn=conn;
    },
    setShipinconn(state,conn){
      state.Connection.shipinconn=conn;
    },
    setAuth(state, status) {
      state.LoginState.isLoggedIn=status;
    },
    setLoginAccount(state,LoginAccount){
      state.LoginState.username=LoginAccount
    },
    setisLoggedIn(state){
      state.LoginState.isLoggedIn=true
    },
    setisLoggedout(state){
      state.LoginState.isLoggedIn=false
    }
  },
  actions: {
    async fetchPublicKey({ commit }) {
      try {
        // 连接到 SignalR 服务器
        const connection = new signalR.HubConnectionBuilder()
          .withUrl(`${SIGNALR_URL}`) // 替换为实际的 SignalR Hub URL
          .configureLogging(signalR.LogLevel.Information)
          .build();


        // 监听从服务器发来的公钥
        connection.on("receivePublicKey", (publicKeyPem) => {
          try {

            const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
            commit('setPublicKey', publicKey);
            console.log("SignalR 连接成功"+JSON.stringify(publicKey));

          } catch (error) {
            console.error("解析公钥 PEM 时出错:", error);
          }
        });  
        // 启动连接
        await connection.start();

        
      

      } catch (error) {
        console.error("SignalR 连接或公钥获取错误:", error);
      }
    },
    //功能列表模块请求
    async fetchGongNeng({commit}){
      commit('setGongNengState')
      try {
        // 发起实际的请求来获取数据
        const response = await fetch(`${API_URL}`+`${API_gongnengtu}`); 
        if (!response.ok) {
          throw new Error(`HTTP 错误: ${response.status}`);
        }
        const data = await response.json();
        commit('setGongNengData', data); // 成功时更新数据
      } catch (error) {
        commit('setGongNengError', error); // 处理错误
        console.error("获取功能数据时出错:", error);
      }
    },
    //游戏列表模块请求
    async fetchGameShow({commit}){
      commit('setGameShowState')
      try {
        // 发起实际的请求来获取数据
        const response = await fetch(`${API_URL}`+`${API_gameshow}`); 
        if (!response.ok) {
          throw new Error(`HTTP 错误: ${response.status}`);
        }
        const data = await response.json();
        commit('setGameShowData', data); // 成功时更新数据
      } catch (error) {
        commit('setGameShowError', error); // 处理错误
        console.error("获取功能数据时出错:", error);
      }
    },
    //轮播列表模块请求
    async fetchLunBo({ commit }) {
      commit('setLunBoState');
      try {
        // 发起实际的请求来获取数据
        const response = await fetch(`${API_URL}`+`${API_lunbo}`); // 注意URL格式
        if (!response.ok) {
          throw new Error(`HTTP 错误: ${response.status}`);
        }
        const data = await response.json();
        commit('setLunBoData', data); // 成功时更新数据
      } catch (error) {
        commit('setLunBoError', error); // 处理错误
        console.error("获取轮播数据时出错:", error);
      }
    },
    async fetchMessage({ commit }) {
      try {
        // 连接到 SignalR 服务器
        const connection = new signalR.HubConnectionBuilder()
          .withUrl(`${SHIPING_URL}`) // 替换为实际的 SignalR Hub URL
          .configureLogging(signalR.LogLevel.Information)
          .build();

        connection.on("receiveMessage", (message) => {
          try {
            console.log(message);
          } catch (error) {
            console.log(message+"qqqqqqqqq");

          }
          
        });
        // 启动连接
        await connection.start();

        
        commit('setShipinconn',connection)

    

      } catch (error) {

      }
    },
    // 发送消息到服务器
    async fetchsendMessage({ commit }) {
      try {
          if(this.state.Connection.shipinconn){
            await this.state.Connection.shipinconn.invoke("BroadcastMessage", "广播已接受");
            console.log("消息已发送到服务器");
          }
          
      } catch (error) {
          console.error("发送消息时出错:", error);
      }
    },
    
    async login({ commit }, { LoginAccount, Password }) {
      const linshipublicKey = this.state.publicKey;
      let encryptedPassword = null;
    
      if (linshipublicKey !== null && linshipublicKey !== undefined) {
        encryptedPassword = encryptWithPublicKey(forge.pki.publicKeyToPem(linshipublicKey), Password);
      } else {
        console.error('公钥对象不存在或为 null');
        return;
      }
    
      try {
        const response = await axios.post(`${API_URL}/UserLogin`, { LoginAccount, Password: encryptedPassword });
        if (response.status === 200 && response.data.success==true) {
          const token = response.data.token;
          localStorage.setItem('userToken', token);
          commit('setUserToken', token);
          commit('setAuth', true);
          commit('setLoginAccount',LoginAccount);

        } else {
          throw new Error(response.data.message || '登录失败');
        }
      } catch (error) {
        console.error(error);
        throw error; // 将错误抛出，由调用方处理
      }
    },
    async reg({ commit }, { LoginAccount,Username, Password,Email }) {
      const linshipublicKey=this.state.publicKey;
      let encryptedPassword=null;
      if (linshipublicKey !== null && linshipublicKey !== undefined) {
        encryptedPassword = encryptWithPublicKey(forge.pki.publicKeyToPem(linshipublicKey), Password);
            console.log('加密密码'+encryptedPassword);

      } else {
        // 如果 linshipublicKey 是 null 或 undefined，打印错误消息
        console.error('公钥对象不存在或为 null');
        
        return;

      }
      
      try {
        // 发送登录请求到后端
        const response = await axios.post(`${API_URL}`+'/UserRegistration', { LoginAccount:LoginAccount,Username: Username, Password: encryptedPassword,Email: Email});
    
      } catch (error: unknown) {
        if (error instanceof Error) { // 检查 error 是否为 Error 实例
          throw new Error('Login failed: ' + error.message);
        } else {
          throw new Error('Login failed: Unexpected error occurred');
        }
      }
    },
    async refreshlog({commit},{LoginAccount}){
      commit('setLoginAccount',LoginAccount);
      console.log(LoginAccount);

      commit('setisLoggedIn');

    },
    async logout({commit}){
      commit('setLoginAccount',null)
      commit('setisLoggedout')
    },
    async loged({commit},{LoginAccount}){
      commit('setLoginAccount',LoginAccount);
      commit('setisLoggedIn');
    }
  },
  
});




const encryptWithPublicKey = (publicKey: string, data: string): string => {
  const publicKeyObj = forge.pki.publicKeyFromPem(publicKey);
  const encryptedData = publicKeyObj.encrypt(data, 'RSA-OAEP');
  return forge.util.encode64(encryptedData);
};

