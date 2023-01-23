<!-- ==========template=============-->
<template>
  <div class="comment_cps">
    <div class="top">
      <sub-title title="评论">
        <template #mid>
          <p class="comment_total">共{{ props.commentSong?.total }}条评论</p>
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

    <div class="hot_comment">
      <h4>精彩评论</h4>

      <template
        v-for="item in props.commentSong?.hotComments"
        :key="item.commentId"
      >
        <div class="comment">
          <div class="icon">
            <img :src="item?.user.avatarUrl" alt="" />
          </div>
          <div class="contant">
            <div class="text">
              <p class="username clickable">{{ item?.user.nickname }}</p>
              ：
              <p class="details">{{ item?.content }}</p>
            </div>
            <div class="bottom">
              <p class="time">{{ getTime(item?.time) }}</p>
              <div class="response"></div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="hot_comment">
      <h4>最近评论（{{ props.commentSong?.total }}）</h4>

      <template
        v-for="item in props.commentSong?.comments"
        :key="item.commentId"
      >
        <div class="comment">
          <div class="icon">
            <img :src="item?.user.avatarUrl" alt="" />
          </div>
          <div class="contant">
            <div class="text">
              <p class="username clickable">{{ item?.user.nickname }}</p>
              ：
              <p class="details">{{ item?.content }}</p>
            </div>
            <div class="bottom">
              <p class="time">{{ getTime(item?.time) }}</p>
              <div class="response"></div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <pagination-cps></pagination-cps>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import SubTitle from "multiplexing/sub_title.vue";
import PaginationCps from "multiplexing/pagination_cps.vue";

import dayjs from "dayjs";
const props = defineProps({
  comment: Array,
  commentSong: Object,
});

function getTime(time) {
  return dayjs(time).format("M月DD日 HH:mm");
}
// http
//   .get(`/comment/floor?parentCommentId=5839990523&id=${route.query.id}&type=0`)
//   .then((res) => {
//     console.log(res.data);
//   });
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
  .hot_comment {
    margin-top: 30px;
    h4 {
      height: 20px;
      border-bottom: 1px solid #cfcfcf;
    }
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
        .text {
          line-height: 18px;
          .username {
            display: inline;
            color: #0c73c2;
          }
          .details {
            display: inline;
            text-indent: 2em;
          }
        }
        .bottom {
          display: flex;
          .time {
            flex: 1;
            color: #999;
          }
        }
      }
    }
  }
}
</style>
