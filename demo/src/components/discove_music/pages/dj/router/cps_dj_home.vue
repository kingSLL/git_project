<!-- ==========template=============-->
<template>
  <div class="dj_home">
    <div class="top">
      <rank-dj title="推荐节目" :list="programs"></rank-dj>
      <rank-dj title="节目排行榜" :list="toplist" :hasRank="true"></rank-dj>
    </div>
    <template v-for="categorie in categories" :key="categorie.id">
      <temp-dj :title="categorie.name" :type="categorie.id"></temp-dj>
    </template>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import RankDj from "../common/rank_dj.vue";
import TempDj from "../common/temp_dj.vue";
import http from "@/service";
import { userDJStore } from "@/Storage";
import { ref } from "vue";
import { filter, includes, sortBy } from "lodash";
const programs = ref([]);
const toplist = ref([]);
const categories = ref([]);
const titles = ["音乐推荐", "生活", "情感", "创作", "知识"];
const djStore = userDJStore();
djStore.getCatelist().then((res) => {
  categories.value = res;
  categories.value = filter(categories.value, (item) => {
    return includes(titles, item.name);
  });
  categories.value = sortBy(categories.value, (item) => item.id);
});

getDJ_recommend();
getDJ_rank();
async function getDJ_recommend() {
  const request = await http.get("program/recommend");
  programs.value = request.data.programs;
}
async function getDJ_rank() {
  const request = await http.get("dj/program/toplist?limit=10");
  toplist.value = request.data.toplist;
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.dj_home {
  .top {
    display: flex;
    column-gap: 50px;
  }
}
</style>
