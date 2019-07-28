<template>
    <div>
        <layOut>
            <template v-slot:header='msg1'>
                <h1>{{`${msg1.headerMsg} ${msg}`}}</h1>
            </template>
            <template v-slot:container='msg2'>
              <h2>test</h2>
              <p>{{msg2.containerMsg}}</p>
            </template>
            <template v-slot:footer='msg3'>
              <p>{{msg3.footerMsg}}</p>
            </template>
        </layOut>
    </div>
</template>
<script>
import layOut from './subComponents/slot'
export default {
  components: {
    layOut
  },
  data () {
    return {
      msg: '父组件的消息'
    }
  }
}
</script>
