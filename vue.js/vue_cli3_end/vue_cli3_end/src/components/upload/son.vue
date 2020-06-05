<template>
    <div>
        {{user}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        user:{
            default:'123',
            type:String
        }
    }
}
</script>