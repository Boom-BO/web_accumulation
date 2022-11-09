var category = []; // 类别
var total = 0; // 数据总数
var datas = [];
var yData = []
getApp = () => {
	$.ajax({
		url: '/default/statistics/getApp.sts',
		type: 'post',
		success: function(result) {
			if (result.resultCode == '1') {
				pie3DInit(result.data.userAppList)
				pictorialBarInit(result.data.userAppList)
			}
		}

	})
}
pictorialBarInit = (data) => {
	category = data.filter((obj,index)=>index < 5).map(item=>{
		return {
			name: item.appName,
			value: item.appUseNum
		}
	})
	datas = category.map(obj=>obj.value)
	yData = category.map((obj,index)=>index + obj.name)
	total = datas.reduce((prev, next, index, array) => prev + next)
	console.log(JSON.stringify(datas))
	optionBar = {
		// backgroundColor:'#071347',
		xAxis: {
			max: total,
			splitLine: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisLabel: {
				show: false
			},
			axisTick: {
				show: false
			}
		},
		grid: {
			left: 150,
			top: 0, // 设置条形图的边距
			right: 80,
			bottom: 0
		},
		yAxis: [{
			type: "category",
			inverse: true,
			data: yData,
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				interval: 0,
				textStyle: {
					color: '#455A74',
					fontSize: 14,
				},
				rich: {
					b: {
						color: '#FEF102',
						fontSize: 14,
						width: 15,
						height: 20,
						borderRadius: 10
					},
					c: {
						color: '#D3D3D3',
						width: 20,
						height: 20,
						fontSize: 14,
						borderRadius: 2
					},
					c1: {
						color: '#FF9600',
						width: 20,
						height: 20,
						fontSize: 14,
						borderRadius: 2
					},
					c2: {
						color: '#FFFFFF',
						width: 20,
						height: 20,
						borderRadius: 2,
						fontSize: 14,
					},
					c3: {
						color: '#6AE0F8',
						borderRadius: 2,
						fontSize: 14,
					}
				},
				formatter: function(params) {
					if (parseInt(params.slice(0, 1)) == 0) {
						return [
							'{b|' + (parseInt(params.slice(0, 1)) + 1) + '}' + '  ' + '{c3|' + params.slice(1) + '}'
						]
					}
					if (params.slice(0, 1) == 1) {
						return [
							'{c|' + (parseInt(params.slice(0, 1)) + 1) + '}' + '  ' + '{c3|' + params.slice(1) + '}'
						]
					}
					if (params.slice(0, 1) == 2) {
						return [
							'{c1|' + (parseInt(params.slice(0, 1)) + 1) + '}' + '  ' + '{c3|' + params.slice(1) + '}'
						]
					} else {
						return [
							'{c2|' + (parseInt(params.slice(0, 1)) + 1) + '}' + '  ' + '{c3|' + params.slice(1) + '}'
						]
					}
				}
			}
		}],
		series: [{
				// 内
				type: "bar",
				barWidth: 15,
				legendHoverLink: false,
				silent: true,
				itemStyle: {
					normal: {
						color: function(params) {
							var color;
							color = {
								type: "linear",
								x: 0,
								y: 0,
								x2: 1,
								y2: 0,
								colorStops: [{
										offset: 0,
										color: "rgba(106, 224, 248, 1)" // 0% 处的颜色
									},
									{
										offset: 1,
										color: "rgba(255, 241, 0, 1)" // 100% 处的颜色
									}
								]
							}
							return color;
						},
					}
				},
				label: {
					normal: {
						show: false,
						position: "left",
						formatter: "{b}",
						textStyle: {
							color: "rgba(106, 224, 248, 1)",
							fontSize: 14,
							align:'left'
						}
					}
				},
				data: category,
				z: 1,
				animationEasing: "elasticOut"
			},
			{
				// 分隔
				type: "pictorialBar",
				itemStyle: {
					normal: {
						color: "#061348"
					}
				},
				symbolRepeat: "fixed",
				symbolMargin: 1,
				symbol: "rect",
				symbolClip: true,
				symbolSize: [2, 20],
				symbolPosition: "start",
				symbolOffset: [0, 0],
				symbolBoundingData: this.total,
				data: category,
				z: 2,
				animationEasing: "elasticOut"
			},
			{
				// 外边框
				type: "pictorialBar",
				symbol: "rect",
				symbolBoundingData: total,
				itemStyle: {
					normal: {
						color: "none"
					}
				},
				label: {
					normal: {
						formatter: (params) => {
							var text = '{f|  ' + params.data + '}';
							return text;
						},
						rich: {
							f: {
								color: "rgba(255, 241, 0, 1)"
							}
						},
						position: 'right',
						distance: 0, // 向右偏移位置
						show: true
					}
				},
				data: datas,
				z: 0,
				animationEasing: "elasticOut"
			}
		]
	};

	let pictorialBar = echarts.init(document.getElementById('pictorialBarDiv'));
	pictorialBar.setOption(optionBar)
}
