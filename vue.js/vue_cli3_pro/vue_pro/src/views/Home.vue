<template>
    <div class="Home">
      <List>
        <ListItem>
            <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" title="自定义指令" description="自定义指令演示代码" />
            <template slot="action">
                <li>
                  <router-link tag='a' to='/directive'>查看</router-link>
                </li>
            </template>
        </ListItem>
        <ListItem>
            <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" title="render函数" description="render函数代码" />
            <template slot="action">
                <li>
                  <router-link tag='a' to='/render'>查看</router-link>
                </li>
            </template>
        </ListItem>
      </List>
    </div>
</template>
<script>
    export default {
      
    }
</script>
<style lang="scss" scoped>
  .Home{
    width: 500px;
    height: 100%;
  }
</style>