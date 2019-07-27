
<template>
  <div>
    <div class="container">
      <!-- 评论区域 -->
      <comment :addcomments='addcomments'/>
      <!-- 展示区域 -->
      <show :comments="comments" />
      <stop/>
    </div>
  </div>
</template>
<script>
import comment from "./subcomponents/comment";
import show from "./subcomponents/show";
import stop from "./subcomponents/stop"
export default {
  components: {
    comment,
    show,
    stop
  },
  data() {
    return {
      comments: [
        {
          name: "bob",
          contant: "123345678"
        },
        {
          name: "bob",
          contant: "123345678"
        },
        {
          name: "bob",
          contant: "123345678"
        }
      ]
    };
  },
  methods: {
      addcomments(comment){
          this.comments.unshift(comment)
      }
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
