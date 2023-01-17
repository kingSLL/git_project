<!-- ==========template=============-->
<template>
  <div class="left_content">
    <div class="container">
      <div class="text">
        <template v-for="(item, index) in nameList" :key="item.id">
          <div class="box">
            <div
              class="info"
              :class="{ active: rankStore.currRankIndex == index }"
              @click="changedIndex(index)"
            >
              <div class="left">
                <img :src="item.coverImgUrl" class="icon" />
              </div>
              <div class="right">
                <span class="name">{{ item.name }}</span>
                <span class="tip">{{ item.updateFrequency }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import { userRankStore } from "@/Storage";
import { useRouter } from "vue-router";
const props = defineProps({
  nameList: Object,
});

const router = useRouter();

const rankStore = userRankStore();

function changedIndex(index) {
  rankStore.currRankIndex = index;

  router.push({
    path: "/discover_music/rank",
    query: { id: props.nameList[rankStore.currRankIndex].id },
  });
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.left_content {
  border-right: 1px solid #dfdfdf;
  .container {
    margin-top: 20px;
    width: 240px;
    .text {
      .box {
        .info {
          display: flex;
          column-gap: 10px;
          padding: 10px 0 10px 20px;
          .left {
            .icon {
              width: 40px;
              height: 40px;
            }
          }
          .right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .tip {
              color: #999999;
            }
          }
          &:hover {
            background-color: #f4f2f2;
          }
        }
        .active {
          background-color: #e6e6e6 !important;
        }
        &:first-of-type:before,
        &:nth-of-type(4)::after {
          display: block;
          font-size: 14px;
          font-weight: bold;
          color: black;
          padding: 20px 10px 12px 15px;
        }
        &:first-of-type:before {
          content: "云音乐特色榜";
        }
        &:nth-of-type(4)::after {
          content: "特色榜";
        }
      }
    }
  }
}
</style>
