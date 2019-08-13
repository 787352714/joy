<template>
  <div class="Layout">
    <el-row :gutter="10" class="row" type='flex'>
      <el-col :xs="size.xs" :sm="size.sm" :md="size.md" :lg="size.lg" :xl="size.xl"  v-for="(item,index) in arr" :key='index' style="height:100%">{{size}}<div class="grid-content bg-purple">{{arr}}</div></el-col>
    </el-row>
    <el-button @click="addDiv">添加一个</el-button>
    <el-pagination
      :page-size='pageSize'
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      layout="total,prev, pager, next, jumper"
      :total="items.length">
    </el-pagination>
  </div>
</template>
<script>
export default {
  data(){
    return {
      items:[1,2,3,4,5,6,7,8,9,10,11,22,33,44,55,66],
      currentPage: 1,
      arr:[],
      pageSize:8,
      b:0,
    }
  },
  mounted(){
    this.handleCurrentChange(1);
  },
  methods:{
    addDiv(){
      this.items.push(1);
      // this.arr=this.items.slice();
      //   let a= this.items.length%9+1; //翻页后有几条;
      if(this.items.length%8!==0){
        this.b= parseInt((this.items.length/8)+1); 
      }
      //   this.arr.splice(0,8)
      this.handleCurrentChange(this.b);
      console.log(this.b)
      this.currentPage=this.b;
      // console.log(this.items,this.arr)
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      //console.log(val)
      this.arr=[];
      for(let i=this.pageSize*(val-1);i<this.pageSize*val;i++){
        if(this.items[i]){
          this.arr.push(this.items[i])
        }
      }
    }
  },
  computed:{
    size(){
      switch (this.arr.length){
        case 1:
         return this.size= {
            xl:24,
            lg:24,
            md:24,
            sm:24,
            xs:24,
          };
        case 2:
          return  this.size= {
            xl:12,
            lg:12,
            md:12,
            sm:12,
            xs:24,
          };
        case 3:
          return  this.size= {
            xl:8,
            lg:8,
            md:12,
            sm:12,
            xs:24,
          };
          break;
        
        case 4:
          return  this.size= {
            xl:6,
            lg:8,
            md:12,
            sm:12,
            xs:24,
          }
          break;
        default:
          return  this.size= {
            xl:6,
            lg:8,
            md:12,
            sm:12,
            xs:24,
          }
        console.log(this.size)
      }
    }
  }
}
</script>

<style scope>
  .row{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
  }
  .el-col {
    border-radius: 4px;
    margin-bottom: 10px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 400px;
  }
</style>