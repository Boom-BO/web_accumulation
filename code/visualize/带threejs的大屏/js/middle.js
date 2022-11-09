function middleInit() {
	let middleop = echarts.init(document.getElementById('middle-echarts'));
	var getY = function(x) {
		let y = Math.sqrt((1 - Math.pow(x / 37, 2)) * Math.pow(35, 2));
		return y;
	};
	var getOutY = function(x) {
		let y = Math.sqrt((1 - Math.pow(x / 50, 2)) * Math.pow(58, 2));
		return y;
	};
	var items = [{symbol: "",name: "探针1",pointType: "cloud"},{symbol: "",name: "公安分局",pointType: "point",belong: "探针1"},
{symbol: "",name: "探针2",pointType: "cloud"},{symbol: "",name: "区财政局",pointType: "point",belong: "探针2"},
{symbol: "",name: "探针3",pointType: "cloud"},{symbol: "",name: "区规划资源局",pointType: "point",belong: "探针3"},
{symbol: "",name: "探针4",pointType: "cloud"},{symbol: "",name: "区大数据中心",pointType: "point",belong: "探针4"},
{symbol: "",name: "探针5",pointType: "cloud"},{symbol: "",name: "区生态环境局",pointType: "point",belong: "探针5"},
{symbol: "",name: "探针10",pointType: "cloud"},{symbol: "",name: "地工委",pointType: "point",belong: "探针10"},
{symbol: "",name: "探针15",pointType: "cloud"},{symbol: "",name: "区气象局",pointType: "point",belong: "探针15"},
{symbol: "",name: "探针16",pointType: "cloud"},{symbol: "",name: "区商务委",pointType: "point",belong: "探针16"},
{symbol: "",name: "探针17",pointType: "cloud"},{symbol: "",name: "区卫健委",pointType: "point",belong: "探针17"},
{symbol: "",name: "探针6",pointType: "cloud"},{symbol: "",name: "区科经委",pointType: "point",belong: "探针6"},
{symbol: "",name: "探针7",pointType: "cloud"},{symbol: "",name: "区城管执法局",pointType: "point",belong: "探针7"},
{symbol: "",name: "探针8",pointType: "cloud"},{symbol: "",name: "区人社局",pointType: "point",belong: "探针8"},
{symbol: "",name: "探针9",pointType: "cloud"},{symbol: "",name: "区民政局",pointType: "point",belong: "探针9"},
{symbol: "",name: "探针11",pointType: "cloud"},{symbol: "",name: "区建交委",pointType: "point",belong: "探针11"},
{symbol: "",name: "探针12",pointType: "cloud"},{symbol: "",name: "区应急管理局",pointType: "point",belong: "探针12"},
{symbol: "",name: "探针14",pointType: "cloud"},{symbol: "",name: "区金融办",pointType: "point",belong: "探针14"},
{symbol: "",name: "探针510",pointType: "cloud"},{symbol: "",name: "区发改委",pointType: "puple",belong: "探针510"}]
	
	var outCircleData=[]
	var innerCircleData=[]
	for(var index=0;index<items.length;index++){
		if(items[index].pointType=='point'||items[index].pointType=='puple'){
			outCircleData.push(items[index])
		}else{
			innerCircleData.push(items[index])
		}
	}
	var lineWidth=100/outCircleData.length*2
	var linewidthIn=70/innerCircleData.length*2
	for(var index=0;index<outCircleData.length;index++){
		if(index*lineWidth<49){
			outCircleData[index].value=[index*lineWidth,getOutY(index*lineWidth)]
		}else if(index*lineWidth>=49&&index*lineWidth<99){
			outCircleData[index].value=[(50-(index*lineWidth-50)),-getOutY((50-(index*lineWidth-50)))]
		}else if(index*lineWidth>=99&&index*lineWidth<150){
			outCircleData[index].value=[-(index*lineWidth-100),-getOutY((index*lineWidth-100))]
		}else{
			outCircleData[index].value=[-50+(index*lineWidth-150),getOutY(-50+(index*lineWidth-150))]
		}
		// outCircleData[index].value= [(index*lineWidth)<49?(index*lineWidth):(index*lineWidth)-99, getOutY((index*lineWidth)<45?(index*lineWidth):(index*lineWidth)-90)]
	}
	// console.log(outCircleData)
	for(var index=0;index<innerCircleData.length;index++){
		// innerCircleData[index].value=[(index*linewidthIn)<34?(index*linewidthIn):(index*linewidthIn)-70, getY((index*linewidthIn)<34?(index*linewidthIn):(index*linewidthIn)-70)]
		if(index*linewidthIn<37){
			innerCircleData[index].value=[index*linewidthIn,getY(index*linewidthIn)]
		}else if(index*linewidthIn>=37&&index*linewidthIn<74){
			innerCircleData[index].value=[(37-(index*linewidthIn-37)),-getY((37-(index*linewidthIn-37)))]
		}else if(index*linewidthIn>=74&&index*linewidthIn<111){
			innerCircleData[index].value=[-(index*linewidthIn-74),-getY((index*linewidthIn-74))]
		}else{
			innerCircleData[index].value=[-37+(index*linewidthIn-111),getY(-37+(index*linewidthIn-111))]
		}
	}
	var items=[]
	items=outCircleData.concat(innerCircleData)
	console.log(items)
	const itemsCopy = items.map((el, index) => {
	console.log(
			el.pointType)
		if (el.pointType == 'point'||el.pointType == 'puple') {
			let obj = Object.assign({}, el)

			obj.label = {
				show: true
			}
			el.symbol = 'none'



			obj.symbolSize = [0];
			obj.label.position = 'inside'
			obj.label.color = '#fff'
			obj.label.fonSize = 10
			obj.label.formatter = () => {
				return index + 1
			}
			return obj
		} else {
			let obj = Object.assign({}, el)
			el.symbol = 'none'
			obj.symbolSize = [0];
			return obj
		}
	});
	items.forEach((el, index) => {
		if (el.pointType == "cloud") {
			el.symbol ="image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDUtMDdUMTY6MTk6NTMrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA1LTA3VDE2OjM2OjQyKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA1LTA3VDE2OjM2OjQyKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQzMDU3MjM1LTYwOTIt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",
				el.symbolSize = [25, 25];
			// el.label = {
			// 	normal: {
			// 		show: true,
			// 		position: "bottom",
			// 		borderWidth: 1,
			// 		borderRadius: 12,
			// 		padding: [4, 8, 4, 8],
			// 		distance: 10,
			// 		color: "rgb(255,255,255)",
			// 		borderColor: "rgb(89,197,238)"
			// 	}
			// };
		} else if (el.pointType == "yellow") {
			el.symbol =
				"image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDUtMDdUMTY6MjA6MzArMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA1LTA3VDE2OjM3OjM4KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA1LTA3VDE2OjM3OjM4KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmUzMTgxNzdjLTEzZjIt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",
				el.symbolSize = [25, 25];
			// el.label = {
			// 	normal: {
			// 		show: true,
			// 		position: "bottom",
			// 		borderWidth: 1,
			// 		borderRadius: 12,
			// 		padding: [4, 8, 4, 8],
			// 		distance: 10,
			// 		color: "rgb(255,255,255)",
			// 		borderColor: "rgb(89,197,238)"
			// 	}
			// };
		} else if (el.pointType == "point") {
			el.symbol =
				"image://data:image/png;base64,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",
				el.symbolSize = [40, 40];
			el.itemStyle = {
				color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0ceffd"
					},
					{
						offset: 1,
						color: "#0fffff"
					}
				])
			};
			if (!el.label) {
				el.label = {
					show: true
				}
			}
			el.label.width = 200
			el.label.color = {
				lineColor: {
					color: "rgb(24,163,239)"
				}
			}
			if (index < 18) {
				el.label.rotate =-6// 57 - 3 * index
				// el.label.align = "left"
				if (!el.label.offset) {
					el.label.offset = [8, 0]
				}
				if (index < 20) {
					el.label.position = 'top'
				} else {
					el.label.position = 'top'
				}
			} else {
				el.label.rotate =-6//(-57 + 3 * (75 - index))
				// el.label.align = "right"
				if (!el.label.offset) {
					el.label.offset = [-8, 0]
				}
				if (index > 56) {
					el.label.position = 'top'
				} else {
					el.label.position = 'top'
				}
			}
			el.label.color = '#fff'
		}else if (el.pointType == "puple") {
			el.symbol =
				"image://data:image/png;base64,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"
				el.symbolSize = [40, 40];
			el.itemStyle = {
				color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0ceffd"
					},
					{
						offset: 1,
						color: "#0fffff"
					}
				])
			};
			if (!el.label) {
				el.label = {
					show: true
				}
			}
			el.label.width = 200
			el.label.color = {
				lineColor: {
					color: "rgb(24,163,239)"
				}
			}
			if (index < 18) {
				el.label.rotate =-6// 57 - 3 * index
				// el.label.align = "left"
				if (!el.label.offset) {
					el.label.offset = [8, 0]
				}
				if (index < 20) {
					el.label.position = 'top'
				} else {
					el.label.position = 'top'
				}
			} else {
				el.label.rotate =-6//(-57 + 3 * (75 - index))
				// el.label.align = "right"
				if (!el.label.offset) {
					el.label.offset = [-8, 0]
				}
				if (index > 56) {
					el.label.position = 'top'
				} else {
					el.label.position = 'top'
				}
			}
			el.label.color = '#fff'
		}
	});

	const dataArr = []
	const targetCoord = [0, -10];
	items.forEach(el => {
		if (el.belong) {
			items.forEach(element => {
				if (el.belong == element.name) {
					dataArr.push([{
							coord: el.value,
						},
						{
							coord: element.value
						}
					]);
				}
			});
		} else if (el.pointType != 'none') {
			dataArr.push([{
					coord: el.value
				},
				{
					coord: targetCoord
				}
			]);
		}
	});
	

	option = {
		backgroundColor: '',
		legend: [],
		xAxis: {
			show: false,
			type: "value",
			max: 50,
			min: -51
		},
		yAxis: {
			show: false,
			type: "value",
			max: 50,
			min: -50
		},
		series: [{
				type: "graph",
				layout: "none",
				coordinateSystem: "cartesian2d",
				symbolSize: [15, 15],
				z: 3,
				circular: {
					rotateLabel: true
				},

				itemStyle: {
					normal: {
						shadowColor: "none"
					}
				},
				data: items
			}, {
				type: "graph",
				layout: "none",
				coordinateSystem: "cartesian2d",
				symbolSize: [15, 15],
				z: 4,
				circular: {
					rotateLabel: true
				},

				itemStyle: {
					normal: {
						shadowColor: "none"
					}
				},
				data: itemsCopy
			},
			{
				name: "",
				type: "lines",
				coordinateSystem: "cartesian2d",
				z: 1,
				effect: {
					show: true,
					smooth: false,
					trailLength: 0,
					symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAhCAYAAADtR0oPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAB2ElEQVQ4T32USU7DQBBFbcKMAAFigcSSg3ADtmzZc0juwQ6JMA9hCBAG81/Rv9W2HEp6cae7fk1tuW6appLVCWwmPTEOw0H2ww8CHHEaiLmERTh9ic/0bBBwiNOiWE7MCwynsXgVH2KCYFYLnNfFhtgSiMj8Lu4TIzFGQLQ1sS12xZFA8CZuxYk4FVdiRDmwIBDtiH1xIA7FsdgTZF4SA5xJTcNE3RSeio1gq4I+a08DAaWtiBhfMpqmP0T0mgXlaL/ZSMY4icx+3JMFRKUUnozPNhHs+TzuwBtEJiJztzEpAlBaXBwCR0bAIZdkQ2xBBC4FbJLhWdhehAUEzBn4A9SMkw0xe87QKolNDh+FjTUZyEzAXJKzcMA7Y0PgDFNLehC2O9HbQ5mBHnDAeEvLKYUA448z8EozTvZ4W8sessAZEHBZ3AWi8h6ikq6ASGSgrCfRvbj8LiFgk0MEzJ9psfaU8Gm9fGVJRKdhMljQyoCx6ZIYLSN1hmhYtEpik5LIgPNNWpdNt0pik2hEZZyXad1bkpt2D0S/EGUPvSW5Bz4pQ0E5UzN4Sjhdi3Pxb9NEcQbqPxNuGEGYv94Iux9ll1ESH2M9wywyWDj9LWOdM9hKZxsOyamqfgG1ZQ8JFbfSTwAAAABJRU5ErkJggg==",
					symbolSize: [10, 30],
					period: 4,
					delay: 2
				},

				lineStyle: {
					width: 2,
					color: 'rgb(255,255,255)',
					curveness: 0
				},
				data: dataArr
			}
		]
	};

	middleop.setOption(option);
}
function middleInit2() {
	let middleop2 = echarts.init(document.getElementById('middle-echarts2'));
	var getY = function(x) {
		let y = Math.sqrt((1 - Math.pow(x / 37, 2)) * Math.pow(35, 2));
		return y;
	};
	var getOutY = function(x) {
		let y = Math.sqrt((1 - Math.pow(x / 50, 2)) * Math.pow(58, 2));
		return y;
	};
	var items = [{symbol: "",name: "探针1",pointType: "cloud"},{symbol: "",name: "公安分局",pointType: "point",belong: "探针1"},
{symbol: "",name: "探针2",pointType: "yellow"},{symbol: "",name: "区财政局",pointType: "point",belong: "探针2"},
{symbol: "",name: "探针3",pointType: "cloud"},{symbol: "",name: "区规划资源局",pointType: "point",belong: "探针3"},
{symbol: "",name: "探针4",pointType: "cloud"},{symbol: "",name: "区大数据中心",pointType: "point",belong: "探针4"},
{symbol: "",name: "探针5",pointType: "cloud"},{symbol: "",name: "区生态环境局",pointType: "point",belong: "探针5"},{symbol: "",name: "区生态环境局123",pointType: "point",belong: "探针5"},
{symbol: "",name: "探针10",pointType: "cloud"},{symbol: "",name: "地工委",pointType: "point",belong: "探针10"},
{symbol: "",name: "探针15",pointType: "cloud"},{symbol: "",name: "区气象局",pointType: "point",belong: "探针15"},
{symbol: "",name: "探针16",pointType: "cloud"},{symbol: "",name: "区商务委",pointType: "point",belong: "探针16"},
{symbol: "",name: "探针17",pointType: "cloud"},{symbol: "",name: "区卫健委",pointType: "point",belong: "探针17"},
{symbol: "",name: "探针6",pointType: "cloud"},{symbol: "",name: "区科经委",pointType: "point",belong: "探针6"},
{symbol: "",name: "探针7",pointType: "cloud"},{symbol: "",name: "区城管执法局",pointType: "point",belong: "探针7"},
{symbol: "",name: "探针8",pointType: "cloud"},{symbol: "",name: "区人社局",pointType: "point",belong: "探针8"},
{symbol: "",name: "探针9",pointType: "cloud"},{symbol: "",name: "区民政局",pointType: "point",belong: "探针9"},
{symbol: "",name: "探针11",pointType: "cloud"},{symbol: "",name: "区建交委",pointType: "point",belong: "探针11"},
{symbol: "",name: "探针12",pointType: "cloud"},{symbol: "",name: "区应急管理局",pointType: "point",belong: "探针12"},
{symbol: "",name: "探针14",pointType: "cloud"},{symbol: "",name: "区金融办",pointType: "point",belong: "探针14"},
{symbol: "",name: "探针510",pointType: "cloud"},{symbol: "",name: "区发改委",pointType: "puple",belong: "探针510"}]
	
	var outCircleData=[]
	var innerCircleData=[]
	for(var index=0;index<items.length;index++){
		if(items[index].pointType=='point'||items[index].pointType=='puple'){
			outCircleData.push(items[index])
		}else{
			innerCircleData.push(items[index])
		}
	}
	var lineWidth=100/outCircleData.length*2
	var linewidthIn=70/innerCircleData.length*2
	for(var index=0;index<outCircleData.length;index++){
		if(index*lineWidth<49){
			outCircleData[index].value=[index*lineWidth,getOutY(index*lineWidth)]
		}else if(index*lineWidth>=49&&index*lineWidth<99){
			outCircleData[index].value=[(50-(index*lineWidth-50)),-getOutY((50-(index*lineWidth-50)))]
		}else if(index*lineWidth>=99&&index*lineWidth<150){
			outCircleData[index].value=[-(index*lineWidth-100),-getOutY((index*lineWidth-100))]
		}else{
			outCircleData[index].value=[-50+(index*lineWidth-150),getOutY(-50+(index*lineWidth-150))]
		}
		// outCircleData[index].value= [(index*lineWidth)<49?(index*lineWidth):(index*lineWidth)-99, getOutY((index*lineWidth)<45?(index*lineWidth):(index*lineWidth)-90)]
	}
	// console.log(outCircleData)
	for(var index=0;index<innerCircleData.length;index++){
		// innerCircleData[index].value=[(index*linewidthIn)<34?(index*linewidthIn):(index*linewidthIn)-70, getY((index*linewidthIn)<34?(index*linewidthIn):(index*linewidthIn)-70)]
		if(index*linewidthIn<37){
			innerCircleData[index].value=[index*linewidthIn,getY(index*linewidthIn)]
		}else if(index*linewidthIn>=37&&index*linewidthIn<74){
			innerCircleData[index].value=[(37-(index*linewidthIn-37)),-getY((37-(index*linewidthIn-37)))]
		}else if(index*linewidthIn>=74&&index*linewidthIn<111){
			innerCircleData[index].value=[-(index*linewidthIn-74),-getY((index*linewidthIn-74))]
		}else{
			innerCircleData[index].value=[-37+(index*linewidthIn-111),getY(-37+(index*linewidthIn-111))]
		}
	}
	var items=[]
	items=outCircleData.concat(innerCircleData)
	console.log(items)
	const itemsCopy = items.map((el, index) => {
	console.log(
			el.pointType)
		if (el.pointType == 'point'||el.pointType == 'puple') {
			let obj = Object.assign({}, el)

			obj.label = {
				show: true
			}
			el.symbol = 'none'



			obj.symbolSize = [0];
			obj.label.position = 'inside'
			obj.label.color = '#fff'
			obj.label.fonSize = 10
			obj.label.formatter = () => {
				return index + 1
			}
			return obj
		} else {
			let obj = Object.assign({}, el)
			el.symbol = 'none'
			obj.symbolSize = [0];
			return obj
		}
	});
	items.forEach((el, index) => {
		if (el.pointType == "cloud") {
			el.symbol ="image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDUtMDdUMTY6MTk6NTMrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA1LTA3VDE2OjM2OjQyKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA1LTA3VDE2OjM2OjQyKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQzMDU3MjM1LTYwOTIt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",
				el.symbolSize = [25, 25];
			// el.label = {
			// 	normal: {
			// 		show: true,
			// 		position: "bottom",
			// 		borderWidth: 1,
			// 		borderRadius: 12,
			// 		padding: [4, 8, 4, 8],
			// 		distance: 10,
			// 		color: "rgb(255,255,255)",
			// 		borderColor: "rgb(89,197,238)"
			// 	}
			// };
		} else if (el.pointType == "yellow") {
			el.symbol =
				"image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDUtMDdUMTY6MjA6MzArMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA1LTA3VDE2OjM3OjM4KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA1LTA3VDE2OjM3OjM4KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmUzMTgxNzdjLTEzZjIt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",
				el.symbolSize = [25, 25];
			// el.label = {
			// 	normal: {
			// 		show: true,
			// 		position: "bottom",
			// 		borderWidth: 1,
			// 		borderRadius: 12,
			// 		padding: [4, 8, 4, 8],
			// 		distance: 10,
			// 		color: "rgb(255,255,255)",
			// 		borderColor: "rgb(89,197,238)"
			// 	}
			// };
		} else if (el.pointType == "point") {
			el.symbol =
				"image://data:image/png;base64,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",
				el.symbolSize = [40, 40];
			el.itemStyle = {
				color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0ceffd"
					},
					{
						offset: 1,
						color: "#0fffff"
					}
				])
			};
			if (!el.label) {
				el.label = {
					show: true
				}
			}
			el.label.width = 200
			el.label.color = {
				lineColor: {
					color: "rgb(24,163,239)"
				}
			}
			if (index < 18) {
				el.label.rotate =-6// 57 - 3 * index
				// el.label.align = "left"
				if (!el.label.offset) {
					el.label.offset = [8, 0]
				}
				if (index < 20) {
					el.label.position = 'top'
				} else {
					el.label.position = 'top'
				}
			} else {
				el.label.rotate =-6//(-57 + 3 * (75 - index))
				// el.label.align = "right"
				if (!el.label.offset) {
					el.label.offset = [-8, 0]
				}
				if (index > 56) {
					el.label.position = 'top'
				} else {
					el.label.position = 'top'
				}
			}
			el.label.color = '#fff'
		}else if (el.pointType == "puple") {
			el.symbol =
				"image://data:image/png;base64,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"
				el.symbolSize = [40, 40];
			el.itemStyle = {
				color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: "#0ceffd"
					},
					{
						offset: 1,
						color: "#0fffff"
					}
				])
			};
			if (!el.label) {
				el.label = {
					show: true
				}
			}
			el.label.width = 200
			el.label.color = {
				lineColor: {
					color: "rgb(24,163,239)"
				}
			}
			if (index < 18) {
				el.label.rotate =-6// 57 - 3 * index
				// el.label.align = "left"
				if (!el.label.offset) {
					el.label.offset = [8, 0]
				}
				if (index < 20) {
					el.label.position = 'top'
				} else {
					el.label.position = 'top'
				}
			} else {
				el.label.rotate =-6//(-57 + 3 * (75 - index))
				// el.label.align = "right"
				if (!el.label.offset) {
					el.label.offset = [-8, 0]
				}
				if (index > 56) {
					el.label.position = 'top'
				} else {
					el.label.position = 'top'
				}
			}
			el.label.color = '#fff'
		}
	});

	const dataArr = []
	const targetCoord = [0, -10];
	items.forEach(el => {
		if (el.belong) {
			items.forEach(element => {
				if (el.belong == element.name) {
					dataArr.push([{
							coord: el.value,
						},
						{
							coord: element.value
						}
					]);
				}
			});
		} else if (el.pointType != 'none') {
			dataArr.push([{
					coord: el.value
				},
				{
					coord: targetCoord
				}
			]);
		}
	});
	

	option = {
		backgroundColor: '',
		legend: [],
		xAxis: {
			show: false,
			type: "value",
			max: 50,
			min: -51
		},
		yAxis: {
			show: false,
			type: "value",
			max: 50,
			min: -50
		},
		series: [{
				type: "graph",
				layout: "none",
				coordinateSystem: "cartesian2d",
				symbolSize: [15, 15],
				z: 3,
				circular: {
					rotateLabel: true
				},

				itemStyle: {
					normal: {
						shadowColor: "none"
					}
				},
				data: items
			}, {
				type: "graph",
				layout: "none",
				coordinateSystem: "cartesian2d",
				symbolSize: [15, 15],
				z: 4,
				circular: {
					rotateLabel: true
				},

				itemStyle: {
					normal: {
						shadowColor: "none"
					}
				},
				data: itemsCopy
			},
			{
				name: "",
				type: "lines",
				coordinateSystem: "cartesian2d",
				z: 1,
				effect: {
					show: true,
					smooth: false,
					trailLength: 0,
					symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAhCAYAAADtR0oPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAB2ElEQVQ4T32USU7DQBBFbcKMAAFigcSSg3ADtmzZc0juwQ6JMA9hCBAG81/Rv9W2HEp6cae7fk1tuW6appLVCWwmPTEOw0H2ww8CHHEaiLmERTh9ic/0bBBwiNOiWE7MCwynsXgVH2KCYFYLnNfFhtgSiMj8Lu4TIzFGQLQ1sS12xZFA8CZuxYk4FVdiRDmwIBDtiH1xIA7FsdgTZF4SA5xJTcNE3RSeio1gq4I+a08DAaWtiBhfMpqmP0T0mgXlaL/ZSMY4icx+3JMFRKUUnozPNhHs+TzuwBtEJiJztzEpAlBaXBwCR0bAIZdkQ2xBBC4FbJLhWdhehAUEzBn4A9SMkw0xe87QKolNDh+FjTUZyEzAXJKzcMA7Y0PgDFNLehC2O9HbQ5mBHnDAeEvLKYUA448z8EozTvZ4W8sessAZEHBZ3AWi8h6ikq6ASGSgrCfRvbj8LiFgk0MEzJ9psfaU8Gm9fGVJRKdhMljQyoCx6ZIYLSN1hmhYtEpik5LIgPNNWpdNt0pik2hEZZyXad1bkpt2D0S/EGUPvSW5Bz4pQ0E5UzN4Sjhdi3Pxb9NEcQbqPxNuGEGYv94Iux9ll1ESH2M9wywyWDj9LWOdM9hKZxsOyamqfgG1ZQ8JFbfSTwAAAABJRU5ErkJggg==",
					symbolSize: [10, 30],
					period: 4,
					delay: 2
				},

				lineStyle: {
					width: 2,
					color: 'rgb(255,255,255)',
					curveness: 0
				},
				data: dataArr
			}
		]
	};
console.log(middleop2)
console.log(option)
	middleop2.setOption(option);
}
function rowInit() {
	var scene,
		camera,
		renderer;

	scene = new THREE.Scene(); // 创建场景
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // 创建相机
	renderer = new THREE.WebGLRenderer({
		antialias: true,
		alpha: true
	}); // 渲染器
	// const light = new THREE.PointLight( "#ff0000", 1, 1000 );
	// light.position.set( 0, 0, -50 );
	// scene.add( light );
	// renderer.setClearColor(0xEEEEEE, 0.0);
	renderer.setClearAlpha(0.0);
	console.log($(".probe-div").width())
	renderer.setSize($(".probe-div").width(), $(".probe-div").width() / 2);
	// renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染器 大小
	document.getElementById("row").appendChild(renderer.domElement);
	scene.add(camera);

	camera.position.z = 600;

	var geometry = new THREE.SphereGeometry(150, 60, 60);
	// TextureLoader创建一个纹理加载器对象，可以加载图片作为几何体纹理
	var textureLoader = new THREE.TextureLoader();
	// 执行load方法，加载纹理贴图成功后，返回一个纹理对象Texture
	textureLoader.load('./images/ball.png', function(texture) {
		var material = new THREE.MeshLambertMaterial({
			// 设置颜色纹理贴图：Texture对象作为材质map属性的属性值
			map: texture, //设置颜色贴图属性值
			transparent: true,
			opacity: 0.7,
		}); //材质对象Material
		var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
		scene.add(mesh); //网格模型添加到场景中
		//添加帧渲染
		function render() {
			renderer.render(scene, camera); //执行渲染操作
			mesh.rotateY(0.01);
			requestAnimationFrame(render); //请求再次执行渲染函数render
		}
		render();
	})
	var group = new THREE.Group();
	var bows = new THREE.Group();
	for (var j = 0; j < 36; j++) {
		var bow = group.clone();
		bow.rotation.y = Math.PI * 2 / 36 * j;
		bows.add(bow);
	}
	scene.add(bows);


	var pointLight = new THREE.PointLight(0Xffffff);

	pointLight.position.x = 0;
	pointLight.position.y = -3000;
	pointLight.position.z = 0;
	pointLight.decay = 1;
	scene.add(pointLight);
	// var pointLight1 = new THREE.PointLight(0Xffffff);

	// pointLight1.position.x = 0;
	// pointLight1.position.y = 0;
	// pointLight1.position.z = 1000;

	// scene.add(pointLight1);

	var ambient = new THREE.AmbientLight(0xffffff);
	scene.add(ambient);

	var pointLight1 = new THREE.PointLight(0Xffffff);
	pointLight1.position.x = 1000;
	pointLight1.position.y = 0;
	pointLight1.position.z = 0;
	pointLight1.intensity = 0.5;
	scene.add(pointLight1);

	var pointLight2 = new THREE.PointLight(0Xffffff);
	pointLight2.position.x = -1000;
	pointLight2.position.y = 0;
	pointLight2.position.z = 0;
	pointLight2.intensity = 0.5;
	scene.add(pointLight2);
	var pointLight3 = new THREE.PointLight(0Xffffff);
	pointLight3.position.x = 0;
	pointLight3.position.y = 0;
	pointLight3.position.z = 1000;
	pointLight3.intensity = 0.5;
	scene.add(pointLight3);
	var pointLight4 = new THREE.PointLight(0Xffffff);
	pointLight4.position.x = 0;
	pointLight4.position.y = 0;
	pointLight4.position.z = -1000;
	pointLight4.intensity = 0.5;
	scene.add(pointLight4);
	var mouseX, mouseY, isMove = false;
	animation();

	function animation() {
		if (!isMove) {
			requestAnimationFrame(animation); //循环调用函数
			bows.rotation.y += Math.PI * 0.001;
			bows.rotation.x += Math.PI * 0.001;
			render(); //渲染界面  
		}
	}

	function render() {
		renderer.render(scene, camera);
	}
	/**
	    鼠标点击
	**/
	document.onmousedown = function(e) {
		isMove = true;
		mouseX = e.pageX;
		mouseY = e.pageY;
	};
	document.onmousemove = function(e) {
		if (isMove) {
			var x = e.pageX;
			var y = e.pageY;
			var _x = x - mouseX;
			var _y = y - mouseY;
			bows.rotation.x += _y * 0.001 * Math.PI;
			bows.rotation.y += _x * 0.001 * Math.PI;
			render();
			mouseX = x;
			mouseY = y;
		}
	};
	document.onmouseup = function() {
		isMove = false;
		animation();
	}
}
function rowInit2() {
	var scene,
		camera,
		renderer;

	scene = new THREE.Scene(); // 创建场景
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // 创建相机
	renderer = new THREE.WebGLRenderer({
		antialias: true,
		alpha: true
	}); // 渲染器
	// const light = new THREE.PointLight( "#ff0000", 1, 1000 );
	// light.position.set( 0, 0, -50 );
	// scene.add( light );
	// renderer.setClearColor(0xEEEEEE, 0.0);
	renderer.setClearAlpha(0.0);
	console.log($(".probe-div").width())
	renderer.setSize($(".probe-div").width(), $(".probe-div").width() / 2);
	// renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染器 大小
	document.getElementById("row2").appendChild(renderer.domElement);
	scene.add(camera);

	camera.position.z = 600;

	var geometry = new THREE.SphereGeometry(150, 60, 60);
	// TextureLoader创建一个纹理加载器对象，可以加载图片作为几何体纹理
	var textureLoader = new THREE.TextureLoader();
	// 执行load方法，加载纹理贴图成功后，返回一个纹理对象Texture
	textureLoader.load('./images/ball.png', function(texture) {
		var material = new THREE.MeshLambertMaterial({
			// 设置颜色纹理贴图：Texture对象作为材质map属性的属性值
			map: texture, //设置颜色贴图属性值
			transparent: true,
			opacity: 0.7,
		}); //材质对象Material
		var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
		scene.add(mesh); //网格模型添加到场景中
		//添加帧渲染
		function render() {
			renderer.render(scene, camera); //执行渲染操作
			mesh.rotateY(0.01);
			requestAnimationFrame(render); //请求再次执行渲染函数render
		}
		render();
	})
	var group = new THREE.Group();
	var bows = new THREE.Group();
	for (var j = 0; j < 36; j++) {
		var bow = group.clone();
		bow.rotation.y = Math.PI * 2 / 36 * j;
		bows.add(bow);
	}
	scene.add(bows);


	var pointLight = new THREE.PointLight(0Xffffff);

	pointLight.position.x = 0;
	pointLight.position.y = -3000;
	pointLight.position.z = 0;
	pointLight.decay = 1;
	scene.add(pointLight);
	// var pointLight1 = new THREE.PointLight(0Xffffff);

	// pointLight1.position.x = 0;
	// pointLight1.position.y = 0;
	// pointLight1.position.z = 1000;

	// scene.add(pointLight1);

	var ambient = new THREE.AmbientLight(0xffffff);
	scene.add(ambient);

	var pointLight1 = new THREE.PointLight(0Xffffff);
	pointLight1.position.x = 1000;
	pointLight1.position.y = 0;
	pointLight1.position.z = 0;
	pointLight1.intensity = 0.5;
	scene.add(pointLight1);

	var pointLight2 = new THREE.PointLight(0Xffffff);
	pointLight2.position.x = -1000;
	pointLight2.position.y = 0;
	pointLight2.position.z = 0;
	pointLight2.intensity = 0.5;
	scene.add(pointLight2);
	var pointLight3 = new THREE.PointLight(0Xffffff);
	pointLight3.position.x = 0;
	pointLight3.position.y = 0;
	pointLight3.position.z = 1000;
	pointLight3.intensity = 0.5;
	scene.add(pointLight3);
	var pointLight4 = new THREE.PointLight(0Xffffff);
	pointLight4.position.x = 0;
	pointLight4.position.y = 0;
	pointLight4.position.z = -1000;
	pointLight4.intensity = 0.5;
	scene.add(pointLight4);
	var mouseX, mouseY, isMove = false;
	animation();

	function animation() {
		if (!isMove) {
			requestAnimationFrame(animation); //循环调用函数
			bows.rotation.y += Math.PI * 0.001;
			bows.rotation.x += Math.PI * 0.001;
			render(); //渲染界面  
		}
	}

	function render() {
		renderer.render(scene, camera);
	}
	/**
	    鼠标点击
	**/
	document.onmousedown = function(e) {
		isMove = true;
		mouseX = e.pageX;
		mouseY = e.pageY;
	};
	document.onmousemove = function(e) {
		if (isMove) {
			var x = e.pageX;
			var y = e.pageY;
			var _x = x - mouseX;
			var _y = y - mouseY;
			bows.rotation.x += _y * 0.001 * Math.PI;
			bows.rotation.y += _x * 0.001 * Math.PI;
			render();
			mouseX = x;
			mouseY = y;
		}
	};
	document.onmouseup = function() {
		isMove = false;
		animation();
	}
}
