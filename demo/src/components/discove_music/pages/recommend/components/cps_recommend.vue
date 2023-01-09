<!-- ==========template=============-->
<template>
  <div class="cps_recommand">
    <major-content class="left"></major-content>
    <minor-content class="right"></minor-content>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import MajorContent from "./content/left_content/major_content.vue";
import MinorContent from "./content/right_content/minor_content.vue";
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.cps_recommand {
  display: flex;
  .left {
    width: 730px;
  }
}
</style>
