var data = [];
var arrName = [];
var arrValue = [];
var sumValue = 0;
var objData = {};
var optionData = {}

function getArrayValue(array, key) {
	var key = key || "value";
	var res = [];
	if (array) {
		array.forEach(function(t) {
			res.push(t[key]);
		});
	}
	return res;
}

function array2obj(array, key) {
	var resObj = {};
	for (var i = 0; i < array.length; i++) {
		resObj[array[i][key]] = array[i];
	}
	return resObj;
}

function getData(data) {
	var res = {
		series: [{
				name: "大环",
				type: 'gauge',
				splitNumber: 15,
				radius: '82%',
				center: ['50%', '55%'],
				startAngle: 90,
				endAngle: -269.9999,
				axisLine: {
					show: false,
					lineStyle: {
						color: [
							[1, '#1f59a7']
						]
					}
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: true,
					length: 32,
					lineStyle: {
						color: 'auto',
						width: 3.5
					}
				},
				axisLabel: {
					show: false
				},
				detail: {
					show: false
				}
			},
			{
				name: '小环',
				type: 'gauge',
				splitNumber: 15,
				radius: '78%',
				center: ['50%', '55%'],
				startAngle: 90,
				endAngle: -269.9999,
				axisLine: {
					show: false
				},
				axisTick: {
					show: true,
					lineStyle: {
						color: '#1f59a7',
						width: 3
					},
					length: 20,
					splitNumber: 5
				},
				splitLine: {
					show: false
				},
				axisLabel: {
					show: false
				},
				detail: {
					show: false
				}
			},
		],
		yAxis: []
	};
	for (let i = 0; i < data.length; i++) {
		res.series.push({
			name: '学历',
			type: 'pie',
			clockWise: true,
			z: 2,
			hoverAnimation: false,
			radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
			center: ["50%", "55%"],
			label: {
				show: true,
				formatter: '{d}%',
				color: 'RGB(246,175,101)',
				fontSize: 25,
				position: 'inside'
			},
			labelLine: {
				show: false
			},
			data: [{
				value: data[i].value,
				name: data[i].name
			}, {
				value: sumValue - data[i].value,
				name: '',
				itemStyle: {
					color: "rgba(0,0,0,0)",
					borderWidth: 0
				},
				tooltip: {
					show: false
				},
				label: {
					show: false
				},
				hoverAnimation: false
			}]
		});
		res.series.push({
			name: '背景线',
			type: 'pie',
			silent: true,
			z: 1,
			clockWise: true,
			hoverAnimation: false,
			radius: [71 - i * 15 + '%', 69 - i * 15 + '%'],
			center: ["50%", "55%"],
			label: {
				show: false
			},
			itemStyle: {
				label: {
					show: false,
				},
				labelLine: {
					show: false
				},
				borderWidth: 5,
			},
			data: [{
				value: 100,
				itemStyle: {
					color: "RGB(12,64,128)",
					borderWidth: 0
				},
				tooltip: {
					show: false
				},
				hoverAnimation: false
			}]
		});
		res.yAxis.push(data[i].name);
	}
	return res;
}



pie3DInit = (data) => {
	let arr = data.filter((obj, index) => index < 5).map(res=>{
		return{
			name:res.appName,
			value:res.appUseNum
		}
	})
	let pie3D = echarts.init(document.getElementById('pie3D'));
	arrValue = getArrayValue(arr, "value");
	sumValue = 1000;
	objData = array2obj(arr, "name");
	optionData = getData(arr)

	// 传入数据生成 option
	// 传入数据生成 option
	// 准备待返回的配置项，把准备好的 legendData、series 传入。
	let option = {
		backgroundColor: 'transparent',
		color: [{
			type: 'linear',
			x: 0,
			y: 0,
			x2: 1,
			y2: 1,
			colorStops: [{
				offset: 0,
				color: 'rgba(10,31,95,1)'
			}, {
				offset: 1,
				color: 'rgba(1,232,254,1)'
			}],
			global: false
		}],
		grid: {
			top: '16%',
			bottom: '54%',
			left: "50%",
			containLabel: false
		},
		yAxis: [{
			type: 'category',
			inverse: true,
			z: 3,
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				interval: 0,
				inside: false,
				textStyle: {
					color: "RGB(78,184,252)",
					fontSize: 15,
				},
				show: true
			},
			data: optionData.yAxis
		}],
		xAxis: [{
			show: false
		}],
		series: optionData.series
	};
	pie3D.setOption(option)
}
