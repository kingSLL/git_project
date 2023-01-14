<!-- ==========template=============-->
<template>
  <div class="dj_nav">
    <div class="pre clickableWithoutLine">
      <i class="iconfont">&#xe659;</i>
    </div>
    <div class="box">
      <template v-for="categorie in categories" :key="categorie?.id">
        <div class="info clickableWithoutLine">
          <i
            class="icon"
            :style="{
              backgroundImage: `url(${categorie?.picWebUrl})`,
            }"
          ></i>
          <p class="name">{{ categorie?.name }}</p>
        </div>
      </template>
    </div>
    <div class="next clickableWithoutLine">
      <i class="iconfont">&#xe62d;</i>
    </div>

    <div class="indicator clickableWithoutLine">
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
import http from "@/service";
const currindex = ref(0);
const categories = ref([]);
getNav();
function changeIndex(index) {
  currindex.value = index;
}

async function getNav() {
  const request = await http.get("dj/catelist");
  categories.value = request.data.categories;
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
      text-align: center;
      .icon {
        display: inline-block;
        width: 48px;
        height: 48px;
      }
      .name {
        color: #999999;
      }
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
