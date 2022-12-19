<!-- ==========template=============-->
<template>
  <div class="contents">
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
.contents {
  width: 980px;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  background-color: #ffffff;
  .left {
    width: 729px;
  }
}
</style>
