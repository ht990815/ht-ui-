import HtButton from '../packages/HtButton.vue'
import HtCheckBox from '../packages/HtCheckBox.vue'
import HtCheckBoxGroup from '../packages/HtCheckBoxGroup.vue'
import HtDialog from '../packages/HtDialog.vue'
import HtForm from '../packages/HtForm.vue'
import HtFormItem from '../packages/HtFormItem.vue'
import HtInput from '../packages/HtInput.vue'
import HtRadio from '../packages/HtRadio.vue'
import HtRadioGroup from '../packages/HtRadioGroup.vue'
import HtSwitch from '../packages/HtSwitch.vue'
import HtMenu from '../packages/HtMenu.vue'
import HtMenuGroup from '../packages/HtMenuGroup.vue'
import HtMenuItem from '../packages/HtMenuItem.vue'
import HtIcon from '../packages/HtIcon.vue'
import "./font_2696997_ymb0xfig3z/iconfont.scss"

const comLists = [
  HtButton,
  HtCheckBox,
  HtCheckBoxGroup,
  HtDialog,
  HtForm,
  HtFormItem,
  HtInput,
  HtRadio,
  HtRadioGroup,
  HtSwitch,
  HtMenu,
  HtMenuGroup,
  HtMenuItem,
  HtIcon
]

// install当实例化时会被调用，统一导出组件
const install = function (Vue) {
  comLists.forEach(item => {
    Vue.component(item.name, item);
  });
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  install
}
