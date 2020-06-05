<script>
export default {
    name:"father",
    functional:true,
    render(h,context) {
      context.children[0].props={user:'345'}
      return (
        <div>
            {context.children?context.children[0]:'no'}
        </div>
      )
    },
}
</script>