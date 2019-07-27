import axios from 'axios';
const state = {
    todos:[]
};

const getters = {
    getAllTodos(state){
        return state.todos;
    }
};

const mutations = {
        setTodos(state,todos){
            state.todos = todos
        },
        addTodos(state,todo){
            state.todos.unshift(todo);
        },
        deleteTodos(state,id){
            state.todos = state.todos.filter(todo=>
                todo.id !== id
            )
        },
        updateTodos(state,updatetodo){
            let index = state.todos.findIndex(todo=>todo.id===updatetodo.id);
            state.todos.splice(index,1,updatetodo)
        }
};

const actions = {
    async setAllTodos({commit}){
        const result = await axios.get('http://jsonplaceholder.typicode.com/todos');
        commit("setTodos",result.data);
    },
    async addAllTodos({commit},todo){
        const result = await axios.post('http://jsonplaceholder.typicode.com/todos',todo);
        commit ("addTodos",result.data)
    },
    async deleteAlltodos({commit},id){
        await axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`);
        commit ("deleteTodos",id)
    },
    async filterAlltodos({commit},limit){
        const result = await axios.get(`http://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit("setTodos",result.data);
    },
    async updateAlltodos({commit},updatetodo){
        const result = await axios.put(`http://jsonplaceholder.typicode.com/todos/${updatetodo.id}`,updatetodo);
        commit ("updateTodos",result.data)
    }
};

export default {state,getters,mutations,actions};