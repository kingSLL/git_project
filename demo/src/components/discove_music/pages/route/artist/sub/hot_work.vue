<!-- ==========template=============-->
<template>
  <div class="hot_work">
    <div class="btn_group">
      <play-btn></play-btn>
      <simple-btn type="收藏" class="btn"></simple-btn>
      <div class="muen">
        <a>
          <p>热门单曲</p>
        </a>
      </div>
    </div>
    <song-list
      :hasTitle="false"
      :list="{ tracks: songs }"
      class="song_list"
    ></song-list>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import PlayBtn from "multiplexing/btn/play_btn.vue";
import SimpleBtn from "multiplexing/btn/simple_btn.vue";
import SongList from "multiplexing/song_list.vue";

import { useRoute } from "vue-router";

import http from "@/service";
import { ref } from "vue";

const route = useRoute();

const songs = ref([]);

http.get(`/artist/top/song?id=${route.query?.id}`).then((res) => {
  songs.value = res.data.songs;
});
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.hot_work {
  .btn_group {
    display: flex;
    column-gap: 10px;
    .btn {
      margin-right: auto;
    }
    .muen {
      a {
        display: flex;
        height: calc(100% - 2px);
        border: 1px solid #c4c4c4;
        border-radius: 4px;
        padding: 0 10px;
        p {
          align-self: center;
          padding-right: 5px;
        }
      }
    }
  }
  .song_list {
    margin-top: 30px;
    border: none;
  }
}
</style>
