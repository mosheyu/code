<!--
 * @Explain: 顶部导航栏组件
 * @version: 
 * @Author: SuperLy
 * @Date: 2021-10-19 16:34:31
 * @LastEditors: SuperLy
 * @LastEditTime: 2021-10-20 12:03:41
-->
<template>
<el-card class="navBox">
    <el-row>
        <el-col :xs="{span:8,offset:8}" :sm="{span:6,offset:9}" :md="{span:4,offset:0}" :lg="{span:3,offset:0}">
            <Logo></Logo>
        </el-col>
        <el-col class="hidden-sm-and-down" :span="4" :offset="4">
            <Search></Search>
        </el-col>
    </el-row>
</el-card>
</template>

<script>
// 引入 Logo 组件
import Logo from './Logo.vue';
// 引入 搜索框 组件
import Search from './Search.vue';

export default {
    name: 'TopNac',
    components: {
        Search,
        Logo
    }
}
</script>

<style>
.el-card__body {
    height: 50px;
    border-radius: 0 !important;
    padding: 0px !important;
    background-color: #f9f9f9;
    overflow: hidden;
}
</style>
