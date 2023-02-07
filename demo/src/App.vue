<template>
  <div class="App">
    <nav-bar></nav-bar>
    <home-view></home-view>
    <div v-show="lognStore.isLogn">
      <logn-cps></logn-cps>
    </div>
    <div class="palyBtn">
      <audio
        :src="songStore.currSongURL"
        ref="radioRef"
        v-if="songStore.currSongId"
      ></audio>
      <el-button type="primary" class="playBtn" @click="play">play</el-button>
      <el-button type="primary" class="pauseBtn" @click="pause"
        >pause</el-button
      >
    </div>
  </div>
</template>
<script setup>
import HomeView from "./views/discover_music/homeView.vue";
import NavBar from "./components/nav_bar.vue";

import LognCps from "@/components/logn_cps.vue";
import { userlognStore, userSongStore } from "@/Storage";
import { ref } from "vue";

const lognStore = userlognStore();
const songStore = userSongStore();

const radioRef = ref();
function play() {
  songStore.isPlay = true;
}
function pause() {
  songStore.isPlay = false;
}
</script>

<style lang="less" scoped>
.App {
  .playBtn {
    position: fixed;
    top: 50%;
  }
  .pauseBtn {
    position: fixed;
    top: 40%;
  }
}
</style>
