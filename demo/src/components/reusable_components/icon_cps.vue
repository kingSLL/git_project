<!-- ==========template=============-->
<template>
  <div class="icon">
    <div class="album">
      <div class="img_div">
        <img :src="picUrl" alt="" />
        <div class="effect mask"></div>
      </div>

      <div class="details">
        <p class="song_title clickable">{{ name }}</p>
        <p class="author clickable">{{ author }}</p>
      </div>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
defineProps({
  picUrl: String,
  name: String,
  author: String,
  height: {
    type: String,
    defualt: "100px",
  },
});
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.album {
  .img_div {
    position: relative;
    img {
      height: 100px;
    }
    .effect {
      top: 0;
      position: absolute;
      width: 120px;
      height: 100px;
      background-position-x: 0px;
      background-position-y: -570px;
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
