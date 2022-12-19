<!-- ==========template=============-->
<template>
  <div class="nav_bar">
    <div class="container">
      <div class="logo"></div>
      <div class="label_selection">
        <ul>
          <template v-for="(item, index) in list" :key="index + item">
            <li :class="{ active: currindex === index }">
              <a class="clickableWithoutLine"> {{ item }} </a>
            </li>
          </template>
        </ul>
      </div>
      <div class="right">
        <div class="search">
          <i class="iconfont">&#xe603;</i>
          <input type="text" placeholder="音乐/视频/电台/用户" />
        </div>
        <a class="author clickableWithoutLine">创作者中心</a>
        <a class="login clickable">登录</a>
      </div>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import { ref } from "vue";

const list = ["发现音乐", "我的音乐", "关注", "商城", "音乐人", "下载客户端"];
const currindex = ref(0);
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.nav_bar {
  height: 70px;
  background-color: #242424;

  .container {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      width: 160px;
      height: 70px;

      text-align: center;
      line-height: 70px;

      background-image: url("https://s2.music.126.net/style/web2/img/frame/topbar.png?14f1da15ed493a77d799f4aa6f72e4b3");
      margin-right: 20px;
    }

    .label_selection {
      flex-grow: 1;

      ul {
        list-style: none;
        display: flex;

        li {
          padding: 0 20px;

          a {
            line-height: 70px;
            height: 70px;
            display: block;
            font-size: 14px;
            color: #ccc;
          }
        }

        .active,
        li:hover {
          background-color: black;
        }

        li:last-child:after {
          content: "";
          background-image: url("https://s2.music.126.net/style/web2/img/frame/topbar.png?14f1da15ed493a77d799f4aa6f72e4b3");
          background-position-x: 50px;
          width: 30px;
        }
      }
    }

    .right {
      display: flex;
      align-items: center;

      //
      .search {
        max-width: 156px;
        height: 34px;
        border-radius: 100px;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #ccc;
        box-sizing: border-box;

        i {
          margin: 0 10px;
          cursor: default;
        }

        input {
          border: none;
          background: none;
          padding-right: 10px;
        }
      }

      .author {
        height: 34px;
        border-radius: 100px;
        padding: 0 10px;
        border: 1px #4f4f4f solid;
        box-sizing: border-box;
        line-height: 34px;
        color: #bcbcbc;
        margin: 0 10px;
      }

      .login {
        margin-left: 10px;
        color: #787878;
      }
    }
  }
}
</style>
