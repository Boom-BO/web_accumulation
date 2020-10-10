
# VsCode保存时自动修复Eslint错误

> *同一个项目, 保持代码风格的一致, 是非常重要的一个规范。但事实上项目小组成员的代码校验规则, 格式化工具通常都不一致, 为了避免项目到后期出现无法维护的问题, 项目成员使用同一套校验规则, 同一个格式化方式是相当好的步骤之一。*

## 配置
1. 安装VsCode的EsLint, vetur和Prettier - Code formatter插件
2. 为项目安装EsLint包
4. settings.json 配置

```js
  // 代码规范-eslint
  "editor.lineNumbers": "on", // 控制行号的显示。 on: 将行号显示为绝对行数
  // 控制是否在键入时自动显示建议
  "editor.quickSuggestions": { 
    "other": true,
    "comments": true,
    "strings": true
  },
  "prettier.useTabs": true, // 使用制表符缩进
  "editor.tabSize": 2, // tab空几格
  // autoFixedOnSave 设置已废弃, 采用如下新的设置
	"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.format.enable": true, // 启用ESLint作为格式化程序
  // autoFix默认开启, 只需输入字符串数组即可
  "eslint.validate": ["javascript", "html", "vue", "react"],
  "prettier.semi": true, // 去掉代码结尾的分号
  "prettier.singleQuote": true, // 使用单引号替代双引号
  "prettier.trailingComma": "none", // 去除对象最末尾元素跟随的逗号
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true, // 让函数(名)和后面的括号之间加个空格
  // 格式化方式 (这个按用户自身习惯选择)
  "vetur.format.defaultFormatter": {  
    "html": "prettier",
    "css": "prettier",
    "postcss": "prettier",
    "scss": "prettier",
    "less": "prettier",
    "js": "prettier",
    "ts": "prettier",
    "stylus": "stylus-supremacy"
  },
  // "vetur.format.defaultFormatter.js": "vscode-typescript", // #让vue中的js按编辑器自带的ts格式进行格式化
  "vetur.format.defaultFormatterOptions": {
      "js-beautify-html": {
          // - auto: 仅在超出行长度时才对属性进行换行。
          // - force: 对除第一个属性外的其他每个属性进行换行。
          // - force-aligned: 对除第一个属性外的其他每个属性进行换行，并保持对齐。
          // - force-expand-multiline: 对每个属性进行换行。
          // - aligned-multiple: 当超出折行长度时，将属性进行垂直对齐。
          "wrap_attributes": "force-expand-multiline" //#vue组件中html代码格式化样式 对每个属性进行换行
      }
  }
```
::: tip
接下来就是见证奇迹的时刻 :cyclone::cyclone::cyclone:
:::
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

## Vue推荐VSCode开发必备的插件 :tada: :100:

::: tip
好用的插件实在是太多了，请根据个人爱好选装吧 :smile:
:::

#### Vetur —— 语法高亮、智能感知、Emmet等
> 包含格式化功能， Alt+Shift+F （格式化全文），Ctrl+K Ctrl+F（格式化选中代码，两个Ctrl需要同时按着）

#### EsLint
> 语法纠错

#### view in browser
> 如何用浏览器预览运行html文件

#### Debugger for Chrome
> 映射vscode上的断点到chrome上，方便调试（配置有点麻烦，其实我没用这个）

#### Auto Close Tag
> 自动闭合HTML/XML标签

#### Auto Rename Tag
> 自动完成另一侧标签的同步修改

#### JavaScript(ES6) code snippets
> ES6语法智能提示以及快速输入，除js外还支持.ts，.jsx，.tsx，.html，.vue，省去了配置其支持各种包含js代码文件的时间

#### Path Intellisense
> 自动路径补全

#### HTML CSS Support
> 让 html 标签上写class 智能提示当前项目所支持的样式

#### autoprefixer
> 解析CSS文件并且添加浏览器前缀到CSS规则里