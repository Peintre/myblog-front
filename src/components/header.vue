<template>
<nav class="navContainer">
  <div class="head-main">
    <el-row>
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
        <div class="peintre-logo">
          <span>Blog</span>
        </div>
      </el-col>
      <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
        <el-menu
        mode="horizontal"
        >
          <el-menu-item index="1"><el-icon><house /></el-icon>首页</el-menu-item>
          <el-menu-item index="2"><el-icon><price-tag /></el-icon>标签</el-menu-item>
          <el-menu-item index="3"><el-icon><document-copy /></el-icon>分类</el-menu-item>
          <el-menu-item index="4"><el-icon><suitcase /></el-icon>归档</el-menu-item>
          <el-menu-item index="5"><el-icon><user /></el-icon>关于</el-menu-item>
          <el-menu-item index="6"><el-icon><chat-dot-round /></el-icon>留言板</el-menu-item>
        </el-menu> 
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
      </el-col>
    </el-row>
  </div>
       
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.head-main{
  background-color: #FFFFFF;
}
.peintre-logo{
  text-align:right;
  font-size: 35px;
  color: #1C1C1C;
}




</style>