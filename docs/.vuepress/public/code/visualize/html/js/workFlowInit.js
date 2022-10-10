let workData = []
let res_work = []
let xData = []
let yData_work = []
let getWorkflow = false
$("#tab-title_workFlow div").click(function() {
	$(this).siblings('div').removeClass('active');
	$(this).addClass('active');
	var divindex = $(this).index(); //第二种方式获取
	if (divindex == 0) {
		workData = res_work.workflowWeekList
		$('#workFlow').css('display', 'block')
		$('#danweiWF').css('display', 'none')
		$('#gerenWF').css('display', 'none')
	} else if (divindex == 1) {
		$('#danweiWF').css('display', 'block')
		$('#workFlow').css('display', 'none')
		$('#gerenWF').css('display', 'none')
	} else {
		$('#gerenWF').css('display', 'block')
		$('#workFlow').css('display', 'none')
		$('#danweiWF').css('display', 'none')
	}
	workFlowInit()
})

getWorkflow = () => {
	$.ajax({
		url: '/default/statistics/getWorkflow.sts',
		type: 'post',
		success: function(result) {
			getWorkflow = true;
			res_work = result.data;
			workData = res_work.workflowWeekList
			workFlowInit()
			setWorkFlowTable(res_work)
		}

	})
}
setWorkFlowTable = (data) => {
	// 单位排行
	let danweiWF = data.orgWorkflowTopList || []
	let danweiWFStr = ''
	if (danweiWF.length > 0) {
		danweiWF.forEach((obj, index) => {
			danweiWFStr += '<tr><td>';
			danweiWFStr += (index + 1) + '</td>' +
				'<td>' + obj.orgName + '</td>' +
				'<td>' + obj.num + '</td></tr>'
		})
	}
	$('#danweiWF-tab').html(danweiWFStr)
	// 个人排行
	let gerenWF = data.userWorkflowTopList || []
	let gerenWFStr = ''
	if (gerenWF.length > 0) {
		gerenWF.forEach((obj, index) => {
			gerenWFStr += '<tr><td>';
			gerenWFStr += (index + 1) + '</td>' +
				'<td>' + obj.empName + '</td>' +
				'<td>' + obj.num + '</td></tr>'
		})
	}
	$('#gerenWF-tab').html(gerenWFStr)

}
workFlowInit = () => {
	xData = workData.map(obj => {
		return obj.weekStart.slice(5, 7) + '.' + obj.weekStart.slice(8) + '-' + obj.weekEnd.slice(5, 7) + '.' + obj.weekEnd
			.slice(8)
	})
	yData_work = workData.map(obj => obj.num)
	let workFlow = echarts.init(document.getElementById('workFlow'));
	let workFlowOption = {
		tooltip: {
			trigger: 'axis',
			backgroundColor: 'rgba(0,0,0,0.5)',
			axisPointer: {
				lineStyle: {
					color: "rgba(0, 174, 239, 1)"
				},
			},
			formatter: function(params) {
				var result = '';
				params.forEach(function(item) {
					if (item) {
						result = '<span style="color:#ffffff">' + item.axisValue + '</span></br><span style="color:#ffffff">审批: ' + item.value + '</span>';
					}
				});
				return result;
			}
		},
		grid: {
			top: '5%',
			left: '8%',
			right: '0%',
			bottom: '25%',
			// containLabel: true
		},
		xAxis: [{
			type: 'category',
			axisLine: {
				show: false
			},
			axisLabel: {
				color: 'rgba(255, 255, 255, .8)',
				fontSize: '14px'
			},
			splitLine: {
				show: false
			},

			axisTick: {
				show: false
			},
			// boundaryGap: true,
			data: xData,

		}],

		yAxis: [{
			type: 'value',
			min: 0,
			splitNumber: 4,
			splitLine: {
				show: true,

			},
			axisLine: {
				show: false,
			},
			axisLabel: {
				show: true,
				// margin: 20,
				textStyle: {
					color: 'rgba(255, 255, 255, 8)',
					fontSize: '14px'
				},
			},
			axisTick: {
				show: false,
			},
			splitLine: {
				lineStyle: {
					color: 'rgba(43, 68, 164, .62)',
					type: 'dashed',
				}
			}
		}],
		series: [{
			name: '',
			type: 'line',
			smooth: true, //是否平滑
			// showAllSymbol: true,
			showSymbol: false,
			lineStyle: {
				normal: {
					color: "rgba(0, 174, 239, .98)"
				},
			},
			label: {
				show: false,
				position: 'top',
				textStyle: {
					color: 'rgba(0, 174, 239, 1)',
				}
			},

			itemStyle: {
				color: "#FFF",
				borderColor: "rgba(0, 174, 239, 1)",
				borderWidth: 1,

			},
			tooltip: {
				show: true
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgba(3, 54, 255, .6)'
						},
						{
							offset: 1,
							color: 'rgba(1, 180, 255, .1)'
						}
					], false),
					shadowColor: 'rgba(195,230,255,0.1)',
					shadowBlur: 20
				}
			},
			data: yData_work,
		}]
	};
	workFlow.setOption(workFlowOption)
}
