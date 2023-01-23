<!-- ==========template=============-->
<template>
  <div class="cps_rank">
    <left-content :name-list="namelist"></left-content>

    <right-content
      :rankName="namelist[rankStore.currRankIndex]"
      :list="playlist"
      :comment="comment?.comments"
    ></right-content>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import leftContent from "./content/left_content/left_content.vue";
import rightContent from "./content/right_content/right_content.vue";

import http from "@/service";
import { userRankStore } from "@/Storage";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const rankStore = userRankStore();
const route = useRoute();

const namelist = ref([]);
const playlist = ref([]);
const comment = ref({});

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
  const tempinfo = await rankStore.getRankInfo();
  playlist.value = tempinfo.value.playlist;
  const res = await http.get(
    `/comment/event?threadId=${playlist.value.commentThreadId}`
  );
  comment.value = res.data;
  console.log(comment.value);
}

rankStore.getRankNameList().then((res) => {
  namelist.value = res;
  rankStore.currInfoId = namelist.value[rankStore.currRankIndex].id;
  getinfo(rankStore.currInfoId);
});
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.cps_rank {
  display: flex;
}
</style>
