<template>
    <label :for="uuid" v-if="label">{{label}}</label>
      <input
      v-bind="$attrs"
        :placeholder="label"
        class="field"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :id="uuid"
        :aria-describedby="error ?  `${uuid}-error` : null"
        :aria-invalid="error ? true : null"
      >

      <p v-if="error" 
      aria-live="assertive"
      :id="`${uuid}-error`"
      class="errorMessage">
          {{ error }}
      </p>
</template>
<script>
import UniqueID from '@/features/UniqueID'
export default {
    setup () {
        const uuid = UniqueID().getID()
        return {
            uuid
        }
    },
    name: "BaseInput",
    props: {
        label: {
            type: String,
            default: ""
        },
        modelValue: {
            type: [String, Number],
            default: ''
        },
        error: {
            type: String,
            default: ''
        }
    }
}
</script>