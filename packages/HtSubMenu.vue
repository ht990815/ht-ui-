<template>
  <div class="ht-sub-menu" ref="htSubMenu">
    <div class="ht-sub-menu-title" @click="handleShowMenu" :style="{'color': defaultColor}">
      <slot name="title"></slot>
      <span :class="['icon-right ', {'active-rotate': show}]">
        <i class="iconfont icon-shouqi"></i>
      </span>
    </div>
    <transition name="fade">
      <div ref="htSubMenuCon" class="ht-sub-menu-con" v-if="show">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ht-sub-menu",
  data() {
    return {
      show: false
    }
  },
  props: {
    defaultColor: {
      type: String,
      default: "white"
    }
  },
  methods: {
    handleShowMenu() {
      this.show = !this.show;
      this.$emit("handleShowSubMenu");
    }
  }
};
</script>

<style lang="scss">
.ht-sub-menu {
  overflow: hidden;
  transition: all 0.3s;
  .fade-enter-active,
  .fade-leave-active {
    opacity: 1;
    height: 100%;
    transition: all 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    height: 0;
  }
  .ht-sub-menu-title {
    height: 60px;
    line-height: 60px;
    text-align: center;
    user-select: none;
    cursor: pointer;
    position: relative;
    .active-rotate {
      transform: rotate(90deg);
    }
    .icon-right {
      display: inline-block;
      width: 30px;
      margin-left: 30px;
      transition: all 0.3s;
      position: absolute;
      right: 0;
    }
  }
}
</style>