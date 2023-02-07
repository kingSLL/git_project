<!-- ==========template=============-->
<template>
  <div class="user_home text_content">
    <sub-title
      :title="`我创建的歌单（${accountStore?.account.playlist?.length}）`"
    ></sub-title>
    <div class="box">
      <template
        v-for="(song, index) in accountStore?.account.playlist"
        :key="index"
      >
        <icon-cps
          img_type="playlist"
          :info="{
            id: song?.id,
            name: song?.name,
            picUrl: song?.coverImgUrl,
          }"
        ></icon-cps>
      </template>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import SubTitle from "multiplexing/sub_title.vue";
import IconCps from "multiplexing/icon_cps.vue";

import { userAccountStore } from "@/Storage";
const accountStore = userAccountStore();
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.user_home {
  padding: 40px;
  .box {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
