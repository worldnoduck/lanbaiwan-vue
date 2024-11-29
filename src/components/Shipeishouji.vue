<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref,defineEmits } from 'vue';
import { useStore } from 'vuex'; // 导入 useStore 钩子
const store = useStore(); // 使用 useStore 钩子获取 store 实例
const emits = defineEmits(['update:visible']);
function updateParent(value: boolean) {
    emits('update:visible', value);}

// 使用映射的 action
const useAuth=() =>{
  if(store.state.LoginState.isLoggedIn){
    updateParent(false);
  }else{
    updateParent(true);


  }
    
}

const showLogin = () => {
  useAuth();
};

const router = useRouter();
const navigateTo = (page : string) => {
    try{
        console.log(page)
            router.push({ name: page });
    }finally{

}
};

</script>

<template>
    <div class="myself_container">
        <el-row :gutter="0" justify="space-around">
            <el-col :span="3"><div class="content" @click="navigateTo('Home')">
                <div class="icon"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0xMC41IDE0LjV2MXEwIC42MjUuNDM4IDEuMDYzVDEyIDE3dDEuMDYzLS40Mzd0LjQzNy0xLjA2M3YtMWgxcS42MjUgMCAxLjA2My0uNDM3VDE2IDEzdC0uNDM3LTEuMDYyVDE0LjUgMTEuNWgtMXYtMXEwLS42MjUtLjQzNy0xLjA2MlQxMiA5dC0xLjA2Mi40MzhUMTAuNSAxMC41djFoLTFxLS42MjUgMC0xLjA2Mi40MzhUOCAxM3QuNDM4IDEuMDYzVDkuNSAxNC41ek02IDIxcS0uODI1IDAtMS40MTItLjU4N1Q0IDE5di05cTAtLjQ3NS4yMTMtLjl0LjU4Ny0uN2w2LTQuNXEuNTI1LS40IDEuMi0uNHQxLjIuNGw2IDQuNXEuMzc1LjI3NS41ODguN1QyMCAxMHY5cTAgLjgyNS0uNTg4IDEuNDEzVDE4IDIxem0wLTJoMTJ2LTlsLTYtNC41TDYgMTB6bTYtNi43NSIvPjwvc3ZnPg=="></div>
                <div class="title">首页</div>
            </div></el-col>
            <el-col :span="3"><div class="content" @click="navigateTo('Shequ')">
                <div class="icon">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTcgMTh2LTFhNSA1IDAgMCAxIDUtNXYwYTUgNSAwIDAgMSA1IDV2MU0xIDE4di0xYTMgMyAwIDAgMSAzLTN2MG0xOSA0di0xYTMgMyAwIDAgMC0zLTN2MG0tOC0yYTMgMyAwIDEgMCAwLTZhMyAzIDAgMCAwIDAgNm0tOCAyYTIgMiAwIDEgMCAwLTRhMiAyIDAgMCAwIDAgNG0xNiAwYTIgMiAwIDEgMCAwLTRhMiAyIDAgMCAwIDAgNCIvPjwvc3ZnPg==">
                </div>
                <div class="title">社区</div>
            </div></el-col>
            <el-col :span="3"><div class="content" @click="navigateTo('Bizhi')">
                <div class="icon">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTQgMTQiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMSAxLjI1aDEyYy4zIDAgLjUuMi41LjV2OGMwIC4zLS4yLjUtLjUuNUgxYy0uMyAwLS41LS4yLS41LS41di04YzAtLjMuMi0uNS41LS41Ii8+PHBhdGggZD0iTTQuNjQgNS43NWExLjM5IDEuMzkgMCAxIDAgMC0yLjc4MWExLjM5IDEuMzkgMCAwIDAgMCAyLjc4MU02IDEwLjI1bC0xIDIuNW0zLTIuNWwxIDIuNW0tNSAwaDZtLTUuOTEtMi41bDUuMDc1LTQuODhhLjQ4LjQ4IDAgMCAxIC42MjQgMEwxMy41IDguMTEiLz48L2c+PC9zdmc+">

                </div>
                <div class="title">壁纸</div>
            </div></el-col>
            <el-col :span="3"><div class="content">
                <div style="width: 100%;height: 100%;align-items: center;">
                    <img style="width: 100%;height: 60%;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMyA5LjRjMC0yLjI0IDAtMy4zNi40MzYtNC4yMTZhNCA0IDAgMCAxIDEuNzQ4LTEuNzQ4QzYuMDQgMyA3LjE2IDMgOS40IDNoNS4yYzIuMjQgMCAzLjM2IDAgNC4yMTYuNDM2YTQgNCAwIDAgMSAxLjc0OCAxLjc0OEMyMSA2LjA0IDIxIDcuMTYgMjEgOS40djUuMmMwIDIuMjQgMCAzLjM2LS40MzYgNC4yMTZhNCA0IDAgMCAxLTEuNzQ4IDEuNzQ4QzE3Ljk2IDIxIDE2Ljg0IDIxIDE0LjYgMjFIOS40Yy0yLjI0IDAtMy4zNiAwLTQuMjE2LS40MzZhNCA0IDAgMCAxLTEuNzQ4LTEuNzQ4QzMgMTcuOTYgMyAxNi44NCAzIDE0LjZ6TTE1LjUgMTJIMTJtMCAwSDguNW0zLjUgMFY4LjVtMCAzLjV2My41Ii8+PC9zdmc+">

                </div>
            </div></el-col>
            <el-col :span="3"><div class="content" @click="navigateTo('Jiaocheng')">
                <div class="icon">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0xMC4zODYgOS44MzZhMi41IDIuNSAwIDEgMSAzLjYxMS42NjdDMTUuMjEyIDExLjE3MyAxNiAxMi40NiAxNiAxNHYxLjVhLjUuNSAwIDEgMS0xIDBWMTRjMC0xLjcyNC0xLjI3Ni0zLTMtM2MtLjkxIDAtMS4yOTgtLjAyLTEuODA1LS4xMjJjLTEuMjUtLjI1NC0yLjMzMy0xLTMuNTg1LTIuNTY2YS41LjUgMCAxIDEgLjc4LS42MjRjLjkgMS4xMjQgMS42NTMgMS43NCAyLjQzNCAyLjA0M2MuMTU1LjA1Mi4zNDUuMDgzLjU2Mi4xMDVtMS43ODUuMTI4cS4xMjUuMDE1LjI1MS4wMzRMMTIuNSAxMGExLjUgMS41IDAgMSAwLS4zMy0uMDM2TTkuNzggMTEuOTdhLjUuNSAwIDAgMSAuNS41YTEgMSAwIDAgMS0uMDUuMjMxYy0uMTc5LjM4LS4yMy43NzQtLjIzIDEuMzAydjEuNWEuNS41IDAgMSAxLTEgMHYtMS41YzAtLjY1Ny4wNzItMS4xODYuMzA3LTEuNjk2YS41LjUgMCAwIDEgLjQ3My0uMzM3TTUuOTU4IDUuNzcyYS41LjUgMCAwIDEtLjc4LjYyNUwzLjExIDMuODEyYS41LjUgMCAxIDEgLjc4LS42MjR6TTEgMTFoNS41YS41LjUgMCAxIDEgMCAxaC02YS41LjUgMCAwIDEtLjUtLjVWLjVBLjUuNSAwIDAgMSAuNSAwaDEyYS41LjUgMCAwIDEgLjUuNXYzYS41LjUgMCAxIDEtMSAwVjFIMXoiLz48L3N2Zz4=">

                </div>
                <div class="title">教程</div>
            </div></el-col>
            <el-col :span="3"><div class="content" @click="navigateTo('Wenjian')">
                <div class="icon">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgY29sb3I9IiMzMzMzMzMiPjxwYXRoIGQ9Ik0xMS4xIDNjLTMuNjUuMDA3LTUuNTYuMDk2LTYuNzgyIDEuMzE4QzMgNS42MzYgMyA3Ljc1NyAzIDEyczAgNi4zNjQgMS4zMTggNy42ODJTNy43NTggMjEgMTIgMjFzNi4zNjQgMCA3LjY4My0xLjMxOGMxLjIyLTEuMjIxIDEuMzEtMy4xMzMgMS4zMTctNi43ODIiLz48cGF0aCBkPSJtMjEgNi4wMjVsLTEtLjAwMmMtMy43MzctLjAxLTUuNjA1LS4wMTUtNi45MTguOTNjLS40MzcuMzEzLS44Mi42OTUtMS4xMzUgMS4xM0MxMSA5LjM5NiAxMSAxMS4yNjQgMTEgMTVtMTAtOC45NzVhLjcuNyAwIDAgMC0uMTc1LS40NzJDMjAuMDYgNC42NDcgMTguMDcxIDMgMTguMDcxIDNNMjEgNi4wMjVhLjcuNyAwIDAgMS0uMTc0LjQyMkMyMC4wNiA3LjM1MyAxOC4wNyA5IDE4LjA3IDkiLz48L2c+PC9zdmc+">

                </div>
                <div class="title">文件</div>
            </div></el-col>
            <el-col :span="3"><div class="content" @click=showLogin>
                <div class="icon">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjAgMjAiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEwIDkuMjVjLTIuMjcgMC0yLjczLTMuNDQtMi43My0zLjQ0QzcgNC4wMiA3LjgyIDIgOS45NyAyYzIuMTYgMCAyLjk4IDIuMDIgMi43MSAzLjgxYzAgMC0uNDEgMy40NC0yLjY4IDMuNDRtMCAyLjU3TDEyLjcyIDEwYzIuMzkgMCA0LjUyIDIuMzMgNC41MiA0LjUzdjIuNDlzLTMuNjUgMS4xMy03LjI0IDEuMTNjLTMuNjUgMC03LjI0LTEuMTMtNy4yNC0xLjEzdi0yLjQ5YzAtMi4yNSAxLjk0LTQuNDggNC40Ny00LjQ4eiIvPjwvc3ZnPg==">

                </div>
                <div class="title">我的</div>
            </div></el-col>
         

        </el-row>
        
    </div>
</template>
<style lang="scss" scoped>
.el-row {
    height: 100%;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
  height: 100%;

}
.el-col:hover {
  background-color: rgba(223, 223, 223, 0.623);

}

.content {
  border-radius: 4px;
  min-height: 36px;
  height: 100%;
  text-align: center;
  .title{
    font-size: 10px;
  }
  .icon{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        img{
            height: 100%;
        }
    }
}
.myself_container
{
    padding-top: 10px;
    width: 100%;
    height: 70px;
    background-color: rgb(255, 255, 255);
    z-index: 999;
    position: absolute;
    bottom: 0;
}

@media (min-width: 1600px) {
.myself_container
{

    display: none;

}

}

@media (max-width: 768px) {
.myself_container
{
    margin-top: 5px;
    width: 100%;
    background-color: rgb(255, 255, 255);
    z-index: 999;
    position: absolute;
    bottom: 0;
    height: 40px;
}

}
</style>