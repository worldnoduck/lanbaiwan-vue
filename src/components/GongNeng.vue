<template>
    
    <div class="card">
            <slot name="img"></slot>

    <div class="card__content">
        <slot name="card__title"></slot>

        <slot name="card__description"></slot>
    </div>
    </div>

</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
/* From Uiverse.io by gharsh11032000 */ 
.card {
  position: relative;
  width: 400px;
  height: 200px;
  margin: 15px;
  background-color: #d45454;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #1f1e1e80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    /* Scale factor */
    --scale: 1;
  transform: scale(var(--scale));
}

.card svg {
    width: 90%;
    height: 90%;
  fill: #333;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.5); //不要加磨砂效果,有bug
  
   transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
  transform: rotateX(0deg);
}



.card:hover svg {
  scale: 0;
}

@media (max-width: 768px) {
    .card {
  position: relative;
  width: 300px;
  height: 150px;
  margin: 15px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #1f1e1e80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    /* Scale factor */
    --scale: 1;
  transform: scale(var(--scale));
}

.card svg {
  fill: #333;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
  transform: rotateX(0deg);
}



.card:hover svg {
  scale: 0;
}

 
    }
</style>