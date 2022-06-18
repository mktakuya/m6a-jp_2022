<script setup lang="ts">
import IconWithName from '@/components/IconWithName.vue';
import SocialLinks from '@/components/SocialLinks.vue';
import BioText from '@/components/BioText.vue';
</script>

<template>
  <el-row>
    <el-col>
      <IconWithName />
      <SocialLinks />
      <BioText />
    </el-col>
  </el-row>
</template>

<style scoped>
.el-row {
  margin: 0 auto;
  width: 100%;
  max-width: 620px;
}
</style>
