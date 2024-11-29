<template>
      <wordcloud
          :data="[['romance', 19], ['horror', 3], ['fantasy', 7], ['adventure', 3]]"
        :color="getColor"
        nameKey="name"
        valueKey="value"
        :showTooltip="false"
        font-family="Roboto"

      ></wordcloud>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import wordcloud from 'vuewordcloud';
  
  const data = ref([
    { name: 'romance', value: 19 },
    { name: 'horror', value: 3 },
    { name: 'fantasy', value: 7 },
    { name: 'adventure', value: 3 },
  ]);
  
  const myColors = ref(['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd']);
  
  // 定义 getColor 函数并为其参数提供类型注解
  const getColor = (item: { value: number }) => {
    const weight = item.value;
    return weight > 10 ? 'DeepPink' :
           weight > 5 ? 'RoyalBlue' :
           'Indigo';
  };
  </script>