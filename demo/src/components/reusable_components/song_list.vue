<!-- ==========template=============-->
<template>
  <div class="song_list">
    <sub-title :title="title">
      <template #mid>
        <p class="songs">{{ songList?.langth }}首歌</p>
      </template>
      <template #right>
        <p style="color: #666">
          播放:
          <span style="color: #c20b0d; font-weight: bold">{{
            info?.playCount
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
      <template v-for="(song, index) in songList" :key="song.id">
        <div class="row">
          <div class="index">{{ index + 1 }}</div>
          <div class="title text_over">
            <template v-if="index + 1 < 4 && hasIcon">
              <img :src="song?.al.picUrl" style="width: 50px; height: 50px" />
            </template>
            <i class="iconfont">&#xe624;</i>

            <span class="sing_name clickable"> {{ song?.name }}</span>

            <template v-if="song?.alia.length > 0 && !song?.tns">
              <span class="additional">-({{ song?.alia[0] }})</span>
            </template>
            <template v-else-if="song?.tns?.length > 0">
              <span class="additional">-({{ song?.tns[0] }})</span>
            </template>
          </div>
          <div class="duration">02:56</div>
          <div class="singer clickable">{{ song?.ar[0].name }}</div>
        </div>
      </template>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import SubTitle from "multiplexing/sub_title.vue";
const props = defineProps({
  info: Object,
  songList: Array,
  title: String,
  hasIcon: {
    type: Boolean,
    default: false,
  },
});
console.log(props.songList);
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.subtitle {
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
