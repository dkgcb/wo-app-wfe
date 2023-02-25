<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TheNavigation from './components/TheNavigation.vue'
// import TheActionMenu from './components/TheActionMenu.vue'
import TheList from './components/TheList.vue'
// import TheSearch from './components/TheSearch.vue'



export default {
  components: {
    TheList,
    TheNavigation
  }
}
</script>

<template>
  <the-navigation/>
  <div class="container"> 
    <div class="row">
       <!-- <the-action-menu/>  -->
       <!--<the-search/> -->
      <the-list />
    </div>
 
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

body {
  width: 1024px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 20px 20px 20px 20px;
  border: 1px solid black;

}
</style>
