<!-- ==========template=============-->
<template>
  <div class="comment_cps">
    <div class="top">
      <sub-title title="评论">
        <template #mid>
          <p class="comment_total">共{{ commentSong.totalCount }}条评论</p>
        </template>
      </sub-title>
      <div class="comment_input">
        <div class="user_icon">
          <img src="" />
        </div>
        <div class="right">
          <div class="input_box">
            <textarea placeholder="评论"></textarea>
          </div>
          <div class="other">
            <div class="left">
              <i class="u-icon emoji"></i>
              <i class="u-icon link_user"></i>
            </div>
            <div class="counting">140</div>
            <div class="curr_btn">
              <i class="btn_icon">
                <a>评论</a>
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template v-if="hotComments.length">
      <sing-comment
        title="精彩评论"
        :commentBox="hotCommentSong"
        :comments="hotComments"
      ></sing-comment>
    </template>

    <sing-comment
      title="最新评论"
      :commentBox="commentSong"
      :comments="comments"
    ></sing-comment>

    <pagination-cps
      :total_number="comment_total"
      :each_page="comment_each"
      @getPage="getPage"
    ></pagination-cps>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import SubTitle from "multiplexing/sub_title.vue";
import PaginationCps from "multiplexing/pagination_cps.vue";
import SingComment from "multiplexing/sing_comment.vue";

import http from "@/service";
import { ref } from "vue";
const props = defineProps({
  Id: String,
  type: String,
});

//评论
const commentSong = ref({});
const comments = ref([]);
const hotCommentSong = ref([]);
const hotComments = ref([]);

const typelist = ref({
  0: "歌曲",

  1: "mv",

  2: "歌单",

  3: "专辑",

  4: "电台节目",

  5: "视频",

  6: "动态",

  7: "电台",
});
const type = Object.values(typelist.value).findIndex(
  (item) => item === props.type
);

const comment_total = ref(0);
const comment_each = ref(0);

http.get(`/comment/hot?type=${type}&id=${props.Id}`).then((res) => {
  hotCommentSong.value = res.data;
  hotComments.value = res.data.hotComments;
  getCommentText(hotComments.value);
});
let lastTime = 0;
function getPage(currPage) {
  let curr = (currPage + 20) / 20;
  http
    .get(
      `/comment/new?type=${type}&id=${props.Id}&sortType=3&pageNo=${curr}&cursor=${lastTime}`
    )
    .then((res) => {
      if (comment_total.value === 0)
        comment_total.value = res.data.data.totalCount;

      if (comment_each.value !== 20)
        comment_each.value = res.data.data.comments.length;

      lastTime = res.data.data.comments[comment_each.value - 1].time;

      commentSong.value = res.data.data;
      comments.value = res.data.data.comments;
      getCommentText(comments?.value);
    });
}
function getCommentText(comments) {
  comments.forEach((element) => {
    element.contents = getText(element.content);
  });
}
function getText(text) {
  return text.split(/\n/).filter((str) => str !== "");
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.comment_cps {
  .top {
    .comment_total {
      margin: 10px 0 0 40px;
      color: #666;
    }
    .comment_input {
      display: flex;
      column-gap: 10px;
      .user_icon {
        img {
          width: 50px;
          height: 50px;
        }
      }
      .right {
        flex: 1;
        .input_box {
          textarea {
            width: 100%;
            height: 50px;
            resize: none;
            outline: none;

            margin: 0;
            padding: 5px 6px 6px;
            border: 1px solid #cdcdcd;
            border-radius: 2px;
            line-height: 19px;
            box-sizing: border-box;
          }
        }
        .other {
          display: flex;
          align-items: center;
          .left {
            margin-top: 10px;
            flex: 1;
            .emoji {
              display: inline-block;
              width: 18px;
              height: 18px;
              background-position: -40px -490px;
              margin-right: 10px;
            }
            .link_user {
              display: inline-block;
              width: 18px;
              height: 18px;
              background-position: -60px -490px;
            }
          }
          .counting {
            margin-right: 10px;
            color: #999;
          }
          .curr_btn {
            i {
              display: inline-block;
              width: 46px;
              height: 25px;
              background-position: 0px -387px;
              text-align: center;
              border-radius: 4px;
              a {
                line-height: 25px;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
