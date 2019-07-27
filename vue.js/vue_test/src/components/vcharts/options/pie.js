import echarts from 'vue-echarts'

export const pie = {
    title:{
        text:'测试饼图'
    },
    tooltip:{
        trigger:'item',
        triggerOn:'mousemove',

    },
    series:{
        type:'pie',
        minAngle:20,
        label:{
            formatter:'{b}:{c}',

        },
        radius:[0,"60%"],
        data:[
            {
                name:'老婆花的钱',
                value:10000,
            },
            {
                name:'我花的钱',
                value:1000,
            },
            {
                name:'儿子花的钱',
                value:10000,
            }
        ],

    },
}

