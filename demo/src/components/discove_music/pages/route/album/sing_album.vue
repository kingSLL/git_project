<!-- ==========template=============-->
<template>
  <div class="sing_album text_content">
    <div class="left">
      <div class="albumItroduce">
        <div class="baseInfo">
          <div class="icon">
            <icon-cps
              img_type="big_album"
              :info="{ picUrl: album?.picUrl }"
            ></icon-cps>
          </div>
          <div class="info">
            <div class="albumName">
              <i class="u-icon" style="background-position: 0 -186px"></i>
              <h3 class="name">{{ album?.name }}</h3>
            </div>
            <div class="mid">
              <p class="singerName">
                歌手：
                <template v-for="artist in album?.artists" :key="artist.id">
                  {{ artist.name }}
                </template>
              </p>
              <p class="time">发行时间： {{ getTime }}</p>
              <p class="company">发行公司：{{ album?.company }}</p>
            </div>
            <div class="btn_group">
              <paly-btn></paly-btn>
              <simple-btn type="收藏"></simple-btn>
              <simple-btn
                type="分享"
                :info="{
                  shareCount: album?.info?.shareCount,
                }"
              ></simple-btn>
              <simple-btn type="下载"></simple-btn>
              <simple-btn
                type="评论"
                :info="{
                  commentCount: album?.info?.commentCount,
                }"
              ></simple-btn>
            </div>
          </div>
        </div>
        <div class="albumText" :class="{ active: isAuto }">
          <h3 class="dec">专辑介绍：</h3>
          <template
            v-for="(description, index) in album_description"
            :key="index"
          >
            <p class="text">
              {{ description }}
            </p>
          </template>
          <div class="more clickable" @click="changeTextHeight">
            <i class="iconfont"> &#xe62d;</i>
          </div>
        </div>
      </div>
      <div class="singList">
        <song-list title="歌曲列表" :list="album" :hasIcon="false"> </song-list>
      </div>
      <div class="comment">
        <comment-cps type="专辑" :Id="route.query.id"> </comment-cps>
      </div>
    </div>
    <div class="right">
      <single-supplement></single-supplement>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import IconCps from "multiplexing/icon_cps.vue";
import SongList from "multiplexing/song_list.vue";
import CommentCps from "multiplexing/comment_cps.vue";
import PalyBtn from "multiplexing/btn/play_btn.vue";
import SimpleBtn from "multiplexing/btn/simple_btn.vue";
import SingleSupplement from "multiplexing/single_supplement.vue";

import http from "@/service";

import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import * as dayjs from "dayjs";

const route = useRoute();
const isAuto = ref(false);
const album = ref({});
const album_description = ref([]);

const getTime = computed(() => {
  return dayjs(album.value?.publishTime).format("YYYY-MM-DD");
});
http.get(`/album?id=${route.query.id}`).then((res) => {
  album.value = res.data.album;
  album.value["tracks"] = res.data.songs;
  //碟片的简介需要进行字符串切割处理
  album_description.value = album.value?.description
    .split(/\n/)
    .filter((str) => str !== "");
});
function changeTextHeight() {
  isAuto.value = !isAuto.value;
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.sing_album {
  display: flex;
  .left {
    padding: 40px;
    flex: 1;
    .albumItroduce {
      .baseInfo {
        display: flex;
        column-gap: 20px;
        .icon {
          flex: 1;
        }
        .info {
          flex: 2;
          .albumName {
            display: flex;
            column-gap: 10px;
            padding-bottom: 2px;
            i {
              display: inline-block;
              width: 54px;
              height: 24px;
            }
            .name {
              font-size: 20px;
              font-weight: normal;
              color: #333333;
            }
          }
          .mid {
            color: #666666;
            p {
              margin-top: 10px;
            }
          }
          .btn_group {
            display: flex;
            column-gap: 4px;
            margin: 20px 0 25px 0;
            .share_btn {
              a {
                border: 1px solid #c4c4c4;
                background-position: -1px -1226px;
                p {
                  padding-left: 20px;
                }
              }
            }
            .download_btn {
              a {
                border: 1px solid #c4c4c4;
                padding-right: 5px;
                background-position: -1px -2762px;
                p {
                  padding-left: 25px;
                }
              }
            }
            .comment_btn {
              a {
                border: 1px solid #c4c4c4;
                background-position: -1px -1466px;
                p {
                  padding-left: 20px;
                }
              }
            }
          }
        }
      }
      .albumText {
        margin-top: 20px;
        height: 200px;
        overflow: hidden;
        position: relative;
        .text {
          color: #666;
          text-indent: 2em;
          line-height: 24px;
        }
        .more {
          position: absolute;
          color: #0c73c2;
          bottom: 0;
          right: 0;
          &::before {
            content: "展开";
          }
        }
      }
      .active {
        height: auto;
        .more {
          &::before {
            content: "收起";
          }
        }
      }
    }
  }
  .right {
    box-sizing: border-box;
    width: 270px;
    padding: 20px 40px 40px 30px;
    border-left: 1px solid #ccc;
  }
}
</style>
