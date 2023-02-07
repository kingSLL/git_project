<!-- ==========template=============-->
<template>
  <div class="logn">
    <div class="backgroud">
      <div class="top">
        <p>登录</p>
        <i @click="change" class="clickableWithoutLine">X</i>
      </div>
      <div class="bottom">
        <div class="imgdes"></div>
        <div class="Q">
          <div class="text">扫码登陆</div>
          <div class="img">
            <img :src="qrimg" />
            <div class="reset">
              <a>刷新</a>
            </div>
          </div>
          <p>使用 网易云音乐APP 扫码登录</p>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import { userlognStore } from "@/Storage";
import http from "@/service";
import { userAccountStore } from "@/Storage";

import "element-plus/dist/index.css";
import { ElMessage } from "element-plus";
import { ref, watch } from "vue";
const lognStore = userlognStore();
const accountStore = userAccountStore();
let timer = null;

const unikey = ref(0);
const qrimg = ref("");
const code = ref(0);

const uid = ref("");

getKey();
watch(code, (curr) => {
  changeCode(curr);
});
getUserInfo();

function getUserInfo() {
  http.get("/user/account").then((res) => {
    uid.value = res.data.profile?.userId;
    accountStore.account.uId = res.data.profile?.userId;
    accountStore.account.avatarUrl = res.data.profile?.avatarUrl;
    getUserMenuList();
  });
}
function getUserMenuList() {
  http.get(`/user/playlist?uid=${uid.value}`).then((res) => {
    accountStore.account.playlist = res.data.playlist;
  });
}
async function getKey() {
  const resquest = await http.get(`/login/qr/key?timestemp=${Date.now()}`);
  unikey.value = resquest.data.data.unikey;
  const res = await http.get(
    `/login/qr/create?key=${unikey.value}&qrimg=true&timestemp=${Date.now()}`
  );
  qrimg.value = res.data.data.qrimg;
  timer = setInterval(async () => {
    const res1 = await http.get(
      `/login/qr/check?key=${unikey.value}&timestemp=${Date.now()}`
    );
    code.value = res1.data.code;
    console.log(res1.data);
  }, 5000);
}
function change() {
  lognStore.isLogn = false;
}

function changeCode(code) {
  switch (code) {
    case 800:
      ElMessage("二维码过期");
      getKey();
      break;
    case 801:
      ElMessage.warning("等待扫码");
      break;
    case 802:
      ElMessage("待确认");
      break;
    case 803:
      ElMessage.success("授权登录成功");
      clearInterval(timer);
      break;
  }
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.logn {
  width: 100vw;
  height: 100vw;
  position: fixed;
  background-color: #2d2d2d82;
  top: 0;
  .backgroud {
    width: 538px;
    height: 326px;
    margin: 0 auto;
    transform: translateY(80%);

    .top {
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #191919;
      border-radius: 4px 4px 0 0;
      background: #2d2d2d;
      font-weight: bold;
      font-size: 14px;
      color: #fff;
      padding: 0 18px;
      i {
        display: block;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-around;
      padding: 40px;
      background-color: #fff;
      .imgdes {
        background: url(https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9643571155/525c/faac/2dc6/fe695c03c7c358ddaa4651736b26a55f.png)
          no-repeat;
        background-size: contain;
        width: 125px;
        height: 220px;
      }
      .Q {
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        .img {
          position: relative;
          img {
            height: 128px;
            width: 128px;
            background-color: lightblue;
          }
          .reset {
            position: absolute;
            top: 0;
            margin: 0 auto;
          }
        }
        .text {
          font-size: 18px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
