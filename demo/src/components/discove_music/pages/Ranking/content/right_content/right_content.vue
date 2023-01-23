<!-- ==========template=============-->
<template>
  <div class="right_content">
    <div class="cnt">
      <div class="cover">
        <img :src="list?.coverImgUrl" alt="" />
        <div class="mask"></div>
      </div>
      <div class="info">
        <div class="rankName">{{ list?.name }}</div>
        <div class="time">
          <span class="iconfont"> &#xe74f;</span>
          <span class="recent">最近更新： {{ getTime }}</span>
          <span style="color: #999">({{ rankName?.updateFrequency }})</span>
        </div>
        <div class="btn">
          <el-button-group class="play">
            <el-button type="primary">
              <el-icon style="">
                <VideoPlay />
              </el-icon>
              播放
            </el-button>
            <el-button type="primary">
              <el-icon class="el_i_plus">
                <Plus />
              </el-icon>
            </el-button>
          </el-button-group>

          <el-button>
            <el-icon><FolderAdd /></el-icon>
            ({{ list?.subscribedCount }})
          </el-button>
          <el-button>
            <el-icon><Share /></el-icon>
            ({{ list?.shareCount }})
          </el-button>
          <el-button>
            <el-icon><Download /></el-icon>
            下载
          </el-button>
          <el-button>
            <el-icon><ChatDotRound /></el-icon>
            ({{ list?.commentCount }})
          </el-button>
        </div>
      </div>
    </div>
    <song-list title="歌曲列表" :list="list" :hasIcon="true"></song-list>
    <comment-cps :comment="props?.comment"></comment-cps>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import { computed } from "vue";
import * as dayjs from "dayjs";

import SongList from "multiplexing/song_list.vue";
import CommentCps from "multiplexing/comment_cps.vue";
import {
  Plus,
  VideoPlay,
  FolderAdd,
  Download,
  Share,
  ChatDotRound,
} from "@element-plus/icons-vue";
// =============================
const getTime = computed(() => {
  return dayjs(props.list?.trackUpdateTime).format("MM月DD天");
});

const props = defineProps({
  list: Object,
  rankName: Object,
  comment: Array,
});
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.right_content {
  box-sizing: border-box;
  padding: 40px;
  padding-right: 30px;
  .cnt {
    display: flex;
    column-gap: 30px;
    padding-bottom: 30px;
    .cover {
      width: 155px;
      height: 155px;
      border: 1px solid #ccc;
      position: relative;

      div,
      img {
        position: absolute;
        width: 150px;
        height: 150px;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
      }
      div {
        background-position: -230px -380px;
      }
    }
    .info {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      .rankName {
        font-size: 20px;
        font-weight: normal;
        margin: 16px 0 4px;
      }
      .time {
        margin: 9px 0 30px;
        .recent,
        .iconfont {
          margin-right: 10px;
        }
        .recent {
          color: #666;
        }
      }
      .btn {
        height: 30px;
        display: flex;
        column-gap: 10px;
      }
    }
  }
}
</style>
