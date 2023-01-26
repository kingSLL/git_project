<!-- ==========template=============-->
<template>
  <div class="album_all">
    <div class="box">
      <template v-for="hotAlbum in hotAlbums" :key="hotAlbum?.id">
        <icon-cps
          img_type="normal_album"
          :isPalyHover="true"
          :info="{
            name: hotAlbum?.name,
            picUrl: hotAlbum?.picUrl,
          }"
        >
          <div class="time">{{ publishTime(hotAlbum?.publishTime) }}</div>
        </icon-cps>
      </template>
    </div>
    <pagination-cps
      :total_number="hotAlbum_length"
      :each_page="each_page"
      @getPage="getPage"
    ></pagination-cps>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import IconCps from "multiplexing/icon_cps.vue";
import PaginationCps from "multiplexing/pagination_cps.vue";

import http from "@/service";

import { useRoute } from "vue-router";
import { ref } from "vue";
import * as dayjs from "dayjs";

const route = useRoute();

const hotAlbums = ref([]);
const hotAlbum_length = ref(0);
const each_page = ref(12);

function getPage(currPage) {
  hotAlbums.value = [];
  http
    .get(
      `/artist/album?id=${route.query.id}&limit=${each_page.value}&offset=${currPage}`
    )
    .then((res) => {
      hotAlbum_length.value = res.data.artist.albumSize;
      for (let i = 0; i < res.data.hotAlbums.length; i++) {
        hotAlbums.value.push(res.data.hotAlbums[i]);
      }
    });
}
function publishTime(time) {
  return dayjs(time).format("YYYY.MM.DD");
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.album_all {
  .box {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 30px;
    column-gap: 18px;
  }
}
</style>
