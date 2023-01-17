<!-- ==========template=============-->
<template>
  <div class="tile_subCps" v-show="active">
    <div class="categories_box">
      <div class="all">
        <button>全部风格</button>
      </div>
      <div class="categorie">
        <template v-for="(itme, index) in categories" :key="index">
          <div class="name">
            <el-icon size="23px"><CoffeeCup /></el-icon>
            <span> {{ itme }}</span>
          </div>
          <div class="text">
            <categories-cps :list="list[index]"></categories-cps>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import CategoriesCps from "multiplexing/categories_cps.vue";
import { CoffeeCup } from "@element-plus/icons-vue";
defineProps({
  list: Array,
  categories: Array,
  active: Boolean,
});
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.tile_subCps {
  position: absolute;
  width: 700px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  left: 0;
  top: 35px;
  z-index: 99;
  .categories_box {
    .all {
      height: 69px;

      border-bottom: 1px solid #ccc;
      position: relative;
      button {
        position: absolute;
        height: 26px;
        width: 75px;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 26px;
      }
    }
    .categorie {
      display: grid;
      grid-template-columns: 15% 85%;

      .name {
        border-right: 1px solid #ccc;
        padding: 16px 15px 0 15px;
        display: flex;
        justify-content: end;
        span {
          font-size: 16px;
        }
      }
      .text {
        padding: 16px 15px 0 15px;
      }
      .text:last-child {
        padding-bottom: 25px;
      }
    }
  }
}
</style>
