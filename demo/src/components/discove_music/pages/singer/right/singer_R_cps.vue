<!-- ==========template=============-->
<template>
  <div class="singer_R">
    <icon-singer title="入驻歌手"></icon-singer>
    <temp-singer title="热门歌手" :list="artists"> </temp-singer>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import TempSinger from "../common/temp_singer_cps.vue";
import IconSinger from "../common/icon_singer.vue";
import http from "@/service";
import { ref } from "vue";
const artists = ref([]);
http.get("top/artists?limit=100").then((res) => {
  artists.value = res.data.artists;
});
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.singer_R {
  flex-grow: 1;
  padding: 40px;
}
</style>
