<template>
    <div>
        <div>
            <h3>vcharts</h3>
            <v-chart :options='pie' :autoresize="true"></v-chart>
        </div>
        <lineCharts></lineCharts>
    </div>
    
</template>
<script>
import vChart from 'vue-echarts/components/ECharts'
import {pie} from './options/pie'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/markLine'
import lineCharts from './line'
export default {
    name:'charts',
    components:{
        'v-chart':vChart,
        lineCharts
    },
    data() {
        return {
            pie,
        }
    },
}
</script>
<style scoped>

</style>
