<template>
  <footer class="page-footer">
    <div>
       <el-row >
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div></div></el-col>
        <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16"><div>Copyright © 2021 by Peintre </div></el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div></div></el-col>
      </el-row>
    </div>  
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.page-footer{
  margin-bottom: 0px;
  height: 152px;
}
.el-row {
  background-color: #FFFFFF;
}
.el-col{
  color: #000000;
  text-align: center;
  padding: 40px 0;
}



</style>