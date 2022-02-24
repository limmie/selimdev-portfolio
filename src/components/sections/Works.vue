<script setup>
import { ref } from "vue";

import Select from "@/components/elements/Select.vue";

const works = ref([
  {
    title: "Some pet project",
    image:
      "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    description: "Some silly description",
  },
  {
    title: "Some pet project",
    image:
      "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    description: "Some silly description",
  },
  {
    title: "Some pet project",
    image:
      "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    description: "Some silly description",
  },
  {
    title: "Some pet project",
    image:
      "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    description: "Some silly description",
  },
  {
    title: "Some pet project",
    image:
      "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    description: "Some silly description",
  },
  {
    title: "Some pet project",
    image:
      "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    description: "Some silly description",
  },
]);

const selects = ref({
  type: {
    label: "Type",
    expanded: false,
    currentValue: "All",
    items: [
      {
        title: "All",
        value: "all",
      },
    ],
  },
  sort: {
    label: "Sort",
    expanded: false,
    currentValue: "Newest",
    items: [
      {
        title: "Newest",
        value: "newest",
      },
      {
        title: "Oldest",
        value: "oldest",
      },
    ],
  },
});

function some() {
  console.log("some");
}
</script>

<template>
  <section class="works-section__wrapper mt-8">
    <h1
      class="text-center font-size-3"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="600"
    >
      Works
    </h1>

    <div
      class="works-section__grid__wrapper"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="700"
    >
      <div
        class="works-section__grid__header"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="700"
      >
        <div class="d-flex gap-1 mt-2">
          <Select
            :expanded="selects.type.expanded"
            :current-value="selects.type.items[0].title"
            :items="selects.type.items"
            :label="selects.type.label"
          />

          <Select
            :expanded="selects.sort.expanded"
            :current-value="selects.sort.items[0].title"
            :items="selects.sort.items"
            :label="selects.sort.label"
          />
        </div>
      </div>

      <div class="works-section__grid">
        <div
          v-for="(work, index) in works"
          :key="`works-section-item-${index}`"
          class="works-section__grid__item"
        >
          <img
            class="works-section__grid__item__image"
            :src="work.image"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>
