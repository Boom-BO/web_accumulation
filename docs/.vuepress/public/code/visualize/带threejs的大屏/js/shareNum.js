var xData = ['区生态环保局', '区公安分局', '区人社局', '区市场监督局', '区税务局'];
var line = ['17982', '16678', '15676', '13097', '11098'];
var colors = [];
let shareOption = {
    tooltip: {
		show:false,
        trigger: 'item',
        padding: 1,
    },
    grid: {
        left: '25%',
        top: '5%',
        right: '15%',
        bottom: '5%',
    },
    legend: {
        show: true,
        icon: 'circle',
        orient: 'horizontal',
        top: '90.5%',
        right: 'center',
        itemWidth: 10,
        itemHeight: 2,
        // itemGap: 30,
        textStyle: {
            // color: '#FFFFFF'
            color: '#C9C8CD',
            fontSize: 14,
        },
    },
    xAxis: [
        {
            type: 'value',
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#aaaaaa',
                    fontSize: 14,
                },
                margin: 30, //刻度标签与轴线之间的距离。
            },

            axisLine: {
                show: false, //不显示x轴
            },
            axisTick: {
                show: false, //不显示刻度
            },
            boundaryGap: true,
            splitLine: {
                show: false,
                width: 0.08,
                lineStyle: {
                    type: 'solid',
                    color: '#03202E',
                },
            },
        },
    ],
    yAxis: [
        {
            type: 'category',
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#eee',
                    type: 'solid',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
				margin:80,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 12,
					align:'left',
                },
            },
            data: xData,
        },
    ],
    series: [
        //柱体
        {
            name: '',
            type: 'bar',
            barWidth: 15,
            barGap: '0%',
            label: {
                position: 'right',
                show: true,
                textStyle: {
                    color: 'rgba(84, 250, 253, 1)',
                    fontSize: 12,
                    marginLeft: 20,
                },
            },
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        type: 'linear',
                        global: false,
                        colorStops: [
                            {
                                //第一节下面
                                offset: 0,
                                color: 'RGBA(18, 110, 232, .2)',
                            },
                            {
                                offset: 1,
                                color: 'RGBA(33, 144, 242, 1)',
                            },
                        ],
                    },
                    barBorderRadius: [20, 20, 20, 20],
					//边框色
					
					borderColor:"RGBA(102, 187, 253, 1)",
					
					//border宽度
					
					borderWidth:1,
                },
            },

            data: line,
        },

        //柱顶圆片
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [10, 15], //调整截面形状
            symbolOffset: [0, 0],
            z: 12,
            symbolPosition: 'end',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'RGBA(90, 177, 251, 1)',
                            },
                            {
                                offset: 1,
                                color: 'RGBA(90, 177, 251, 1)',
                            },
                        ],
                        false
                    ),
                },
            },
            data: line,
        },
    ],
};
shareNumInit = () => {
	let shareContent = echarts.init(document.getElementById('shareDiv'));
	shareContent.setOption(shareOption)
}
