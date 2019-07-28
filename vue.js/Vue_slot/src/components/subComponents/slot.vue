<template>
    <div>
        <header>
            <slot name='header' :headerMsg='headerMsg'>
                <p>123123</p>
            </slot>
        </header>
        <container>
            <slot name='container' :containerMsg='containerMsg'>
                <p>123321</p>
            </slot>
        </container>
        <footer>
            <slot name='footer' :footerMsg='footerMsg'>
                <p>321123</p>
            </slot>
        </footer>
    </div>
</template>
<script>
export default {
  data () {
    return {
      headerMsg: '这是子组件header',
      containerMsg: '这是子组件container',
      footerMsg: '这是子组件footer'
    }
  }
}
</script>
