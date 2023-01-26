<!-- ==========template=============-->
<template>
  <div class="sing_comment">
    <sub-title
      :title="title"
      :bigTitle="false"
      :totalCount="commentBox.totalCount"
    ></sub-title>
    <template v-for="item in comments" :key="item.commentId">
      <div class="comment">
        <div class="icon">
          <img :src="item?.user.avatarUrl" />
        </div>
        <div class="contant">
          <div class="text">
            <span class="username clickable">
              {{ item?.user.nickname }}：
            </span>
            <template v-for="(text, index) in item?.contents" :key="index">
              {{ text }}
              <br />
            </template>
          </div>
          <div class="bottom">
            <p class="time">{{ getTime(item?.time) }}</p>
            <div class="response"></div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import dayjs from "dayjs";
import SubTitle from "multiplexing/sub_title.vue";

defineProps({
  title: String,
  commentBox: Object,
  comments: Array,
});
function getTime(time) {
  return dayjs(time).format("M月DD日 HH:mm");
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.sing_comment {
  margin-top: 30px;

  .comment {
    display: flex;
    column-gap: 10px;
    padding: 15px 0;
    border-bottom: 1px dotted #cdcdcd;
    .icon {
      img {
        width: 50px;
        height: 50px;
      }
    }
    .contant {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      .text {
        line-height: 18px;
        .username {
          //   display: inline;
          color: #0c73c2;
        }
        .details {
          //   display: inline;
          text-indent: 2em;
        }
      }
      .parentComment {
        line-height: 18px;
        border: 1px solid #ccc;
        background-color: #f4f4f4;
        margin: 10px 0;
        padding: 20px;
        .username {
          color: #0c73c2;
        }
      }
      .bottom {
        display: flex;
        margin-top: 10px;
        .time {
          flex: 1;
          color: #999;
        }
      }
    }
  }
}
</style>
