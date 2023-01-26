<!-- ==========template=============-->
<template>
  <div class="song_list">
    <template v-if="hasTitle">
      <sub-title :title="title">
        <template #mid>
          <p class="songs">{{ list?.tracks?.length }}首歌</p>
        </template>
        <template #right>
          <p style="color: #666">
            播放:
            <span style="color: #c20b0d; font-weight: bold">{{
              list?.playCount
            }}</span>
            次
          </p>
        </template>
      </sub-title>
    </template>
    <div class="content">
      <template v-if="hasTitle">
        <div class="row">
          <span class="index"></span>
          <span class="title">标题</span>
          <span class="duration">时长</span>
          <span class="singer">歌手</span>
        </div>
      </template>
      <template v-for="(song, index) in list?.tracks" :key="song.id">
        <div class="row">
          <div class="index">{{ index + 1 }}</div>
          <div
            class="title text_over"
            :class="{ change_height: (index < 3) & hasIcon }"
          >
            <template v-if="index + 1 < 4 && hasIcon">
              <img :src="song?.al?.picUrl" @click="toSong('/song', song.id)" />
            </template>
            <span
              class="text"
              :class="{ 'change_padding-left': (index < 3) & hasIcon }"
            >
              <i class="iconfont">&#xe624;</i>

              <span
                class="sing_name clickable"
                :class="{ 'change_line-height': (index < 3) & hasIcon }"
                @click="toSong('/song', song.id)"
              >
                {{ song?.name }}</span
              >

              <template v-if="song?.alia?.length > 0 && !song?.tns">
                <span class="additional">-({{ song?.alia[0] }})</span>
              </template>
              <template v-else-if="song?.tns?.length > 0">
                <span class="additional">-({{ song?.tns[0] }})</span>
              </template>
            </span>
          </div>

          <div class="duration">02:56</div>
          <div class="singer text_over">
            <template v-for="arist in song?.ar" :key="arist?.id">
              <a class="clickable" @click="toSong('/artist', arist.id)">
                {{ arist?.name }}
              </a>
            </template>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import { useRouter } from "vue-router";
import SubTitle from "./sub_title.vue";
defineProps({
  list: Object,
  title: String,
  hasIcon: {
    type: Boolean,
    default: false,
  },
  hasTitle: {
    type: Boolean,
    default: true,
  },
});
const router = useRouter();
function toSong(path, id) {
  router.push({ path: path, query: { id: id } });
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.song_list {
  width: 100%;
  .subtitle {
    .songs {
      margin: 10px 0 0 40px;
      color: #666;
    }
  }
  .content {
    width: 100%;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    margin-top: -22px;

    .row {
      display: flex;
      border-top: none;
      box-sizing: border-box;
      align-items: center;

      column-gap: 10px;

      .index {
        flex: 0.5;
        text-align: center;
      }
      .title {
        flex: 4;
        max-width: 300px;
        padding: 8px 10px;
        position: relative;
        img {
          position: absolute;
          width: 50px;
          height: 50px;
          top: 5px;
        }
        .sing_name {
          margin-left: 10px;
        }

        .additional {
          color: #b0b0b0;
        }
      }
      .duration {
        flex: 1;
      }
      .singer {
        flex: 2;
        padding: 2px;
        max-width: 170px;
        a::after {
          content: "/";
        }
        a:last-child::after {
          content: none;
        }
      }
      &:nth-child(2n) {
        background-color: #f7f7f7;
      }
      .change_height {
        height: 60px;
      }
      .change_padding-left {
        padding-left: 60px;
      }
      .change_line-height {
        line-height: 50px;
      }
    }
  }
}
</style>
