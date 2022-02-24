import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

import { createPinia } from "pinia";
app.use(createPinia());

// i18n LANGUAGE MANAGEMENT
import { en, ru } from "./langs";
import { createI18n } from "vue-i18n";
const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    ru,
  },
});
app.use(i18n);

import router from "./router";
app.use(router);

import AOS from "aos";
import "aos/dist/aos.css";
app.use(AOS.init());

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
library.add(faCaretDown);
app.component("fa-icon", FontAwesomeIcon);

import vClickOutside from "click-outside-vue3";
app.use(vClickOutside);

app.mount("#app");
