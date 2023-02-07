<!-- ==========template=============-->
<template>
  <div class="hot_picks">
    <sub-title :title="title" :hasLogo="true">
      <template #mid>
        <categories-cps :list="list"></categories-cps>
      </template>
    </sub-title>
    <div class="container" v-if="dataItem">
      <template v-for="item in dataItem" :key="item">
        <div>
          <img :src="item.img_url" />
          <p>{{ item.title }}</p>
        </div>
      </template>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import { ref } from "vue";
import SubTitle from "multiplexing/sub_title.vue";
import CategoriesCps from "multiplexing/categories_cps.vue";
import http from "@/service";
const list = ref([
  { name: "华语" },
  { name: "流行" },
  { name: "摇滚" },
  { name: "民谣" },
  { name: "电子" },
]);
const title = "热门歌曲";
const dataItem = ref();
const random = Math.random();
http.get(`/hot/discover?a=${random}`).then((res) => {
  dataItem.value = res.data;
});
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.hot_picks {
  margin-bottom: 40px;

  .subtitle {
    ul {
      display: flex;
      align-content: flex-end;
      margin-left: 20px;
      li {
        a {
          padding: 0 10px;
          color: #666666;
          border-right: 1px #666666 solid;
        }
      }
      li:first-of-type a {
        padding-left: 0;
      }
      li:last-of-type a {
        border: none;
      }
    }
  }

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    column-gap: 42px;
    margin-bottom: 30px;

    img {
      width: 140px;
      height: 140px;
    }

    p {
      font-size: 14px;
      text-indent: 2em;
      height: 40px;
    }
  }
}
</style>
