import { defineStore } from "pinia";
import http from "@/service";
import { ref } from "vue";

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
