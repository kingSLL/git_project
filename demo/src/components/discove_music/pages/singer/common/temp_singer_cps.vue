<!-- ==========template=============-->
<template>
  <div class="temp_singer">
    <sub-title :title="title"></sub-title>
    <template v-if="true">
      <div class="index">
        <template v-for="(item, index) in indexList" :key="index">
          <span
            class="clickable"
            @click="change(index)"
            :class="{ active: currIndex === index }"
            >{{ item }}</span
          >
        </template>
      </div>
    </template>
    <div class="box">
      <template v-for="(item, index) in 100" :key="index">
        <div class="singer">
          <template v-if="index < 10">
            <div class="icon">
              <img src="" />
            </div>
          </template>
          <div class="info">
            <span class="name">{{ item }}数九寒冬健康</span>
            <template v-if="true">
              <i class="u-icon"></i>
            </template>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import SubTitle from "multiplexing/sub_title.vue";
import { ref } from "vue";
const currIndex = ref(0);
const indexList = ref(["热门", "A", "B", "C", "其他"]);
defineProps({
  title: String,
});
function change(index) {
  currIndex.value = index;
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.temp_singer {
  .index {
    display: flex;
    text-align: center;
    margin-top: 20px;
    span {
      flex-grow: 1;
      width: 45px;
      height: 24px;
      line-height: 24px;
    }
    .active {
      color: white;
      background-color: rgb(194, 12, 12);
      border-radius: 2px;
    }
  }
  .box {
    margin-top: 20px;
    margin-bottom: 35px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 10px;
    .singer {
      padding-left: 17px;
      &:nth-child(n + 1):nth-child(-n + 5) {
        padding-bottom: 20px;
      }
      &:nth-child(n + 6):nth-child(-n + 10) {
        border-bottom: 1px dotted #ccc;
        padding-bottom: 30px;
        margin-bottom: 2px;
      }
      &:nth-child(5n-4) {
        padding-left: 0;
      }
      &:nth-child(n + 1):nth-child(-n + 10) {
        .icon {
          height: 130px;
          background-color: aqua;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .info {
          justify-content: space-between;
        }
      }
      .info {
        display: flex;
        align-items: center;
        height: 30px;
        i {
          display: inline-block;
          width: 17px;
          height: 17px;
          background-position: 0 -740px;
        }
      }
    }
  }
}
</style>
