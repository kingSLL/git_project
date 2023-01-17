<!-- ==========template=============-->
<template>
  <div class="cps_album">
    <div class="albums">
      <sub-title title="热门新碟"> </sub-title>
      <div class="box">
        <template v-for="album_new in albums_new" :key="album_new?.id">
          <icon-cps
            img_type="album"
            :size="{ w: '130px', h: '130px' }"
            :info="{
              id: album_new?.id,
              picUrl: album_new?.picUrl,
              name: album_new?.name,
              author: album_new?.artists[0].name,
            }"
            @toward="getId"
          ></icon-cps>
        </template>
      </div>
    </div>
    <div class="albums">
      <sub-title title="全部新碟">
        <template #mid>
          <categories-cps
            :list="categories_list"
            @currIndex="getIndex"
          ></categories-cps>
        </template>
      </sub-title>
      <div class="box">
        <template v-for="album in albums" :key="album?.id">
          <icon-cps
            img_type="album"
            :info="{
              id: album?.id,
              picUrl: album?.picUrl,
              name: album?.name,
              author: album?.artists[0].name,
            }"
            @toward="getId"
          ></icon-cps>
        </template>
      </div>
    </div>
    <pagination-cps></pagination-cps>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import SubTitle from "multiplexing/sub_title.vue";
import IconCps from "multiplexing/icon_cps.vue";
import CategoriesCps from "multiplexing/categories_cps.vue";
import PaginationCps from "multiplexing/pagination_cps.vue";

import { userAlbumStore } from "@/Storage";
import { ref, watch } from "vue";
import { objAddKey_someName } from "@/hooks";
import { useRouter } from "vue-router";
const albumStore = userAlbumStore();
const router = useRouter();

const albums_new = ref([]);
const albums = ref([]);
const categories_list = ref([]);
const currIndex = ref(0);

const keyName = Object.keys(albumStore.areaName);
const values = Object.values(albumStore.areaName);
categories_list.value = objAddKey_someName(values, "name");

getAlbumNew();
getAlbum();
function getIndex(index) {
  currIndex.value = index;
}
function getId(id) {
  router.push({ path: "/album", query: { id: id } });
}
watch(currIndex, () => getAlbum());
async function getAlbumNew() {
  albums_new.value = await albumStore.getAlbumNew(10);
}
async function getAlbum(area) {
  if (!area) area = keyName[currIndex.value];
  albums.value = await albumStore.getAlbum(area);
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.cps_album {
  padding: 40px;
  .albums {
    padding-bottom: 30px;
    .box {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      column-gap: 33px;
      row-gap: 30px;
    }
  }
}
</style>
