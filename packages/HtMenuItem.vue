<template>
  <li
    :class="{
      'is-disabled': disabled,
      'is-active': handleActive
    }"
    @click="handleClick"
    :style="disabled&&handleSettingBack ? 'background-color:transparent;color:gray;' : handleSettingBack?'color:#ced6e0;':''"
  >
    <slot name="title"></slot>
  </li>
</template>

<script>
export default {
  name: "ht-menu-item",
  data() {
    return {
      index_: ""
    };
  },
  created() {
    this.index_ = this.values.activeIndex;
  },
  inject: {
    values: {
      default: ""
    }
  },
  computed: {
    isValues() {
      return !!this.values;
    },
    handleActive() {
      return this.values.activeIndex === this.index;
    },
    handleSettingBack() {
      return !!this.values.backgroundColor;
    }
  },
  props: {
    path: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    index: {
      type: null,
      default: ""
    },
    title: {
      default: ""
    }
  },
  methods: {
    handleClick() {
      if (this.disabled) {
        return;
      } else {
        this.handleRouter();
      }
    },
    handleRouter() {
      this.values.activeIndex = this.index;
    }
  },
  watch: {
    "$parent.activeIndex"(newV, oldV) {
      this.index_ = newV;
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  margin: 0;
  padding: 0;
  text-align: center;
  height: 60px;
  line-height: 60px;
  transition: 0.3s;
  color: #747d8c;
  width: 100%;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #eff4ff;
  }
  .iconfont {
    margin-right: 20px;
  }
}
.is-disabled {
  color: #dfe4ea;
  cursor: not-allowed;
  &:hover {
    background-color: transparent;
  }
}
.is-active {
  color: #409eff !important;
}
</style>