# Vscode中快速创建自定义代码模板

> 使用Vscode的用户代码片段功能，来生成自己习惯的代码模板，从而提升开发效率。此文拿vue组件代码模板作为例子，其他如H5代码模板都可按照此方法设置。
><br> 官方介绍 [Snippets in Visual Studio Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

## 操作步骤

**1、（macOS系统）选择菜单 > code > 首选项 > 用户片段**

<img :src="$withBase('/step1.jpg')" />

或
**在vscode中，command+shift+p 打开配置搜索框**

<img :src="$withBase('/step11.jpg')" />

**2、找到vue.json打开**∏

<img :src="$withBase('/step2.jpg')" />


**3、在vue.json文件中编辑如下代码**

::: tip 注意
prefix 生成模板的关键词
$0表示最终光标位置<br>
$1，$2 等指定光标位置，这些数字指定了光标跳转的顺序
:::

```js
{
	"Print to console": {
		// 生成模板的关键词
		"prefix": "vue",
		"body": [
			"<template>",
			"  <div class=\"demo\">$0</div>",
			"</template>",
			"",
			"<script>",
			"export default {",
			"  name: '',",
			"  components: {},",
			"  props: {},",
			"  data() {",
			"    return {",
			"    }",
			"  },",
			"  computed: {},",
			"  watch: {},",
			"  created() {},",
			"  mounted() {},",
			"  methods: {},",
			"};",
			"</script>",
			"<style lang=\"scss\" scoped>",
			".demo {}",
			"</style>"
		],
		"description": "A vue file template"
	}
}
```
:::tip 成功
**到此已完成Vue代码模板配置，下面来创建一个.vue文件，输入`vue`回车来试验一下，能自动生成设置好的代码就成功了**
:::