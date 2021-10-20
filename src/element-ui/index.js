/*
 * @Explain: 
 * @version: 
 * @Author: SuperLy
 * @Date: 2021-10-19 18:15:33
 * @LastEditors: SuperLy
 * @LastEditTime: 2021-10-20 11:42:37
 */
// 按需引入 element-ui
import { Button, Container, Header, Row, Col, Card, Input, Image, Menu, MenuItem, MenuItemGroup, Aside, Submenu } from 'element-ui';
// 引入 element-ui 隐藏类,类名可以添加在任何 DOM 元素或自定义组件上
import 'element-ui/lib/theme-chalk/display.css';
export default {
    install: function(Vue) {
        Vue.use(Button);
        Vue.use(Container);
        Vue.use(Header);
        Vue.use(Row);
        Vue.use(Col);
        Vue.use(Card);
        Vue.use(Input);
        Vue.use(Image);
        Vue.use(Menu);
        Vue.use(Aside);
        Vue.use(MenuItem);
        Vue.use(MenuItemGroup);
        Vue.use(Submenu);
    }
}