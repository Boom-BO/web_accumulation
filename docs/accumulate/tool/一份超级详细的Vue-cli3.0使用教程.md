## 一份超级详细的 Vue-cli3.0 使用教程

在 vue-cli 2.X 的时候，也写过一篇类似的[文章](https://juejin.im/post/597eee92f265da3e2e56e37c)，在八月份的时候 vue-cli 已经更新到了 3.X，新版本的脚手架，功能灰常强大，试用过后非常喜欢，写篇教程来帮助各位踩一下坑。

> 游泳、健身了解一下：[博客](http://obkoro1.com/)、[前端积累文档](http://obkoro1.com/web_accumulate/accumulate/)、[公众号](https://github.com/OBKoro1/articleImg_src/blob/master/juejin/1631b6f52f7e7015.jpeg?raw=true)、[GitHub](https://github.com/OBKoro1)

### 主要内容：

1. 零配置启动/打包一个`.vue`文件
2. 详细的搭建过程
3. **重点推荐：使用图形化界面创建/管理/运行项目**

---

## 安装：

### 卸载旧版本：

如果你事先已经全局安装了旧版本的`vue-cli`(1.x 或 2.x),你需要先卸载它:

    npm uninstall vue-cli -g

### Node 版本要求：

3.x 需要在`Node.js`8.9 或更高版本(推荐 8.11.0+)，点击这里可以安装[node](http://nodejs.cn/download/)

大多数人都安装过了 node,使用下面的命令行**查询你的 node 版本**:

    node -v

如果你的版本不够，可以使用下面的命令行来把**Node 版本更新到最新的稳定版**：

    npm install -g n // 安装模块 这个模块是专门用来管理node.js版本的
    n stable // 更新你的node版本

mac 下，更新版本的时候,如果提示你权限不够：

    sudo n stable // 我就遇到了

### 安装 vue-cli:

    npm install -g @vue/cli // 安装cli3.x
    vue --version // 查询版本是否为3.x

如果 cli3.x 用的不舒服，**cli3 也能使用 2.x 模板**：

    npm install -g @vue/cli-init // 安装这个模块
    // 就可以使用2.x的模板：vue init webpack my-project

## 零配置启动/打包一个`.vue`文件：

### 安装扩展：

    npm install -g @vue/cli-service-global

安装完扩展之后，可以随便找个文件夹建一个如下方示例的.vue 文件,然后跑起来：

    vue serve App.vue // 启动服务
    vue build App.vue // 打包出生产环境的包并用来部署

### 如下图，只需一个.vue 文件，就能迅速启动一个服务：

如图所示，服务启动的时候回生成一个`node_modules`包，稍微测试了一下，**服务支持 ES6 语法和热更新**，打包的时候会生成一个`dist`文件夹。(新建一个 test.vue 文件也只有一个`node_modules`/`dist`文件夹)

这是个很棒的功能，用于**开发一个库、组件，做一些小 demo 等都是非常适合的**！

![](https://github.com/OBKoro1/articleImg_src/blob/master/juejin/166fc87173c427ea?raw=true)

---

## 第一次创建项目:

### 1. 命令行:

    vue create hello-cli3

- hello-cli3 是文件夹名字，如果不存在会**自动创建文件夹**，如果存在会安装到那个文件夹中。

- 相比 2.x 的时候需要自己手动创建一个文件夹，这里也算是一个小优化吧。

### 2. 选择模板:

- 一开始只有两个选项: `default`(默认配置)和`Manually select features`(手动配置)

  默认配置只有`babel`和`eslint`其他的都要自己另外再配置，所以我们选第二项手动配置。

- 在每次选择手动配置之后，会询问你是否保存配置，也就是图片中的`koro`选项，这样以后我们在进行创建项目的时候**只需使用原先的配置**就可以了，而不用再进行配置。

![](https://github.com/OBKoro1/articleImg_src/blob/master/juejin/166fca9d5b691cc3?raw=true)

### 3. 选择配置：

- 根据你的项目需要来选择配置,空格键是选中与取消，A 键是全选

        ? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)
        // 检查项目所需的功能:(按<space>选择，<a>切换所有，<i>反转选择）
        >( ) TypeScript                                 // 支持使用 TypeScript 书写源码
         ( ) Progressive Web App (PWA) Support          // PWA 支持
         ( ) Router                                     // 支持 vue-router
         ( ) Vuex                                       // 支持 vuex
         ( ) CSS Pre-processors                         // 支持 CSS 预处理器。
         ( ) Linter / Formatter                         // 支持代码风格检查和格式化。
         ( ) Unit Testing                               // 支持单元测试。
         ( ) E2E Testing

### 4. 选择 css 预处理器:

- 如果你选择了 Css 预处理器选项，会让你选择这个

        ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default):
        // 选择CSS预处理器（默认支持PostCSS，Autoprefixer和CSS模块）：
        > SCSS/SASS
          LESS
          Stylus

### 5. 是否使用路由的`history`模式：

- 这里我建议选 No，这样打包出来丢到服务器上可以直接使用了，后期要用的话，也可以自己再开起来。
- 选 yes 的话需要服务器那边再进行设置。

        Use history mode for router? (Requires proper server setup for index fallback in production)
        // 路由使用history模式?(在生产环境中需要适当的服务器设置以备索引)

### 6. 选择 Eslint 代码验证规则：

    > ESLint with error prevention only
      ESLint + Airbnb config
      ESLint + Standard config
      ESLint + Prettier

### 7. 选择什么时候进行代码规则检测：

- 建议选保存就检测，等到 commit 的时候，问题可能都已经积累很多了。
- 之前写了篇[VsCode 保存时自动修复 Eslint 错误](http://obkoro1.com/web_accumulate/accumulate/tool/Eslint%E8%87%AA%E5%8A%A8%E4%BF%AE%E5%A4%8D%E6%A0%BC%E5%BC%8F%E9%94%99%E8%AF%AF.html#vscode%E4%BF%9D%E5%AD%98%E6%97%B6%E8%87%AA%E5%8A%A8%E4%BF%AE%E5%A4%8Deslint%E9%94%99%E8%AF%AF)推荐一下。

        ? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
        >( ) Lint on save // 保存就检测
         ( ) Lint and fix on commit // fix和commit时候检查

### 8. 选择 e2e 测试:

    ? Pick a E2E testing solution: (Use arrow keys)
    ❯ Cypress (Chrome only)
      Nightwatch (Selenium-based)

### 9. 把 babel,postcss,eslint 这些配置文件放哪：

- 通常我们会选择独立放置，让 package.json 干净些

        ? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Use arrow keys)
        > In dedicated config files // 独立文件放置
          In package.json // 放package.json里

### 10. 是否保存配置：

    Save this as a preset for future projects? (Y/n) // 是否记录一下以便下次继续使用这套配置
    // 选保存之后，会让你写一个配置的名字：
    Save preset as:  name // 然后你下次进入配置可以直接使用你这次的配置了

### 11. 下载依赖

### 12. webpack 配置的目录不见了：

一起来看一下新项目的结构(下图),会发现 2.x 的 webpack 配置的目录不见了，也就是没有 build、config 这两个文件夹了：

- 这种方式的优势**对小白来说非常友好**，不会一上来就两个文件夹，一堆文件，看着脑袋都大了。
- 然后在**引用~~抄~~别人的配置的时候，也非常方便**，直接将文件复制过来就好了。
- **在自定义一下 webpack 的配置**，我们需要在**根目录新建一个`vue.config.js`文件**，文件中应该导出一个对象，然后进行配置，详情查阅[官方文档](https://cli.vuejs.org/zh/config/)

        // vue.config.js
        module.exports = {
          // 选项...
        }

* 还有一些小变动像：static 文件夹改为 public 了，router 文件夹变成了单个文件之类的(我之前一直这么做,嘿嘿)。

  ![](https://github.com/OBKoro1/articleImg_src/blob/master/juejin/166fcd735ce563ba?raw=true)

### 13.启动项目：

- 启动项目：npm run serve // **不是之前的 npm run dev**

- 打开`http://localhost:8080`：
  ![](https://github.com/OBKoro1/articleImg_src/blob/master/juejin/166fcd823cce157b?raw=true)

---

## 使用图形化界面创建/管理/运行项目：

### 启动图形化界面

    vue ui

- 这是个全局的命令 在哪个文件夹都可以打开
- 界面(下图)，重要的项目可以收藏起来(置顶)：
  ![](https://github.com/OBKoro1/articleImg_src/blob/master/juejin/166fd034aae0942d?raw=true)

### 创建项目和导入项目：

1. 目录选中之后，导入项目点击下面的导入就可以了。

   ![](https://github.com/OBKoro1/articleImg_src/blob/master/juejin/166fd0f5359fc7ba?raw=true)

2. 创建项目，填一个文件夹名字：

   ![](https://github.com/OBKoro1/articleImg_src/blob/master/juejin/166fd177edf662d3?raw=true)

3. 然后选一下预先保存好的设置就可以了，非常方便，建议采用图形界面来创建项目：

   ![](https://github.com/OBKoro1/articleImg_src/blob/master/juejin/166fd1a86f0e7bd5?raw=true)

### 项目管理：

当我们点击 hello -cli3 项目，就会进入项目管理的界面

#### 1. 仪表盘：

- 这个仪表盘，主要是为了我们操作方便而设置的
- 可以点击右上角的按钮，来添加/移动这些功能选项。

  ![](https://github.com/OBKoro1/articleImg_src/blob/master/juejin/166fd276f5a4de8b?raw=true)

#### 2. vue-cli3.x 插件：

- vue-cli3 的插件功能，详情了解[官方文档](https://cli.vuejs.org/zh/guide/plugins-and-presets.html#%E6%8F%92%E4%BB%B6)

  ![](https://github.com/OBKoro1/articleImg_src/blob/master/juejin/166fd344e9e5edc0?raw=true)

- cli3 插件安装的过程：

  ![cli3插件安装的过程](https://github.com/OBKoro1/articleImg_src/blob/master/juejin/166fd3595b37e06a?raw=true)

#### 3. 项目依赖

- 直接在图形界面管理依赖很舒服了！
- 安装依赖的时候，要记得选择开发依赖/运行依赖！

  ![](https://github.com/OBKoro1/articleImg_src/blob/master/juejin/166fd391835d2edb?raw=true)

#### 4. 项目配置

- 可以对 cli 进行一些配置、Eslint 规则修改：

  ![](https://github.com/OBKoro1/articleImg_src/blob/master/juejin/166fd3c81be26fd0?raw=true)

#### 5. 任务：

- serve 运行项目，点击直接运行，再也不用输入命令了！
- 可以清楚的看到各个模块用了多久，方便我们**针对性的进行优化**：


    ![](https://github.com/OBKoro1/articleImg_src/blob/master/juejin/166fd41bde538496?raw=true)

- build 打包项目：这里**主要展示了图表的功能**，比以前 2.x 生成报告更加直观，超级棒！

  ![](https://github.com/OBKoro1/articleImg_src/blob/master/juejin/166fd42dae770e0d?raw=true)

#### 6. 其他

- 夜间风格界面，我更喜欢这个界面
- 直接打开编辑器,很棒了！
- 还有一些乱七八糟的按钮

  ![](https://github.com/OBKoro1/articleImg_src/blob/master/juejin/166fd4f37d2fd567?raw=true)

---

## 结语

可以说很认真了，希望大家看完能够有些收获，**赶紧试试新版的 vue-cli 吧**！

以上 2018.11.10

参考资料：

[vue-cli3 官方文档](https://cli.vuejs.org/zh/guide/)

[vue-cli3.0 搭建与配置](https://gitee.com/hjm100/codes/rjch7b31l4f59gt8suidn63)

<!-- 特殊字符串：用于修改/删除markdown的结尾提示语-->

### 点个[Star](https://boom-bo.github.io/web_accumulation)支持我一下~
