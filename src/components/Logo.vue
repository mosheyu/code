<!--
 * @Explain: 
 * @version: 
 * @Author: SuperLy
 * @Date: 2021-10-19 23:31:16
 * @LastEditors: SuperLy
 * @LastEditTime: 2021-10-20 11:20:52
-->
<!--
 * @Explain: 
 * @version: 
 * @Author: SuperLy
 * @Date: 2021-10-19 23:31:16
 * @LastEditors: SuperLy
 * @LastEditTime: 2021-10-20 00:09:26
-->
<template>
<div>
    <a href="./">
        <el-image :src="src" class="logo">
            <div slot="error" class="err-img">
                <i class="el-icon-picture-outline"></i>
                <span class="err">图片加载失败</span>
            </div>
        </el-image>
    </a>
</div>
    
</template>

<script>
export default {
    name:'Logo',
    data:function(){
        return{
            src:require('../assets/LOGO.png')
        }
    }
}
</script>

<style>
.logo{
    height: 50px;
    width: 100%;
}
.err-img{
    
    height: 50px;
    margin: 0 auto;
    font-size: 30px;
    text-align: center;
    line-height: 50px;
}
.err{
    font-size:18px;
    vertical-align:bottom;
}
</style>