<!-- ==========template=============-->
<template>
  <div class="sing_playlist text_content">
    <div class="left">
      <div class="albumItroduce">
        <div class="baseInfo">
          <div class="icon">
            <icon-cps
              img_type="icon_200"
              :info="{ picUrl: playlist?.coverImgUrl }"
            ></icon-cps>
          </div>
          <div class="info">
            <div class="albumName">
              <i class="u-icon" style="background-position: 0 -243px"></i>
              <h3 class="name">{{ playlist?.name }}</h3>
            </div>
            <div class="mid">
              <img :src="playlist?.creator?.avatarUrl" alt="" />
              <div class="nickname">
                <p class="author clickable">
                  {{ playlist?.creator?.nickname }}
                </p>
                <template v-if="playlist?.creator?.avatarDetail">
                  <img
                    :src="playlist?.creator?.avatarDetail?.identityIconUrl"
                  />
                </template>
              </div>
              <p class="time">{{ getTime }} 创建</p>
            </div>
            <div class="btn_group">
              <play-btn :play-list="playlist?.tracks"></play-btn>
              <simple-btn
                type="收藏"
                :info="{
                  subscribedCount: playlist?.subscribedCount,
                }"
              ></simple-btn>
              <simple-btn
                type="分享"
                :info="{
                  shareCount: playlist?.shareCount,
                }"
              ></simple-btn>
              <simple-btn type="下载"></simple-btn>
              <simple-btn
                type="评论"
                :info="{
                  commentCount: playlist?.commentCount,
                }"
              ></simple-btn>
            </div>
            <div class="categories">
              <b>标签：</b>
              <template v-for="(tag, index) in playlist?.tags" :key="index">
                <a>{{ tag }}</a>
              </template>
            </div>
          </div>
        </div>
        <div class="albumText" :class="{ active: isAuto }">
          <h3 class="dec">专辑介绍：</h3>
          <template
            v-for="(description, index) in playlist_description"
            :key="index"
          >
            <p class="text">
              {{ description }}
            </p>
          </template>
          <!-- <div class="more clickable" @click="changeTextHeight">
            <i class="iconfont"> &#xe62d;</i>
          </div> -->
        </div>
      </div>
      <div class="singList">
        <song-list title="歌曲列表" :list="playlist" :hasIcon="false">
        </song-list>
      </div>
      <div class="comment">
        <comment-cps type="歌单" :Id="route.query.id"></comment-cps>
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
import SingleSupplement from "multiplexing/single_supplement.vue";
import PlayBtn from "multiplexing/btn/play_btn.vue";
import SimpleBtn from "multiplexing/btn/simple_btn.vue";

import http from "@/service";

import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import * as dayjs from "dayjs";

const route = useRoute();
const isAuto = ref(false);
const playlist = ref({});
const playlist_description = ref([]);

const getTime = computed(() => {
  return dayjs(playlist.value?.updateTime).format("YYYY-MM-DD");
});
http.get(`/playlist/detail?id=${route.query.id}`).then((res) => {
  playlist.value = res.data.playlist;
  //碟片的简介需要进行字符串切割处理
  playlist_description.value = playlist.value?.description
    .split(/\n/)
    .filter((str) => str !== "");
});
// function changeTextHeight() {
//   isAuto.value = !isAuto.value;
// }
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.sing_playlist {
  display: flex;
  .left {
    padding: 40px 30px;
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
            margin: 12px 0 20px 0;
            color: #666666;
            display: flex;
            align-items: center;
            column-gap: 10px;
            img {
              width: 25px;
            }
            .nickname {
              display: flex;
              color: #0c73c2;
              img {
                width: 13px;
              }
            }
          }
          .btn_group {
            display: flex;
            column-gap: 4px;
            margin: 20px 0 25px 0;
          }
          .categories {
            a {
              padding: 2px 10px;
              color: #777777;
              background-color: #f5f5f5;
              border: 1px solid #ccc;
              border-radius: 10px;
              margin-right: 10px;
            }
          }
        }
      }
      .albumText {
        margin-top: -20px;
        margin-left: 240px;
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
