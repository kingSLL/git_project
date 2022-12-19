import { defineStore } from "pinia";
import http from "@/service";
import { ref, computed } from "vue";

export const userRankStore = defineStore("RankStore", () => {
  const currRankIndex = ref(0);
  const currInfo = ref({});
  const currInfoId = ref(0);
  const getRankNameList = computed(async () => {
    const toplist = await http.get("/toplist");
    return toplist.data.list;
  });
  const getRankInfo = computed(async () => {
    const infos = await http.get(`/playlist/detail?id=${currInfoId.value}`);
    currInfo.value = infos.data;
    return currInfo;
  });
  return {
    currRankIndex,
    getRankNameList,
    currInfo,
    currInfoId,
    getRankInfo,
  };
});

export const useRankListStore = defineStore("RankListStore", () => {
  return {};
});
