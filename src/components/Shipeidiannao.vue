<template>
    <div class="container">
        <div class="content">
            <div class="wode">
                <div class="iconcontent" @click='showLogin'>
                    <el-avatar 
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    :size="60"
                    shape="square"
                    />
                </div>
            </div>
            <div class="wode">
                <div class="iconcontent" @click="navigateTo('Bizhi')">
                    <div class="icon">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTQgMTQiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMSAxLjI1aDEyYy4zIDAgLjUuMi41LjV2OGMwIC4zLS4yLjUtLjUuNUgxYy0uMyAwLS41LS4yLS41LS41di04YzAtLjMuMi0uNS41LS41Ii8+PHBhdGggZD0iTTQuNjQgNS43NWExLjM5IDEuMzkgMCAxIDAgMC0yLjc4MWExLjM5IDEuMzkgMCAwIDAgMCAyLjc4MU02IDEwLjI1bC0xIDIuNW0zLTIuNWwxIDIuNW0tNSAwaDZtLTUuOTEtMi41bDUuMDc1LTQuODhhLjQ4LjQ4IDAgMCAxIC42MjQgMEwxMy41IDguMTEiLz48L2c+PC9zdmc+">

                    </div>
                </div>
            </div>
            <div class="wode">
                <div class="iconcontent">
                    <div style="width: 100%;height: 100%;align-items: center;">
                        <img style="width: 100%;height: 60%;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMyA5LjRjMC0yLjI0IDAtMy4zNi40MzYtNC4yMTZhNCA0IDAgMCAxIDEuNzQ4LTEuNzQ4QzYuMDQgMyA3LjE2IDMgOS40IDNoNS4yYzIuMjQgMCAzLjM2IDAgNC4yMTYuNDM2YTQgNCAwIDAgMSAxLjc0OCAxLjc0OEMyMSA2LjA0IDIxIDcuMTYgMjEgOS40djUuMmMwIDIuMjQgMCAzLjM2LS40MzYgNC4yMTZhNCA0IDAgMCAxLTEuNzQ4IDEuNzQ4QzE3Ljk2IDIxIDE2Ljg0IDIxIDE0LjYgMjFIOS40Yy0yLjI0IDAtMy4zNiAwLTQuMjE2LS40MzZhNCA0IDAgMCAxLTEuNzQ4LTEuNzQ4QzMgMTcuOTYgMyAxNi44NCAzIDE0LjZ6TTE1LjUgMTJIMTJtMCAwSDguNW0zLjUgMFY4LjVtMCAzLjV2My41Ii8+PC9zdmc+">

                    </div>
                </div>
            </div>
            <div class="wode">
                <div class="iconcontent" @click="navigateTo('Wenjian')">
                    <div class="icon">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgY29sb3I9IiMzMzMzMzMiPjxwYXRoIGQ9Ik0xMS4xIDNjLTMuNjUuMDA3LTUuNTYuMDk2LTYuNzgyIDEuMzE4QzMgNS42MzYgMyA3Ljc1NyAzIDEyczAgNi4zNjQgMS4zMTggNy42ODJTNy43NTggMjEgMTIgMjFzNi4zNjQgMCA3LjY4My0xLjMxOGMxLjIyLTEuMjIxIDEuMzEtMy4xMzMgMS4zMTctNi43ODIiLz48cGF0aCBkPSJtMjEgNi4wMjVsLTEtLjAwMmMtMy43MzctLjAxLTUuNjA1LS4wMTUtNi45MTguOTNjLS40MzcuMzEzLS44Mi42OTUtMS4xMzUgMS4xM0MxMSA5LjM5NiAxMSAxMS4yNjQgMTEgMTVtMTAtOC45NzVhLjcuNyAwIDAgMC0uMTc1LS40NzJDMjAuMDYgNC42NDcgMTguMDcxIDMgMTguMDcxIDNNMjEgNi4wMjVhLjcuNyAwIDAgMS0uMTc0LjQyMkMyMC4wNiA3LjM1MyAxOC4wNyA5IDE4LjA3IDkiLz48L2c+PC9zdmc+">

                    </div>
                </div>
            </div>
            <div class="wode">
                <div class="iconcontent" @click="navigateTo('Shequ')">
                    <div class="icon">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTcgMTh2LTFhNSA1IDAgMCAxIDUtNXYwYTUgNSAwIDAgMSA1IDV2MU0xIDE4di0xYTMgMyAwIDAgMSAzLTN2MG0xOSA0di0xYTMgMyAwIDAgMC0zLTN2MG0tOC0yYTMgMyAwIDEgMCAwLTZhMyAzIDAgMCAwIDAgNm0tOCAyYTIgMiAwIDEgMCAwLTRhMiAyIDAgMCAwIDAgNG0xNiAwYTIgMiAwIDEgMCAwLTRhMiAyIDAgMCAwIDAgNCIvPjwvc3ZnPg==">
                    </div>
                </div>
            </div>
          
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container{
    width: 80px;
    height: auto;
    bottom: 100px;
    right: 20px;
    position: absolute;
    border-radius: 15px 0px  0px 15px;
    z-index: 99;
    background-color: rgb(223, 223, 223);

    .content{
        

        .wode{
            margin-top: 10px;
            overflow: hidden;
            border-radius: 2%;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 70px;
            min-width: 70px;
            .iconcontent{
                width: 100%;
                height: 100%;
                justify-content: center;
                    align-items: center;
                    display: flex;
                .icon{
                    
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    display: flex;
                    img{
                        width: 70%;
                        
                    }
                }
            }

        }
        .wode:hover{
            background-color: rgb(248, 196, 196);
        }

    }
}

@media (max-width:calc(1600px - 1px)) {
    .container{

        display: none;
    }
}

</style>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
import { ref,defineEmits  } from 'vue';
import { useStore } from 'vuex'; // 导入 useStore 钩子
const store = useStore(); // 使用 useStore 钩子获取 store 实例
const emit = defineEmits(['update']);
function updateParent(value: boolean) {
    // 通过 emit 触发 'update' 事件，并传递 value 参数
    emit('update', value);
}

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

const navigateTo = (page : string) => {
    try{
        console.log(page)
            router.push({ name: page });
    }finally{

}
};</script>