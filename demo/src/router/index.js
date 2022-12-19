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
      //   children: [
      //     {
      //       path: "",
      //       component: () =>
      //         import(
      //           "@/components/discove_music/pages/Ranking/content/right_content/right_content.vue"
      //         ),
      //     },
      //   ],
    },
  ],
});

export default router;
