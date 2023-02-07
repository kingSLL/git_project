<!-- ==========template=============-->
<template>
  <div class="mv_related">
    <hr />
    <audio
      src="https://music.163.com/song/media/outer/url?id=1873321491.mp3"
      ref="audioRef"
    ></audio>
    <hr />
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import { ref, onMounted } from "vue";

const audioRef = ref();
onMounted(() => {
  // audioRef.value.play();
});
</script>
<!-- ============style============== -->
<style scoped>
audio {
  opacity: 1;
}
</style>
