## [读书笔记]《高性能 JavaScript》

### 缺陷

这本书是 2010 年出版的，这本书谈性能是有时效性的，现在已经是 2018 年了，这几年前端发展的速度是飞快的，书里面还有一些内容考虑 IE6、7、8 的东西，殊不知现在这些都已经不再考虑了，所以不可避免的有一些知识是比较老的。有些解决方法现在已经不是最好的解决方式，比如工具那一章。

### 前言

**总的来说，这本书整体给出的性能优化建议，以及作者耐心的实践，对我们开发优化的启发和帮助还是很大的**，因为它里边的很多知识，都是作者通过实践总结出来的，都是经验的积累，这在一般的教科书上是学不到的。特别是对于 js 基础比较差一点的，里面有很多知识点尽管在现在还是非常有必要的。

**下面我就将各章节的一些重要的知识点总结写出来，争取将干货都提取出来**。

---

### 第一章-加载和执行

1. js 的阻塞特性：

当浏览器在执行 js 代码的时候，不能同时做其他事情。（界面 ui 线程和 js 线程用的是同一进程，所以 js 执行越久，网页的响应时间越长。）

2. 脚本的位置

**如果把脚本`<script>`放在`<head>`中，页面会等 js 文件全部下载并执行完成后才开始渲染**，在这些文件下载和执行的过程中：会导致访问网站的时候有明显的延迟，表现为：页面空白。

性能提升：**推荐将所有的`<script>`标签尽可能的放到`<body>`标签的底部**，优先渲染页面，减少页面空白时间。

3. 组件脚本。

每个`<script>`标签初始下载的时候都会阻塞页面的渲染。性能提升做法：
**减少内嵌脚本：减少内嵌的`<script>`标签**，将代码写在一个标签中。

**合并外链的 js 文件**：http 请求会带来额外的性能开销，栗子：下载一个 100KB 的 js 文件比下载 4 个 25kb 的 js 文件更快。具体操作方法自行搜索。

4. 无阻塞脚本的方法

**script 标签的 aync 属性**：

async 属性规定一旦脚本可用，则会异步执行。async 属性仅适用于外部脚本（只有在使用 src 属性时）。如果 async="async"：脚本相对于页面的其余部分异步地执行（当页面继续进行解析时，脚本将被执行）

**script 标签的 defer 属性**：

js 文件在页面解析到 script 标签的时候开始下载，但并不会执行，dom 加载完成执行。**这两个属性的区别在于执行时机**。

**动态脚本元素**。

js 操作 dom 创建`<script>`标签，自定义生成标签的 type、src 属性。文件会在该元素被添加到页面的时候开始下载。ps：如果文件顺序很重要的话，最好按照顺序合成一个文件。然后再添加到页面中。这样：无论何时启动下载。文件的下载和执行过程不会阻塞页面的其他进程。

##### 3. XHR ajax 脚本注入、

用 get 请求一个文件，请求好了。然后创建动态脚本，最后添加进去。
缺陷：文件要再请求页面的同一个域。不能从 cdn 下载

### 第一章加载和执行小结：

1. 把文件放在 body 标签签名，
2. 合并脚本，减少`<script>`标签。
3. 采用无阻塞下载 js。使用 script 的 defer 和 async 属性 异步下载。动态创建 script 标签和执行代码。

### 第二章-数据存取

1. **js 四种基本的数据存取位置**。
   1、字面量：字符串、数字、布尔、对象、数组、函数、正则、null、undefined，字面量只代表自身，没有存储位置。 2、局部变量。 let var 声明的变量。3、数组元素。4、对象成员。

性能：**访问字面量和局部变量的速度是最快的，访问数组和对象成员相对较慢**

2. **变量标识符解析过程**：

搜索执行环境的作用域链，查找同名标识符。搜索过程从作用域链头部开始，也就是当前运行函数的活动对象。如果找到，就使用这个标识符，对应的变量；如果没有找到，继续搜索下面的对象。搜索过程会持续进行，直到找到标识符，若无法搜索到匹配的对象，那么标识符被视为未定义、

**性能问题：一个标识符所在的位置越深，它的读写速度也就越慢**。因此，函数中读写局部变量总是最快的，而读写全局变量通常是最慢的。

**建议：将全局变量存储到局部变量，加快读写速度。**

2. 闭包，原型，嵌套对象。

**优化建议：将常用的跨作用域变量存储到局部变量，然后直接访问局部变量**。理由如上，变量标识符解析过程。

### 第二章数据存取小结：

1. 访问字面量和局部变量的速度最快，相反，访问数组元素和对象成员相对较慢。
2. 由于局部变量存在于作用域链的起始位置，因为**访问局部变量比访问跨作用域变量更快。这个道理同样适用于数组，对象，跨作用域变量**。
3. 把常用的对象，数组，跨域变量保存在局部变量可以改善 js 性能，局部变量访问速度更快。

### 第三章 DOM 编程小结：

1. **dom 操作天生就慢，尽量减少 dom 操作**，减少访问 dom 的次数。
2. 使用 document.querySelect 来做选择器，比其他方式快。
3. 需要多次访问某个 dom 节点，使用局部变量存储。
4. html 集合，把集合长度缓存到一个变量中，然后遍历使用这个变量，如果经常操作集合，建议拷到一个数组中。
5. 要留意浏览器的重绘和重排；批量修改样式的时候，‘离线’操作 DOM 树，使用缓存，并减少访问布局信息的次数。
   重绘和重排是 DOM 编程优化的一个相当重要概念：[重绘和重排](http://web.jobbole.com/83164/)。
6. 动画中使用绝对定义，使用拖放处理。
7. 使用事件委托来减少事件处理器的数量。

### 第四章算法和流程控制小结：

1. for、while 和 do-while 循环性能差不多，**for-in 循环速度只有前面几种类型的 1/7**，所以尽量避免使用 for-in 循环，除非你需要遍历一个属性数量未知的对象。

   forEach 比 for 慢，如果运行速度要求严格，不建议使用。

2. 改善循环性能的最佳方式是**减少每次迭代的工作量和减少循环迭代的次数**。

减少迭代工作量：减少属性查找和倒序循环，循环次数越多，性能优化越明显。

```js
for(var i=0;i<items.length;i++){代码}//正序循环
for(var i=items.length;i--){代码}//倒序循环
//减少属性查找：查找一次属性，把值存在局部变量，在控制条件里面使用这个变量

倒序循环在i>0的时候会自动转换为true，等于0的时候为false。
//倒序循环：控制条件从（迭代数少于总数吗？它是否为true？）变为（它是否为true）
```

减少迭代的次数："Duff's Device"循环体展开技术，有兴趣的可以看一下，迭代工作量大于 1000 的时候适用。

3.  if-else 与 switch：条件数量越大，越倾向于使用 switch。

    优化 if-else：

    - 把最可能出现的条件放在首位.
    - 使用二分法把值域分成一系列的区间。

4.  浏览器的调用栈大小限制了递归算法在 js 中的应用；栈溢出错误会导致其他代码中断运行。

        小心使用递归，现在es6递归可以尾递归，在es6中只要使用尾递归就不会发生栈溢出，相对节省性能。

### 第五章字符串和正则表达式小结：

1.  字符串合并的时候使用简单的'+'和'+='操作符。

```js
let str+='abc'+'efg;//2个以上的字符串拼接，会产生临时字符串
let str=str+'abc'+'efg';//推荐，提速10%~40%
```

2.  书里面讲的**正则原理和回溯原理，这个很重要**，找个篇[博客](http://blog.csdn.net/c_kite/article/details/77875328)：跟书里面讲的差不多，但还是建议大家可以去找找 PDF 好好看看正则表达式这节。

3.  提高正则表达式效率的方法：

    - 最重要的是：具体化正则表达式！具体化正则表达式！具体化正则表达式！
    - 关注如何让匹配更快失败，找出一些必需，特殊的字符
    - 正则表达式以简单的、必需的字元开始。
    - 使用量词模式，使它们后面的字元互斥。
    - 较少分支数量，缩小分支范围
    - 使用合适的量词
    - 把正则表达式赋值给变量并重用
    - 将复杂的正则拆分为简单的片段
      //事实上，书里面讲的方法不止这么几个，而且每一个都有详细的解析 大佬们 还是去看看这一章节吧

4.  正则表达式并不总是最好的解决方案，当你只是搜索字面字符串或者你事先知道字符串的哪一部分将要被查找时：

    - 使用 indexOf()和 lastIndexOf()更适合查找特定字符串的位置或者判断它们是否存在
      //例如：判断当前浏览器之类。

### 第六章快速响应的用户界面小结：

js 和用户界面更新在同一个进程中运行，因此一次只能处理一件事情。高效的管理 UI 线程就是要确保 js 不能运行太长时间，以免影响用户体验。

1. 浏览器限制了 js 任务的运行时间，这种限制很有必要，它确保某些恶意代码不能通过永不停止的密集操作锁住用户的浏览器。此限制分为两种：调用栈的大小和长时间运行脚本。

2. 任何 js 任务都不应当执行超过 100 毫秒。过长的运行时间会导致 UI 更新出现明显延迟，从而对用户体验造成负面影响。

3. 定时器可用来安排代码延迟执行，它使得你可以把长时间运行脚本分解成一系列的小任务。

### 第七章 AJAX 小结

这一章节貌似东西都比较老一点。。

1. post 更适合发送大量数据到服务器。
2. get 请求能够被浏览器缓存，Expires 头信息设置浏览器缓存请求多久。可用于从不改变的图片或者其他静态数据集（js、css 等）

3. JSON 是一种使用 js 对象和数组直接量编写的轻量级且易于解析的数据格式，它不仅传输尺寸小，而且解析速度快。JSON 是高性能 AJAX 的基础，尤其在使用动态脚本注入时。

json 应该是近几年一直在用的。。。

4. 减少请求数，通过合并 js 和 css 文件。
5. 缩短页面的加载时间，页面主要内容加载完成后，用 AJAX 获取那些次要的文件。

### 第八章编程实践小结

1.  避免双重求值：避免使用 eval()和 function()构造器来避免双重求值带来的性能消耗，同样的，给 setTimeout()和 setInterval()传递函数而不是字符串作为参数。

```js
//双重求值：就是在js代码中执行另一段js代码，不建议使用下面这些方式
eval('代码')
function构造函数--new function('代码')
setTimeout(‘代码’,100)和setInterval(‘代码’,100)
```

2.  尽量使用直接量创建对象和数组。直接量的创建和初始化都比非直接量形式要快。
3.  避免做重复工作，能节省的步骤就节省。
4.  js 原生方法总会比你写的任何代码都要快。

### 第九章 构建并部署高性能 js 应用小结

构建和部署的过程对基于 js 的 web 应用的性能有着巨大影响。这个过程中最重要的步骤有：

1. 合并、压缩 js 文件。**可使用 Gzip 压缩，能够减少约 70%的体积**！

这些都是在构建过程中完成的工作，不要等到运行时去做，webpack 也是在构建过程中，完成的工作。

2. 通过正确设置 HTTP 响应头来缓存 js 文件，通过向文件名增加时间戳来避免缓存问题。
3. 使用 CDN 提供 js 文件；CDN 不仅可以提升性能，它也为你管理文件的压缩与缓存，。

### 第十章 工具 小结：

当网页变慢时，分析从网络下载的资源以及分析的资源以及分析脚本的运行性能能让你专注于那些最需要优化的地方。

1.  使用网络分析工具找出加载脚本和页面中其他资源的瓶颈，这会帮助你决定那些脚本需要延迟加载，或者需要进一步分析。

    - 检查图片、样式表和脚本的加载过程，以及它们对页面整体加载和渲染的影响。
    - 针对性的做出优化

2.  把脚本尽可能延迟加载，这样做可以加快页面渲染速度，给用户带来更好的体验。
3.  确认脚本和其他资源文件的加载过程已经被优化

    - 这里主要是说文件从服务器的下载速度，比如服务器那边的配置问题之类的。
    - 栗子：我就被后端坑过。一个 js 文件就 200k ，下载下来需要 50 秒钟！
    - 后面发现原来是后端那边 nginx 没有开启加速配置什么的，导致出现的问题，找问题找半天。

4.  测试脚本的运行时间,用一个 Date 实例减去另一个 Date 实例，得到的时间差就是脚本运行消耗的时间。

```js
let start = new Date()
//你的代码
let time = newDate() - start
```

5.  **chrome ,火狐 等主流浏览器的控制面板，已经能够反映很多性能问题**。仔细分析就能找出很多问题。例如：资源加载，断点等

## 后话

事实上，**自认为这本书最宝贵的就是一些提到的细节**，比如：

1、字符串合并的时候使用简单的'+'和'+='操作符。

```js
let str+='abc'+'efg'; //2个以上的字符串拼接，会产生临时字符串
let str=str+'abc'+'efg'; //推荐，提速10%~40%
```

2、避免双重求值：避免使用 eval()和 function()构造器来避免双重求值带来的性能消耗，同样的，给 setTimeout()和 setInterval()传递函数而不是字符串作为参数。

```js
//双重求值：就是在js代码中执行另一段js代码，不建议使用下面这些方式
eval('代码')
function构造函数--new function('代码')
setTimeout(‘代码’,100)和setInterval(‘代码’,100)
```

### 这些东西可以让我们知道什么是更好的实践，什么样的代码可以跑得更快，让我们养成更好的开发习惯。

书不太厚，如果对里面的内容感兴趣，还是建议买一本回家看一看。

以上 2018.1.9
