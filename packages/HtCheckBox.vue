<template>
  <label
    class="ht-checkbox"
    :class="{
      'is-checked': isActive,
      'is-disabled': disabled
    }">
    <span class="ht-checkbox-input">
      <span class="ht-checkbox-inner"></span>
      <input
        type="checkbox"
        class="ht-checkbox-original"
        :name="name"
        :disabled="disabled"
        v-model="model"
        :value="label"
      />
    </span>
    <span class="ht-checkbox-label">
      <slot>
        <span>{{label}}</span>
        <template v-if="!label">备选项</template>
      </slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "ht-checkbox",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    },
    label: null,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isGroup() {
      return !!this.CheckBoxGroup;
    },
    isActive() {
      return this.isGroup ? this.CheckBoxGroup.value.includes(this.label) : this.value == true;
    },
    model: {
      get() {
        return this.isGroup ? this.CheckBoxGroup.value : this.value;
      },
      set(val) {
        this.isGroup ? this.CheckBoxGroup.$emit("input", val) : this.$emit("input", val);
      }
    }
  },
  inject: {
    CheckBoxGroup: {
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.ht-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 16px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .ht-checkbox-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
  }
  .ht-checkbox-inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    box-sizing: border-box;
    width: 15px;
    height: 15px;
    background-color: #fff;
    z-index: 1;
    transition: all 0.2s;
    &:hover {
      border: 1px solid #00a2ff;
    }
    &:after {
      box-sizing: content-box;
      content: "";
      border: 1px solid #fff;
      border-left: 0;
      border-top: 0;
      height: 7px;
      left: 4px;
      position: absolute;
      top: 1px;
      transform: rotate(45deg) scaleY(0);
      width: 3px;
      transition: transform 0.15s ease-in 0.05s;
      transform-origin: center;
    }
  }
  .ht-checkbox-original {
    opacity: 0;
    outline: none;
    position: absolute;
    left: 10px;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
  }
  .ht-checkbox-label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
.ht-checkbox.is-checked {
  .ht-checkbox-input {
    .ht-checkbox-inner {
      background-color: #00a2ff;
      border-color: #00a2ff;
      &:after {
        transform: rotate(45deg) scale(1);
      }
    }
  }
  .ht-checkbox-label {
    color: #00a2ff;
  }
}
.ht-checkbox.is-disabled {
  color: #a4a7a8;
  cursor: not-allowed;
  .ht-checkbox-input {
    cursor: not-allowed;
    .ht-checkbox-inner,
    .ht-checkbox-inner:hover {
      border: 1px solid #d4d6d6;
      background-color: #edeeee;
      border-color: white;
    }
  }
  .ht-checkbox-label {
    color: #a8afaf;
  }
}
</style>