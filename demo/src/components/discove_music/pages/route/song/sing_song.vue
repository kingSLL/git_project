<!-- ==========template=============-->
<template>
  <div class="sing_song text_content">
    <div class="left">
      <div class="albumItroduce">
        <div class="baseInfo">
          <div class="icon">
            <icon-cps
              img_type="icon_200"
              :info="{ picUrl: song[0]?.al.picUrl }"
            ></icon-cps>
          </div>
          <div class="info" :class="{ active: isAuto }">
            <div class="albumName">
              <i class="u-icon" style="background-position: 0 -463px"></i>
              <div class="title">
                <h3 class="name">{{ song[0]?.name }}</h3>
                <p class="alia">{{ song[0]?.alia[0] }}</p>
              </div>
            </div>
            <div class="mid">
              <div class="nickname">
                歌手：
                <div class="author">
                  <template v-for="author in song[0]?.ar" :key="author.id">
                    <p class="clickable">
                      {{ author?.name }}
                    </p>
                  </template>
                </div>
              </div>
              <div class="album">
                所属专辑：
                <p class="clickable">{{ song[0]?.al?.name }}</p>
              </div>
            </div>
            <div class="btn_group">
              <div class="play_btn">
                <a class="btn_icon play">
                  <p>播放</p>
                </a>
                <a class="btn_icon additional"> </a>
              </div>
              <div class="collection_btn">
                <a class="btn_icon">
                  <p>收藏</p>
                </a>
              </div>
              <div class="share_btn">
                <a class="btn_icon">
                  <p>分享</p>
                </a>
              </div>
              <div class="download_btn">
                <a class="btn_icon">
                  <p>下载</p>
                </a>
              </div>
              <div class="comment_btn">
                <a class="btn_icon">
                  <p>（{{ commentSong?.total }}）</p>
                </a>
              </div>
            </div>
            <div class="lyric">
              <template v-for="(lyric, index) in lyrics" :key="index">
                <p>{{ lyric.text }}</p>
              </template>
            </div>
            <div class="more clickable" @click="changeTextHeight">
              <i class="iconfont"> &#xe62d;</i>
            </div>
          </div>
        </div>
      </div>
      <comment-cps :commentSong="commentSong"></comment-cps>
    </div>
    <div class="right"></div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import IconCps from "multiplexing/icon_cps.vue";
import CommentCps from "multiplexing/comment_cps.vue";

import http from "@/service";
import { parseSongStr } from "@/hooks";

import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const song = ref({});
const privileges = ref({});
//歌词
const lyrics = ref([]);
//评论
const commentSong = ref({});
const comments = ref([]);
const hotComments = ref([]);

//点击事件所需参数

//切换歌词显示高度
const isAuto = ref(false);
http.get(`/song/detail?ids=${route.query.id}`).then((res) => {
  song.value = res.data.songs;
  privileges.value = res.data.privileges;
  console.log(res.data);
});
http.get(`/lyric?id=${route.query.id}`).then((res) => {
  lyrics.value = parseSongStr(res.data.lrc.lyric);
});
http.get(`/comment/music?id=${route.query.id}`).then((res) => {
  commentSong.value = res.data;
  comments.value = res.data.comments;
  hotComments.value = res.data.hotComments;
  console.log(commentSong.value);
});
http
  .get(`/comment/floor?parentCommentId=5839990523&id=${route.query.id}&type=0`)
  .then((res) => {
    console.log(res.data);
  });

function changeTextHeight() {
  isAuto.value = !isAuto.value;
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.sing_song {
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
          margin-bottom: 30px;
          position: relative;
          .albumName {
            display: flex;
            column-gap: 10px;
            padding-bottom: 2px;
            i {
              display: inline-block;
              width: 54px;
              height: 24px;
            }
            .title {
              .name {
                font-size: 24px;
                font-weight: normal;
                color: #333333;
              }
              .alia {
                margin-top: 10px;
                font-size: 14px;
                color: #bababa;
              }
            }
          }
          .mid {
            margin: 12px 0 20px 0;
            color: #666666;
            .nickname {
              .author {
                display: flex;
                &:nth-child(n) ::after {
                  color: #666666;
                  content: "/";
                }
                p:last-child::after {
                  content: none;
                }
              }
            }

            .nickname,
            .album {
              display: flex;
              margin: 15px 0;
            }
            p {
              color: #0c73c2;
            }
          }
          .btn_group {
            display: flex;
            column-gap: 4px;
            margin: 20px 0 25px 0;
            .play_btn {
              display: flex;
              align-items: center;
              .play {
                width: 60px;

                background-position: 0 -634px;
                padding-right: 12px;
                p {
                  color: #f5f5f5;
                  padding-left: 35px;
                }
              }
              .additional {
                width: 32px;
                background-position: 0 -1588px;
                p {
                }
              }
            }
            .collection_btn {
              a {
                border: 1px solid #c4c4c4;
                padding-right: 5px;
                background-position: -1px -978px;
                p {
                  padding-left: 25px;
                }
              }
            }
            .share_btn {
              a {
                border: 1px solid #c4c4c4;
                padding-right: 5px;
                background-position: -1px -1226px;
                p {
                  padding-left: 25px;
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
            a {
              display: inline-block;
              height: 28px;
              border-radius: 3px;
              p {
                line-height: 28px;
              }
            }
          }
          .lyric {
            height: 190px;
            overflow: hidden;
            p {
              margin-bottom: 10px;
            }
          }
          .more {
            position: absolute;
            color: #0c73c2;
            bottom: -20px;
            left: 0;
            &::before {
              content: "展开";
            }
          }
        }
        .active {
          .lyric {
            height: auto;
          }
          .more {
            &::before {
              content: "收起";
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
    background-color: lightblue;
    border-left: 1px solid #ccc;
  }
}
</style>
