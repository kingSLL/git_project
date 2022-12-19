import { createApp } from "vue";
import router from "./router/index";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./assets/css/reset.css";
import "./assets/css/mycss.css";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
