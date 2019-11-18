import React,{ Component } from 'react';

class TodoItem extends Component {
  constructor(props){
    super(props);
    this.handleClick= this.handleClick.bind(this)
  }
  render(){
    return (
      <li onClick={this.handleClick}>{`${this.props.extendIndex+1}====${this.props.extend}`}</li>
    )
  }
  handleClick(){
    this.props.handleDelet(this.props.extendIndex);
  }
}

export default TodoItem;