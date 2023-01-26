import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "",
      component: () => import("@/views/discover_music/recommend_view.vue"),
    },
    {
      path: "/discover_music/recommend",
      component: () => import("@/views/discover_music/recommend_view.vue"),
    },
    {
      path: "/discover_music/rank",
      component: () => import("@/views/discover_music/rank_view.vue"),
    },
    {
      path: "/discover_music/playlist",
      component: () => import("@/views/discover_music/playlist_view.vue"),
    },
    {
      path: "/discover_music/dj",
      component: () => import("@/views/discover_music/dj_view.vue"),
      children: [
        {
          path: "",
          component: () => import("pages/dj/router/cps_dj_home.vue"),
        },
        {
          path: "category",
          component: () => import("pages/dj/router/cps_dj_other.vue"),
        },
      ],
    },
    {
      path: "/discover_music/artist",
      component: () => import("@/views/discover_music/singer_view.vue"),
      children: [
        {
          path: "",
          component: () => import("pages/singer/sub/singer_contant_cps.vue"),
          name: "signed",
        },
        {
          path: "cat",
          component: () => import("pages/singer/sub/singer_contant_cps.vue"),
          name: "cat",
        },
      ],
    },
    {
      path: "/discover_music/album",
      component: () => import("@/views/discover_music/album_view.vue"),
    },
    {
      path: "/album",
      component: () => import("pages/route/album/sing_album.vue"),
    },
    {
      path: "/playlist",
      component: () => import("pages/route/playlist/sing_playlist.vue"),
    },
    {
      path: "/song",
      component: () => import("pages/route/song/sing_song.vue"),
    },
    {
      path: "/artist",
      component: () => import("pages/route/artist/sing_artist.vue"),
      children: [
        {
          path: "",
          component: () => import("pages/route/artist/sub/hot_work.vue"),
        },
        {
          path: "album",
          component: () => import("pages/route/artist/sub/album_all.vue"),
        },
        {
          path: "mv",
          component: () => import("pages/route/artist/sub/mv_related.vue"),
        },
        {
          path: "desc",
          component: () => import("pages/route/artist/sub/artist_desc.vue"),
        },
      ],
    },
  ],
});

export default router;
