<script setup>
import Left from "../components/index/Left.vue";
import Right from "../components/index/Right.vue";

    
</script>
<template>
    <div class="index-body">
        <el-row :gutter="10">
            <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
                <Left></Left>
            </el-col>
            <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <Right></Right>
            </el-col>
         </el-row>    
    </div>
</template>

<style scoped>
.index-body{
    padding: 50PX 15%;
    min-height: 800px;
}

/* vue深度选择器 */
:deep(.el-card){
    margin-bottom: 10px;
    border-radius: 4px;
}
</style>
