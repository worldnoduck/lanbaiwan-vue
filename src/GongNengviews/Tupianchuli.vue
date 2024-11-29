<template>
    <div class="out_container" @click="navigateTo('Gongjuxiang')">
        <div class="title">
            
            {{ title }}
        </div>
        <div class="card">
            <div class="discript">
                <p>{{discript}}</p>

            </div>

        </div>
        <div class="img">
            <slot name="img">

            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { useRouter } from 'vue-router';

const title=ref('图片处理')
const discript=ref('处理图片的介绍')
const router=useRouter();
const navigateTo=(page : string)=>{
    try {
        router.push({name: page})
    } catch (error) {
        throw error;
    }
}
</script>



<style lang="scss" scoped>
@media (max-width:1980px) {
    .out_container{
        
        width: 30%;
        min-width: 400px;
        max-width: 400px;
        margin-top: 20px;
        height: 20%;
        max-height: 200px;
        min-height: 200px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-end; /* 垂直居中对齐 */
        transition: transform 0.5s ease, background-color 0.5s ease;
        

        .card{
           position: relative;
           background-color:rgb(240, 236, 243);
           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
            width: 90%;
            height: 90%;
            transition: transform 0.5s ease, background-color 0.5s ease;
            border-radius: 15px 15px 5px 5px; /* 分别给四个角设置不同的圆角 */

            .discript{
                width: 50%;
                height: auto;
                margin-left: 20px;
                margin-top: 30px;
                align-items: center;
                justify-content: center;
                position: relative;
                display: flex;
            }
        }    
        .title{
            position: absolute;
            z-index: 99;
            width: 150px;
            height: 40px;
            top: 5px;
            left: 40px;
            background-color: rgb(243, 238, 232);
            border-radius: 10px 10px 10px 10px; /* 分别给四个角设置不同的圆角 */
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
            align-items: center;
            justify-content: center;
            display: flex;
        }
        .img{
            position: absolute;
            width: 150px;
            height: 180px;
            top: 10px;
            left: 220px;
            background-color: rgb(223, 213, 199);
            border-radius: 0px 25px 0px 25px; /* 分别给四个角设置不同的圆角 */
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */

        }
    }

}
@media (max-width:768px) {
    .out_container{
        
        width: 30%;
        min-width: 350px;
        max-width: 350px;

        height: 20%;
        max-height: 180px;
        min-height: 180px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-end; /* 垂直居中对齐 */
        transition: transform 0.5s ease, background-color 0.5s ease;
        

        .card{
           position: relative;
           background-color:rgb(240, 236, 243);
            width: 90%;
            height: 90%;
            transition: transform 0.5s ease, background-color 0.5s ease;
            border-radius: 15px 15px 5px 5px; /* 分别给四个角设置不同的圆角 */
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */

            .discript{
                width: 50%;
                height: auto;
                margin-left: 20px;
                margin-top: 30px;
                
            }
        }    
        .title{
            position: absolute;
            z-index: 99;
            width: 150px;
            height: 40px;
            top: 5px;
            left: 40px;
            background-color: rgb(243, 238, 232);
            border-radius: 10px 10px 10px 10px; /* 分别给四个角设置不同的圆角 */
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */

        }
        .img{
            position: absolute;
            width: 120px;
            height: 170px;
            top: 5px;
            left: 205px;
            background-color: rgb(223, 213, 199);
            border-radius: 0px 25px 0px 25px; /* 分别给四个角设置不同的圆角 */
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */

        }
    }

}
    
</style>