<!--
 * @Explain: 
 * @version: 
 * @Author: SuperLy
 * @Date: 2021-10-19 21:47:30
 * @LastEditors: SuperLy
 * @LastEditTime: 2021-10-19 23:14:08
-->
<template>
<div>
    <el-row>
        <el-col :span="20" :offset="0">
            <el-input v-model="input" placeholder="输入关键词搜索..."></el-input>
        </el-col>
        <el-col :span="4" :offset="0">
            <el-button class="btn-radius" icon="el-icon-search" @click="search"></el-button>
        </el-col>
    </el-row>
    
    
    
</div>
</template>

<script>
export default {
    name:'Search',
    data:function(){
        return {
            input:''
        }
    },
    methods:{
        search(){
            alert('测试：您输入了：'+ this.input)
        }
    }
}
</script>

<style>
    .el-input__inner{
        height: 30px !important;
        border-radius: 15px 0 0 15px !important;
        margin-top: 10px;
        border: none !important;
        font-size: 14px !important;
    }
    .el-input__inner:focus{
        box-shadow: 0 0 3px #409EFF
    }
    .el-input__inner:hover{
        background-color: #e0e6ed;
    }
    .btn-radius{
        border-radius: 0 15px 15px 0  !important;
        width: 38px;
        height: 30px;
        margin-top: 10px !important;
        border: none !important;
        padding: 5px 10px !important;
    }
</style>