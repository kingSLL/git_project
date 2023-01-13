<!-- ==========template=============-->
<template>
  <div class="icon">
    <div class="album">
      <div class="img_div">
        <img
          :src="info?.picUrl"
          :style="[{ width: size.w }, { height: size.h }]"
        />
        <div
          class="effect mask"
          :style="[
            { width: effW },
            { height: size.h },

            { backgroundPositionX: imgPos.x },
            { backgroundPositionY: imgPos.y },
          ]"
        ></div>
        <a
          v-show="true"
          class="u-icon-play paly"
          :style="[
            { width: paly_size },
            { height: paly_size },

            { backgroundPositionX: paly_imgPos.x },
            { backgroundPositionY: paly_imgPos.y },
          ]"
        ></a>
      </div>
      <template v-if="true">
        <div class="details">
          <p class="song_title clickable">{{ info?.name }}</p>
          <p class="author clickable">{{ info?.author }}</p>
        </div>
      </template>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import { reactive, ref } from "vue";

const props = defineProps({
  info: Object,
  size: Object,
  img_type: String,
});
const imgPos = reactive({});
const paly_imgPos = reactive({});
const effW = ref("0");
const paly_size = ref({});
switch (props.img_type) {
  case "small_album":
    effW.value = "118px";

    imgPos.x = "0";
    imgPos.y = "-570px";

    paly_imgPos.x = "0";
    paly_imgPos.y = "-85px";

    paly_size.value = "22px";
    break;
  case "icon_80":
    effW.value = "80px";

    imgPos.x = "-145px";
    imgPos.y = "-57px";

    paly_imgPos.x = "99999px";
    paly_imgPos.y = "99999px";
    break;
  case "icon_130":
    effW.value = "130px";

    imgPos.x = "0";
    imgPos.y = "-680px";

    paly_imgPos.x = "99999px";
    paly_imgPos.y = "99999px";
    break;
  case "icon_140":
    effW.value = "140px";

    imgPos.x = "0";
    imgPos.y = "0";

    paly_imgPos.x = "99999px";
    paly_imgPos.y = "99999px";
    break;
  case "album":
    effW.value = "153px";

    imgPos.x = "0";
    imgPos.y = "-845px";

    paly_imgPos.x = "0";
    paly_imgPos.y = "-140px";

    paly_size.value = "28px";
    break;
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.album {
  .img_div {
    position: relative;
    .effect {
      top: 0;
      position: absolute;
    }
    .paly {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }

  .details {
    width: 100px;
    color: #666;
    margin-top: 5px;
    overflow: hidden;
    .song_title {
      display: inline-block;
      white-space: nowrap;
      margin-bottom: 5px;
    }
  }
}
</style>
