<!-- ==========template=============-->
<template>
  <div class="major">
    <hot-picks></hot-picks>
    <new-disc></new-disc>
    <song-list></song-list>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import HotPicks from "./sub/hot_picks.vue";
import NewDisc from "./sub/new_disc.vue";
import SongList from "./sub/song_list.vue";
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.major {
  width: 100%;
  padding: 0 20px;
  border: 1px solid #dfdfdf;
  border-right: none;
  border-bottom: none;
  box-sizing: border-box;
}
</style>
