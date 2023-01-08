<!-- ==========template=============-->
<template>
  <div class="temp">
    <sub-title :title="title"></sub-title>
    <div class="box">
      <template v-for="(item, index) in 4" :key="index + '1'">
        <div class="content">
          <div class="icon">
            <img src="" />
          </div>
          <div class="info">
            <div class="djName">{{ item }}</div>
            <div class="dec">{{ index }}</div>
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
.temp {
  margin-top: 35px;
  .box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 30px;
    .content {
      display: flex;
      padding: 20px 0;
      .icon {
        img {
          width: 120px;
          height: 120px;
        }
      }
      .info {
        .djName {
        }
        .dec {
        }
      }
      &:nth-of-type(n + 1):nth-of-type(-n + 2) {
        border-bottom: 1px solid #ccc;
      }
    }
  }
}
</style>
