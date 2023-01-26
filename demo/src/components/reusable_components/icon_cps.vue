<!-- ==========template=============-->
<template>
  <div class="icon">
    <div class="album" :style="{ width: effW }">
      <div
        @click="getId(info?.id)"
        class="img_div"
        :style="[{ width: effW }, { height: img_size?.h }]"
      >
        <img
          :src="info?.picUrl"
          :style="[{ width: img_size?.w }, { height: img_size?.h }]"
        />
        <div
          class="effect mask"
          :style="[
            { backgroundPositionX: imgPos.x },
            { backgroundPositionY: imgPos.y },
          ]"
        ></div>
        <template v-if="isPalyHover">
          <a
            class="u-icon-play paly"
            :style="[
              { width: paly_size },
              { height: paly_size },

              { backgroundPositionX: paly_imgPos.x },
              { backgroundPositionY: paly_imgPos.y },
            ]"
          ></a>
        </template>
      </div>
      <template v-if="!info?.name == ''">
        <div class="details">
          <p class="song_title clickable text_over" @click="getId(info?.id)">
            {{ info?.name }}
          </p>
          <div class="nickname">
            <slot></slot>
            <p
              class="author clickable text_over"
              @click="getId(info?.artistId, 'author')"
            >
              {{ info?.author }}
            </p>
            <slot name="avatarDetail"></slot>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { split } from "lodash";
const props = defineProps({
  info: Object,
  img_type: String,
  isPalyHover: {
    type: Boolean,
    default: false,
  },
});
const router = useRouter();

const imgPos = reactive({});
const paly_imgPos = reactive({});
const effW = ref("0");
const paly_size = ref("");
const img_size = ref({});
switch (props.img_type) {
  case "small_album":
    effW.value = "118px";

    imgPos.x = "0";
    imgPos.y = "-570px";

    img_size.value.w = "100px";
    img_size.value.h = "100px";

    paly_imgPos.x = "0";
    paly_imgPos.y = "-85px";

    paly_size.value = "22px";
    break;
  case "normal_album":
    effW.value = "145px";

    imgPos.x = "-170px";
    imgPos.y = "-850px";

    img_size.value.w = "120px";
    img_size.value.h = "120px";

    paly_imgPos.x = "0";
    paly_imgPos.y = "-140px";

    paly_size.value = "28px";
    break;
  case "icon_80":
    effW.value = "80px";

    img_size.value.w = "80px";
    img_size.value.h = "80px";

    imgPos.x = "-145px";
    imgPos.y = "-57px";

    break;
  case "artist":
    effW.value = "130px";

    img_size.value.w = "130px";
    img_size.value.h = "130px";

    imgPos.x = "0";
    imgPos.y = "-680px";

    break;
  case "playlist":
    effW.value = "140px";

    img_size.value.w = "140px";
    img_size.value.h = "140px";

    imgPos.x = "0";
    imgPos.y = "0";

    break;
  case "icon_200":
    effW.value = "208px";

    img_size.value.w = "200px";
    img_size.value.h = "200px";

    imgPos.x = "9999px";
    imgPos.y = "9999px";

    break;
  case "album":
    effW.value = "153px";

    imgPos.x = "0";
    imgPos.y = "-845px";

    img_size.value.w = "130px";
    img_size.value.h = "130px";

    paly_imgPos.x = "0";
    paly_imgPos.y = "-140px";

    paly_size.value = "28px";
    break;
  case "big_album":
    effW.value = "209px";

    imgPos.x = "-6px";
    imgPos.y = "-990px";

    img_size.value.w = "170px";
    img_size.value.h = "170px";

    break;
}

function getId(id, type = "") {
  const temp = split(props.img_type, "_");
  if (temp.includes("album")) {
    if (type) {
      router.push({ path: "/artist", query: { id: id } });
    } else {
      router.push({ path: "/album", query: { id: id } });
    }
  } else if (temp.includes("playlist")) {
    if (type) {
      router.push({ path: "/home", query: { id: id } });
    } else {
      router.push({ path: "/playlist", query: { id: id } });
    }
  } else if (temp.includes("artist")) {
    router.push({ path: "/artist", query: { id: id } });
  }
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
      width: 100%;
      height: 100%;
    }
    .paly {
      display: none;
      position: absolute;
      bottom: 0px;
      right: 0px;
      transform: translate(-100%, -10%);
    }
    &:hover {
      .paly {
        display: block;
      }
    }
  }

  .details {
    color: #666;
    margin-top: 5px;
    overflow: hidden;
    .song_title {
      margin-bottom: 5px;
      font-size: 14px;
      color: #000;
    }
    .nickname {
      display: flex;
    }
  }
}
</style>
