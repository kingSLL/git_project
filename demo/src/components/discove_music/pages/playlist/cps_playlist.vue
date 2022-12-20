<!-- ==========template=============-->
<template>
  <div class="cps_playlist">
    <sub-title :title="title">
      <template #mid>
        <button></button>
      </template>
    </sub-title>
    <div class="grid">
      <template v-for="(item, index) in 100" :key="index">
        <div>{{ item }}-{{ current_page }}</div>
      </template>
    </div>
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
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import SubTitle from "multiplexing/sub_title.vue";
import { ref, watch } from "vue";

const title = "全部";
const current_page = ref(0);
const total_page = ref(10);
watch(current_page, (curr) => {
  console.log(curr);
});
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.cps_playlist {
  padding: 40px;
  .grid {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
  }
  .pagination {
    margin: 40px;
  }
}
</style>
