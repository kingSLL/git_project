<!-- ==========template=============-->
<template>
  <div class="singer_L">
    <template v-for="(item, index) in area" :key="index">
      <div class="singer_classify">
        <h3>{{ Object.values(item)[0] }}</h3>
        <ul>
          <template v-for="(singer, indey) in type" :key="indey">
            <li
              @click="chang(index, indey)"
              :class="{ active: currindex === index && currindey === indey }"
            >
              <span class="temp clickable">
                {{ Object.values(item)[0]
                }}{{
                  index === 0 && indey === 0 ? "歌手" : Object.values(singer)[0]
                }}
              </span>
            </li>
          </template>
        </ul>
      </div>
    </template>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({
  area: Array,
  type: Array,
});

const currindex = ref(0);
const currindey = ref(0);

const router = useRouter();

function chang(index, indey) {
  currindex.value = index;
  currindey.value = indey;
  if (index > 0) {
    router.push({
      name: "cat",
      query: {
        area: Object.keys(props.area[currindex.value])[0],
        type: Object.keys(props.type[currindey.value])[0],
      },
    });
  } else {
    router.push({ name: "signed" });
  }
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.singer_L {
  border-right: 1px solid #ccc;
  padding: 35px 10px;
  width: 180px;
  background-color: #f9f9f9;
  .singer_classify {
    border-bottom: 1px solid red;
    padding-top: 16px;
    h3 {
      height: 25px;
      padding-left: 14px;
      font-size: 16px;
      line-height: 25px;
    }
    ul {
      li {
        width: 160px;
        height: 29px;
        margin-bottom: 2px;
        line-height: 29px;
        padding-left: 27px;
        &:last-child {
          margin-bottom: 7px;
        }
        background: url("https://s2.music.126.net/style/web2/img/singer.png?b19d4460d2158036319f97813f90641f")
          no-repeat 0 -30px;
      }
      .active {
        color: #c20b0d;
        background-position: 0 0;
      }
    }
    &:last-of-type {
      border: none;
    }
    &:first-child {
      ul {
        li {
          display: none;
        }
        li:first-child {
          display: block;
        }
      }
    }
  }
}
</style>
