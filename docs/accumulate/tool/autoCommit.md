# VsCode 插件一键刷 Github 的 commit 记录-AutoCommit

## autoCommit

> 用于刷 commit 记录，可以刷过去几年的 commit 以及未来的 commit, 一键帮你把 github 首页的绿色格子填满。

- 它是一个 VScode 插件可以自由控制 commit 日期(提交过去几年的 commit 以及未来的 commit)
- 它可以自由控制 commit 次数, 固定或者随机 commit 次数。
- 插件提供完善的日志: 清晰的了解插件的运行情况

### 使用效果

1. 使用本插件来控制 commit 次数.
2. 如下图，你甚至可以规划一下`commit`次数，然后画出图形, 天空才是你的极限。

![image](https://github.com/OBKoro1/autoCommit/blob/master/images/commit_img.png?raw=true)

#### 自动 commit 演示：

![image](https://github.com/OBKoro1/autoCommit/blob/master/images/autoCommit.gif?raw=true)

### 功能特性

- **一键提交**: 设置好参数之后，一键超快提交`commit`
- **选择多个日期范围**：一次操作即可提交不同日期`commit`, **还可以提交过去/未来日期的 commit**。
- **控制每个日期的 commit 次数**: 可以用它来控制绿色格子的颜色，了解[commit 次数与颜色](https://github.com/OBKoro1/autoCommit/wiki/GitHub%E8%AE%BE%E7%BD%AE%E7%A7%81%E6%9C%89%E9%A1%B9%E7%9B%AE%E5%88%B7commit%E4%BB%A5%E5%8F%8Acommit%E7%9A%84%E6%AC%A1%E6%95%B0%E4%B8%8E%E9%A2%9C%E8%89%B2#commit%E6%AC%A1%E6%95%B0%E4%B8%8E%E9%A2%9C%E8%89%B2)
- **随机 commit 次数**：随机 commit 次数让我们的提交看起来更加逼真。
- **间隔提交 commit**: 在一定的时间长度内，随机选取几天不提交 commit
- 取消 commit: 用于在`commit`期间取消并回滚到未提交版本
- 超过 100 次提交，将强制考虑 10 秒是否要取消 commit。
- 插件成功运行后，将自动保存配置参数，无须每次都要一通操作。
- 提供完善的日志: 清晰的了解插件的运行情况
- 后台运行，不影响编码、浏览网页等。
- 运行超快，如下图 187 次 commit，20 秒搞定。
- **觉得插件还不错的话，点个 Star 吧~**

#### 提交以前和未来的 commit

在 19 年 12 月我创建了一个测试账号：[koroTest](https://github.com/koroTest)，经过测试：

1. 成功提交 17 年的 10 月份的 commit。
2. 现在 2020 年 1 月份，成功提交了 2020 年 2 月份的 commit。
3. 具体能提交最早和最晚的日期没有测试过，有兴趣的可以试试~

### 仓库地址:

[autoCommit](https://github.com/OBKoro1/autoCommit)

### 安装

在 Vscode 扩展商店中搜索`Auto Commit`,点击安装即可。

### 插件入口

1. 使用快捷键打开 VSCode 的命令面板。
   - `mac`: `command + p` window: `ctrl + p`
2. 输入`> auto commit 将会看到如下图所示的命令选项，然后用鼠标点击或者回车都可启动插件。

   - 注意有`>`符号，老是用人不知道怎么用 o(╥﹏╥)o
   - 实际上可以输入下方选项的任何一段文字，都可以匹配到插件命令选项。

![image](https://github.com/OBKoro1/autoCommit/blob/master/images/command.png?raw=true)

### 文档

- [配置及使用说明](https://github.com/OBKoro1/autoCommit/wiki/%E9%85%8D%E7%BD%AE%E5%8F%8A%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E)
- [GitHub 设置私有项目刷 commit 以及 commit 的次数与颜色](https://github.com/OBKoro1/autoCommit/wiki/GitHub%E8%AE%BE%E7%BD%AE%E7%A7%81%E6%9C%89%E9%A1%B9%E7%9B%AE%E5%88%B7commit%E4%BB%A5%E5%8F%8Acommit%E7%9A%84%E6%AC%A1%E6%95%B0%E4%B8%8E%E9%A2%9C%E8%89%B2)

### 插件声明

[autoCommit](https://github.com/OBKoro1/autoCommit)是本人兴之所至创建的个人项目，仅用于学习交流，禁止任何人商用以及用于非法之途。

插件如构成侵权，请通过邮件联系我。

### 头部注释插件

本人还开源了另外一个 VSCode 插件: [koroFileHeader](https://github.com/OBKoro1/koro1FileHeader)，目前该插件已经有 1000+ Star 了，欢迎安装使用。

1. 它是用于生成文件头部注释，帮助我们养成良好的编码习惯，规范整个团队风格。
2. 插件支持所有主流语言,功能强大，灵活方便，文档齐全，食用简单！

### License

[MIT](http://opensource.org/licenses/MIT)

### Star 一下吧

如果插件觉得还不错的话，就给个 [Star](https://github.com/OBKoro1/autoCommit) ⭐️ 鼓励一下我吧~

[前端进阶积累](http://obkoro1.com/web_accumulate/)、[公众号](https://user-gold-cdn.xitu.io/2018/5/1/1631b6f52f7e7015?w=344&h=344&f=jpeg&s=8317)、[GitHub](https://github.com/OBKoro1)

<!-- 特殊字符串：用于修改/删除markdown的结尾提示语-->

### 点个[Star](https://boom-bo.github.io/web_accumulation)支持我一下~
