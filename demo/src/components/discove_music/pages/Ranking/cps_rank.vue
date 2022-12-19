<!-- ==========template=============-->
<template>
  <div class="content">
    <left-content :name-list="namelist"></left-content>

    <right-content
      :rankName="namelist[rankStore.currRankIndex]"
      :info="info"
    ></right-content>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import leftContent from "./content/left_content/left_content.vue";
import rightContent from "./content/right_content/right_content.vue";

import { userRankStore } from "@/Storage";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const rankStore = userRankStore();

const namelist = ref([]);
const info = ref({});
const route = useRoute();

watch(
  () => route.query.id,
  (curr) => {
    getinfo(curr);
  }
);

async function getinfo(u_id) {
  if (!u_id) {
    u_id = namelist.value[rankStore.currRankIndex].id;
  }
  rankStore.currInfoId = u_id;
  const tempinfo = await rankStore.getRankInfo;
  info.value = tempinfo.value.playlist;
}

rankStore.getRankNameList.then((res) => {
  namelist.value = res;
  rankStore.currInfoId = namelist.value[rankStore.currRankIndex].id;
  getinfo(rankStore.currInfoId);
});
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.content {
  width: 980px;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
}
</style>
