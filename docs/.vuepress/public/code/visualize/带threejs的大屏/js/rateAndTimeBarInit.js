
let total = 0
let list = []
initData = (list1,data1, values) => {
	return  {
    xAxis: {
        max: 100,
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    grid: {
        containLabel: true,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    },
    yAxis: [{
        data: data1,
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
              show: false,
            margin: 10,
            textStyle: {
                fontSize: 14,
                color: '#fff'
            }
        }
    }],
    series: [
        { //内
            type: 'bar',
            barWidth: 10,
            legendHoverLink: false,
            symbolRepeat: true,
            silent: true,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#12272A' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#62E6F6' // 100% 处的颜色
                    }]
                }
            },
            data: list1,
            z: 1,
            animationEasing: 'elasticOut'
        },
        {
            type: 'pictorialBar',
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbol: 'roundRect',
            symbolSize: [7, 10],
            symbolBoundingData: 100,
            itemStyle: {
                normal: {
                    color: '#12272A',

                }
            },
            label: {
                normal: {
                    show: false,
                    position: 'right',
                    offset: [0, 2],
                    distance: 30,
                    textStyle: {
                        color: '#7AF8FF',
                        fontSize: 14,
                    }
                },

            },
            data: values,
            z: 0,
            animationEasing: 'elasticOut'
        },
        { //分隔
            type: 'pictorialBar',
            itemStyle: {
                color: '#000'
            },
            symbolRepeat: 'fixed',
            symbolMargin: 4,
            symbol: 'roundRect',
            symbolClip: true,
            symbolSize: [2, 10],
            symbolPosition: 'start',
            symbolOffset: [0, 0],
            symbolBoundingData: 100,
            data: list1,
            z: 2,
            animationEasing: 'elasticOut'
        }
    ]
};
}

rateAndTimeBarInit  = (data) => {
	list = data;
	total = list.map(obj=>obj.value).reduce((sum,num)=>sum+num)
	let name0  = []
	let value0  = []
	let name1  = []
	let value1  = []
	name0.push(list[0].name)
	value0.push(list[0].value)
	name1.push(list[1].name)
	value1.push(list[1].value)
	let share0 = echarts.init(document.getElementById('share0'));
	share0.setOption(initData(list.filter((obj,index)=>index == 0),name0, value0))
	let share1 = echarts.init(document.getElementById('share1'));
	share1.setOption(initData(list.filter((obj,index)=>index == 1),name1, value1))
	console.log(initData(list.filter((obj,index)=>index == 1),name1, value1))
}
