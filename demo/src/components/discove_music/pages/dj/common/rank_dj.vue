<!-- ==========template=============-->
<template>
  <div class="rank_dj">
    <sub-title :title="title"></sub-title>
    <ul>
      <template v-for="(item, index) in 10" :key="index">
        <li>
          <div class="icon">
            <img src="" />
          </div>
          <div class="info">
            <div class="djName text_over">{{ item }}</div>
            <div class="author">{{ index }}</div>
          </div>
          <div class="dec">
            <span class="text">明星专区</span>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import SubTitle from "multiplexing/sub_title.vue";

defineProps({
  title: String,
});
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.rank_dj {
  flex-grow: 1;
  ul {
    background-color: #f7f7f7;
    li {
      display: flex;
      column-gap: 10px;
      height: 40px;
      padding: 10px 0;
      .icon {
        margin-left: 20px;
        img {
        }
      }
      .info {
        width: 254px;
        .djName {
        }
        .author {
          color: #999999;
        }
      }
      .dec {
        flex-grow: 1;

        .text {
          border: 1px solid #ccc;
          line-height: 40px;
          padding: 5px 10px;
          background-color: lightcyan;
        }
      }
    }
  }
}
</style>
