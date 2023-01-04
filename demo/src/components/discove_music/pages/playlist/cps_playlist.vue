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
            :name="item?.name"
            :picUrl="item.coverImgUrl"
            :author="item.creator.nickname"
            height="140px"
          ></icon-cps>
        </div>
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
import IconCps from "multiplexing/icon_cps.vue";
import TileSub_cps from "./title_subCps.vue";
import { ref } from "vue";
import { ArrowDown } from "@element-plus/icons-vue";
import { filter, toArray } from "lodash";
import http from "@/service";

const title = ref("全部");
const current_page = ref(0);
const total_page = ref(10);

const original_list = ref([]);
const categories = ref([]);
const categories_list = ref([]);
// watch(current_page, (curr) => {});

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
    grid-template-columns: 20% 20% 20% 20% 20%;
  }
  .pagination {
    margin: 40px;
  }
}
</style>
