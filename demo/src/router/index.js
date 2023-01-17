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
      component: () => import("pages/album/sub/sing_album.vue"),
    },
  ],
});

export default router;
