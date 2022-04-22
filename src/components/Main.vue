<script setup>
import Footer from './Footer.vue';
</script>
<template>
<div class="layout-main">
    <div class="layout-content">
        <router-view></router-view>
    </div>
    <Footer></Footer>
</div>
</template>
<style scoped>
.layout-main{
    display:flex;
    flex-flow:column;
    height: 100%;
}
.layout-content{
    flex: 1;
}
</style>