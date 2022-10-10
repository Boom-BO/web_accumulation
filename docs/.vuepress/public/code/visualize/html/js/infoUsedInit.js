let xData_info = []
var data = []
var xiaoData = []
var sendData = []
var infoData = []
let getMsgStatus = false
getMsg = () => {
	$.ajax({
		url: '/default/statistics/getMsg.sts',
		type: 'post',
		success: function(result) {
			getMsgStatus = true
			xData_info = result.data.msgSts.map(obj => {
				let start = ''
				let end = ''
				if (obj.weekStart.slice(5, 6) == 0) {
					start += obj.weekStart.slice(6, 7)
				} else {
					start += obj.weekStart.slice(5, 7)
				}
				start += '.'
				if (obj.weekStart.slice(8, 9) == 0) {
					start += obj.weekStart.slice(9)
				} else {
					start += obj.weekStart.slice(8)
				}
				if (obj.weekEnd.slice(5, 6) == 0) {
					end += obj.weekEnd.slice(6, 7)
				} else {
					end += obj.weekEnd.slice(5, 7)
				}
				end += '.'
				if (obj.weekEnd.slice(8, 9) == 0) {
					end += obj.weekEnd.slice(9)
				} else {
					end += obj.weekEnd.slice(8)
				}
				return start + '-' + end
			});
			xData_info = xData_info.reverse()
			data = result.data.msgSts.reverse()
			xiaoData = data.map(obj => {
				return {
					value: obj.msgNum,
					...obj

				}
			})
			sendData = data.map(obj => {
				return {
					value: obj.pinNum,
					...obj

				}
			})
			infoData = data.map(obj => {
				return {
					value: obj.publicInfoNum,
					...obj

				}
			})
			infoUsedInit()
		}

	})
}

const CubeLeft = echarts.graphic.extendShape({
	shape: {
		x: 0,
		y: 0
	},
	buildPath: function(ctx, shape) {
		const xAxisPoint = shape.xAxisPoint
		const c0 = [shape.x, shape.y]
		const c1 = [shape.x - 10, shape.y - 4]
		const c2 = [xAxisPoint[0] - 10, xAxisPoint[1] - 4]
		const c3 = [xAxisPoint[0], xAxisPoint[1]]
		ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
	}
})
const CubeRight = echarts.graphic.extendShape({
	shape: {
		x: 0,
		y: 0
	},
	buildPath: function(ctx, shape) {
		const xAxisPoint = shape.xAxisPoint
		const c1 = [shape.x, shape.y]
		const c2 = [xAxisPoint[0], xAxisPoint[1]]
		const c3 = [xAxisPoint[0] + 10, xAxisPoint[1] - 4]
		const c4 = [shape.x + 10, shape.y - 4]
		ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
	}
})
const CubeTop = echarts.graphic.extendShape({
	shape: {
		x: 0,
		y: 0
	},
	buildPath: function(ctx, shape) {
		// 逆时针 角 y 负数向上  X 负数向左
		const c1 = [shape.x, shape.y + 0]
		const c2 = [shape.x + 10, shape.y - 4]
		const c3 = [shape.x - 4, shape.y - 8]
		const c4 = [shape.x - 10, shape.y - 4]
		ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
	}
})
echarts.graphic.registerShape('CubeLeft', CubeLeft)
echarts.graphic.registerShape('CubeRight', CubeRight)
echarts.graphic.registerShape('CubeTop', CubeTop)

infoUsedInit = () => {
	optionInfoUsed = {
		tooltip: {
			trigger: 'item',
			backgroundColor: "rgba(0, 0, 0, .38)", //设置背景图片 rgba格式
			textStyle: {
				fontSize: 18
			},
			formatter: function(params) {
				var tipHtml = '';
				tipHtml =
					'<div style="position: relative;display:inline-block;min-width: 200px;max-width: 600px; padding: 0 15px;background: rgba(0, 0, 0, .38);">' +
					'<p style="margin: 15px 0 0 0; font-size: 14px;font-weight: 500;color: #fff;line-height: 20px;">' +
					'<span style="color: #74BDD8;">消息数：</span>' +
					' <span style="font-size: 20px;font-weight: bold;color:#FFF32F">' + params.data.msgNum +
					'</span>' + '<span style="font-size:14px;color:#FFF32F">人</span>' +
					'</p>' +
					'<p style="margin: 15px 0 0 0; font-size: 14px;font-weight: 500;color: #fff;line-height: 20px;">' +
					'<span style="color: #74BDD8;">寻呼发送数：</span>' +
					'<span style="font-size: 20px;font-weight: bold;color:#FFF32F">' + params.data.pinNum +
					'<span style="font-size:14px;color:#FFF32F">人</span>' +
					'</span>' +
					'</p>' +
					'<p style="margin: 15px 0 0 0; font-size: 14px;font-weight: 500;color: #fff;line-height: 20px;">' +
					'<span style="color: #74BDD8;">公共信息浏览：</span>' +
					'<span style="font-size: 20px;font-weight: bold;color:#FFF32F">' + params.data.publicInfoNum +
					'<span style="font-size:14px;color:#FFF32F">人</span>' +
					'</span>' +
					'</p>' +
					'</div>'
				// setTimeout(function() {
				//     tooltipCharts(params.name);
				// }, 10);
				return tipHtml;
			}
			// formatter:'{b}'
		},
		legend: {
			show: true,
			x: 'center',
			y: '1%',
			itemWidth: 20,
			itemHeight: 10,
			textStyle: {
				color: 'rgba(37, 140, 247, 1)',
				fontSize: '14px'
			},
			data: ['消息数', '寻呼发送数', '公共信息浏览'],
			
		},
		grid: {
			show: false,
			left: '5%',
			right: '5%',
			bottom: '5%',
			top: '15%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: xData_info,
			axisLine: {
				show: false,
				lineStyle: {
					color: '#fff',
					width: 1
				}
			},
			offset: 10,
			axisTick: {
				show: false
			},
			axisLabel: {
				fontSize: 14,
				color: '#fff'
			}
		},
		yAxis: {
			// name: '(%)',
			nameTextStyle: {
				fontSize: 12,
				color: '#fff'
			},
			nameGap: 1000,
			show: true,
			type: 'value',
			min: 0,
			splitNumber: 5,
			axisLine: {
				show: false,
				lineStyle: {
					color: 'white',
					width: 3
				}
			},
			splitLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				fontSize: 14,
				color: '#fff'
			},
			boundaryGap: ['20%', '20%']
		},
		series: [{
				type: 'custom',
				name: '消息数',
				renderItem: (params, api) => {
					const location = api.coord([api.value(0), api.value(1)])
					return {
						type: 'group',
						children: [{
								type: 'CubeLeft',
								position: [-25, 0],
								shape: {
									api,
									xValue: api.value(0),
									yValue: api.value(1),
									x: location[0],
									y: location[1],
									xAxisPoint: api.coord([api.value(0), 0])
								},
								style: {
									fill: 'rgba(0, 255, 155, 1)'
									// new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									// 	offset: 0,
									// 	color: 'rgba(0, 255, 155, 1)'
									// }, {
									// 	offset: 1,
									// 	color: 'rgba(0, 255, 155, 1)'
									// }])
								}
							},
							{
								type: 'CubeRight',
								position: [-25, 0],
								shape: {
									api,
									xValue: api.value(0),
									yValue: api.value(1),
									x: location[0],
									y: location[1],
									xAxisPoint: api.coord([api.value(0), 0])
								},
								style: {
									fill: 'RGBA(0, 148, 128, 1)'
									// new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									// 	offset: 0,
									// 	color: 'RGBA(0, 148, 128, 1)' // 顶部
									// }, {
									// 	offset: 1,
									// 	color: 'RGBA(0, 148, 128, 1)' // 底部
									// }])
								}
							},
							{
								type: 'CubeTop',
								position: [-25, 0],
								shape: {
									api,
									xValue: api.value(0),
									yValue: api.value(1),
									x: location[0],
									y: location[1],
									xAxisPoint: api.coord([api.value(0), 0])
								},
								style: {
									fill: 'RGBA(0, 149, 129, 1)'
									// new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									// 	offset: 0,
									// 	color: 'RGBA(0, 149, 129, 1)'
									// }, {
									// 	offset: 1,
									// 	color: 'RGBA(0, 149, 129, 1)'
									// }])
								}
							}
						]
					}
				},
				data: xiaoData
			},
			{
				type: 'custom',
				name: '寻呼发送数',
				renderItem: (params, api) => {
					const location = api.coord([api.value(0), api.value(1)])
					return {
						type: 'group',
						children: [{
							type: 'CubeLeft',
							position: [0, 0],
							shape: {
								api,
								xValue: api.value(0),
								yValue: api.value(1),
								x: location[0],
								y: location[1],
								xAxisPoint: api.coord([api.value(0), 0])
							},
							style: {
								fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'RGBA(0, 169, 246, 1)'
								}, {
									offset: 1,
									color: 'RGBA(0, 169, 246, 1)'
								}])
							}
						}, {
							type: 'CubeRight',
							position: [0, 0],
							shape: {
								api,
								xValue: api.value(0),
								yValue: api.value(1),
								x: location[0],
								y: location[1],
								xAxisPoint: api.coord([api.value(0), 0])
							},
							style: {
								fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'RGBA(0, 106, 179, 1)' // 顶部
								}, {
									offset: 1,
									color: 'RGBA(0, 106, 179, 1)' // 底部
								}])
							}
						}, {
							type: 'CubeTop',
							position: [0, 0],
							shape: {
								api,
								xValue: api.value(0),
								yValue: api.value(1),
								x: location[0],
								y: location[1],
								xAxisPoint: api.coord([api.value(0), 0])
							},
							style: {
								fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'RGBA(0, 106, 179, 1)'
								}, {
									offset: 1,
									color: 'RGBA(0, 106, 179, 1)'
								}])
							}
						}]
					}
				},
				data: sendData
			},
			{
				type: 'custom',
				name: '公共信息浏览',
				renderItem: (params, api) => {
					const location = api.coord([api.value(0), api.value(1)])

					return {
						type: 'group',
						children: [{
							type: 'CubeLeft',
							position: [25, 0],
							shape: {
								api,
								xValue: api.value(0),
								yValue: api.value(1),
								x: location[0],
								y: location[1],
								xAxisPoint: api.coord([api.value(0), 0])
							},
							style: {
								fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'RGBA(254, 250, 121, 1)'
								}, {
									offset: 1,
									color: 'RGBA(254, 250, 121, 1)'
								}])
							}
						}, {
							type: 'CubeRight',
							position: [25, 0],
							shape: {
								api,
								xValue: api.value(0),
								yValue: api.value(1),
								x: location[0],
								y: location[1],
								xAxisPoint: api.coord([api.value(0), 0])
							},
							style: {
								fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'RGBA(138, 143, 111, 1)' // 顶部
								}, {
									offset: 1,
									color: 'RGBA(138, 143, 111, 1)' // 底部
								}])
							}
						}, {
							type: 'CubeTop',
							position: [25, 0],
							shape: {
								api,
								xValue: api.value(0),
								yValue: api.value(1),
								x: location[0],
								y: location[1],
								xAxisPoint: api.coord([api.value(0), 0])
							},
							style: {
								fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'RGBA(138, 143, 114, 1)'
								}, {
									offset: 1,
									color: 'RGBA(138, 143, 114, 1)'
								}])
							}
						}]
					}
				},
				data: infoData
			}
		]
	}
	let infoUsed = echarts.init(document.getElementById('infoUsed'));
	infoUsed.setOption(optionInfoUsed)

}
