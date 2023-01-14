<!-- ==========template=============-->
<template>
  <div class="temp">
    <sub-title :title="getTitle(title)"></sub-title>
    <div class="box">
      <template v-for="djRadio in djRadios" :key="djRadio.id">
        <div class="content">
          <div class="icon">
            <img :src="djRadio.picUrl" />
          </div>
          <div class="info">
            <div class="djName">{{ djRadio.name }}</div>
            <div class="dec">{{ djRadio.rcmdtext }}</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import SubTitle from "multiplexing/sub_title.vue";
import { userDJStore } from "@/Storage";
import { ref } from "vue";
const props = defineProps({
  title: String,
  type: Number,
});

const djRadios = ref([]);
const dj_Store = userDJStore();

dj_Store.getDJ_recommend(props.type).then((res) => {
  for (let i = 0; i < 4; i++) {
    djRadios.value.push(res[i]);
  }
});
function getTitle(title) {
  return title + "·电台";
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.temp {
  margin-top: 35px;
  .box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    .content {
      display: flex;
      padding: 20px 0;
      .icon {
        background: transparent;
        img {
          width: 120px;
          height: 120px;
        }
      }
      .info {
        margin-left: 20px;
        .djName {
          margin: 16px 0 20px;
          color: #333;
          font-weight: bold;
          font-size: 18px;
        }
        .dec {
          color: #999;
        }
      }
      &:nth-of-type(n + 1):nth-of-type(-n + 2) {
        border-bottom: 1px solid #ccc;
      }
    }
  }
}
</style>
