<template>
  <div class="ht-form-item">
    <span style="marginRight:10px;">{{label}}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ht-form-item",
  props: {
    label: null
  }
};
</script>

<style lang="scss" scoped>
.ht-form-item {
    margin: 10px;
    display: flex;
    align-items: center;
}
</style>