<!-- ==========template=============-->
<template>
  <div class="rank_dj">
    <sub-title :title="title" :hasMore="true"></sub-title>
    <ul>
      <template v-for="dj in list" :key="dj?.id">
        <li>
          <template v-if="hasRank">
            <div class="rankCore">
              <span class="ranking">{{
                formatNub(dj?.lastRank, dj?.rank)
              }}</span>

              <div class="core">
                <i
                  class="core_icon u-icon"
                  :style="{
                    backgroundPositionX: rankPosX,
                    backgroundPositionY: rankPosY,

                    width: dj?.lastRank < 0 ? '16px' : '6px',
                    height: dj?.lastRank < 0 ? '17px' : '6px',
                  }"
                ></i>
                <span v-if="dj?.lastRank > 0">{{
                  rankCore(dj?.lastRank, dj?.rank)
                }}</span>
              </div>
            </div>
          </template>
          <div class="icon">
            <img :src="!dj.program ? dj?.coverUrl : dj?.program.coverUrl" />
          </div>
          <div class="info">
            <div class="djName text_over clickable">
              {{ !dj.program ? dj?.name : dj?.program.name }}
            </div>
            <div class="author clickable">
              {{ !dj.program ? dj?.radio?.name : dj?.program.radio?.name }}
            </div>
          </div>
          <div class="dec">
            <span class="text">{{
              !dj.program ? dj?.radio?.category : dj?.program.radio?.category
            }}</span>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import SubTitle from "multiplexing/sub_title.vue";
import { padStart } from "lodash";
import { ref } from "vue";
defineProps({
  title: String,
  list: Array,
  hasRank: {
    type: Boolean,
    default: false,
  },
});
const rankPosX = ref({});
const rankPosY = ref({});

function rankCore(last, curr) {
  return Math.abs(last - curr);
}
function formatNub(last, curr) {
  let nub = last - curr;
  if (last < 0) {
    rankPosX.value = "-67px";
    rankPosY.value = "-283px";
  } else if (nub === 0) {
    rankPosX.value = "-74px";
    rankPosY.value = "-274px";
  } else if (nub > 0) {
    rankPosX.value = "-74px";
    rankPosY.value = "-304px";
  } else {
    rankPosX.value = "-74px";
    rankPosY.value = "-324px";
  }
  return padStart(curr, 2, "0");
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.rank_dj {
  flex: 1;
  background-position-x: 0px;
  background-position-y: 0px;
  ul {
    border: 1px solid #ccc;
    border-top: none;
    background-color: #ffffff;
    margin-top: -22px;
    li {
      display: flex;
      height: 40px;
      padding: 10px 20px;
      column-gap: 10px;
      justify-items: left;
      align-items: center;
      .rankCore {
        .ranking {
          font-size: 14px;
          color: #999999;
        }
        .core {
          display: flex;
          align-items: center;
          column-gap: 2px;
          .core_icon {
            display: inline-block;
          }
        }
      }
      .icon {
        img {
          height: 40px;
          width: 40px;
        }
      }
      .info {
        width: 254px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .djName {
        }
        .author {
          color: #999999;
        }
      }
      .dec {
        white-space: nowrap;
        .text {
          border: 1px solid #999;
          line-height: 40px;
          padding: 2px 6px;
          background-color: #fff;
          color: #999;
        }
      }
      &:nth-child(2n) {
        background-color: #f7f7f7;
      }
      &:nth-of-type(-n + 3) {
        .ranking {
          color: #da4545;
        }
      }
    }
  }
}
</style>
