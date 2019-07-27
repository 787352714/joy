import echarts from 'vue-echarts'

export const line = {
    title:{text:"ceshi"},
    xAxis: [
        {
            type: 'category',
            name: '日期',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],

    yAxis: [{
        type: 'value',
        name: '老婆花的钱',
        lineStyle:{
            type:'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
                offset: 0, color: 'white' // 0% 处的颜色
            }, {
                offset: 1, color: 'red' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        },
        
    }],
    series: {
        name:'折线图',
        type: "line",
        scale: true,
        data: [1000, 200, 300, 6000, 433, 211, 1235],
        //data:[[1,23],[2,23],[3,23],[4,23],[5,23],[6,23],[7,23]],
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'blue' // 0% 处的颜色
                }, {
                    offset: 1, color: 'white' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        },
        smooth: true,
        markLine:{
            symbol:'none',
            data:[{
                name:'花钱太多',
                yAxis:3000,
                lineStyle:{
                    type:'solid',
                    color:'black'
                },
                
            }]
        },
        markPoint: {
            symbol: "circle",
            symbolSize: '5',
            label: {
                formatter: '{b}:{c}',
            }
        }
    }
}
    // }option = {

//     title: {
//         text: "老婆花的钱",
        
//     },
//     grid: {
//         top: '20%',
//         left: '10%',
//         right: '10%',
//         bottom: '15%',
//         containLabel: true,
//     },
//     xAxis: {
//         type: 'category',
//         boundaryGap: false,
//         data: ['14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
//         axisLabel: {
//             margin: 30,
//             color: '#ffffff63'
//         },
//         axisLine: {
//             show: false
//         },
//         axisTick: {
//             show: true,
//             length: 25,
//             lineStyle: {
//                 color: "#ffffff1f"
//             }
//         },
//         splitLine: {
//             show: true,
//             lineStyle: {
//                 color: '#ffffff1f'
//             }
//         }
//     },
//     yAxis: [{
//         type: 'value',
//         position: 'right',
//         axisLabel: {
//             margin: 20,
//             color: '#ffffff63'
//         },

//         axisTick: {
//             show: true,
//             length: 15,
//             lineStyle: {
//                 color: "#ffffff1f",
//             }
//         },
//         splitLine: {
//             show: true,
//             lineStyle: {
//                 color: '#ffffff1f'
//             }
//         },
//         axisLine: {
//             lineStyle: {
//                 color: '#fff',
//                 width: 2
//             }
//         }
//     }],
//     series: [{
//         name: '注册总量',
//         type: 'line',
//         smooth: true, //是否平滑曲线显示
//         showAllSymbol: true,
//         symbol: 'circle',
//         symbolSize: 6,
//         lineStyle: {
//             normal: {
//                 color: "#fff", // 线条颜色
//             },
//         },
//         label: {
//             show: true,
//             position: 'top',
//             textStyle: {
//                 color: '#fff',
//             }
//         },
//         itemStyle: {
//             color: "red",
//             borderColor: "#fff",
//             borderWidth: 3
//         },
//         tooltip: {
//             show: false
//         },
//         areaStyle: {
//             normal: {
//                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                     offset: 0,
//                     color: '#eb64fb'
//                 },
//                 {
//                     offset: 1,
//                     color: '#3fbbff0d'
//                 }
//                 ], false),
//             }
//         },
//         data: [393, 438, 485, 631, 689, 824, 987, 1000, 1100, 1200]
//     }]
// };
