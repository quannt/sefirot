<template>
  <SInputBase
    class="SInputCheckboxes"
    :name="name"
    :label="label"
    :note="note"
    :help="help"
  >
    <div class="container">
      <div class="row">
        <div class="col" :key="option.value" v-for="option in options">
          <SInputCheckbox
            :text="option.label"
            :value="isChecked(option.value)"
            @change="handleChange(option.value)"
          />
        </div>
      </div>
    </div>
  </SInputBase>
</template>

<script>
import SInputBase from './SInputBase'
import SInputCheckbox from './SInputCheckbox'

export default {
  components: {
    SInputBase,
    SInputCheckbox
  },

  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    name: { type: String, default: null },
    label: { type: String, default: null },
    note: { type: String, default: null },
    help: { type: String, default: null },
    options: { type: Array, required: true },
    value: { type: Array, required: true }
  },

  methods: {
    isChecked (value) {
      return this.value.includes(value)
    },

    handleChange (value) {
      const difference = this.value
        .filter(v => v !== value)
        .concat(this.value.includes(value) ? [] : [value])

      this.$emit('change', difference)
    }
  }
}
</script>

<style lang="postcss" scoped>
@import "@/assets/styles/variables";

.container {
  display: flex;
}

.row {
  margin: -2px -8px;
}

.col {
  padding: 2px 8px;
}
</style>
