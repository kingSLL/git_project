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
      <slot name="right">
        <div class="more">
          <a class="clickable">更多</a>
          <i class="iconfont">&#xeb08;</i>
        </div>
      </slot>
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
  // padding: 0 10px 0 34px;

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
      color: #666666;
      i {
        color: #c10c0d;
      }
    }
  }
}
</style>
