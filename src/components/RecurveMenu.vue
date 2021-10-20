<!--
 * @Explain: 
 * @version: 
 * @Author: SuperLy
 * @Date: 2021-10-20 13:24:44
 * @LastEditors: SuperLy
 * @LastEditTime: 2021-10-20 13:58:59
-->

<template>
<div>
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
</div>
</template>

<script>
export default {
    name: 'RecurveMenu',
    props: [
        'items'
    ]
}
</script>

<style>

</style>