<!-- ==========template=============-->
<template>
  <div class="cps_singer">
    <singer-nav :area="singerArea" :type="singerType"></singer-nav>
    <router-view></router-view>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import SingerNav from "./sub/singer_nav_cps.vue";
import { singerType, singerArea } from "@/data";
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.cps_singer {
  display: flex;
}
</style>
