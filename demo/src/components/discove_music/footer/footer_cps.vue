<!-- ==========template=============-->
<template>
  <div class="footer">
    <div class="top">
      <template v-for="(item, index) in iconlist" :key="index">
        <div class="container">
          <div
            class="icon"
            :style="
              iconpos(
                currindex === index ? item.iconPos.hover : item.iconPos.normal
              )
            "
            @mouseenter="enterColor(index)"
            @mouseout="outColor()"
          ></div>
          <p>{{ item.name }}</p>
        </div>
      </template>
    </div>
    <div class="bottom">
      <categories :list="list" :showlist="true" class="categories"></categories>
      <p>
        <a>廉正举报</a> 不良信息举报邮箱: 51jubao@service.netease.com
        客服热线：95163298
      </p>
      <p>
        互联网宗教信息服务许可证：浙（2022）0000120
        <a>粤B2-20090191-18 工业和信息化部备案管理系统网站</a>
        <a>浙公网安备 33010902002564号 </a>
      </p>
      <p>
        网易公司版权所有©1997-2022杭州乐读科技有限公司运营：
        <a>浙网文[2021]1186-054号</a>
      </p>
    </div>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import categories from "@/components/reusable_components/categories_cps.vue";
import { ref } from "vue";
const list = [
  "服务条款",
  "隐私政策",
  "儿童隐私政策",
  "版权投诉",
  "投资者关系",
  "广告合作",
  "联系我们",
];
const iconlist = [
  {
    iconPos: { normal: "-170px -5px", hover: "-5px -115px" },
    name: "音乐开放平台",
  },
  {
    iconPos: { normal: "-5px -170px", hover: "-60px -170px" },
    name: "云村交易所",
  },
  {
    iconPos: { normal: "-5px -60px", hover: "-60px -5px" },
    name: "Amped Studio",
  },
  {
    iconPos: { normal: "-60px -60px", hover: "-115px -5px" },
    name: "用户认证",
  },
  {
    iconPos: { normal: "-115px -115px", hover: "-5px -5px" },
    name: "独立音乐人",
  },
  { iconPos: { normal: "-170px -115px", hover: "-60px -115px" }, name: "赞赏" },
  {
    iconPos: { normal: "-170px -60px", hover: "-115px -60px" },
    name: "视频激励",
  },
];
const currindex = ref(false);
function iconpos(pos) {
  return `background-position: ${pos};`;
}
function enterColor(index) {
  currindex.value = index;
}
function outColor() {
  currindex.value = -1;
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.footer {
  height: 300px;
  border-top: 1px solid #d3d3d3;
  .top {
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 50px;
    .container {
      text-align: center;
      .icon {
        margin: 0 auto;
        width: 45px;
        height: 45px;
        background: url("https://s2.music.126.net/style/web2/img/foot_enter_new2.png?1cc47a9538a13f7c1954614a442d1f48")
          0% 0% / 220px 220px no-repeat;
        margin-bottom: 5px;
      }
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    .categories {
      cursor: pointer;
    }
    p {
      color: #666666;
      cursor: pointer;
      a:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
