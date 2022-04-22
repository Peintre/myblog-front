<!-- 前台父页面布局 -->
<template>
<div class="layout">
     <el-container class="layout-body">
          <el-header><Header></Header></el-header>
          <el-main><Main></Main></el-main>
     </el-container> 
</div>
</template>
<style scoped>
.layout-body{
height: 100%;
}
.el-header,.el-main{
     padding: 0;
}
</style>
