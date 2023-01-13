<!-- ==========template=============-->
<template>
  <div class="cps_album">
    <div class="showcase">
      <sub-title title="热门新碟"> </sub-title>
      <div class="top_box">
        <template v-for="(item, index) in 10" :key="index">
          <div>
            <icon-cps
              img_type="album"
              :size="{ w: '140px', h: '140px' }"
            ></icon-cps>
          </div>
        </template>
      </div>
    </div>
    <div class="text">
      <sub-title title="全部新碟">
        <template #mid>
          <categories-cps
            :list="[{ name: '全部' }, { name: '华语' }]"
          ></categories-cps>
        </template>
      </sub-title>
      <div class="bottom_box">
        <template v-for="(item, index) in 100" :key="index">
          <div>
            <icon-cps
              img_type="album"
              :size="{ w: '140px', h: '140px' }"
            ></icon-cps>
          </div>
        </template>
      </div>
    </div>
    <pagination-cps></pagination-cps>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import SubTitle from "multiplexing/sub_title.vue";
import IconCps from "multiplexing/icon_cps.vue";
import CategoriesCps from "multiplexing/categories_cps.vue";
import PaginationCps from "multiplexing/pagination_cps.vue";
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.cps_album {
  padding: 40px;
  .showcase {
    .top_box {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(2, 1fr);
      column-gap: 33px;
      row-gap: 30px;
    }
  }
  .text {
    .bottom_box {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
  }
}
</style>
