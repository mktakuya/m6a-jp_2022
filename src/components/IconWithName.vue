<template>
  <el-image
    class="icon"
    src="/icon.png"
  />

  <h1 class="name">
    Takuya Mukohira<br>
    <small>mktakuya</small>
  </h1>
</template>

<style scoped>
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  max-width: 200px;
  margin: 0 auto;
}

.name {
  text-align: center;
  line-height: 1;
}

.name > small {
  color: gray;
}
</style>
