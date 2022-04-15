<template>
  <div class="body">
      <el-row :gutter="10">
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
            <BodyLeft/>
        </el-col>
        <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
            <BodyCenter/>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
            <BodyRight/>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import BodyLeft from "./bodyLeft.vue"
import BodyCenter from "./bodyCenter.vue"
import BodyRight from "./bodyRight.vue"
export default {
    components: { BodyLeft, BodyCenter, BodyRight }
}
</script>

<style scoped>
.body{
    padding: 20px 10%;
    min-height: 800px;
}

/* vue深度选择器 */
:deep(.el-card){
    margin-bottom: 10px;
    border-radius: 4px;
}
</style>