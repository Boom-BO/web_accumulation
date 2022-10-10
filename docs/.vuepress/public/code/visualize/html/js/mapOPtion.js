var data = [];
var noAcriveData = []
var hasAcriveData = []
let getAreaStatus = false
getArea = () => {
	$.ajax({
		url: '/default/statistics/getArea.sts',
		type: 'post',
		success: function(result) {
			getAreaStatus = true
			data = result.data.filter(item => item.status > 1).map(obj => {
				return {
					name: obj.orgName,
					...obj
					// value:obj.activeNumber,
					// value1:obj.registerNumber
				}
			})
			noAcriveData = data.filter(obj => obj.status == 2)
			hasAcriveData = data.filter(obj => obj.status == 3)
			mapInit()
		}

	})
}

mapInit = () => {
	let cMap = echarts.init(document.getElementById('c-map'));
	var geoCoordMap = {};

	/*获取地图数据*/
	cMap.showLoading();
	var mapFeatures = echarts.getMap('china').geoJson.features;
	cMap.hideLoading();
	mapFeatures.forEach(function(v) {
		// 地区名称
		var name = v.properties.name;
		// 地区经纬度
		geoCoordMap[name] = v.properties.cp;

	});
	var max = 480,
		min = 9; // todo 
	var maxSize4Pin = 100,
		minSize4Pin = 20;

	var convertData = function(data) {
		var res = [];
		for (var i = 0; i < data.length; i++) {
			var geoCoord = geoCoordMap[data[i].name];
			if (geoCoord) {
				res.push({
					name: data[i].name,
					value: geoCoord.concat(data[i].value),
					registerNumber: data[i].registerNumber,
					activeNumber: data[i].activeNumber
				});
			}
		}
		return res;
	};
	cMapOption = {
		tooltip: {
			padding: 0,
			enterable: true,
			transitionDuration: 1,
			backgroundColor: "transparent", //设置背景图片 rgba格式
			borderColor: '#3ea5e6',
			textStyle: {
				show:false,
				color: '#000',
				decoration: 'none',
			},
			// position: function (point, params, dom, rect, size) {
			//   return [point[0], point[1]];
			// },
			formatter: function(params) {
				console.log(params)
				var tipHtml = '';
				if (typeof(params.data) != 'undefined') {
					tipHtml =
						'<div style="position: relative;display:inline-block;min-width: 200px;max-width: 600px;border:1px solid #3ea5e6; height: 110px;padding: 0 15px;background: linear-gradient(0deg, rgba(14, 106, 178, 0.44), rgba(31, 53, 127, 0.44), rgba(25, 123, 202, 0.44));">' +
						'<p style="margin: 15px 0 0 0; font-size: 14px;font-weight: bold;color: #fff;line-height: 16px;">' + params.name +
						'</p>' +
						'<p style="margin: 15px 0 0 0; font-size: 14px;font-weight: 500;color: #fff;line-height: 16px;">' +
						'<span style="color: #74BDD8;">注册人数：</span>' +
						' <span style="font-size: 20px;font-weight: bold;color:#FFF32F">' + params.data.registerNumber +
						'</span>' + '<span style="font-size:14px;color:#FFF32F">人</span>' +
						'</p>' +
						'<p style="margin: 15px 0 0 0; font-size: 14px;font-weight: 500;color: #fff;line-height: 16px;">' +
						'<span style="color: #74BDD8;">活跃人数：</span>' +
						'<span style="font-size: 20px;font-weight: bold;color:#FFF32F">' + params.data.activeNumber +
						'<span style="font-size:14px;color:#FFF32F">人</span>' +
						'</span>' +
						'</p>' +
						'</div>'
				}

				return tipHtml;
			}

		},
		legend: {
			orient: 'vertical',
			x: '20',
			data: ['有活跃人数', '无活跃人数'],
			textStyle: {
				color: '#fff',
				fontSize: '18px'
			}
		},
		visualMap: {
			show: false,
			min: 0,
			max: 200,
			left: '5%',
			bottom: 80,
			calculable: true,
			seriesIndex: [0],
			inRange: {
				color: ['#04387b', '#467bc0'] // 蓝绿
			},
		},
		geo: {
			show: true,
			map: 'china',
			silent: false,
			top: 58,
			label: {
				normal: {
					show: false
				},
				emphasis: {
					show: false,
				}
			},
			zoom: 1.25, //当前视角的缩放比例
			roam: false, //是否开启平游或缩放
			itemStyle: {
				normal: {
					areaColor: '#023677',
					borderColor: '#3ea5e6',
					shadowBlur: 20,
					shadowOffsetX: 0,
					shadowOffsetY: 20,
				},
				areaColor: '#023677',
				emphasis: {
					areaColor: '#4499d0'
				}
			},
			z: 1
		},
		series: [
			{
			    name: '',
			    type: 'map',
			    map: 'china',
			    showLegendSymbol: false, // 存在legend时显示
				activeOpacity: 1,
			    label: {
			        normal: {
			            show: false
			        },
			        emphasis: {
			            show: false
			        }
			    },
			    roam: false, //是否开启平游或缩放
			    zoom: 1.25,
			    z: 2,
			    itemStyle: {
			        normal: {
			            areaColor: '#023677',
			            borderColor: '#3ea5e6'
			        },
			        emphasis: {
			            areaColor: '#4499d0'
			        }
			    },
			    animation: false,
			    data: data
			},
			{
				name: '',
				type: 'scatter',
				coordinateSystem: 'geo',
				data: convertData(data),
				symbolSize: function(val) {
					if (val) {
						return val[1] / 4;
					}

				},
				label: {
					normal: {
						formatter: '{b}',
						position: 'right',
						show: true,
						textStyle: {
							color: '#ffffff',
							fontSize: '14px',
							fontWeight: 'bold',
						}
					},
					emphasis: {
						show: true
					}
				},
				itemStyle: {
					normal: {
						color: '#fff'
					}
				},
			},
			{
				name: '无活跃人数',
				type: 'effectScatter',
				coordinateSystem: 'geo',
				data: convertData(noAcriveData),
				symbolSize: function(val) {
					if (val) {
						return val[1] / 4;
					}

				},
				showEffectOn: 'render',
				rippleEffect: {
					brushType: 'stroke'
				},
				hoverAnimation: true,
				label: {
					normal: {
						formatter: '{b}',
						position: 'left',
						show: false
					}
				},
				itemStyle: {
					normal: {
						color: 'yellow',
						shadowBlur: 10,
						shadowColor: 'yellow'
					}
				},
				tooltip: {
					show: false
				},
				zlevel: 1
			},
			{
				name: '有活跃人数',
				type: 'effectScatter',
				coordinateSystem: 'geo',
				data: convertData(hasAcriveData),
				symbolSize: function(val) {
					if (val) {
						return val[1] / 4;
					}
				},
				showEffectOn: 'render',
				rippleEffect: {
					brushType: 'stroke'
				},
				hoverAnimation: true,
				label: {
					normal: {
						formatter: '{b}',
						position: 'left',
						show: false
					}
				},
				itemStyle: {
					normal: {
						color: '#32FF40',
						shadowBlur: 10,
						shadowColor: '#32FF40'
					}
				},
				tooltip: {
					show: false
				},
				zlevel: 1
			}
		]
	}
	cMap.setOption(cMapOption)
}
