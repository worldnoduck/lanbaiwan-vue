<template>
    <div class="Aside_container">
        <div class="Aside_content">
            <CebianlanIcon/>
            <KanbanGirl/>
        </div>
    </div>
</template>

<script lang="ts"setup>
import KanbanGirl from '../components/KanbanGirl.vue';
import CebianlanIcon from '../components/CebianlanIcon.vue';

</script>

<style lang="scss" scoped>
    .Aside_container{
        height: 100%;
        overflow-y: hidden; /* 隐藏竖向滚动条 */
        .Aside_content{
            height: 100%;

        }
    }
</style>