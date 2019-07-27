<template>
    <div>
        <div class="btn1" v-show="this.flag" @click.self="this.show">
            <div class="btn2" v-show="this.flag" @click="this.show" >

            </div>
        </div>
        <button @click="this.show">123</button>
    </div>
</template>
<script>
export default {
    name:"stop",
    data() {
        return {
            flag:true,
        }
    },
    methods: {
        show(){
            this.flag = !this.flag
            console.log(this.flag)
        }
    },
}
</script>
<style scoped>
.btn1{
    width: 100px;
    height: 100px;
    border: 1px solid #000000
}
.btn2{
    width: 50px;
    height: 50px;
    margin: auto;
    background-color: aqua;
}

</style>
