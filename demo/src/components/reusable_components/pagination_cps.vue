<!-- ==========template=============-->
<template>
  <div class="pagination">
    <el-pagination
      hide-on-single-page
      layout="prev, pager, next"
      :page-size="each_page"
      :background="true"
      :total="total_number"
      v-model:current-page="current_page"
    />
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  total_number: Number,
  each_page: Number,
});
const emits = defineEmits(["getPage"]);
const current_page = ref(1);

watch(
  current_page,
  (curr) => {
    emits("getPage", props.each_page * (curr - 1));
  },
  { immediate: true }
);
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.pagination {
  margin: 20px 0;
}
</style>
