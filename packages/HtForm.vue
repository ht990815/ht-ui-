<template>
  <form class="ht-form">
      <slot></slot>
  </form>
</template>

<script>
export default {
  name: "ht-form",
  props: {
      model: {
          type: Object,
          required: true
      }
  }
}
</script>

<style>

</style>