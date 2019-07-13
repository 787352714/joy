<template>
  <div>
    <div id="select">
      <el-select v-model="selectValue" placeholder="请选择" @change="showValue">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <childTem :selectValue='selectValue'  ref='childValue'></childTem>
  </div>
</template>
<script>
import childTem from "./childEvent.vue";
export default {
  data() {
    return {
      options: [
        {
          value: "黄金糕",
          label: "黄金糕"
        },
        {
          value: "双皮奶",
          label: "双皮奶"
        },
        {
          value: "蚵仔煎",
          label: "蚵仔煎"
        },
        {
          value: "龙须面",
          label: "龙须面"
        },
        {
          value: "北京烤鸭",
          label: "北京烤鸭"
        }
      ],
      selectValue: ""
    };
  },
  components: {
    childTem: childTem
  },
  methods:{
    showValue(){
      this.$refs.childValue.showValues();
    }
  }
};
</script>