<!--
 * @Explain: 
 * @version: 
 * @Author: SuperLy
 * @Date: 2021-10-19 16:15:15
 * @LastEditors: SuperLy
 * @LastEditTime: 2021-10-20 13:50:29
-->
<template>
<el-row >
    <el-col :xs="24" :sm="{span:22,offset:1}"  :lg="{span:20,offset:2}" :xl="{span:16,offset:4}">
        <el-container>
            <!-- 顶部导航栏 -->
            <el-header style="padding:0px">
                <TopNav></TopNav>
            </el-header>
            <el-aside class="hidden-xs-only">
                <Sidebar></Sidebar>
            </el-aside>
        </el-container>
    </el-col>
</el-row>
</template>

<script>
import TopNav from './components/TopNav.vue';
import Sidebar from './components/Sidebar.vue';

export default {
    name: 'App',
    components: {
        TopNav,
        Sidebar
    }
}
</script>

<style>
* {
    margin: 0px;
    padding: 0px;
}

body {
    background-color: #efefef;
}
</style>
