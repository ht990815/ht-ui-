<template>
  <label
    class="ht-switch-box"
    :style="{margin:margin}"
  >
    <input
      type="checkbox"
      :name="name"
      class="switch-checkbox"
      :disabled="disabled"
      @click="handleClick"
    />
    <span
      class="ht-switch"
      :style="{'backgroundColor':disabled ? '#3498db70':''}"
      :class="{'is-disabled': disabled,'is-active':value}"
      ref="switch"
    ></span>
  </label>
</template>

<script>
export default {
  name: "ht-switch",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    defaultColor: {
      type: String,
      default: ""
    },
    activeColor: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    margin: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.setColor();
  },
  methods: {
    async handleClick() {
      this.$emit("input", !this.value);
      // 等到父级更新完了在变化数据
      await this.$nextTick();
      this.setColor();
    },
    setColor() {
      if (this.defaultColor || this.activeColor) {
        let color = this.value ? this.defaultColor : this.activeColor;
        // 通过refs找到Switch修改样式
        this.$refs.switch.style.backgroundColor = color;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.ht-switch-box {
  display: inline-block;
  width: 55px;
  .ht-switch {
    display: inline-block;
    width: 100%;
    height: 25px;
    border-radius: 20px;
    background-color: rgb(211, 211, 211);
    position: relative;
    cursor: pointer;
    transition: 0.3s;
    &::before {
      content: "";
      display: inline-block;
      width: 24px;
      height: 24px;
      position: absolute;
      left: 0;
      top: 0;
      border: 1px solid rgb(211, 211, 211);
      background-color: white;
      border-radius: 50%;
      transition: 0.3s;
    }
  }
  .is-active {
    display: inline-block;
    background-color: rgb(0, 162, 255);
    &::before {
      left: 29px;
      border: 2px solid rgba(0, 162, 255, 0.1);
    }
  }
  .is-disabled {
    cursor: not-allowed;
    background-color: #ecf0f1;
    &::before {
      border: 2px solid #ecf0f1;
    }
  }
  .switch-checkbox {
    width: 0;
    height: 0;
    opacity: 0;
    display: none;
  }
}
</style>