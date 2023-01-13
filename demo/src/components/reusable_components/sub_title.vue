<!-- ==========template=============-->
<template>
  <div class="subtitle">
    <div class="content">
      <slot name="logo">
        <div class="logo" v-if="hasLogo"></div>
      </slot>
      <slot name="title">
        <h2>{{ title }}</h2>
      </slot>
      <div class="categories">
        <slot name="mid"> </slot>
      </div>
      <div class="more">
        <slot name="right"> </slot>
      </div>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
defineProps({
  title: String,
  hasLogo: {
    type: Boolean,
    default: () => false,
  },
});
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.subtitle {
  padding-bottom: 15px;
  margin-bottom: 22px;
  border-bottom: 2px solid #c10c0d;
  .content {
    height: 100%;
    display: flex;
    position: relative;
    align-items: center;
    .logo {
      width: 33px;
      height: 33px;
      background-image: url("https://s2.music.126.net/style/web2/img/index/index.png?62f4fe77d0529d3adbdbca4be8d29118");
      background-repeat: no-repeat;
      background-position-x: -220px;
      background-position-y: -154px;
    }
    h2 {
      font-size: 20px;
      color: #333333;
    }
    .categories {
      flex-grow: 1;
    }
    .more {
    }
  }
}
</style>
