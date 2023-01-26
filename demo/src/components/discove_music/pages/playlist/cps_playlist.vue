<!-- ==========template=============-->
<template>
  <div class="cps_playlist">
    <sub-title :title="title">
      <template #mid>
        <button @click="isClick" class="btn">
          <span>选择分类</span>
          <el-icon>
            <ArrowDown />
          </el-icon>
        </button>
        <tile-sub_cps
          :list="categories_list"
          :categories="categories"
          :active="active"
        ></tile-sub_cps>
      </template>
    </sub-title>
    <div class="grid">
      <template v-for="item in playlist" :key="item.id">
        <div class="box">
          <icon-cps
            :info="{
              id: item?.id,
              name: item?.name,
              picUrl: item.coverImgUrl,
              author: item.creator.nickname,
            }"
            :size="{ w: '140px', h: '140px' }"
            img_type="playlist"
          >
            <template #avatarDetail>
              <img
                :src="item?.creator?.avatarDetail?.identityIconUrl"
                style="width: 13px; height: 13px; margin-left: 5px"
              />
            </template>
          </icon-cps>
        </div>
      </template>
    </div>
    <pagination-cps
      :total_number="playlist_total"
      :each_page="playlist_each"
      @getPage="getPage"
    ></pagination-cps>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import SubTitle from "multiplexing/sub_title.vue";
import IconCps from "multiplexing/icon_cps.vue";
import PaginationCps from "multiplexing/pagination_cps.vue";
import TileSub_cps from "./title_subCps.vue";

import { ref } from "vue";
import { ArrowDown } from "@element-plus/icons-vue";
import http from "@/service";
import { filter, toArray } from "lodash";

const title = ref("全部");

const categories = ref([]);
const categories_list = ref([]);

const playlist = ref([]);
const playlist_total = ref(0);
const playlist_each = ref(35);

const active = ref(false);
function isClick() {
  active.value = !active.value;
}

http.get(`/playlist/catlist`).then((res) => {
  let original_list = [];
  categories.value = res.data.categories;
  original_list = res.data.sub;
  categories.value = toArray(categories.value);
  for (let i = 0; i < categories.value.length; i++) {
    const temp_list = filter(original_list, (list) => {
      return Object.keys(categories.value)[i] == list.category;
    });
    categories_list.value.push(temp_list);
  }
});

function getPage(currPage) {
  http
    .get(`/top/playlist?limit=${playlist_each.value}&offset=${currPage}`)
    .then((res) => {
      playlist_total.value = res.data.total;
      playlist.value = res.data.playlists;
    });
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.cps_playlist {
  padding: 40px;
  .btn {
    margin-left: 10px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 50px;
    row-gap: 30px;
  }
  .pagination {
    margin: 40px;
  }
}
</style>
