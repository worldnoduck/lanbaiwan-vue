<template>
    <div class="gongjuxiang_container">
        <Tupianchuli></Tupianchuli>
        <Tupianchuli></Tupianchuli>
        <Tupianchuli></Tupianchuli>
        <Tupianchuli></Tupianchuli>
        <Tupianchuli></Tupianchuli>
        <Tupianchuli></Tupianchuli>
        <Tupianchuli></Tupianchuli>
        <Tupianchuli></Tupianchuli>
        <Tupianchuli></Tupianchuli>
        <Tupianchuli></Tupianchuli>
        <Tupianchuli></Tupianchuli>
        <Tupianchuli></Tupianchuli>
    </div>
</template>

<script setup lang="ts">
import Tupianchuli from '../GongNengviews/Tupianchuli.vue'
</script>

<style lang="css" scoped>
.gongjuxiang_container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap; /* 允许换行 */
    justify-content: space-between; /* 平均分布 */
    align-items: center; /* 垂直居中 */
}
</style>
