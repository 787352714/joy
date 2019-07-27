<template>
  <div>
    <submit/>
    <filtertodo/>
    <h3>ToDo</h3>
    <div class="todos">
      <div
        class="todo"
        v-for="todo in todos"
        :key="todo.id"
        :class="{'is-complete':todo.completed}"
        @dblclick="updatetodos(todo)"
      >
        {{todo.title}}
        <span @click="deletetodos(todo.id)">删除</span>
      </div>
    </div>

    <!-- <div v-for="todo1 in todos1" :key="todo1.id">{{todo1.title}}</div> -->
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import submit from "./subcomponents/submit.vue";
import filtertodo from "./subcomponents/filter.vue";
export default {
  name: "todo",
  components: {
    submit,
    filtertodo
  },
  computed:
    //利用state获取store数据
    // todos(){
    //     return this.$store.state.todos;
    // },
    //利用getters获取数据
    // todos1(){
    //     return this.$store.getters;
    // },
    //利用mapgetters获取数据,映射关系，只能单独当作计算属性使用
    mapGetters({
      todos: "getAllTodos"
    }),

  methods: {
    ...mapActions(["deleteAlltodos","updateAlltodos"]),
    updatetodos(todo){
        const updatetodo={
           id : todo.id,
           title : todo.title,
           completed : !todo.completed
        }
        this.updateAlltodos(updatetodo);
    }
  },

  created() {
    this.$store.dispatch("setAllTodos");
  }
};
</script>

<style scoped>
h3 {
  display: flex;
}
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  display: flex;
  justify-content: space-between;
  background-color: #41b883;
  padding: 10px;
  border: 1px solid #41b883;
  border-radius: 5px;
  color: white;
}
.is-complete {
  background-color: blue;
}
</style>
