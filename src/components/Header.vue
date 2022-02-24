<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

import { computed } from "vue";
const nav = computed(() => [
  {
    title: t("works"),
    link: "#works",
  },
  {
    title: t("about"),
    link: "#about",
  },
  {
    title: t("contact"),
    link: "#contact",
  },
]);

function changeLanguage(code) {
  locale.value = code;
}
</script>

<template>
  <header class="header__wrapper">
    <div class="container">
      <div class="header">
        <div class="header__logo">Portfolio.</div>

        <nav class="header__nav">
          <RouterLink
            v-for="(item, index) in nav"
            :key="`header-nav-item-${index}`"
            :to="item.link"
            class="header__nav__item"
          >
            {{ item.title }}
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>
