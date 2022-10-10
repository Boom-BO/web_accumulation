# 可视化大屏快捷开发方案

<strong>背景：</strong>
传统的信息展示方式，远不能满足如今信息大爆炸似增长的时代，而数据可视化大屏实现方案的优点就是能够汇聚海量信息、并且实现实时数据更新交互。  
优秀的大屏可视化制作方案则能够为企业形象加分。大屏数据公司可以通过制作 3D 动态地图突出企业的优势，也能通过建模，3D 化显示企业的整个地理地形，展示企业的风貌和文化建设。

## 布局

在日常开发过程中我们可以发现，不同客户对项目中可视化页面的要求不一样，并没有想要单纯的应用在 LED 大屏或 LCD 大屏上去展示，部分客户会希望把可视化图形应用在 PC 端门户或者后台系统控制台上。所以我们希望在布局方面灵活应用以下两种方案。

#### 1、固定分辨率

对于只应用在 LED 大屏或 LCD 大屏的项目，前端开发时我们可以根据实际情况，用固定的分辨率去开发页面。

#### 2、自适应缩放

应用在 PC 端时，因为显示器的分辨率种类太多，所以我们如何去使页面达到最佳效果（不被压扁、文字不会重合、横向、纵向不可出现滚动条、充满整个屏幕等等），通过调研我们选用 css3 的 scale 缩放来实现。原理很简单，就是我们假设按照 1920×1080 的设计图正常使用 px 单位去写页面，然后当页面变化时，使用 scale 动态的放大或者缩小（VUE 项目同理）。

```js
// 页面渲染计算比例缩放
scalePage = () => {
	setScale = debounce(() => {
		// 获取缩放比例
		let scale = this.getScale()
		$('.scale-wrapper').css({
			transform: 'scale(' + scale + ') translate(-50%, -50%)',
			'-webkit-transform': 'scale(' + scale + ') translate(-50%, -50%)'
		})
	}, 200)
	setScale()
	window.addEventListener('resize', setScale)
}
// 防抖
debounce = (fun, delay) => {
	let timer
	return function() {
		if (timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(fun, delay)
	}
}
getScale = () => {
	// 固定好16:9的宽高比，计算出最合适的缩放比，宽高比可根据需要自行更改
	const width = 1920
	const height = 1080
	let ww = window.innerWidth / width
	let wh = window.innerHeight / height
	return ww < wh ? ww : wh
}
```

## Demo

开发项目过程中，我们前端 UI 部门积累了一些快速开发的框架模板与实例，可以根据自己项目需要选择模板进行专注于页面内容的快速开发。我们还搜罗了一些可视化大屏效果图供大家参考。

<strong>Demo 介绍：</strong><br/>
技术栈：JQ + Echarts<br/>
项目-《<a href="/code/visualize/%E5%A4%A7%E5%B1%8F%E6%96%B9%E6%A1%88/index.html" target="_blank">大屏方案一</a>》：简单的框架，带有基础自适应功能与框架样式。其案例为《<a href="/code/visualize/XXXX%E9%9B%86%E5%9B%A2%E5%AE%89%E5%85%A8%E7%94%9F%E4%BA%A7%E5%A4%A7%E5%B1%8F/index.html" target="_blank">大屏 Demo1</a>》。<br/>
项目-《<a href="/code/visualize/%E5%A4%A7%E5%B1%8F%E6%96%B9%E6%A1%882/theme.html" target="_blank">大屏方案二</a>》：带有基础自适应功能与框架样式基础上增加了 Echarts 地图与主题切换功能，其案例为《<a href="/code/visualize/XXX%E5%A4%A7%E5%B1%8F/index.html" target="_blank">大屏 Demo2</a>》，支持滚屏显示。<br/>
另外我们整理了一些案例集锦效果图，请点击查看《<a href="/code/visualize/可视化大屏UI案例集锦.pdf" target="_blank">可视化大屏 UI 案例集锦.pdf</a>》

## 3D 可视化大屏

期待使用 WebGL 或相关开源框架如 Three.js 来实现。（待补充）
