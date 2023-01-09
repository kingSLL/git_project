<!-- ==========template=============-->
<template>
  <div class="singer_L">
    <template v-for="(item, index) in 6" :key="index">
      <div class="singer_classify">
        <h3>推荐{{ item }}</h3>
        <ul>
          <template v-for="(singer, indey) in 2" :key="indey">
            <li @click="chang" :class="{ active: tempFlag }">
              <span class="temp">
                {{ singer }}
              </span>
            </li>
          </template>
        </ul>
      </div>
    </template>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import { ref } from "vue";

const tempFlag = ref(false);
function chang() {
  console.log(tempFlag.value);
  tempFlag.value = !tempFlag.value;
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.singer_L {
  border-right: 1px solid #ccc;
  padding: 35px 10px;
  width: 180px;
  background-color: #f9f9f9;
  .singer_classify {
    border-bottom: 1px solid red;
    padding-top: 16px;
    h3 {
      height: 25px;
      padding-left: 14px;
      font-size: 16px;
      line-height: 25px;
    }
    ul {
      li {
        width: 160px;
        height: 29px;
        margin-bottom: 2px;
        line-height: 29px;
        padding-left: 27px;
        &:last-child {
          margin-bottom: 7px;
        }
        background: url("https://s2.music.126.net/style/web2/img/singer.png?b19d4460d2158036319f97813f90641f")
          no-repeat 0 -30px;
      }
      .active {
        color: #c20b0d;
        background-position: 0 0;
      }
    }
    &:last-of-type {
      border: none;
    }
  }
}
</style>
