<script setup>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
</script>

<template>
 <el-container class="layout-body">
      <el-header><Header></Header></el-header>
      <el-main><Main></Main></el-main>
 </el-container>    
</template>

<style scoped>
.layout-body{
height: 100%;
}
.el-header,.el-main{
     padding: 0;
}
</style>




