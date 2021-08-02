<template>
  <span>
    <i :class="'iconfont ' + icon"></i>
  </span>
</template>

<script>
export default {
  name: "ht-icon",
  props: {
    icon: {
      String,
      default: ""
    }
  }
};
</script>

<style>
</style>