<template>
    <div>
        <h3>submit</h3>
        <form @submit="submit">
            <input type="text" v-model="title" placeholder="add Todos">
            <input type="submit" value="submit">
        </form>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name:'submit',
    data() {
        return {
            title:""
        }
    },
    methods: {
        ...mapActions(['addAllTodos']),
        submit(e){
            e.preventDefault();
            const todo={
                title:this.title,
                compelted:false
            };
            this.addAllTodos(todo);
        }
    },
}
</script>
<style scoped>
h3{
    display: flex;
}
form{
    display: flex;
}
input[type="text"]{
    flex: 10;
    border: 1px solid #41b883;
    padding: 10px;
}
input[type="submit"]{
    background-color:#41b883;
    color: white;
    flex: 2;
    cursor: pointer; 
}
</style>
