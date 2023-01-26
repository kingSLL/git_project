<!-- ==========template=============-->
<template>
  <div class="sing_artist text_content">
    <div class="left">
      <div class="icon">
        <div class="name">
          <h2>{{ artist?.name }}</h2>
          <p class="enName text_over">
            <template v-for="(alia, index) in artist?.alias" :key="index">
              {{ alia }}
            </template>
          </p>
        </div>
        <div class="pic">
          <img :src="artist?.cover" alt="" />
          <div class="btn">
            <template v-if="artist?.identifyTag">
              <a class="u-icon-play mainWeb"></a>
            </template>

            <a class="u-icon-play add"></a>
          </div>
        </div>
        <div class="nav"></div>
      </div>

      <div class="tabs">
        <template v-for="(tab, index) in tabName" :key="index">
          <p
            class="pane"
            @click="select(index)"
            :class="{ active: currIndex === index }"
          >
            {{ tab }}
          </p>
        </template>
      </div>
      <router-view :artistName="artist?.name"></router-view>
    </div>
    <div class="right">
      <div class="top">
        <sub-title title="热门歌手" :bigTitle="false"></sub-title>
        <div class="box">
          <template v-for="(item, index) in 6" :key="index">
            <div class="smll_icon">
              <img src="" alt="" />
              <p>陈奕迅</p>
            </div>
          </template>
        </div>
      </div>
      <single-supplement></single-supplement>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import SingleSupplement from "multiplexing/single_supplement.vue";
import SubTitle from "multiplexing/sub_title.vue";

import { useRoute, useRouter } from "vue-router";

import http from "@/service";
import { ref } from "vue";

const route = useRoute();
const router = useRouter();
//===========
const artistDesc = ref({});
const artist = ref({});
const identify = ref({});
const secondaryExpertIdentiy = ref({});
http.get(`/artist/detail?id=${route.query.id}`).then((res) => {
  artistDesc.value = res.data.data;
  artist.value = res.data.data.artist;
  identify.value = res.data.data.identify;
  secondaryExpertIdentiy.value = res.data.data.secondaryExpertIdentiy;
  console.log(artistDesc.value);
});
//==============
const tabName = ref(["热门作品", "所有专辑", "相关MV", "艺人介绍"]);
const currIndex = ref(0);

function select(index) {
  currIndex.value = index;
  tabName.value[index];

  let str = "";
  switch (tabName.value[index]) {
    case "热门作品":
      str = "";
      break;
    case "所有专辑":
      str = "album";
      break;
    case "相关MV":
      str = "mv";
      break;
    case "艺人介绍":
      str = "desc";
      break;
  }
  router.push({
    path: `/artist/${str}`,
    query: { id: route.query.id },
  });
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.sing_artist {
  display: flex;
  .left {
    padding: 40px;

    flex: 1;
    .icon {
      .name {
        display: flex;
        align-items: baseline;
        column-gap: 10px;
        h2 {
          font-size: 24px;
        }
        .enName {
          display: flex;
          color: #999999;
        }
      }
      .pic {
        margin-top: 10px;
        position: relative;
        img {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }
        .btn {
          position: absolute;
          right: 20px;
          bottom: 20px;
          .mainWeb {
            display: inline-block;
            width: 95px;
            height: 32px;
            background-position: 0 -1156px;
            margin-right: 10px;
          }
          .add {
            display: inline-block;
            width: 76px;
            height: 32px;
            background-position: 0 -500px;
          }
        }
      }
    }
    .tabs {
      display: flex;
      justify-content: space-around;
      margin-top: -3px;
      background-color: #f7f7f7;
      margin-bottom: 30px;
      .pane {
        flex: 1;
        height: 39px;
        text-align: center;
        padding: 2px 2px 0 0;
        line-height: 39px;
        box-sizing: border-box;
        // border: 1px solid transparent;
        border-bottom: 1px solid #ccc;
        &:hover {
          border-top: 2px solid red;
        }
      }
      .active {
        border: 1px solid #ccc;
        border-bottom: none;
        border-top: 2px solid red;
        background-color: #ffffff;
      }
      .pane:first-child {
        border-left: 1px solid #ccc;
      }
      .pane:last-child {
        border-right: 1px solid #ccc;
      }
    }
  }
  .right {
    width: 270px;
    padding: 30px;
    box-sizing: border-box;
    border-left: 1px solid #ccc;
    .top {
      margin-bottom: 20px;

      .box {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 25px;
        row-gap: 20px;
        .smll_icon {
          img {
            width: 50px;
            height: 50px;
          }
          p {
            margin-top: 7px;
          }
        }
      }
    }
  }
}
</style>
