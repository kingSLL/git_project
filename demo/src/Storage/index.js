import { defineStore } from "pinia";
import http from "@/service";
import { computed, ref, onMounted, watch } from "vue";

export const userAlbumStore = defineStore("AlbumStore", () => {
  const albums = ref([]);
  const areaName = {
    ALL: "全部",
    ZH: "华语",
    EA: "欧美",
    KR: "韩国",
    JP: "日本",
  };
  /**
   *
   * @param {Number} total 不填默认为all
   * @returns 新碟集合
   */
  async function getAlbumNew(total) {
    const request = await http.get("album/newest");
    albums.value = request.data.albums;
    if (albums.value.length > total) {
      albums.value.splice(total, albums.value.length - total);
    }
    return albums.value;
  }
  /**
   *
   * @param {String} area 默认全部
   * @returns
   */
  async function getAlbum(area) {
    const request = await http.get(`album/new?limit=35&area=${area}`);
    return request.data.albums;
  }
  return {
    getAlbumNew,
    getAlbum,
    areaName,
  };
});
export const userDJStore = defineStore("DJStore", () => {
  async function getDJ_recommend(type) {
    if (!type) type = 2;
    const request = await http.get(`dj/recommend/type?type=${type}`);
    return request.data.djRadios;
  }

  async function getCatelist() {
    const request = await http.get("dj/catelist");
    return request.data.categories;
  }
  return {
    getCatelist,
    getDJ_recommend,
  };
});
export const userlognStore = defineStore("lognStore", () => {
  const isLogn = ref(false);

  function changeLognSate(value) {
    isLogn.value = value;
  }
  return {
    isLogn,
    changeLognSate,
  };
});
export const userAccountStore = defineStore("AccountStore", () => {
  const account = ref({});
  return {
    account,
  };
});
export const userSongStore = defineStore("SongStore", () => {
  const currSongId = computed(() => {
    return currPlaySong.value[currIndex.value]?.id;
  });
  const currPlaySong = ref([]);
  const currSongURL = computed(() => {
    return `https://music.163.com/song/media/outer/url?id=${
      currPlaySong.value[currIndex.value]?.id
    }.mp3`;
  });
  const currIndex = computed(() => {
    let currIndex = 0;
    currPlaySong.value.forEach((song, index) => {
      if (currSongId.value === song.id) {
        currIndex = index;
      } else {
        currIndex = 0;
      }
    });
    return currIndex;
  });
  const isPlay = ref(false);
  const audioEl = ref({});
  onMounted(() => {
    audioEl.value = document.getElementsByTagName("audio");
  });
  watch(isPlay, (curr) => {
    setTimeout(() => {
      if (curr) {
        audioEl.value[0]?.play();
      } else {
        audioEl.value[0]?.pause();
      }
    });
  });
  watch(currSongId, () => {
    setTimeout(() => {
      if (isPlay.value) {
        audioEl.value[0]?.play();
      } else {
        audioEl.value[0]?.pause();
      }
    });
  });

  return {
    currIndex,
    currPlaySong,
    currSongURL,
    currSongId,
    isPlay,
  };
});
