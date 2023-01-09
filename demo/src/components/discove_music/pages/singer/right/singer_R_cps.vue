<!-- ==========template=============-->
<template>
  <div class="singer_R">
    <icon-singer title="入驻歌手"></icon-singer>
    <temp-singer title="热门歌手"> </temp-singer>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import TempSinger from "../common/temp_singer_cps.vue";
import IconSinger from "../common/icon_singer.vue";
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.singer_R {
  flex-grow: 1;
  padding: 40px;
}
</style>
