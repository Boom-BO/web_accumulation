(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{329:function(t,a,s){"use strict";s.r(a);var r=s(14),n=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_55-题跳远游戏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_55-题跳远游戏"}},[t._v("#")]),t._v(" 55 题跳远游戏")]),t._v(" "),a("h3",{attrs:{id:"题目链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目链接"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/jump-game/",target:"_blank",rel:"noopener noreferrer"}},[t._v("题目链接"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"难度-中等"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#难度-中等"}},[t._v("#")]),t._v(" 难度：中等")]),t._v(" "),a("h3",{attrs:{id:"思路分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路分析"}},[t._v("#")]),t._v(" 思路分析：")]),t._v(" "),a("p",[t._v("贪心")]),t._v(" "),a("h3",{attrs:{id:"想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#想"}},[t._v("#")]),t._v(" 想")]),t._v(" "),a("h3",{attrs:{id:"一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一"}},[t._v("#")]),t._v(" 一")]),t._v(" "),a("h3",{attrs:{id:"想-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#想-2"}},[t._v("#")]),t._v(" 想")]),t._v(" "),a("h3",{attrs:{id:"再"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再"}},[t._v("#")]),t._v(" 再")]),t._v(" "),a("h3",{attrs:{id:"看"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#看"}},[t._v("#")]),t._v(" 看")]),t._v(" "),a("h3",{attrs:{id:"答"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#答"}},[t._v("#")]),t._v(" 答")]),t._v(" "),a("h3",{attrs:{id:"案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案"}},[t._v("#")]),t._v(" 案")]),t._v(" "),a("h3",{attrs:{id:"想-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#想-3"}},[t._v("#")]),t._v(" 想")]),t._v(" "),a("h3",{attrs:{id:"一-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-2"}},[t._v("#")]),t._v(" 一")]),t._v(" "),a("h3",{attrs:{id:"想-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#想-4"}},[t._v("#")]),t._v(" 想")]),t._v(" "),a("h3",{attrs:{id:"再-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再-2"}},[t._v("#")]),t._v(" 再")]),t._v(" "),a("h3",{attrs:{id:"看-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#看-2"}},[t._v("#")]),t._v(" 看")]),t._v(" "),a("h3",{attrs:{id:"答-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#答-2"}},[t._v("#")]),t._v(" 答")]),t._v(" "),a("h3",{attrs:{id:"案-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案-2"}},[t._v("#")]),t._v(" 案")]),t._v(" "),a("h3",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码：")]),t._v(" "),a("p",[t._v("贪心")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("canJump")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nums")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" canJumpMax "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 下一步的最远距离")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" last_canJumpMax "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上一步的最远距离")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tcanJumpMax "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("canJumpMax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 下一步的最远距离")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("last_canJumpMax "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tlast_canJumpMax "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canJumpMax "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前的最远距离")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("last_canJumpMax "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最远距离无法到达终点即false")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("h3",{attrs:{id:"鼓励我一下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#鼓励我一下"}},[t._v("#")]),t._v(" 鼓励我一下：")]),t._v(" "),a("p",[t._v("觉得还不错的话，给我的项目点个"),a("a",{attrs:{href:"https://github.com/OBKoro1/Brush_algorithm",target:"_blank",rel:"noopener noreferrer"}},[t._v("star"),a("OutboundLink")],1),t._v("吧")]),t._v(" "),a("h3",{attrs:{id:"点个star支持我一下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点个star支持我一下"}},[t._v("#")]),t._v(" 点个"),a("a",{attrs:{href:"https://github.com/OBKoro1/Brush_algorithm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Star"),a("OutboundLink")],1),t._v("支持我一下~")])])}),[],!1,null,null,null);a.default=n.exports}}]);