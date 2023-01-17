<!-- ==========template=============-->
<template>
  <div class="new_disc">
    <sub-title :title="title" :hasLogo="true"></sub-title>
    <div class="container">
      <div class="pre">
        <i class="iconfont">&#xe659;</i>
      </div>
      <div class="mid">
        <template v-for="item in albums" :key="item?.id">
          <icon-cps
            :info="{
              name: item?.name,
              author: item?.artist?.name,
              picUrl: item?.picUrl,
            }"
            img_type="small_album"
          ></icon-cps>
        </template>
      </div>
      <div class="next">
        <i class="iconfont">&#xe62d;</i>
      </div>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import { ref } from "vue";
import SubTitle from "multiplexing/sub_title.vue";
import IconCps from "multiplexing/icon_cps.vue";
import { userAlbumStore } from "@/Storage";

const albums = ref([]);
const albumStore = userAlbumStore();
getAlbum();
async function getAlbum() {
  albums.value = await albumStore.getAlbumNew(10);
}
const title = "新碟上架";
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.new_disc {
  margin-bottom: 40px;

  .container {
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    display: flex;
    align-items: center;
    padding: 10px;
    .pre {
      padding-right: 5px;
    }
    .pre,
    .next {
      font-size: 50px;
      padding-bottom: 60px;
    }
    .mid {
      flex-grow: 1;
      display: flex;
      overflow: hidden;
      column-gap: 10px;
      overflow-x: auto;
    }
  }
}
</style>
