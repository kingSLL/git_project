<!-- ==========template=============-->
<template>
  <div class="right_content">
    <div class="cnt">
      <div class="cover">
        <img :src="info.coverImgUrl" alt="" />
        <div class="mask"></div>
      </div>
      <div class="info">
        <div class="rankName">{{ info.name }}</div>
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
            ({{ info.subscribedCount }})
          </el-button>
          <el-button>
            <el-icon><Share /></el-icon>
            ({{}})
          </el-button>
          <el-button>
            <el-icon><Download /></el-icon>
            下载
          </el-button>
          <el-button>
            <el-icon><ChatDotRound /></el-icon>
            ({{}})
          </el-button>
        </div>
      </div>
    </div>
    <top-sub :info="info"></top-sub>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import { computed } from "vue";
import TopSub from "./sub/top_sub.vue";
import * as dayjs from "dayjs";
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
  return dayjs(props.info.trackUpdateTime).format("MM月DD天");
});

const props = defineProps({
  info: Object,
  rankName: Object,
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
