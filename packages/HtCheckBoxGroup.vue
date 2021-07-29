<template>
  <label class="ht-checkbox-group">
      <slot></slot>
  </label>
</template>

<script>
export default {
  name: "ht-checkbox-group",
  props: {
      value: {
          type: Array
      }
  },
  provide() {
      return {
          CheckBoxGroup: this
      }
  }
};
</script>

<style>
</style>