export default function withConsole(wrape) {
  return {
    render(h) {
      return h(wrape,{
        on:this.$listeners,
        attrs: this.$attrs,
        props:this.props
      },1234)
    },
    mounted() {
      console.log('这是一个组件')
    },
    // props:wrape.props
  }
}