<template>
    <input placeholder="search..." class="input" name="text" type="text"></input>

</template>

<style lang="scss" scoped>
    /* From Uiverse.io by laminelawal */ 
.input {
  padding: 10px;
  width: 120px;
  border: none;
  outline: none;
  border-radius: 8px;
  box-shadow: 0 1px  gray;
  font-size: 18px;
  transition: width 0.3s;
  font-family: 'Comic Sans MS', cursive, sans-serif;}

.input:focus {
  outline: 1px solid rgb(211, 211, 236);
  box-shadow: none;
  width: 230px;
}

.input::placeholder {
  color: rgb(122, 122, 182);
}
</style>