<!-- ==========template=============-->
<template>
  <div class="dj_other">
    <div class="new_dj">
      <sub-title title="优秀新电台"></sub-title>
    </div>
    <div class="rank_dj">
      <temp-dj title="电台排行榜"></temp-dj>
    </div>
    <template v-if="true">
      <pagination-cps></pagination-cps>
    </template>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import TempDj from "../common/temp_dj.vue";
import SubTitle from "multiplexing/sub_title.vue";
import PaginationCps from "multiplexing/pagination_cps.vue";
</script>
<!-- ============style============== -->
<style scoped></style>
