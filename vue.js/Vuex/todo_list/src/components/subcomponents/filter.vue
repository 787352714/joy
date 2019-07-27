<template>
    <div>
        <h3>filter</h3>
        <select class="select" v-model="limit" @change="filterAlltodos(limit)">
            <option value="200">200</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="25">25</option>
            <option value="10">10</option>
        </select>
    </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
    name:'filtertodo',
    data() {
        return {
            limit:200,
        }
    },
    methods: {
        ...mapActions(['filterAlltodos'])
    },
}
</script>
<style scoped>
h3{
    display: flex;
}
.select{
    display: flex;
    padding: 10px;
    border: 1px solid #41b883;
}
</style>
