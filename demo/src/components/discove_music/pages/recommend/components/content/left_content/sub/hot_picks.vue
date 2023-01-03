<!-- ==========template=============-->
<template>
  <div class="hot_picks">
    <sub-title :title="title" :hasLogo="true">
      <template #mid>
        <categories-cps :list="list"></categories-cps>
      </template>
    </sub-title>
    <div class="container">
      <template v-for="item in 8" :key="item">
        <div class="grid">
          <img src="" alt="" />
          <div>
            <span></span>
            <p class="clickable">
              「四季电台·冬」Chapter.18:你在冬天如何克服自己的起床困难症的？
            </p>
          </div>
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
const list = ref(["华语", "流行", "摇滚", "民谣", "电子"]);
const title = "热门歌曲";
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: space-between;
    column-gap: 42px;
    margin: 30px 0;
    .grid {
      background-color: aquamarine;
      padding-bottom: 30px;
      img {
        width: 100%;
        height: 140px;
        background-color: skyblue;
      }

      p {
        font-size: 14px;
        text-indent: 2em;
        height: 40px;
      }
    }
  }
}
</style>
