radarInit = (index) => {
	let radarContent1 = echarts.init(document.getElementById(`radarDiv${index}`));
	let radarOption = {
		title: {
			text: ''
		},
		tooltip: {
			trigger: 'axis'
		},

		radar: [{
				name: {
					show: true, // 是否显示工艺等文字
					textStyle: {
						color: 'rgba(106, 224, 248, 1)' // 工艺等文字颜色
					}
				},
				indicator: [{
						text: '安全建设' + index,
						max: 100
					},
					{
						text: '安全建设',
						max: 100
					},
					{
						text: '安全建设',
						max: 100
					},
					{
						text: '安全建设',
						max: 100
					},
					{
						text: '安全建设',
						max: 100
					}
				],
				center: ['50%', '50%'],
				radius: 70,
				splitArea: {
					show: true,
					areaStyle: {
						color: ["RGBA(27, 40, 128, 1)"] // 图表背景网格的颜色
					}
				},
				splitLine: {
					show: true,
					lineStyle: {
						width: 1,
						color: 'RGBA(33, 70, 144, 1)' // 图表背景网格线的颜色
					}
				}
			},

		],
		series: [{
				name: "数据资产评估",
				type: 'radar',
				tooltip: {
					trigger: 'item',
					confine: true,
					backgroundColor: "RGBA(7, 0, 84, .5)", //设置背景图片 rgba格式
					textStyle: {
						color: "#ffffff" //设置文字颜色
					},
				},
				areaStyle: {},
				lineStyle: {
					normal: {
						color: '#55CCE0',
						width: 2
					}
				},
				data: [{
					value: [60, 73, 85, 40, 50]
				}]
			}

		]
	}
	radarContent1.setOption(radarOption)
}
