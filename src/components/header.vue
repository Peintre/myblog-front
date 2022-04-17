<template>
<nav class="navContainer">
  <el-affix>
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
            <el-menu-item index="1" @click="toPages(1)">首页</el-menu-item>
            <el-menu-item index="2" @click="toPages(2)">标签</el-menu-item>
            <el-menu-item index="3" @click="toPages(3)">关于</el-menu-item>
            <el-menu-item index="4" @click="toPages(4)">留言板</el-menu-item>
          </el-menu> 
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
        </el-col>
      </el-row>
  </div>
    </el-affix>   
</nav>
</template>

<script >
  export default {
    data() {
      return{

      }
    },
    methods:{
      toPages(num){
        switch (num){
          case 1:
            this.$router.push('/index')
            break
          case 2:
            this.$router.push('/tag')
            break
          case 3:
            this.$router.push('/about')
             break
          case 4:
            this.$router.push('/communication')
            break
          default:
            this.$router.push('/index')
        }
      },
    }
  
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
  line-height: 59px;
}
.navContainer{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>