let xData_pinci = []
let yData_pinci = []
let getUseByWeekStatus = false
$("#shiyongPC div").click(function() {
	$(this).siblings('div').removeClass('active');
	$(this).addClass('active');
	var divindex = $(this).index();
	if (divindex == 0) {
		$('#shiyongTabContent').css('display', 'block')
		$('#danweiPH').css('display', 'none')
		$('#gerenPH').css('display', 'none')
	} else if (divindex == 1) {
		$('#shiyongTabContent').css('display', 'none')
		$('#danweiPH').css('display', 'block')
		$('#gerenPH').css('display', 'none')
	} else {
		$('#gerenPH').css('display', 'block')
		$('#danweiPH').css('display', 'none')
		$('#shiyongTabContent').css('display', 'none')
	}
	// workFlowInit()
})

getUseByWeek = () => {
	$.ajax({
		url: '/default/statistics/getUseByWeek.sts',
		type: 'post',
		success: function(result) {
			getUseByWeekStatus = true
			if (result.resultCode == '1') {
				xData_pinci = result.data.useByWeekList.map(obj => {
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
				})
				yData_pinci = result.data.useByWeekList.map(obj => {
					return obj.useNumber
				})
				frequencyInit()
				setPcTable(result.data)
			}
		}

	})
}
setPcTable = (data) => {
	// 单位排行
	let danweiData = data.orgUseTopList || []
	let danweiStr = ''
	if (danweiData.length > 0) {
		danweiData.forEach((obj,index) => {
			danweiStr += '<tr><td>';
			danweiStr += (index + 1) + '</td>' +
				'<td>' + obj.orgName + '</td>' +
				'<td>' + obj.orgUseNumber + '</td></tr>'
		})
	}
	$('#danweiPC-tab').html(danweiStr)
	// 个人排行
	let gerenData = data.userUseTopList || []
	let gerenStr = ''
	if (gerenData.length > 0) {
		gerenData.forEach((obj,index) => {
			gerenStr += '<tr><td>';
			gerenStr += (index + 1) + '</td>' +
				'<td>' + obj.userName + '</td>' +
				'<td>' + obj.useNumByEmp + '</td></tr>'
		})
	}
	$('#gerenPC-tab').html(gerenStr)

}
frequencyInit = () => {
	let qudingDiv = echarts.init(document.getElementById('shiyongTabContent'));
	let qudingDivOption = {
		grid: {
			left: '12%',
			top: '15%',
			bottom: '12%',
			right: '8%'
		},
		xAxis: {
			data: xData_pinci,
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(255, 129, 109,.1)',
					width: 0 //这里是为了突出显示加上的
				}
			},
			axisLabel: {
				interval:0,
				textStyle: {
					color: 'rgba(254, 254, 254, .8)',
					fontSize: 14
				}
			}
		},
		yAxis: [{
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(255, 129, 109, 0.1)',
					width: 1 //这里是为了突出显示加上的
				}
			},
			axisLabel: {
				textStyle: {
					color: '#84F2FF'
				}
			},
			splitArea: {
				areaStyle: {
					color: 'rgba(255,255,255,.5)',
					fontSize: '14px',
				}
			},
			splitLine: {
				show: false
			}
		}],
		series: [{
			type: 'pictorialBar',
			barCategoryGap: '0%',
			symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
			label: {
				show: true,
				position: 'top',
				distance: 15,
				color: 'rgba(32, 216, 255, 1)',
				fontWeight: 'bold',
				fontSize: 12,
			},
			itemStyle: {
				normal: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
								offset: 0,
								color: 'rgba(133, 251, 200, 1)'
							},
							{
								offset: 1,
								color: 'rgba(39, 205, 235, 1)'
							}
						],
						global: false //  缺省为  false
					}
				},
				emphasis: {
					opacity: 1
				}
			},
			data: yData_pinci
		}]
	}
	qudingDiv.setOption(qudingDivOption)
}
