<!-- ==========template=============-->
<template>
  <template v-if="bigTitle">
    <div class="subtitle">
      <div class="content">
        <div class="logo" v-if="hasLogo"></div>

        <h2>{{ title }}</h2>
        <div class="categories">
          <slot name="mid"> </slot>
        </div>
        <div class="more">
          <slot name="right"> </slot>
          <p v-if="hasMore">更多 <i class="iconfont"> &#xe62d;</i></p>
        </div>
      </div>
    </div></template
  >
  <template v-else>
    <h4>
      {{ title }}
      <template v-if="totalCount"> （{{ totalCount }}） </template>
    </h4>
  </template>
</template>
<!-- ===========script============== -->
<script setup>
defineProps({
  title: String,
  hasLogo: {
    type: Boolean,
    default: () => false,
  },
  hasMore: {
    type: Boolean,
    default: () => false,
  },
  bigTitle: {
    type: Boolean,
    default: () => true,
  },
  totalCount: Number,
});
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.subtitle {
  padding-bottom: 15px;
  margin-bottom: 22px;
  border-bottom: 2px solid #c10c0d;
  .content {
    display: flex;
    position: relative;
    align-items: flex-end;
    .logo {
      width: 33px;
      height: 33px;
      background-image: url("https://s2.music.126.net/style/web2/img/index/index.png?62f4fe77d0529d3adbdbca4be8d29118");
      background-repeat: no-repeat;
      background-position-x: -220px;
      background-position-y: -154px;
    }
    h2 {
      font-size: 24px;
      color: #333333;
    }
    .categories {
      flex-grow: 1;
    }
    .more {
    }
  }
}
h4 {
  height: 20px;
  border-bottom: 1px solid #cfcfcf;
  margin-bottom: 20px;
}
</style>
