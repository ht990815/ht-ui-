<template>
  <div
    class="ht-menu is-light"
    :style="{
      backgroundColor: backgroundColor,
      width: width
    }"
  >
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ht-menu",
  data() {
    return {
      activeIndex: "",
    };
  },
  created() {
    this.activeIndex = this.defaultActive;
  },
  props: {
    defaultActive: {
      type: String || Number,
      default: "",
      required: true
    },
    backgroundColor: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "250px"
    }
  },
  provide() {
    return {
      values: this
    };
  }
};
</script>

<style lang="scss" scoped>
.ht-nav-container {
  .ht-nav-sidebar {
    width: 200px;
    height: 100%;
    background-color: #bdc3c7;
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s;
      transform: translateY(0px);
    }
    .fade-enter,
    .fade-leave-to {
      opacity: 0;
      transform: translateY(-200px);
      height: 0;
    }

    .test {
      text-align: center;
      transition: 0.3s;
      color: #747d8c;
      width: 100%;
      cursor: pointer;
      user-select: none;
      position: relative;
      transition: 0.3s;
      height: 60px;
      line-height: 60px;
      &:hover {
        background-color: #eff4ff;
      }
      .iconfont {
        margin-right: 20px;
      }
      .title-text {
        position: absolute;
        right: 0px;
      }
    }
  }
}
.ht-menu {
  width: 250px;
  overflow: hidden;
}

.ht-menu ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.is-light {
  border-right: 1px solid #ced6e0;
}
</style>