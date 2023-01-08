<!-- ==========template=============-->
<template>
  <div class="dj_home">
    <div class="top">
      <rank-dj title="推荐节目"></rank-dj>
      <rank-dj title="节目排行榜"></rank-dj>
    </div>
    <temp-dj title="音乐推荐·电台"></temp-dj>
    <temp-dj title="生活·电台"></temp-dj>
    <temp-dj title="情感·电台"></temp-dj>
    <temp-dj title="创作·电台"></temp-dj>
    <temp-dj title="知识·电台"></temp-dj>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import RankDj from "../common/rank_dj.vue";
import TempDj from "../common/temp_dj.vue";
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.dj_home {
  .top {
    display: flex;
    column-gap: 50px;
  }
}
</style>
