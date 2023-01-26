<!-- ==========template=============-->
<template>
  <div class="single_supplement">
    <div class="multi_point">
      <sub-title title="网易云音乐多端下载" :bigTitle="false"></sub-title>
      <div class="download">
        <ul>
          <template v-for="(item, index) in 3" :key="index">
            <li class="download_icon">
              <a></a>
            </li>
          </template>
        </ul>
      </div>
      <p style="color: #999999">同步歌单，随时畅听320k好音乐</p>
    </div>
    <div class="user_setup">
      <sub-title title="用户wiki" :bigTitle="false"></sub-title>
      <div>
        <div class="modify">
          <i></i>
          <p>补充或修改艺人资料</p>
        </div>
        <div class="task">
          <i></i>
          <p>用户wiki任务中心</p>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import SubTitle from "multiplexing/sub_title.vue";
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.single_supplement {
  .multi_point {
    margin-bottom: 20px;
    .download {
      ul {
        display: flex;
        column-gap: 20px;
        margin-bottom: 20px;
        li {
          background-color: red;
        }
        li:first-child {
          width: 37px;
          height: 49px;
          background-position: 0 -392px;
        }
        li:nth-child(2) {
          flex: 1;
          height: 49px;
          background-position: -55px -392px;
        }
        li:last-child {
          width: 37px;
          height: 49px;
          background-position: -159px -392px;
        }
      }
    }
  }
  .user_setup {
    i {
      display: inline-block;
      height: 18px;
      width: 18px;
    }
    .modify {
      display: flex;
      align-items: center;
      column-gap: 5px;
      i {
        background-image: url(https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/13138582886/9567/5afa/307c/a6ba8934ef3b36208786e4445e054e04.png);
      }
      margin: 10px 0;
    }
    .task {
      display: flex;
      align-items: center;
      column-gap: 5px;
      i {
        background-image: url(https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/13138667740/2d69/e968/aac8/79d601b88b5bde7f850f090db9a3f820.png);
      }
    }
  }
}
</style>
