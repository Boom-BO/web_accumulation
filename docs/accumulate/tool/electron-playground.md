# Electron 桌面端所见即所得-electron-playground

### 突然让你开发 Electron 应用，你能 hold 住吗？

如果领导突然说需要开发一款前端桌面端应用，那么对于我们前端 er 来说选择 Electron 是一件顺理成章的事情。但事实上很多同学对于 Electron 都不太了解和熟悉。

**如果突然让我们去开发 Electron 应用，很多人都会陷入迷茫和懵逼的状态**。然后在依靠网上相对较少的资料，慢慢摸索、一路踩坑的完成 Electronn 的需求。

为了解决上述问题，我们完成了一个项目，并把它开源了出来, 希望能够对大家学习 Electron 有点帮助。

### 快速学习和上手 Electron: electron-playground

[electron-playground](https://github.com/tal-tech/electron-playground)是我司(好未来集团晓黑板)前端团队近期开源的项目。

### electron-playground 项目的目的

**帮助前端仔更好、更快的学习和理解前端桌面端技术 Electron, 少走弯路**。

### electron-playrgound 能为我学习 Electron 做什么

1. 带有 gif 示例和可操作的 demo 的教程文章。
2. 系统性的整理了 Electron 相关的 api 和功能。
3. 搭配演练场，自己动手尝试 electron 的各种特性。

下面我来具体介绍一下项目的内容。

## 项目演示

### 1. 带有 gif 示例和可操作的 demo 文章讲解

项目搭配一系列教程文章，这些文章都是经过踩坑验证、成体系化的内容，并且带有 gif 示例，和可操作的 demo 示例、流程图等内容。

#### 项目自带的 gif 演示

menu: 添加菜单

![](https://raw.githubusercontent.com/OBKoro1/articleImg_src/master/2020/electron-playground/2020_electrnon-playground_menu.gif)

#### 项目 demo 操作的 gif 演示

dialog: 消息提示与确认

![](https://raw.githubusercontent.com/OBKoro1/articleImg_src/master/2020/electron-playground/2020_electrnon-playground_dialog.gif)

dialog: 选择文件

![](hhttps://raw.githubusercontent.com/OBKoro1/articleImg_src/master/2020/electron-playground/2020_electrnon-playground_savefile.gif)

#### 流程图

窗口管理-创建和管理窗口

![](https://raw.githubusercontent.com/OBKoro1/articleImg_src/master/2020/electron-playground/2020_electrnon-playground_window.jpg)

### 系统性的整理了 Electron 相关的 api 和功能

electronn-playground 系统性的整理了 Electron 的相关 API 和功能，以及关于工程化相关的内容。

#### electron-playground 列表分类

- 工程化 \* 崩溃分析和收集
  - 开发调试
  - 打包问题
  - 应用更新
- 应用
  - 自定义协议
  - 系统提示和文件选择
  - 菜单
  - 系统托盘
  - 文件下载
- 窗口管理
  - 创建和管理窗口
  - 隐藏和恢复
  - 聚焦、失焦
  - 全屏、最大化、最小化
  - 窗口通信
  - 窗口类型
  - 窗口事件
- 其他
  - 安全性

### electron-playground 列表分类截图

![](https://raw.githubusercontent.com/OBKoro1/articleImg_src/master/2020/electron-playground/2020_electrnon-playground_list.jpg)

#### 演练场

想要实现更复杂的操作，我们参考[fiddle](https://github.com/electron/fiddle)创建了演练场。

演练场集成了 vscode 的 web 端编辑库：[monaco-editor](https://github.com/microsoft/monaco-editor)，编码体验接近 vscode。

![](https://raw.githubusercontent.com/OBKoro1/articleImg_src/master/2020/electron-playground/2020_electrnon-playground_playground.jpg)

### 如何启动

[electron-playground](https://github.com/tal-tech/electron-playground)启动流程如下:

```js
git clone https://github.com/tal-tech/electron-playground.git // 下载项目
npm install // 安装依赖
npm run start // 启动项目
```

### 欢迎下载学习/体验

[electron-playground](https://github.com/tal-tech/electron-playground)是一个通过尝试 electron 各种特性，使 electron 的各项特性所见即所得, 来达到我们快速上手和学习 electron 的目的。

感兴趣的同学可以下载一下项目，体验一下，希望通过这个项目可以帮助大家更好、更快的学习和理解前端桌面端技术 Electron, 少走弯路

如果觉得还不错的话，就给个[Star](https://github.com/tal-tech/electron-playground)⭐️ 鼓励一下我们吧^\_^~

<!-- 特殊字符串：用于修改/删除markdown的结尾提示语-->

### 点个[Star](https://boom-bo.github.io/web_accumulation)支持我一下~
