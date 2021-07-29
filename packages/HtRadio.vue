<template>
  <label class="ht-radio" :class="{'is-checked': isActive}">
    <span class="ht-radio-input">
      <span class="ht-radio-inner"></span>
      <input
        type="radio"
        class="ht-radio-original"
        :value="label"
        :name="name"
        v-model="model"
      />
    </span>
    <span class="ht-radio-label">
      <slot>选项1</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "ht-radio",
  inject: {
    radioGroups: {
      default: ""
    }
  },
  computed: {
    model: {
      get() {
        return  this.radioGroups ? this.radioGroups.value : this.value;
      },
      set(val) {
        this.radioGroups ? this.radioGroups.$emit("input", val) : this.$emit("input", val);
      }
    },
    isGroup() {
      return !!this.radioGroups;
    },
    isActive() {
      return this.isGroup ? this.radioGroups.value === this.label : this.value === this.label;
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    value: null,
    name: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.ht-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    outline: none;
    margin-right: 30px;
    user-select: none;
    .ht-radio-input {
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
    }
    .ht-radio-inner {
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        display: inline-block;
        box-sizing: border-box;
        &::after {
            width: 4px;
            height: 4px;
            border-radius: 100%;
            background-color: white;
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale(0);
            transition: transform 0.15s ease-in-out;
        }
    }
    .ht-radio-original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 1px;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
    .ht-radio-label {
      padding-left: 10px;
    }
}
.ht-radio.is-checked {
  .ht-radio-input {
    .ht-radio-inner {
      border-color: #00A2FF;
      background-color: #00A2FF;
      &::after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .ht-radio-label {
    color: #00A2FF;
  }
}
</style>