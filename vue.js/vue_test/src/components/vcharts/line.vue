<template>
    <div>
        <div>
            <select placeholder="请选择" @change="weekChange">
                <option value="0">周一</option>
                <option value="1">周二</option>
                <option value="2">周三</option>
                <option value="3">周四</option>
                <option value="4">周五</option>
                <option value="5">周六</option>
                <option value="6">周日</option>
            </select>
            <input type="number" name="" id="" v-model="date" @change="dateChange">
        </div>
        <v-chart :options="line" :autoresize='true' ref="charts" id="charts"></v-chart>
    </div>
</template>
<script>
import vChart from 'vue-echarts/components/ECharts'
import {line} from './options/line'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/markPoint'
import 'echarts/lib/component/markLine'
export default {
    name:'lineCharts',
    components:{
        vChart
    },
    data() {
        return {
            line,
            date:0,
            value:0,
            myChart:null,
        }
    },
    mounted() {
        // this.$nextTick(
        //     this.myChart = echarts.init(this.$refs.charts)
        // )
        //this.myChart = echarts.init(document.getElementById('charts'))
        
        console.log(this.myChart)
    },
    computed: {
        
    },
    methods: {
        weekChange(event){
            //console.log(event)
           //console.log(myChart)
           line.series.data[event.target.value] = this.date||0
           let myChart = echarts.init(document.getElementById('charts'))
           //console.log(this.$refs.charts)
           myChart.setOption(line);
           //console.log(this.myChart)
           
        },
    },
}
</script>