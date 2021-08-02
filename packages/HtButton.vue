<template>
  <button
    class="ht-button"
    :class="[`ht-button--${type}`,{
     'isplain': plain ,
     'round': round ,
     'iscircle': circle ,
     'isdisabled': disabled
    }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <i :class="'iconfont ' + icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "ht-button",
  props: {
    type: {
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="scss" scoped>
// 默认样式
.ht-button {
  user-select: none;
  padding: 8px 25px;
  cursor: pointer;
  margin: 10px;
  border-radius: 4px;
  font-size: 14px;
  transition: all 0.1s;
}

.ht-button--default {
  border: 1px solid #7a7b7c;
  color: #7a7b7c;
  background-color: #69839e00;
  &:hover,
  &:focus {
    background-color: #409eff20;
    color: #087ff7;
    border: 1px solid #409eff20;
  }
  &:active {
    color: #087ff7;
    border: 1px solid #087ff7;
  }
}

.ht-button--text {
  border: 1px solid #047cf300;
  background-color: #047cf300;
  color: #54a9fd;
  font-size: 18px;
  &:hover {
    color: #0776e6;
  }
  &:active {
    color: #0776e695;
  }
}
.ht-button--text.isdisabled {
  border: 1px solid #047cf300;
  background-color: #047cf300;
  color: rgb(192, 192, 192);
  font-size: 18px;
  cursor: not-allowed;
  &:hover {
    color: rgb(192, 192, 192);
  }
  &:active {
    color: rgb(192, 192, 192);
  }
}

.ht-button--default.isdisabled,
.ht-button--default.isdisabled:hover,
.ht-button--default.isdisabled:focus,
.ht-button--default.isdisabled:active {
  border: 1px solid #d3dbe2;
  color: #d3dbe2;
  background-color: #69839e00;
  cursor: not-allowed;
}

.ht-button--primary {
  border: 1px solid #409eff;
  color: white;
  background-color: #409eff;
  &:hover,
  &:focus {
    color: white;
    background-color: #409eff99;
  }
  &:active {
    color: white;
    background-color: #409eff;
  }
}

.ht-button--primary.isdisabled,
.ht-button--primary.isdisabled:hover,
.ht-button--primary.isdisabled:focus,
.ht-button--primary.isdisabled:active {
  border: 1px solid #A0CFFF;
  color: white;
  background-color: #A0CFFF;
  cursor: not-allowed;
}

.ht-button--success {
  border: 1px solid #44bd32;
  color: white;
  background-color: #44bd32;
  &:hover,
  &:focus {
    color: white;
    background-color: #44bd3299;
  }
  &:active {
    border: 1px solid #44bd32;
    color: white;
    background-color: #44bd32;
  }
}

.ht-button--success.isdisabled,
.ht-button--success.isdisabled:hover,
.ht-button--success.isdisabled:focus,
.ht-button--success.isdisabled:active {
  border: 1px solid #abeea1;
  color: white;
  background-color: #abeea1;
  cursor: not-allowed;
}

.ht-button--info {
  border: 1px solid #7f8c8d99;
  color: white;
  background-color: #7f8c8d;
  &:hover,
  &:focus {
    color: white;
    background-color: #7f8c8d99;
  }
  &:active {
    border: 1px solid #7f8c8d99;
    color: white;
    background-color: #7f8c8d;
  }
}

.ht-button--info.isdisabled,
.ht-button--info.isdisabled:hover,
.ht-button--info.isdisabled:focus,
.ht-button--info.isdisabled:active {
  border: 1px solid #C8C9CC;
  color: white;
  background-color: #C8C9CC;
  cursor: not-allowed;
}

.ht-button--warning {
  border: 1px solid #e67e2299;
  color: white;
  background-color: #e67e22;
  &:hover,
  &:focus {
    color: white;
    background-color: #e67e2299;
  }
  &:active {
    border: 1px solid #e67e2299;
    color: white;
    background-color: #e67e22;
  }
}

.ht-button--warning.isdisabled,
.ht-button--warning.isdisabled:hover,
.ht-button--warning.isdisabled:focus,
.ht-button--warning.isdisabled:active {
  border: 1px solid #eea566;
  color: white;
  background-color: #eea566;
  cursor: not-allowed;
}

.ht-button--error {
  border: 1px solid #e74c3c99;
  color: white;
  background-color: #e74c3c;
  &:hover,
  &:focus {
    color: white;
    background-color: #e74c3c99;
  }
  &:active {
    border: 1px solid #e74c3c99;
    color: white;
    background-color: #e74c3c;
  }
}

.ht-button--error.isdisabled,
.ht-button--error.isdisabled:hover,
.ht-button--error.isdisabled:focus,
.ht-button--error.isdisabled:active {
  border: 1px solid #e97e72;
  color: white;
  background-color: #e97e72;
  cursor: not-allowed;
}

// 朴素按钮
.ht-button--default.isplain {
  border: 1px solid rgb(82, 81, 81);
  color: rgb(82, 81, 81);
  background-color: rgba(0, 0, 0, 0);
  &:hover,
  &:focus {
    border: 1px solid #409eff99;
    color: #409eff;
    background-color: #409eff00;
  }
  &:active {
    color: #067cf1;
    border: 1px solid #067cf1;
  }
}

.ht-button--default.isdisabled,
.ht-button--default.isdisabled:hover,
.ht-button--default.isdisabled:focus,
.ht-button--default.isdisabled:active {
  border: 1px solid rgb(207, 207, 207);
  color: rgb(207, 207, 207);
  cursor: not-allowed;
}


.ht-button--primary.isplain {
  border: 1px solid #409eff;
  color: #409eff;
  background-color: #409eff20;
  &:hover,
  &:focus {
    color: white;
    background-color: #409eff;
  }
  &:active {
    color: white;
    background-color: #047cf3;
  }
}

.ht-button--primary.isplain.isdisabled,
.ht-button--primary.isplain.isdisabled:hover,
.ht-button--primary.isplain.isdisabled:focus,
.ht-button--primary.isplain.isdisabled:active {
  border: 1px solid #8cc1f510;
  color: #8cc1f5;
  background-color: #409eff20;
  cursor: not-allowed;
}

.ht-button--success.isplain {
  border: 1px solid #44bd32;
  color: #44bd32;
  background-color: #44bd3220;
  &:hover,
  &:focus {
    color: white;
    background-color: #44bd32;
  }
  &:active {
    color: white;
    background-color: #1c9908;
  }
}

.ht-button--success.isplain.isdisabled,
.ht-button--success.isplain.isdisabled:hover,
.ht-button--success.isplain.isdisabled:focus,
.ht-button--success.isplain.isdisabled:active {
  border: 1px solid #a7f59b;
  color: #A4DAA2;
  background-color: #F0F9EB;
  cursor: not-allowed;
}

.ht-button--info.isplain {
  border: 1px solid #7f8c8d;
  color: #7f8c8d;
  background-color: #7f8c8d20;
  &:hover,
  &:focus {
    color: white;
    background-color: #7f8c8d;
  }
  &:active {
    color: white;
    background-color: #606768;
  }
}

.ht-button--info.isplain.isdisabled,
.ht-button--info.isplain.isdisabled:hover,
.ht-button--info.isplain.isdisabled:focus,
.ht-button--info.isplain.isdisabled:active {
  border: 1px solid #c7cfcf;
  color: #c7cfcf;
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.ht-button--warning.isplain {
  border: 1px solid #e67e22;
  color: #e67e22;
  background-color: #e67e2220;
  &:hover,
  &:focus {
    color: white;
    background-color: #e67e22;
  }
  &:active {
    color: white;
    background-color: #be5b03;
  }
}

.ht-button--warning.isplain.isdisabled,
.ht-button--warning.isplain.isdisabled:hover,
.ht-button--warning.isplain.isdisabled:focus,
.ht-button--warning.isplain.isdisabled:active {
  border: 1px solid #ffcda2;
  color: #ffcda2;
  background-color: #fff4ea;
  cursor: not-allowed;
}

.ht-button--error.isplain {
  border: 1px solid #e74c3c;
  color: #e74c3c;
  background-color: #e74c3c20;
  &:hover,
  &:focus {
    color: white;
    background-color: #e74c3c;
  }
  &:active {
    color: white;
    background-color: #c4200e;
  }
}

.ht-button--error.isplain.isdisabled,
.ht-button--error.isplain.isdisabled:hover,
.ht-button--error.isplain.isdisabled:focus,
.ht-button--error.isplain.isdisabled:active {
  border: 1px solid #ffe3e0;
  color: #ffcac5;
  background-color: #fff7f6;
  cursor: not-allowed;
}

// 圆角按钮
.ht-button--default.round {
  border: 1px solid rgb(82, 81, 81);
  color: rgb(82, 81, 81);
  background-color: rgba(0, 0, 0, 0);
  border-radius: 20px;
  &:hover,
  &:focus {
    border: 1px solid #409eff11;
    color: #409eff;
    background-color: #409eff20;
  }
  &:active {
    border: 1px solid #409eff;
  }
}

.ht-button--primary.round {
  border: 1px solid #409eff;
  color: white;
  background-color: #409eff;
  border-radius: 20px;
  &:hover,
  &:focus {
    color: white;
    background-color: #409eff99;
  }
  &:active {
    background-color: #1a8afa;
  }
}

.ht-button--success.round {
  border: 1px solid #44bd3299;
  color: white;
  background-color: #44bd32;
  border-radius: 20px;
  &:hover,
  &:focus {
    color: white;
    background-color: #44bd3299;
  }
  &:active {
    background-color: #28b113;
  }
}

.ht-button--info.round {
  border: 1px solid #7f8c8d99;
  color: white;
  background-color: #7f8c8d;
  border-radius: 20px;
  &:hover,
  &:focus {
    color: white;
    background-color: #7f8c8d99;
  }
  &:active {
    background-color: #778283;
  }
}

.ht-button--warning.round {
  border: 1px solid #e67e2299;
  color: white;
  background-color: #e67e22;
  border-radius: 20px;
  &:hover,
  &:focus {
    color: white;
    background-color: #e67e2299;
  }
  &:active {
    background-color: #b95e0e;
  }
}

.ht-button--error.round {
  border: 1px solid #e74c3c99;
  color: white;
  background-color: #e74c3c;
  border-radius: 20px;
  &:hover,
  &:focus {
    color: white;
    background-color: #e74c3c99;
  }
  &:active {
    background-color: #e62914;
  }
}

// 原型图标
.iscircle {
  padding: 12px;
  border-radius: 100%;
  width: 50px;
}
</style>