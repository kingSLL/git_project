<!-- ==========template=============-->
<template>
  <div class="dj_cps">
    <dj-nav></dj-nav>
    <router-view></router-view>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import DjNav from "./nav/cps_dj_nav.vue";
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.dj_cps {
  padding: 40px;
}
</style>
