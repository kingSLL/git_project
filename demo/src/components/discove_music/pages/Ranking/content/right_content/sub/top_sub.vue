<!-- ==========template=============-->
<template>
  <div class="top_sub">
    <sub-title :title="title">
      <template #mid>
        <p class="songs">{{ info.trackCount }}首歌</p>
      </template>
      <template #right>
        <p style="color: #666">
          播放:
          <span style="color: #c20b0d; font-weight: bold">{{
            info.playCount
          }}</span>
          次
        </p>
      </template>
    </sub-title>
    <div class="content">
      <div class="row">
        <span class="index"></span>
        <span class="title">标题</span>
        <span class="duration">时长</span>
        <span class="singer">歌手</span>
      </div>
      <template v-for="(item, index) in info.tracks" :key="item.id">
        <div class="row">
          <div class="index">{{ index + 1 }}</div>
          <div class="title text_over">
            <template v-if="index + 1 < 4">
              <img :src="item.al.picUrl" style="width: 50px; height: 50px" />
            </template>
            <i class="iconfont">&#xe624;</i>

            <span class="sing_name clickable"> {{ item.name }}</span>

            <template v-if="item.alia.length > 0 && !item.tns">
              <span class="additional">-({{ item.alia[0] }})</span>
            </template>
            <template v-if="item.tns?.length > 0">
              <span class="additional">-({{ item.tns[0] }})</span>
            </template>
          </div>
          <div class="duration">02:56</div>
          <div class="singer clickable">{{ item.ar[0].name }}</div>
        </div>
      </template>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import SubTitle from "multiplexing/sub_title.vue";

const title = "歌曲列表";
defineProps({
  info: {
    type: Object,
    default: () => {},
  },
});
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.subtitle {
  height: 35px;
  .songs {
    margin: 10px 0 0 40px;
    color: #666;
  }
}
.content {
  width: 670px;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  margin-top: -22px;
  .row {
    display: flex;
    align-items: center;
    border-top: none;
    column-gap: 10px;
    box-sizing: border-box;
    .index {
      width: 77px;
      flex-shrink: 0;
      text-align: center;
    }
    .title {
      flex-grow: 1;
      box-sizing: border-box;
      padding: 8px 10px;
      display: flex;
      align-items: center;
      column-gap: 10px;
      .sing_name {
      }
      .additional {
        color: #b0b0b0;
      }
    }
    .duration {
      width: 91px;
      flex-shrink: 0;
    }
    .singer {
      width: 174px;
      flex-shrink: 0;
    }
    &:nth-child(2n) {
      background-color: #f7f7f7;
    }
  }
}
</style>
