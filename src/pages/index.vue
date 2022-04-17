<script setup>
import BodyMain from '../components/body.vue';
import Footer from '../components/footer.vue';

</script>
<template>
  <el-scrollbar max-height="100%">
    <BodyMain></BodyMain>
    <Footer></Footer>
  </el-scrollbar>
</template>

<style>
.el-scrollbar__view{
  height: 100% !important;
}
</style>
