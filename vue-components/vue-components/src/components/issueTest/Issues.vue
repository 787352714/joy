<template>
  <el-table :data="issueData" style="width: 100%">
    <el-table-column v-for="col in columns"
      :prop="col.id"
      :key="col.id"
      :label="col.label"
      :width="col.width">
    </el-table-column>
  </el-table>
</template>
<script>
import { getIssues } from '~api'
export default {
  data(){
    return {
      columns:[],
      issueData:[],
    }
  },
  mounted(){
    this.setIssueList();
  },
  methods:{
    async setIssueList(){
      try {
        let data= await getIssues();
        console.log('data :', data);
      } catch (error) {
        console.log('error :', error);
      }
    }
  }
}
</script>