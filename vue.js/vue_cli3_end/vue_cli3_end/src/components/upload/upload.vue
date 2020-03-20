<script>
  const renderUpbtn=function(h,attrs){
    if(!attrs){
       return (
        <div>
           <el-button>上传 <i class="el-icon-upload2"></i></el-button>
        </div>
      )
    }
    if(attrs.drag||attrs.drag===""){
      return (
        <div>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </div>
      )
    }else if(attrs['list-type']==="picture-card"){
      return (
        <i class="el-icon-plus"></i>
      )
    }else{
      return (
        <div>
           <el-button>上传 <i class="el-icon-upload2"></i></el-button>
        </div>
      )
    }
  }
  export default {
    name:"upload",
    functional:true,
    render(h,context) {
      console.log('context :', context);
      return (
        <div>
          <el-upload  action="" auto-upload={false} {...context.data}>
            {context.children?context.children:renderUpbtn(h,context.data.attrs)}
          </el-upload>
        </div>
      )
    },
  }
</script>