<script setup lang="ts">
import { SocialLink } from '@/models/SocialLink';

const socialLinks: SocialLink[] = [
  {
    name: "Blog",
    url: "https://blog.m6a.jp"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/mktakuya"
  },
  {
    name: "Facebook",
    url: "https://facebook.com/mktakuya"
  },
  {
    name: "GitHub",
    url: "https://github.com/mktakuya"
  },
]

</script>

<template>
  <div class="links">
    <el-row>
      <el-col
        v-for="socialLink in socialLinks"
        :key="socialLink.name"
        :span="24 / socialLinks.length"
      >
        <el-link
          type="primary"
          :href="socialLink.url"
          target="_blank"
          rel="noopener"
        >
          {{ socialLink.name }}
        </el-link>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.links {
  text-align: center;
  margin: 24px auto;
  font-size: medium;
}
</style>
