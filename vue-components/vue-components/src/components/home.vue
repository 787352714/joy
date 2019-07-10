<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column label="操作" width="100">
    <el-button @click="handleClick" type="text" size="small">查看</el-button>
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
      ]
    };
  },
  methods:{
      handleClick(){
          this.$router.push({path: '/input'})
      }
  }
};
</script>