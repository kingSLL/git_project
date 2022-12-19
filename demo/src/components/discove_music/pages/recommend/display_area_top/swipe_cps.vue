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
</script>
<!-- ==========template=============-->
<template>
  <div class="swipe">
    <div class="pre">
      <i class="iconfont">&#xe659;</i>
    </div>
    <div class="container">
      <van-swipe
        class="my_swipe"
        indicator-color="red"
        autoplay="3000"
        lazy-render
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
      <div class="right">下载</div>
    </div>
    <div class="next">
      <i class="iconfont">&#xe62d;</i>
    </div>
  </div>
</template>

<style lang="less" scoped>
.swipe {
  display: flex;
  justify-content: center;
  align-items: center;
  .pre,
  .next {
    flex-grow: 1;
    text-align: center;
  }
  .container {
    display: flex;
    width: 980px;
    justify-content: center;
    box-sizing: border-box;
    .my_swipe {
      height: 270px;
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
      width: 254px;
      height: 270px;
      background-color: skyblue;
    }
  }
  .next {
  }
}
</style>
