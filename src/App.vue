<template>
  <div>
    <TheNavigation />
    <div class="row">
      <TheList />
    </div>
 
    <router-view></router-view>
  </div>
</template>

<script setup>
/*
  Imports
  */
import TheNavigation from './components/TheNavigation.vue'
import TheList from './components/TheList.vue'

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

/* body {
  width: 50%;
  margin: 0 auto;
  background-color: #a06969;
  padding: 20px 20px 20px 20px;
  border: 1px solid rgb(170, 33, 33);

} */
</style>
