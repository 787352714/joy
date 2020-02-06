<template>
  <div class="container">
    <div>
      <logo />
      
      <div class="links">
        <nuxt-link
          to="/user/signIn"
          class="button--green"
          tag="a"
        >
          登陆
        </nuxt-link>
        <nuxt-link
          to="/user/signUp"
          class="button--grey"
          tag="a"
        >
          注册
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  methods:{
    handleClick(){
      this.$setTimeLocalStorage('test1','testSuccess2','s',2)
    },
    handleGetClick(){
      let content = this.$getLocalStorage('test1');
      console.log('content :', content);
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
