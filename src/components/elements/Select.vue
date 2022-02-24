<script>
import { ref } from "vue";

export default {
  props: {
    expanded: {
      type: Boolean,
      default: false,
      required: true,
    },
    currentValue: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
      default: [],
    },
    label: {
      type: String,
      required: false,
    },
  },

  emits: ["close"],

  setup(props, { emit }) {
    const label = ref(props.label);
    let expanded = ref(props.expanded);
    const items = ref(props.items);
    const currentValue = ref(props.currentValue);

    return { label, expanded, items, currentValue };
  },
};
</script>

<template>
  <div
    class="form-select"
    :class="{ active: expanded }"
    v-click-outside="() => (expanded = false)"
  >
    <div v-if="label" class="form-select__label">{{ label }}:</div>

    <div class="form-select__current-value" @click="expanded = !expanded">
      <span>{{ currentValue }}</span>

      <fa-icon class="form-select__icon" :icon="['fas', 'caret-down']" />
    </div>

    <div class="form-select__items">
      <div
        v-for="(item, index) in items"
        :key="`type-item-${index}`"
        class="form-select__items__item"
      >
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>
