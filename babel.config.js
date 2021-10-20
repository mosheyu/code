/*
 * @Explain: 
 * @version: 
 * @Author: SuperLy
 * @Date: 2021-10-19 16:15:15
 * @LastEditors: SuperLy
 * @LastEditTime: 2021-10-19 18:04:30
 */
module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ]
    ]
}