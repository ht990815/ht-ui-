<template>
  <div>
    <div class="ht-group-title">
      <slot name="title">{{title}}</slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ht-menu-group",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.ht-group-title {
  width: 100%;
  vertical-align: middle;
  text-align: center;
  color: rgb(167, 167, 167);
  font-size: 13px;
}
</style>