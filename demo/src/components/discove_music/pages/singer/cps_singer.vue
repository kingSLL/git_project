<!-- ==========template=============-->
<template>
  <div class="cps_singer">
    <singer-l></singer-l>
    <singer-r></singer-r>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import SingerL from "./left/singer_L_cps.vue";
import SingerR from "./right/singer_R_cps.vue";
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.cps_singer {
  display: flex;
}
</style>
