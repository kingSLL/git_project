import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/discover_music/recommend_view.vue"),
    },
    {
      path: "/recommend",
      component: () => import("@/views/discover_music/recommend_view.vue"),
    },
    {
      path: "/rank",
      component: () => import("@/views/discover_music/rank_view.vue"),
    },
    {
      path: "/playlist",
      component: () => import("@/views/discover_music/playlist_view.vue"),
    },
    {
      path: "/dj",
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
      path: "/artist",
      component: () => import("@/views/discover_music/singer_view.vue"),
    },
    {
      path: "/album",
      component: () => import("@/views/discover_music/album_view.vue"),
    },
  ],
});

export default router;
