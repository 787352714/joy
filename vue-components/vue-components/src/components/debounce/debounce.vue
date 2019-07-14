<template>
    <div>
        <div class="count">{{count}}</div>
        <el-button @click="debounceCount" type="primary" plain>加1</el-button>
    </div>
</template>

<script>
import { debounce , throttle } from '../../props/debounce'
export default {
    name:'debounce',
    data() {
        return {
            count:0
        }
    },
    methods: {
        countFunc(){
            this.count++
            },
        debounceCount(){
            throttle(this.countFunc,2000)
        }
    },
}
</script>
