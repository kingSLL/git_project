<!-- ==========template=============-->
<template>
  <div class="new_disc">
    <sub-title :title="title"></sub-title>
    <div class="container">
      <div class="pre">
        <i class="iconfont">&#xe659;</i>
      </div>
      <div class="mid">
        <template v-for="item in albums" :key="item.id">
          <div class="album">
            <div class="img_div mask">
              <img :src="item?.picUrl" alt="" />
              <div class="effect mask"></div>
            </div>

            <div class="details">
              <p class="song_title clickable">{{ item.name }}</p>
              <p class="author clickable">{{ item.artist.name }}</p>
            </div>
          </div>
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
import http from "@/service";

const albums = ref([]);
http
  .get("album/newest")
  .then((res) => {
    albums.value = res.data.albums;
    let total = 10;
    if (albums.value.length > total) {
      albums.value.splice(total, albums.value.length - total);
    }
  })
  .catch((error) => {
    console.log(error);
  });
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
    margin-top: 10px;
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
      column-gap: 27px;
      overflow-x: auto;
      .album {
        .img_div {
          position: relative;
          img {
            height: 100px;
          }
          .effect {
            top: 0;
            position: absolute;
            width: 120px;
            height: 100px;
            background-position-x: 0px;
            background-position-y: -570px;
          }
        }

        .details {
          width: 100px;
          color: #666;
          margin-top: 5px;
          overflow: hidden;
          .song_title {
            display: inline-block;
            white-space: nowrap;
            margin-bottom: 5px;
          }
        }
      }
    }
  }
}
</style>
