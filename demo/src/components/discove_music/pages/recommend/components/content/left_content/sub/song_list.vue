<!-- ==========template=============-->
<template>
  <div class="song_list">
    <sub-title :title="title" :hasLogo="true"></sub-title>

    <div class="container">
      <template v-for="item in list" :key="item.id">
        <div class="text">
          <div class="top">
            <div class="icon" @click="topath('rank', item.id)">
              <img :src="item.coverImgUrl" />
              <div class="eff mask"></div>
            </div>
            <div class="right">
              <h4>
                <a class="clickable" @click="topath('rank', item.id)">
                  {{ item.name }}
                </a>
              </h4>
              <i class="iconfont play">&#xe624;</i>
              <i class="iconfont collection">&#xe613;</i>
            </div>
          </div>
          <div class="bottom">
            <div class="list">
              <ol>
                <template v-for="(song, index) in item?.songs" :key="index">
                  <li>
                    <span class="index">{{ index + 1 }}</span>
                    <span class="name text_over">
                      <a class="clickable" @click="topath('/song', song.id)">
                        {{ song.name }}
                      </a>
                    </span>

                    <div class="btn">
                      <a href=""></a>
                    </div>
                  </li>
                </template>
              </ol>
            </div>
            <div class="more clickable">
              <a @click="topath('rank', item.id)">查看全部></a>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import SubTitle from "multiplexing/sub_title.vue";

import http from "@/service";

import { useRouter } from "vue-router";
import { ref } from "vue";

const title = "榜单";
const totalSong = 10;

const list = ref([]);

http.get("/toplist").then((res) => {
  for (let i = 0; i < 3; i++) {
    list.value.push(res.data.list[i]);
  }
  list.value.forEach((element) => {
    http
      .get(`/playlist/track/all?id=${element.id}&limit=${totalSong}`)
      .then((res) => {
        element.songs = res.data.songs;
      });
  });
});

const router = useRouter();
function topath(path, id) {
  router.push({
    path: path,
    query: { id: id },
  });
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.song_list {
  margin-bottom: 40px;
  .container {
    display: flex;
    background-color: #f4f4f4;
    border: 1px solid #d2d2d2;
    box-sizing: border-box;
    .text {
      flex-grow: 1;
      border-right: 1px solid #d2d2d2;
      box-sizing: border-box;
      .top {
        display: flex;
        align-items: flex-start;
        padding: 20px;
        column-gap: 10px;
        .icon {
          position: relative;
          img {
            width: 80px;
            height: 80px;
          }
          .eff {
            position: absolute;
            top: 0;
            width: 80px;
            height: 80px;
            background-position: -145px -57px;
          }
        }
        .right {
          h4 {
            margin: 6px 0 10px 0;
            a {
              font-size: 14px;
            }
          }
          i {
            font-size: 22px;
            margin-right: 10px;
          }
        }
      }
      .bottom {
        .list {
          ol {
            li {
              display: flex;
              align-items: center;
              justify-content: end;
              .index {
                text-align: center;
                width: 35px;
                height: 32px;
                font-size: 16px;
                line-height: 32px;
              }
              .name {
                width: 170px;
              }
              &:nth-child(2n + 1) {
                background-color: #e8e8e8;
              }
              &:nth-child(n + 1):nth-child(-n + 3) .index {
                color: red;
              }
            }
          }
        }
        .more {
          height: 32px;
          line-height: 32px;
          text-align: end;
          background-color: #e8e8e8;
          padding-right: 32px;
        }
      }
    }
    .text:last-of-type {
      border: none;
    }
  }
}
</style>
