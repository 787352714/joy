<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="name" label="组件" width="180"></el-table-column>
    <el-table-column label="操作" width="100">
    <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
    </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "input",
          address: "/input"
        },
        {
          name:"父组件触发子组件事件",
          address:'/faToCh'
        }
      ]
    };
  },
  methods:{
      handleClick(row){
      this.$router.push({path: row.address})
      }
  }
};
</script>