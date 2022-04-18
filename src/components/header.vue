<template>
<div class="layout-header">
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
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">标签</el-menu-item>
          <el-menu-item index="3">分类</el-menu-item>
          <el-menu-item index="4">归档</el-menu-item>
          <el-menu-item index="5">关于</el-menu-item>
          <el-menu-item index="6">留言板</el-menu-item>
        </el-menu> 
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
      </el-col>
    </el-row>
</div>
</template>

<style scoped>
.layout-header{
  background-color: #FFFFFF;
}
.peintre-logo{
  text-align:right;
  line-height: 59px;
  color: #1C1C1C;
  font-size: 32px;
}</style>