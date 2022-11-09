let xData_huoyue = []
let yData_huoyue = []
let getActiveByWeekStatus = false;
getActiveByWeek = () => {
	$.ajax({
		url: '/default/statistics/getActiveByWeek.sts',
		type: 'post',
		success: function(result) {
			getActiveByWeekStatus = true
			if (result.resultCode == '1') {
				xData_huoyue = result.data.activeWeekList.map(obj => {
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
				yData_huoyue = result.data.activeWeekList.map(obj => {
					return obj.activeNumber
				});
				huoyueInit()
			}

		}

	})
}
huoyueInit = () => {
	let huoyueContent = echarts.init(document.getElementById('huoyueContent'));
	let huoYueOption = {
		backgroundColor: 'transparent',
		color: ["#59e7eb", "#38e27f", "#2f92ed", "#d0cc6f", "#e47f2e"],
		tooltip: {
			formatter: function(params) {
				let str= xData_huoyue[params.name] + '<br/>' + '活跃：'+params.value +'人<br/>'
				return str
					
			}
		},
		grid: {
			top: "15%",
			left: "5%",
			right: "7%",
			bottom: "0%",
			containLabel: true
		},
		xAxis: [{
				type: "category",
				boundaryGap: true,
				axisLine: {
					//坐标轴轴线相关设置。数学上的x轴
					show: false,
					lineStyle: {
						color: "#676C7B"
					}
				},
				axisLabel: {
					interval:0,
					//坐标轴刻度标签的相关设置
					textStyle: {
						color: "rgba(254, 254, 254, .8)",
						fontSize: '14px',
						margin: 15
					},
					// rotate: '15'
				},
				axisTick: {
					show: false
				},
				data: xData_huoyue
			},
			{
				type: 'category',
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show: false
				},
				splitArea: {
					show: false
				},
				splitLine: {
					show: false
				},
				data: []
			}
		],
		yAxis: [{
			type: "value",
			nameTextStyle: {
				color: "#fff"
			},
			// name: "数量/个",
			interval: 1000,
			splitNumber: 7,
			splitLine: {
				show: false,
				lineStyle: {
					type: "dashed",
					color: "#676C7B"
				}
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: "#676C7B"
				}
			},
			axisLabel: {
				margin: 20,
				textStyle: {
					color: "rgba(132, 242, 255, .8)",
					fontSize: '14px'
				}
			},
			axisTick: {
				show: false
			}
		}],
		series: [
			// {
			// 	name: "医疗", // bar图的外边框
			// 	type: "bar",
			// 	barWidth: "20%",
			// 	xAxisIndex: 0,
			// 	itemStyle: {
			// 		normal: {
			// 			color: "rgba(0,0,0,0)",
			// 			barBorderRadius: 2,
			// 			borderWidth: 1,
			// 			shadowColor: "#5CEFF1",
			// 			shadowBlur: 5,
			// 			shadowOffsetX: 0,
			// 			shadowOffsetY: 0
			// 		}
			// 	},
			// 	data: [110, 140, 60, 100,200]
			// },
			{
				// name: "医疗", //这个是Bar图
				type: "bar",
				barWidth: "10%",
				barGap: "220%",
				xAxisIndex: 1,
				label: {
					show: true,
					formatter: "{a|}",
					color: "#fff",
					position: "top",
					distance: -10,
					backgroundColor: "rgba(250, 249, 248, 1)",
					shadowColor: '#fff',
					shadowBlur: 20,
					padding: 4,
					borderRadius: 15,
					rich: {
						a: {
							width: 6,
							height: 6,
							borderRadius: 6,
							lineHeight: 6,
							backgroundColor: "#fff"
						}
					}
				},
				itemStyle: {
					normal: {
						color: {
							type: "linear",
							x: 0,
							y: 0,
							x2: 1,
							y2: 1,
							colorStops: [{
									offset: 0,
									color: "#54FCFC" // 0% 处的颜色
								},
								{
									offset: 1,
									color: "#1F4869" // 100% 处的颜色
								}
							]
						}
					}
				},
				data: yData_huoyue
			},

		]
	};
	huoyueContent.setOption(huoYueOption)
}
