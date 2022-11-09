let img = "image://images/qiu.png"
infoRecordInit = () => {
	let recordContent = echarts.init(document.getElementById('recordDiv'));
	let recordOption = {
		backgroundColor: 'transparent',
		color: ["#59e7eb", "#38e27f", "#2f92ed", "#d0cc6f", "#e47f2e"],
		tooltip: {},
		grid: {
			top: "0",
			left: "7%",
			right: "7%",
			bottom: "8%",
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
					//坐标轴刻度标签的相关设置
					textStyle: {
						color: "#6AE0F8",
						margin: 15
					},
					// formatter: function(value) {
					// 	return '{value|' + value + '}';
					// },
					// margin: -15,
					// rich: {
					// 	value: {
					// 		lineHeight: 50,
					// 		align: 'center',
					// 		height: 20,
					// 		backgroundColor: {
					// 			image: img
					// 		}
					// 	},

					// }
				},
				axisTick: {
					show: false
				},
				data: ['报销系统', '报销系统', '报销系统', '报销系统', '报销系统'],

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
			max: 200,
			min: 0,
			interval: 50,
			splitNumber: 7,
			splitLine: {
				show: true,
				lineStyle: {
					color: "rgba(9, 179, 221, .51)"
				}
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: "#676C7B"
				}
			},
			axisLabel: {
				show: false,
			},
			axisTick: {
				show: false
			}
		}],
		series: [{
				name: "", //这个是Bar图
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
				data: [100, 130, 50, 90, 108]
			},
			{
				name: '',
				type: 'pictorialBar',
				symbolSize: [8, 8],
				symbolOffset: [0, 0],
				// "barWidth": "20",
				z: 12,
				rich: {
					value: {
						backgroundColor: {
							image: img
						}
					},
				
				},
				formatter:function(param){
					return '{value|}'
				},
				// "color": "#2DB1EF",
				"data": [100, 130, 50, 90, 108]
			},
		]
	};
	recordContent.setOption(recordOption)
}
