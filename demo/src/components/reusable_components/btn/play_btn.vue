<!-- ==========template=============-->
<template>
  <div class="play_btn">
    <a class="btn_icon play">
      <p>播放</p>
    </a>
    <a class="btn_icon additional"> </a>
  </div>
</template>
<!-- ===========script============== -->
<script setup></script>
<!-- ============style============== -->
<style lang="less" scoped>
.play_btn {
  display: flex;
  align-items: center;
  height: 30px;
  .play {
    width: 60px;
    height: 100%;
    background-position: 0 -633px;
    padding-right: 5px;
    display: flex;
    p {
      align-self: center;
      color: #f5f5f5;
      padding-left: 35px;
    }
  }
  .additional {
    width: 32px;
    height: 100%;
    background-position: 0 -1588px;
    p {
    }
  }
}
</style>
