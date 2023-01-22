<!-- ==========template=============-->
<template>
  <div class="cps_playlist">
    <sub-title :title="title">
      <template #mid>
        <button @click="isClick">
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
            img_type="icon_140"
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
    <pagination-cps></pagination-cps>
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
import { filter, toArray } from "lodash";
import http from "@/service";

const title = ref("全部");

const original_list = ref([]);
const categories = ref([]);
const categories_list = ref([]);

http.get("playlist/catlist").then((res) => {
  const temp_categories = res.data.categories;
  title.value = res.data.all.name;
  original_list.value = res.data.sub;
  categories.value = toArray(temp_categories);
  for (let i = 0; i < Object.keys(temp_categories).length; i++) {
    const temp_list = filter(original_list.value, (list) => {
      return Object.keys(temp_categories)[i] == list.category;
    });
    categories_list.value.push(temp_list);
  }
});

const playlist = ref([]);
http.get("top/playlist").then((res) => {
  playlist.value = res.data.playlists;
});
const active = ref(false);
function isClick() {
  active.value = !active.value;
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.cps_playlist {
  padding: 40px;
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
