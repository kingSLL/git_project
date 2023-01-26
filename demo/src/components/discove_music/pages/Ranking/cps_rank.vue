<!-- ==========template=============-->
<template>
  <div class="cps_rank">
    <left-content :name-list="listName"></left-content>

    <right-content :rankName="listName" :list="playlist"></right-content>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import leftContent from "./content/left_content/left_content.vue";
import rightContent from "./content/right_content/right_content.vue";

import http from "@/service";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const playlist = ref({});
const listName = ref([]);

watch(
  () => route.query.id,
  (curr) => {
    http.get(`/playlist/detail?id=${curr}`).then((res) => {
      playlist.value = res.data.playlist;
    });
  }
);
if (route.query?.id) {
  http.get(`/playlist/detail?id=${route.query?.id}`).then((res) => {
    playlist.value = res.data.playlist;
  });
} else {
  http.get(`/playlist/detail?id=19723756`).then((res) => {
    playlist.value = res.data.playlist;
    console.log(playlist.value);
  });
}
http.get("/toplist").then((res) => {
  listName.value = res.data.list;
});
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.cps_rank {
  display: flex;
}
</style>
