(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{301:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"js-高程中的垃圾回收机制与常见内存泄露的解决方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-高程中的垃圾回收机制与常见内存泄露的解决方法"}},[s._v("#")]),s._v(" JS 高程中的垃圾回收机制与常见内存泄露的解决方法")]),s._v(" "),t("p",[s._v("起因是因为想了解闭包的内存泄露机制，然后想起《js 高级程序设计》中有关于垃圾回收机制的解析，之前没有很懂，过一年回头再看就懂了，写篇博客与大家分享一下。")]),s._v(" "),t("h3",{attrs:{id:"内存的生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存的生命周期"}},[s._v("#")]),s._v(" 内存的生命周期：")]),s._v(" "),t("ol",[t("li",[s._v("分配你所需要的内存：")])]),s._v(" "),t("p",[s._v("由于字符串、对象等没有固定的大小，js 程序在每次创建字符串、对象的时候，程序都会"),t("strong",[s._v("分配内存来存储那个实体")]),s._v("。")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[s._v("使用分配到的内存做点什么。")])]),s._v(" "),t("li",[t("p",[s._v("不需要时将其释放回归：")])])]),s._v(" "),t("p",[s._v("在不需要字符串、对象的时候，需要释放其所占用的内存，否则将会消耗完系统中所有可用的内存，造成系统崩溃，这就是"),t("strong",[s._v("垃圾回收机制所存在的意义")]),s._v("。")]),s._v(" "),t("p",[t("strong",[s._v("所谓的内存泄漏指的是")]),s._v("：由于疏忽或错误造成程序未能释放那些已经不再使用的内存，造成内存的浪费。")]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"垃圾回收机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收机制"}},[s._v("#")]),s._v(" 垃圾回收机制：")]),s._v(" "),t("p",[s._v("在 C 和 C++之类的语言中，需要手动来管理内存的，这也是造成许多不必要问题的根源。幸运的是，在编写 js 的过程中，内存的分配以及内存的回收完全实现了自动管理，我们不用操心这种事情。")]),s._v(" "),t("h3",{attrs:{id:"垃圾收集机制的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾收集机制的原理"}},[s._v("#")]),s._v(" 垃圾收集机制的原理：")]),s._v(" "),t("p",[s._v("垃圾收集器会按照固定的时间间隔，"),t("strong",[s._v("周期性的找出不再继续使用的变量，然后释放其占用的内存")]),s._v("。")]),s._v(" "),t("p",[t("strong",[s._v("什么叫不再继续使用的变量？")])]),s._v(" "),t("p",[s._v("不再使用的变量也就是生命周期结束的变量，是局部变量，局部变量只在函数的执行过程中存在，当函数运行结束，没有其他引用(闭包)，那么该变量会被标记回收。")]),s._v(" "),t("p",[s._v("全局变量的生命周期直至浏览器卸载页面才会结束，也就是说"),t("strong",[s._v("全局变量不会被当成垃圾回收")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"标记清除-当前采用的垃圾收集策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标记清除-当前采用的垃圾收集策略"}},[s._v("#")]),s._v(" 标记清除：当前采用的垃圾收集策略")]),s._v(" "),t("p",[s._v("工作原理：")]),s._v(" "),t("p",[s._v("当变量进入环境时(例如在函数中声明一个变量)，将这个变量标记为“进入环境”，当变量离开环境时，则将其标记为“离开环境”。标记“离开环境”的就回收内存。")]),s._v(" "),t("p",[s._v("工作流程：")]),s._v(" "),t("ol",[t("li",[s._v("垃圾收集器会在运行的时候会给存储在内存中的"),t("strong",[s._v("所有变量都加上标记")]),s._v("。")]),s._v(" "),t("li",[t("strong",[s._v("去掉环境中的变量")]),s._v("以及被环境中的变量引用的变量的标记。")]),s._v(" "),t("li",[s._v("那些"),t("strong",[s._v("还存在标记的变量被视为准备删除的变量")]),s._v("。")]),s._v(" "),t("li",[s._v("最后垃圾收集器会执行最后一步内存清除的工作，"),t("strong",[s._v("销毁那些带标记的值并回收它们所占用的内存空间")]),s._v("。")])]),s._v(" "),t("p",[s._v("到 2008 年为止,IE、Chorme、Fireofx、Safari、Opera "),t("strong",[s._v("都使用标记清除式的垃圾收集策略")]),s._v("，只不过垃圾收集的时间间隔互有不同。")]),s._v(" "),t("h3",{attrs:{id:"引用计数略-被废弃的垃圾收集策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用计数略-被废弃的垃圾收集策略"}},[s._v("#")]),s._v(" 引用计数略：被废弃的垃圾收集策略")]),s._v(" "),t("p",[s._v("循环引用：跟踪记录每个值被引用的技术")]),s._v(" "),t("p",[s._v("在老版本的浏览器中(对，又是 IE)，IE9 以下 BOM 和 DOM 对象就是使用 C++以 COM 对象的形式实现的。")]),s._v(" "),t("p",[s._v("COM 的垃圾收集机制采用的就是引用计数策略，这种机制在出现循环引用的时候永远都释放不掉内存。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" element "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementById")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'something'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" myObject "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmyObject"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("element "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" element "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// element属性指向dom")]),s._v("\nelement"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("someThing "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" myObject "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// someThing回指myObject 出现循环引用(两个对象一直互相包含 一直存在计数)。")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("解决方式是，当我们不使用它们的时候，手动切断链接：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("myObject"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("element "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("\nelement"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("someThing "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("淘汰")]),s._v("：")]),s._v(" "),t("p",[s._v("IE9 把 BOM 和 DOM 对象转为了真正的 js 对象，避免了使用这种垃圾收集策略，消除了 IE9 以下常见的内存泄漏的主要原因。")]),s._v(" "),t("p",[s._v("IE7 以下有一个声明狼藉的性能问题，大家了解一下：")]),s._v(" "),t("ol",[t("li",[s._v("256 个变量，4096 个对象(或数组)字面或者 64KB 的字符串，达到任何一个临界值会触发垃圾收集器运行。")]),s._v(" "),t("li",[s._v("如果一个 js 脚本的生命周期一直保有那么多变量，垃圾收集器会一直频繁的运行，引发严重的性能问题。")])]),s._v(" "),t("p",[s._v("IE7 已修复这个问题。")]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"哪些情况会引起内存泄漏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#哪些情况会引起内存泄漏"}},[s._v("#")]),s._v(" 哪些情况会引起内存泄漏？")]),s._v(" "),t("p",[s._v("虽然有垃圾回收机制，但我们在编写代码的时候，有些情况还是会造成内存泄漏，了解这些情况，并在编写程序的时候，注意避免，我们的程序会更具健壮性。")]),s._v(" "),t("h3",{attrs:{id:"意外的全局变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#意外的全局变量"}},[s._v("#")]),s._v(" 意外的全局变量：")]),s._v(" "),t("p",[s._v("上文我们提到了"),t("strong",[s._v("全局变量不会被当成垃圾回收")]),s._v("，我们在编码中有时会出现下面这种情况：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bar2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'默认绑定this指向全局'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 全局变量=> window.bar2")]),s._v("\n\tbar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'全局变量'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 没有声明变量 实际上是全局变量=>window.bar")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("当我们使用"),t("a",{attrs:{href:"https://juejin.im/post/5b3715def265da59af40a630#heading-3",target:"_blank",rel:"noopener noreferrer"}},[s._v("默认绑定"),t("OutboundLink")],1),s._v("，this 会指向全局，"),t("code",[s._v("this.something")]),s._v("也会创建一个全局变量，这一点可能很多人没有注意到。")]),s._v(" "),t("p",[t("strong",[s._v("解决方法：在函数内使用严格模式 or 细心一点")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'use strict'")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bar2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'严格模式下this指向undefined'")]),s._v("\n\tbar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'报错'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("当然我们也可以"),t("strong",[s._v("手动释放全局变量的内存")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bar2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"被遗忘的定时器和回调函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#被遗忘的定时器和回调函数"}},[s._v("#")]),s._v(" 被遗忘的定时器和回调函数")]),s._v(" "),t("p",[s._v("当"),t("strong",[s._v("不需要")]),t("code",[s._v("setInterval")]),s._v("或者"),t("code",[s._v("setTimeout")]),s._v("时，"),t("strong",[s._v("定时器没有被 clear")]),s._v("，定时器的"),t("strong",[s._v("回调函数以及内部依赖的变量都不能被回收")]),s._v("，造成内存泄漏。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" someResource "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setInterval")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" node "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementById")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Node'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("innerHTML "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("someResource"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定时器也没有清除")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// node、someResource 存储了大量数据 无法回收")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[t("strong",[s._v("解决方法")]),s._v("： 在定时器完成工作的时候，手动清除定时器。")]),s._v(" "),t("h3",{attrs:{id:"闭包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[s._v("#")]),s._v(" 闭包：")]),s._v(" "),t("p",[t("strong",[s._v("闭包可以维持函数内局部变量，使其得不到释放，造成内存泄漏")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bindEvent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createElement")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'XXX'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("unused")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'闭包内引用obj obj不会被释放'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// obj = null;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[t("strong",[s._v("解决方法")]),s._v("：手动解除引用，"),t("code",[s._v("obj = null")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"循环引用问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#循环引用问题"}},[s._v("#")]),s._v(" 循环引用问题")]),s._v(" "),t("p",[s._v("就是 IE9 以下的循环引用问题，上文讲过了。")]),s._v(" "),t("h3",{attrs:{id:"没有清理-dom-元素引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#没有清理-dom-元素引用"}},[s._v("#")]),s._v(" 没有清理 DOM 元素引用：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" refA "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementById")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'refA'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("removeChild")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("refA"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// dom删除了")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("refA"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'refA'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 但是还存在引用 能console出整个div 没有被回收")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("不信的话，可以看下这个"),t("a",{attrs:{href:"https://codepen.io/OBKoro1/pen/vroKbg",target:"_blank",rel:"noopener noreferrer"}},[s._v("dom"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[t("strong",[s._v("解决办法")]),s._v("："),t("code",[s._v("refA = null")]),s._v(";")]),s._v(" "),t("h3",{attrs:{id:"console-保存大量数据在内存中。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#console-保存大量数据在内存中。"}},[s._v("#")]),s._v(" console 保存大量数据在内存中。")]),s._v(" "),t("p",[s._v("过多的 console，比如定时器的 console 会导致浏览器卡死。")]),s._v(" "),t("p",[t("strong",[s._v("解决")]),s._v("：合理利用 console，线上项目尽量少的使用 console，当然如果你要发招聘除外。")]),s._v(" "),t("hr"),s._v(" "),t("h3",{attrs:{id:"如何避免内存泄漏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何避免内存泄漏"}},[s._v("#")]),s._v(" 如何避免内存泄漏：")]),s._v(" "),t("p",[t("strong",[s._v("记住一个原则：不用的东西，及时归还，毕竟你是'借的'嘛")]),s._v("。")]),s._v(" "),t("ol",[t("li",[s._v("减少不必要的全局变量，使用严格模式避免意外创建全局变量。")]),s._v(" "),t("li",[s._v("在你使用完数据后，及时解除引用(闭包中的变量，dom 引用，定时器清除)。")]),s._v(" "),t("li",[s._v("组织好你的逻辑，避免死循环等造成浏览器卡顿，崩溃的问题。")])]),s._v(" "),t("h3",{attrs:{id:"关于内存泄漏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于内存泄漏"}},[s._v("#")]),s._v(" 关于内存泄漏：")]),s._v(" "),t("ol",[t("li",[s._v("即使是 1byte 的内存，也叫内存泄漏，并不一定是导致浏览器崩溃、卡顿才能叫做内存泄漏。")]),s._v(" "),t("li",[s._v("一般是堆区内存泄漏，栈区不会泄漏。")])]),s._v(" "),t("p",[s._v("基本类型的值存在内存中，被保存在栈内存中，引用类型的值是对象，保存在堆内存中。所以"),t("strong",[s._v("对象、数组之类的，才会发生内存泄漏")]),s._v("。")]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("使用 chorme 监控内存泄漏，可以看一下这篇"),t("a",{attrs:{href:"https://jinlong.github.io/2016/05/01/4-Types-of-Memory-Leaks-in-JavaScript-and-How-to-Get-Rid-Of-Them/",target:"_blank",rel:"noopener noreferrer"}},[s._v("文章"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("p",[s._v("了解了内存泄漏的原因以及出现的情况，那么我们在编码过程中只要多加注意，就不会发生非常严重的内存泄漏问题。")]),s._v(" "),t("h3",{attrs:{id:"点个star支持我一下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#点个star支持我一下"}},[s._v("#")]),s._v(" 点个"),t("a",{attrs:{href:"https://boom-bo.github.io/web_accumulation",target:"_blank",rel:"noopener noreferrer"}},[s._v("Star"),t("OutboundLink")],1),s._v("支持我一下~")])])}),[],!1,null,null,null);t.default=e.exports}}]);