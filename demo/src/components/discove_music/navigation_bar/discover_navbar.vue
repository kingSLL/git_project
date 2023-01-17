<!-- ==========template=============-->
<template>
  <div class="discover_nav_bar">
    <ul class="container placeholder">
      <template v-for="(item, index) in list" :key="item + index">
        <li class="clickableWithoutLine">
          <a
            @click="change(item, index)"
            :class="{ active: route.path == item.path }"
          >
            {{ item.name }}</a
          >
        </li>
      </template>
    </ul>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const list = [
  { name: "推荐", path: "/discover_music/recommend" },
  { name: "排行榜", path: "/discover_music/rank" },
  { name: "歌单", path: "/discover_music/playlist" },
  { name: "主播电台", path: "/discover_music/dj" },
  { name: "歌手", path: "/discover_music/artist" },
  { name: "新碟上架", path: "/discover_music/album" },
];

const router = useRouter();
const route = useRoute();
const currindex = ref(0);

function change(item, index) {
  router.push(item.path);
  currindex.value = index;
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.discover_nav_bar {
  background-color: #c20b0d;
  height: 34px;

  .container {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    li {
      height: 34px;
      display: flex;
      align-items: center;
      padding: 0 17px;

      a {
        display: block;
        box-sizing: border-box;
        border-radius: 100px;
        padding: 2px 13px;
        color: #fff;
      }
      a:hover {
        background-color: #9b0a08;
      }

      .active {
        background-color: #9b0a08;
      }
    }
  }

  .placeholder::after {
    content: "";
    width: 160px;
    display: block;
  }
}
</style>
