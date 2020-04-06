<template>
  <div class="menu">
    <!-- 顶部搜索框 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="菜单名称">
        <el-input v-model="formInline.user" placeholder="请输入菜单名称"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formInline.region" placeholder="菜单状态">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" @click="onSubmit" icon="el-icon-plus">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- table栏 -->
    <el-table style="width: 100%" :data="tableData">
      <el-table-column label="菜单" width="120" prop="name"></el-table-column>
      <el-table-column label="图标" width="80">
        <i class="el-icon-delete"></i>
      </el-table-column>
      <el-table-column label="排序" prop="sort" width="50"></el-table-column>
      <el-table-column label="权限标识" width="180"></el-table-column>
      <el-table-column label="组件路径" width="180"></el-table-column>
      <el-table-column label="可见" prop="see" width="50"></el-table-column>
      <el-table-column label="创建时间" prop="data"></el-table-column>
      <el-table-column label="操作" width="200">
        <template>
          <el-button type="text" icon="el-icon-edit" @click="dialogVisible = true">修改</el-button>
          <el-button type="text" icon="el-icon-plus">新增</el-button>
          <el-button type="text" icon="el-icon-delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 点击修改弹出 -->
    <el-dialog title="添加菜单" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <!-- 内容主体区域 -->
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="上级菜单">
          <el-select v-model="form.region" class="menuWidth"></el-select>
        </el-form-item>
        <el-form-item label="菜单类型">
          <el-radio v-model="radio" label="1">目标</el-radio>
          <el-radio v-model="radio" label="2">菜单</el-radio>
          <el-radio v-model="radio" label="3">按钮</el-radio>
        </el-form-item>
        <el-form-item label="菜单图标">
          <el-input v-model="form.name" placeholder="点击选择图标" prefix-icon="el-icon-search"></el-input>
        </el-form-item>
        <div class="formInline">
          <el-form-item label="菜单名称" prop="name">
            <el-input v-model="form.desc" placeholder="请输入菜单名称"></el-input>
          </el-form-item>
          <el-form-item label="显示排序" class="displaysort" prop="sort">
            <el-input-number controls-position="right"></el-input-number>
          </el-form-item>
        </div>
        <div class="formInline">
          <el-form-item label="是否外链">
            <el-radio v-model="radio" label="1">是</el-radio>
            <el-radio v-model="radio" label="2">否</el-radio>
          </el-form-item>
          <el-form-item label="路由地址" class="">
            <el-input v-model="form.desc" placeholder="请输入路由地址"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="菜单状态">
          <el-radio v-model="radio" label="1">显示</el-radio>
          <el-radio v-model="radio" label="2">隐藏</el-radio>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  components: {},
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      // 假数据
      tableData: [
        {
          name: "系统管理",
          sort: "1",
          see: "显示",
          data: "2018-03-16 11:33:00"
        }
      ],
      // 控制对话框的显示与隐藏
      dialogVisible: false,
      // 表单数据
      form: {
        name: "",
        region: "系统管理",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      radio: "1",
      ruleForm: {
        name: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入菜单名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        sort: [{ required: true, message: "请选择", trigger: "change" }]
      }
    };
  },

  computed: {},

  watch: {},

  mounted() {},

  methods: {
    onSubmit() {
      console.log("submit!");
    },
    open() {
      console.log("ok");
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>
<style lang='scss' scoped>
.menu {
  .formInline {
    display: flex;
  }
}
.menuWidth {
  width: 520px;
}
.displaysort {
  margin-left: 80px;
}
</style>