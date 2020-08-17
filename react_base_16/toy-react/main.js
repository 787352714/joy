import { createElement,render,Component } from "./toy-react";

class MyComponent extends Component{
  render(){
    return <div>
      <h1>123123</h1>
      {this.children}
    </div>
  }
}
render(<MyComponent id="1" class="123">
  <div>123</div>
  <div></div>
  <div></div>
</MyComponent>,document.body)