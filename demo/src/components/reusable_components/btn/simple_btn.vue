<!-- ==========template=============-->
<template>
  <div class="simple_btn">
    <a
      class="btn_icon"
      :style="{
        backgroundPositionX: backgroundPositionX,
        backgroundPositionY: backgroundPositionY,
      }"
    >
      <template v-if="type === '收藏'">
        <template v-if="info?.subscribedCount">
          <p>（{{ convertNumbers(info.subscribedCount) }}）</p>
        </template>
        <template v-else>
          <p>收藏</p>
        </template>
      </template>
      <template v-else-if="type === '分享'">
        <template v-if="info?.shareCount">
          <p>（{{ convertNumbers(info.shareCount) }}）</p>
        </template>
        <template v-else>
          <p>分享</p>
        </template>
      </template>
      <template v-else-if="type === '下载'">
        <template v-if="info?.downLoadCount">
          <p>（{{ convertNumbers(info.downLoadCount) }}）</p>
        </template>
        <template v-else>
          <p>下载</p>
        </template>
      </template>
      <template v-else-if="type === '评论'">
        <template v-if="info?.commentCount">
          <p>（{{ convertNumbers(info.commentCount) }}）</p>
        </template>
        <template v-else>
          <p>评论</p>
        </template>
      </template>
    </a>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import { ref } from "vue";

const props = defineProps({
  type: String,
  info: Object,
});
const backgroundPositionX = ref(-999999);
const backgroundPositionY = ref(-999999);

switch (props.type) {
  case "收藏":
    backgroundPositionX.value = "-1px";
    backgroundPositionY.value = "-978px";
    break;
  case "分享":
    backgroundPositionX.value = "-1px";
    backgroundPositionY.value = "-1226px";
    break;
  case "下载":
    backgroundPositionX.value = "-1px";
    backgroundPositionY.value = "-2762px";
    break;
  case "评论":
    backgroundPositionX.value = "-1px";
    backgroundPositionY.value = "-1466px";
    break;
}

function convertNumbers(temp) {
  if (temp > 10000) {
    let str = temp.toString();

    str = str.slice(0, str.length - 4) + "万";
    return str;
  } else {
    return temp.toString();
  }
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.simple_btn {
  height: 30px;
  a {
    display: flex;
    height: calc(100% - 2px);
    border: 1px solid #c4c4c4;
    padding-right: 5px;
    border-radius: 4px;
    p {
      align-self: center;
      padding-left: 25px;
    }
  }
}
</style>
