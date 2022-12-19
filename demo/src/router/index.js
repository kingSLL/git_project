import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/发现音乐/recommend_view.vue"),
    },
    {
      path: "/recommend",
      component: () => import("@/views/发现音乐/recommend_view.vue"),
    },
    {
      path: "/rank",
      component: () => import("@/views/发现音乐/rank_view.vue"),
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
