<script setup>
import Header from "./components/Header.vue";
import "@/assets/scss/main.scss";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <Header />
  <RouterView />
</template>
