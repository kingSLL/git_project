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
  box-sizing: border-box;
  padding: 0 20px;
}
</style>
