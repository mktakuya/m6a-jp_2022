<script setup lang="ts">
import TopPage from '@/pages/TopPage.vue';
</script>

<template>
  <el-container>
    <el-main class="main">
      <TopPage />
    </el-main>
  </el-container>
</template>

<style scoped>
.el-header,
.el-footer,
.el-main,
.el-aside {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
