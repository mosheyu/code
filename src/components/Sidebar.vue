<!--
 * @Explain: 
 * @version: 
 * @Author: SuperLy
 * @Date: 2021-10-20 11:31:33
 * @LastEditors: SuperLy
 * @LastEditTime: 2021-10-20 14:09:24
-->
<template>
<el-row>
    <el-col :sm="14" :md="18">
        <el-menu default-active="aside" class="el-menu-vertical-demo" :collapse="isCollapse">
            <div v-for="i of items" :key="i.index">
                <el-menu-item v-if="i.type === 1" :index="i.index">
                    <i :class="i.icon"></i>
                    <span slot="title">{{i.title}}</span>
                </el-menu-item>
                <el-submenu v-else-if="i.type === 2" :index="i.index">
                    <template slot="title">
                        <i :class="i.icon"></i>
                        <span slot="title">{{i.title}}</span>
                    </template>
                    <el-menu-item-group v-if="i.children !== []">
                        <RecurveMenu :items='i.children'></RecurveMenu>
                    </el-menu-item-group>
                </el-submenu>
            </div>

            <!-- 关于我 -->
            <!-- <el-submenu index="6">
                <template slot="title">
                    <i class="el-icon-ice-cream-round"></i>
                    <span slot="title">关于</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">关于我</el-menu-item>
                    <el-menu-item index="1-2">喜好</el-menu-item>
                </el-menu-item-group>
            </el-submenu> -->
            <!-- 友情链接 -->
            <!-- <el-submenu index="7">
                <template slot="title">
                    <i class="el-icon-link"></i>
                    <span slot="title">友链</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">百度</el-menu-item>
                    <el-menu-item index="2-2">淘宝</el-menu-item>
                </el-menu-item-group>
            </el-submenu> -->
        </el-menu>
    </el-col>
</el-row>
</template>

<script>
import {
    nanoid
} from 'nanoid';
import RecurveMenu from './RecurveMenu';
export default {
    name: 'Sidebar',
    data: function () {
        return {
            isCollapse: false,
            items: [{
                    index: nanoid(), // 导航的 id
                    type: 1, //1：单级导航 2：多级导航
                    icon: 'el-icon-s-home', // 导航的图标
                    title: '首页', // 导航的标题
                    children: [] // 子导航
                },
                {
                    index: nanoid(),
                    type: 1,
                    icon: 'el-icon-box',
                    title: '仓库',
                    children: []
                },
                {
                    index: nanoid(),
                    type: 1,
                    icon: 'el-icon-picture-outline',
                    title: '相册',
                    children: []
                },
                {
                    index: nanoid(),
                    type: 1,
                    icon: 'el-icon-edit',
                    title: '日记',
                    children: []
                },
                {
                    index: nanoid(),
                    type: 1,
                    icon: 'el-icon-discount',
                    title: '归档',
                    children: []
                },
                {
                    index: nanoid(),
                    type: 2,
                    icon: 'el-icon-ice-cream-round',
                    title: '关于',
                    children: [
                        {
                            index: nanoid(),
                            type: 1,
                            icon: 'el-icon-thumb',
                            title: '关于我',
                            children: []
                        }, 
                        {
                            index: nanoid(),
                            type: 1,
                            icon: 'el-icon-headset',
                            title: '喜好',
                            children: []
                        }, 
                    ]
                },
                {
                    index: nanoid(),
                    type: 2,
                    icon: 'el-icon-link',
                    title: '友链',
                    children: [
                        {
                            index: nanoid(),
                            type: 1,
                            icon: 'el-icon-s-promotion',
                            title: '百度',
                            children: []
                        }, 
                        {
                            index: nanoid(),
                            type: 1,
                            icon: 'el-icon-shopping-bag-1',
                            title: '淘宝',
                            children: []
                        }, 
                    ]
                },
            ]
        }
    },
    components: {
        RecurveMenu
    }
}
</script>

<style>

</style>
