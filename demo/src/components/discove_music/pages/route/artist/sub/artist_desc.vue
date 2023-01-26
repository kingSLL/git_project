<!-- ==========template=============-->
<template>
  <div class="artist_desc">
    <div class="desc">
      <h3>{{ artistName }}简介</h3>
      <p>
        {{ briefDesc }}
      </p>
    </div>
    <template v-if="introductions">
      <template v-for="(introduction, index) in introductions" :key="index">
        <div>
          <h3>{{ introduction?.ti }}</h3>
          <template
            v-for="(text, indey) in introduction?.texts"
            :key="5 + indey"
          >
            <p>{{ text }}</p>
          </template>
        </div>
      </template>
    </template>
  </div>
</template>
<!-- ===========script============== -->
<script setup>
import http from "@/service";
import { ref } from "vue";
import { useRoute } from "vue-router";
defineProps({
  artistName: String,
});
const briefDesc = ref("");
const introductions = ref([]);
const route = useRoute();
http.get(`/artist/desc?id=${route.query.id}`).then((res) => {
  briefDesc.value = res.data.briefDesc;
  introductions.value = res.data.introduction;
  getContentText(introductions.value);
  console.log(introductions.value);
});

function getContentText(texts) {
  texts.forEach((element) => {
    element.texts = getText(element.txt);
  });
}
function getText(text) {
  return text.split(/\n/).filter((str) => str !== "");
}
</script>
<!-- ============style============== -->
<style lang="less" scoped>
.artist_desc {
  .desc {
    h3 {
      padding-left: 5px;
      border-left: 4px solid #c10c0d;
    }
  }
}
p {
  line-height: 25px;
  color: rgb(102, 102, 102);
  text-indent: 2em;
  margin: 10px 0 20px;
}
</style>
