<template>
  <label v-if="label">{{ label }}</label>
  <select
    :value="modelValue"
    v-bind="{
      ...$attrs,
      onChange: ($event) => {
        $emit('update:modelValue', $event.target.value);
      },
    }"
    class="field"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>
<script>
//import { defineComponent } from '@vue/composition-api'
// export default defineComponent({
export default {
  name: "BaseSelect",
  props: {
    label: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
};
//)
</script>
