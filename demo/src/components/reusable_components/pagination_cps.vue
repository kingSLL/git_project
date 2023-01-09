<!-- ==========template=============-->
<template>
  <div class="pagination">
    <el-pagination
      hide-on-single-page
      layout="prev, pager, next"
      :page-size="1"
      :pager-count="9"
      :background="true"
      :total="total_page"
      v-model:current-page="current_page"
    />
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import { ref } from "vue";

const current_page = ref(0);
const total_page = ref(10);

// watch(current_page, (curr) => {});
</script>
<!-- ============style============== -->
<style scoped></style>
