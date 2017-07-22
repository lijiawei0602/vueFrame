<template>
  <div id="app">
    <HeaderDiv></HeaderDiv>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderDiv from './components/header.vue';

export default {
  name: 'app',
  components : {
    HeaderDiv
  }
}
</script>

<style>
#app {
  
}
</style>
