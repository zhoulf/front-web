import Vue from 'vue'
import App from './App.vue'
import router from "./router"
// import store from './store/index' 
import EventBus from '../../common/utils/EventBus'
import Http from '../../common/utils/Http'
import VueI18n from 'vue-i18n'
// import ElementUI from 'element-ui'
import { 
  Button, 
  Select,
  Container,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Header,
  Main,
  Aside,
  Table,
  Row,
  TableColumn,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElementLocale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import globalEnLocale from './i18n/en-US'
import globalZhLocale from './i18n/zh-CN'


Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(EventBus)
Vue.use(Http)
// 引入组件
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Container.name, Container)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(Header.name, Header)
Vue.component(Main.name, Main)
Vue.component(Aside.name, Aside)
Vue.component(Table.name, Table)
Vue.component(Row.name, Row)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Dropdown.name, Dropdown)
Vue.component(DropdownMenu.name, DropdownMenu)
Vue.component(DropdownItem.name, DropdownItem)
  


const messages = {
  en: Object.assign(globalEnLocale, enLocale),
  zh: Object.assign(globalZhLocale, zhLocale)
}

const i18n = new VueI18n({
  locale: 'zh', // set locale
  messages, // set locale messages
})

ElementLocale.i18n((key, value) => i18n.t(key, value))


new Vue({
  i18n,
  // store,
  router,
  render: h => h(App),
}).$mount('#app')
