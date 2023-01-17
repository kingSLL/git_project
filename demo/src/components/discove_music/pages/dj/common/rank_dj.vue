<!-- ==========template=============-->
<template>
  <div class="rank_dj">
    <sub-title :title="title" :hasMore="true"></sub-title>
    <ul>
      <template v-for="dj in list" :key="dj?.id">
        <li>
          <template v-if="hasRank">
            <div class="rankCore">
              <span class="ranking"> {{ formatNub(dj?.rank) }}</span>
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
import { ref, watch, computed } from "vue";
const props = defineProps({
  title: String,
  list: Array,
  hasRank: {
    type: Boolean,
    default: false,
  },
});

const last = ref(0);
const nub = ref(0);
watch(
  () => props.list,
  (newVal) => {
    if (props.hasRank) {
      newVal.forEach((item) => {
        last.value = item.lastRank;
        nub.value = item.rank;
      });
    }
  }
);
const rankPosX = computed(() => {
  console.log(last.value);
  if (last.value < 0) {
    return "-67px";
  } else if (nub.value === 0) {
    return "-74px";
  } else if (nub.value > 0) {
    return "-74px";
  } else if (nub.value < 0) {
    return "-74px";
  } else return "";
});

const rankPosY = computed(() => {
  console.log(last.value);

  if (last.value < 0) {
    return "-283px";
  } else if (nub.value === 0) {
    return "-274px";
  } else if (nub.value > 0) {
    return "-304px";
  } else if (nub.value < 0) {
    return "-324px";
  } else return "";
});

function rankCore(last, curr) {
  return Math.abs(last - curr);
}
function formatNub(curr) {
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
