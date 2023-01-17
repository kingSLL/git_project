<!-- ==========template=============-->
<template>
  <div class="singer_R">
    <!-- <icon-singer title="入驻歌手"></icon-singer> -->
    <temp-singer
      :title="getName"
      :list="artists"
      :has-index="Boolean(route.query.type)"
    >
    </temp-singer>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import TempSinger from "../common/temp_singer_cps.vue";
// import IconSinger from "../common/icon_singer.vue";
import http from "@/service";
import { ref, computed, onBeforeMount } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { singerType, singerArea } from "@/data";

const route = useRoute();
const contants = ref({});
const title = ref("");

const getName = computed(() => {
  if (route.query.type) {
    singerType.value.forEach((type) => {
      if (route.query.type in type) {
        singerArea.value.forEach((area) => {
          if (route.query.area in area) {
            title.value = area[route.query.area] + type[route.query.type];
          }
        });
      }
    });
  } else {
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    title.value = "推荐歌手";
  }
  return title.value;
});
const artists = computed(() => {
  return contants.value[route.query.type + "_" + route.query.area];
});
onBeforeMount(() => {
  http.get(`artist/list?limit=100`).then((res) => {
    contants.value["undefined_undefined"] = res.data.artists;
  });
});
onBeforeRouteUpdate((to) => {
  if (
    !Object.keys(contants.value).includes(to.query.type + "_" + to.query.area)
  ) {
    http
      .get(`artist/list?limit=100&type=${to.query.type}&area=${to.query.area}`)
      .then((res) => {
        contants.value[to.query.type + "_" + to.query.area] = res.data.artists;
      });
  }
});
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.singer_R {
  flex-grow: 1;
  padding: 40px;
}
</style>
