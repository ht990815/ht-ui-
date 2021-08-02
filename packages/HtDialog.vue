<template>
  <div>
    <transition name="fade">
      <div class="ht-el-wrapper" v-if="showdialog" @click.self="handleShowDialog">
        <div class="ht-el-dialog" v-if="showdialog" :style="{width:width,marginTop:top}">
          <div class="ht-dialog-header">
            <slot name="title"><span>{{title}}</span></slot>
            <i class="iconfont icon-guanbi" @click="handleShowDialog"></i>
          </div>
          <div class="ht-dialog-container">
            <slot name="content">
              <span class="ht-dialog-container-message">这是一段消息</span>
            </slot>
          </div>
          <div class="ht-dialog-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ht-dialog",
  props: {
    title: {
      type: String,
      default: "提示"
    },
    width: {
      type: String,
      default: "30%"
    },
    top: {
      type: String
    },
    showdialog: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleShowDialog() {
      this.$emit("update:showdialog", false);
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  animation: fade .2s;
}

.fade-leave-active {
  animation: fade .2s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.open-dialog {
  display: inline-block;
  padding: 5px 20px;
  color: rgb(27, 190, 255);
  user-select: none;
  cursor: pointer;
  &:hover {
    color: rgb(3, 169, 235);
  }
}
.ht-el-wrapper {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  .ht-el-dialog {
    padding: 20px;
    background-color: white;
    overflow: hidden;
    margin: 100px auto;
    .ht-dialog-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        width: 0;
        height: 0;
        padding: 0;
      }
    }
    .ht-dialog-header .iconfont {
      font-size: 10px;
      &:hover {
        color: #409eff;
        cursor: pointer;
      }
    }
    .ht-dialog-container .ht-dialog-container-message {
      display: block;
      padding: 40px 10px;
    }
    .ht-dialog-footer {
      padding: 20px;
      text-align: right;
    }
  }
}
</style>