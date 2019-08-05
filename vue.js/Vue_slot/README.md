# vue_slot

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 插槽


### 基本使用步骤是：

1.先在子组件中定义需要使用插槽的标签，使用slot标签占位并且给slot标签name属性,用v-bind将需要传递给父组件的值进行绑定（类似于父组件向子组件的绑定

```
<header>
    <slot name='header' :headerMsg='headerMsg'> //定义slot名称 ，绑定处理数据
     <p>123123</p>
     </slot>
</header>


 data () {
    return {
      headerMsg: '这是子组件header',
    }
```

2.在父组件中引入定义了slot的子组件，并在其中引入template标签，用v-slot绑定（原有的slot，slot-scope已经被v-slot命令代替）
```
<layOut>
    <template v-slot:header='msg1'> //利用v-slot绑定引用的slot（header），直接将需要的数据传入，自定义变量名
        <h1>{{`${msg1.headerMsg} ${msg}`}}</h1>
    </template>
</layout>
```
### 总结

插槽是一种组件间的传递数据或定义模板（template）的方法，其中定义了插槽的组件会以子组件的形式被引入到需要使用的组件中

***注意***

1.在使用插槽的过程中。插槽标签内也是可以定义html内容的，不过父组件的html内容会将其替换，所以可以为插槽标签定义一些内容来测试引入成功与否。

2.插槽可以不对其命名，这样在使用时就直接调用template，并且把需要传入的值直接赋值。但这种写法不能和具名插槽混用

