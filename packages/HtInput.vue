<template>
  <div :class="{'input-box-disabled': disabled, 'ht-input-box': !disabled}">
    <input
        class="ht-input"
       :class="['input--', {'is-disabled': disabled}]"
       :placeholder="placeholder"
       :type="types"
       :name="name"
       :disabled="disabled"
       :value="value"
       @input="handleInput"
       @blur="handleBlur"
    />
    <span class="ht-input-handle" v-if="!disabled">
        <i v-if="clearable" @click="handleClear" class="iconfont icon-cuowu"></i>
        <i v-if="isShowOrHidden===1&&showPassword" @click="handleShow" class="iconfont icon-xianshi"></i>
        <i v-if="isShowOrHidden===2" @click="handleHidden" class="iconfont icon-icon-test"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "ht-input",
  data() {
      return {
        types: "",
        isShowOrHidden: null,
        val: ""
      }
  },
  created() {
      this.types = this.type;
  },
  props: {
    name: {
        type: String,
        default: ""
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    type: {
        type: String,
        default: "text"
    },
    disabled: {
        type: Boolean,
        default: false
    },
    value: {
        type: String,
        default: ""
    },
    clearable: {
        type: Boolean,
        default: false
    },
    showPassword: {
        type: Boolean,
        default: false
    }
  },
  methods: {
      handleInput(e) {
        this.val = e.target.value;
        this.$emit("input", this.val);
        this.val === "" ? this.isShowOrHidden = 1 : this.isShowOrHidden = 1;
      },
      handleClear() {
        this.$emit("input", "");
      },
      handleShow() {
        this.types = "text";
        this.isShowOrHidden = 2;
      },
      handleHidden() {
        this.types = "password";
        this.isShowOrHidden = 1;
      },
      handleBlur() {
          if (this.val === "") this.isShowOrHidden = null;
      }
  }
};
</script>

<style lang="scss">
.ht-input-box,
.input-box-disabled {
    transition: all 0.5s;
    display: inline-block;
    border: 1px solid #dfe6e9;
    outline: none;
    border-radius: 5px;
    font-size: 17px;
    transition: 0.2s;
    cursor: pointer;
  input {
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 17px;
    transition: 0.2s;
    height: 40px;
    cursor: pointer;
    padding: 0 10px;
    &::placeholder {
      color: #b2bec3;
    }
  }
  .input--.is-disabled {
      padding-right: 25px;
      cursor: not-allowed;
  }
  .ht-input-clear .iconfont {
      font-size: 20px;
      cursor: pointer;
      color: #b2bec3;
      &:hover {
          color: #3c4246;
      }
  }
  .ht-input-handle {
      display: inline-block;
      width: 30px;
      height: 100%;
      text-align: center;
  }
}
.input-box-disabled{
    padding: 0;
}
</style>