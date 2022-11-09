dataBaseInit = () => {
	let dataBaseContent = echarts.init(document.getElementById('dataBaseDiv'));
	let dataBaseOption = {
		grid: {
			left: '8%',
			right: '10%',
			bottom: '0',
			top: '5%',
			containLabel: true
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'none'
			},
			formatter: function(params) {
				return params[0].name.substring(1) + '<br/>' +
					"<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
					params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() +
					' 万元<br/>'
			}
		},
		xAxis: {
			show: false,
			type: 'value'
		},
		yAxis: [{
			type: 'category',
			inverse: true,
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff'
				},
				rich: {
					b: {
						color: '#ffffff',
						fontSize: 14,
						width: 20,
						height: 20,
						align: 'center',
						borderRadius: 10,
						backgroundColor: {
							align: 'center',
							image: 'images/di.png'
						}
					},
					c: {
						color: '#ffffff',
						align: 'center',
						borderRadius: 2,
						fontSize: 14,
					}
				},
				formatter: function(params) {
					return [
						'{b|' + (parseInt(params.slice(0, 1))) + '}' + '  ' + '{c|' + params.slice(1) + '}'
					]
				},
			},
			splitLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},

			data: ['4人社局', '5民政局']
		}, {
			type: 'category',
			inverse: true,
			axisTick: 'none',
			axisLine: 'none',
			show: true,
			axisLabel: {
				textStyle: {
					color: '#ffffff',
					fontSize: '12'
				},
				// formatter: function(value) {
				// 	if (value >= 10000) {
				// 		return (value / 10000).toLocaleString() + '万';
				// 	} else {
				// 		return value.toLocaleString();
				// 	}
				// },
			},
			data: [50000000, 22000000]
		}],
		series: [{
			name: '金额',
			type: 'bar',
			zlevel: 1,
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: 'rgb(57,89,255,1)'
					}, {
						offset: 1,
						color: 'rgb(46,200,207,1)'
					}]),
				},
			},
			barWidth: 10,
			barGap: '0%',
			data: [50000000, 22000000]
		}]
	};
	dataBaseContent.setOption(dataBaseOption)
}
