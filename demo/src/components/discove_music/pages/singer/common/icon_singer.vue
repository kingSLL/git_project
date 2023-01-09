<!-- ==========template=============-->
<template>
  <div class="icon_singer">
    <sub-title :title="title"></sub-title>
    <div class="box">
      <template v-for="(item, index) in 10" :key="index">
        <div class="singer">
          <div class="icon">
            <img src="" />
          </div>
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
defineProps({
  title: String,
});
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.icon_singer {
  .box {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 25px;
    column-gap: 17px;
    margin: 20px 0 30px 0;
    .singer {
      .icon {
        height: 130px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
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
