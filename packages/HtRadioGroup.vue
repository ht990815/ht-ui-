<template>
  <div class="ht-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ht-radio-group",
  props: {
    value: null
  },
  provide() {
      return {
          radioGroups: this
      }
  }
};
</script>

<style>
</style>