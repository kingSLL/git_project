<!-- ==========template=============-->
<template>
  <div class="dj_nav">
    <div class="pre">
      <i class="iconfont">&#xe659;</i>
    </div>
    <div class="box">
      <template v-for="(item, index) in 18" :key="index">
        <div class="info">
          <i class="iconfont">&#xe891;</i>
          <div class="name">{{ item }}</div>
        </div>
      </template>
    </div>
    <div class="next">
      <i class="iconfont">&#xe62d;</i>
    </div>

    <div class="indicator">
      <template v-for="(item, index) in 2" :key="index">
        <div
          @click="changeIndex(index)"
          :class="{ active: currindex === index }"
        ></div>
      </template>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import { ref } from "vue";

const currindex = ref(0);
function changeIndex(index) {
  console.log(index);
  currindex.value = index;
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.dj_nav {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
  .box {
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 50% 50%;
    overflow: hidden;
    row-gap: 10px;
    column-gap: 20px;
    justify-items: center;
    .info {
      background-color: lightblue;
    }
  }
  .indicator {
    position: absolute;
    bottom: -10px;
    display: flex;
    column-gap: 5px;
    left: 50%;
    transform: translate(-50%);
    div {
      width: 5px;
      height: 5px;
      background-color: #dddddd;
      border-radius: 5px;
    }
    .active {
      background-color: #ba2400;
    }
  }
}
</style>
