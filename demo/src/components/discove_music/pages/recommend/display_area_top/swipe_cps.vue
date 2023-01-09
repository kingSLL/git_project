<!-- ==========template=============-->
<template>
  <div class="swipe">
    <div
      class="overlay"
      :style="{
        backgroundImage: `url(${banners[currIndex]?.imageUrl})`,
      }"
    ></div>
    <div class="pre">
      <i class="iconfont">&#xe659;</i>
    </div>
    <div class="container">
      <van-swipe
        class="my_swipe"
        indicator-color="red"
        autoplay="3000"
        lazy-render
        @change="changeIndex"
      >
        <template v-for="(item, index) in banners" :key="index">
          <van-swipe-item>
            <img :src="item?.imageUrl" />
          </van-swipe-item>
        </template>

        <template #indicator="{ active }">
          <div class="indicator">
            <template v-for="(item, index) in banners" :key="index">
              <div
                class="custom-indicator"
                :class="{ active: active === index }"
              ></div>
            </template>
          </div>
        </template>
      </van-swipe>
      <div class="right">
        <button class="download"></button>
      </div>
    </div>
    <div class="next">
      <i class="iconfont">&#xe62d;</i>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import http from "@/service";
import { ref } from "vue";
const banners = ref({});

http
  .get("banner")
  .then((res) => {
    banners.value = res.data.banners;
  })
  .catch((error) => {
    console.log(error);
  });
const currIndex = ref(0);
function changeIndex(index) {
  currIndex.value = index;
}
</script>

<style lang="less" scoped>
.swipe {
  display: flex;
  align-items: center;

  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
  border-bottom: 1px solid white;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    filter: blur(30px);
    z-index: -999;
  }
  .pre,
  .next {
    flex-grow: 1;
    text-align: center;
  }
  .container {
    display: flex;
    width: 980px;
    box-sizing: border-box;
    .my_swipe {
      width: 730px;
      position: relative;
      .van-swipe-item {
        img {
          width: 730px;
        }
      }
      .indicator {
        position: absolute;
        bottom: 10px;
        display: flex;
        justify-content: center;
        right: 0;
        left: 0;
        .custom-indicator {
          height: 10px;
          width: 10px;
          background-color: #acabb4;
          border-radius: 10px;
          cursor: pointer;
          margin-right: 10px;
        }
        .active {
          background-color: #c10c0d;
        }
      }
    }
    .right {
      flex-grow: 1;
      background: url("https://s2.music.126.net/style/web2/img/index/download.png?c2981939a8e8df0f67f71ae7662c142c");
      position: relative;
      .download {
        width: 220px;
        height: 55px;
        position: absolute;
        bottom: 31px;
        left: 8px;
        right: 0;
        margin: 0 auto;
        background: transparent;
        border: none;
        border-radius: 2px;
        &:hover {
          background: url("https://s2.music.126.net/style/web2/img/index/download.png?c2981939a8e8df0f67f71ae7662c142c");
          background-position: 0px 63px;
        }
      }
    }
  }
  .next {
  }
}
</style>
