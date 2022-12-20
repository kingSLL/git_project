<!-- ==========template=============-->
<template>
  <div class="song_list">
    <sub-title :title="title" :hasLogo="true"></sub-title>

    <div class="container">
      <template v-for="item in listName" :key="item.id">
        <div class="text">
          <div class="top">
            <div class="icon">
              <img :src="item.coverImgUrl" />
              <div class="eff mask"></div>
            </div>
            <div class="right">
              <h4>
                <a class="clickable">
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
                <template
                  v-for="(song, index) in songlist[item.name]"
                  :key="index"
                >
                  <li>
                    <span class="index">{{ index + 1 }}</span>
                    <span class="name text_over">
                      <a class="clickable">
                        {{ song.name }}
                      </a>
                    </span>
                  </li>
                </template>
              </ol>
            </div>
            <div class="more clickable">
              <a>查看全部></a>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import { ref } from "vue";
import { filter, cloneDeep } from "lodash";
import SubTitle from "multiplexing/sub_title.vue";
import http from "@/service";
import { userRankStore } from "@/Storage";
const listName = ref([]);

const songlist = ref({});

const title = "榜单";
const totalSong = 10;
const rankStore = userRankStore();
getHttp();

async function getHttp() {
  const songs = [];
  let upList_song = [];
  let newList_song = [];
  let createList_song = [];

  const toplist = await rankStore.getRankNameList;
  const tempList = filter(toplist, (list) => {
    return ["飙升榜", "新歌榜", "原创榜"].includes(list.name);
  });
  listName.value = tempList;
  // =============================

  const uplist = await http.get(
    `/playlist/track/all?id=${tempList[0].id}&limit=${totalSong}`
  );
  upList_song = cloneDeep(uplist.data.songs);
  songs.push(upList_song);
  // =============================
  const newlist = await http.get(
    `/playlist/track/all?id=${tempList[1].id}&limit=${totalSong}`
  );
  newList_song = cloneDeep(newlist.data.songs);
  songs.push(newList_song);
  // =============================
  const createlist = await http.get(
    `/playlist/track/all?id=${tempList[2].id}&limit=${totalSong}`
  );
  createList_song = cloneDeep(createlist.data.songs);
  songs.push(createList_song);
  // ==将网络数据转化为自己想要的格式
  for (let i = 0; i < listName.value.length; i++) {
    songlist.value[listName.value[i].name] = songs[i];
  }
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
    margin-top: 20px;
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
            }
            li:nth-child(2n + 1) {
              background-color: #e8e8e8;
            }
            li:nth-child(n + 1):nth-child(-n + 3) .index {
              color: red;
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
