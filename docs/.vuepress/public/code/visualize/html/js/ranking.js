let xData_rank = []
let yData_rank = []
let data_all = []
let true_data = []
let jgStr = ''; //机关排行
$("#kexie li").click(function() {
	jgStr = ''
	if ($(this).index() == 1) {
		true_data = data_all.zsList
	} else {
		true_data = data_all.jgList
	}
	rankingInit()
})

getRanking = (data) => {
	data_all = data
	true_data = data_all.jgList

	rankingInit()
}
rankingInit = () => {
	let item = true_data.splice(1, 1)
	true_data.unshift(item[0])
	true_data.filter((item, index) => index < 3).forEach((obj, index) => {
		jgStr += '<div><img src="images/top' + (index+1) + '.png" /><div class="top-title"><div title="'+obj.orgName+'">' + obj.orgName +
			'</div><div>' + obj.activeNumber + '</div></div>' +
			'<div class="hover-div"><span>'+obj.orgName+'</span></br><span>活跃人数：'+obj.activeNumber+'（人）</span></div>'+
			'</div>'
	})
	$('#top-3').html(jgStr)
	xData_rank = true_data.filter((obj, index) => index > 2).map((obj, index) => {
		return (index + 4) + obj.orgName
	})
	yData_rank = true_data.filter((obj, index) => index > 2).map((obj, index) => {
		return obj.activeNumber
	})
	let rankingContent = echarts.init(document.getElementById('rankingContent'));
	let rankingOption = {
		grid: {
			left: '5%',
			right: '5%',
			bottom: '5%',
			top: '0',
			containLabel: true
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'none'
			},
			formatter: function(params) {
				let str=  params[0].name.substr(1) + '<br/>' ;
					if(!Number(params[0].value) > 10000){
						str +='活跃人数:'+ Number((params[0].value / 10000).toFixed(2))+'万人<br/>'
					}else{
						str += '活跃人数:'+params[0].value +'人<br/>'
					}
				return str
					
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
						background: 'rgba(88, 166, 254, 1)'
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
				}
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

			data: xData_rank
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
			data: yData_rank
		}],
		series: [{
			name: '活跃人数',
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
			data: yData_rank
			// data: [500000,1254022]
		}]
	};
	rankingContent.setOption(rankingOption)
}
