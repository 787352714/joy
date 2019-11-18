import React,{Component,Fragment} from 'react';
import TodoItem from './todoItem';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state={
      inputValue: "123",
      list: ['1231','hfhkj']
    };
    this.handleDelet=this.handleDelet.bind(this);
  }

  render() {
    return (
      <Fragment>
        <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
        <button onClick={this.handleAdd.bind(this)}>增加</button>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return (
                <TodoItem extend={item} key={item+index} handleDelet={this.handleDelet} extendIndex={index} />
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  
  inputChange(e){
    console.log('e :', e);
    this.setState({
      inputValue: e.target.value
    })
  }

  handleAdd(){
    this.setState({
      list: [...this.state.list,this.state.inputValue]
    })
  }

  handleDelet(index){
    console.log('index :', index);
    let list= this.state.list;
    list.splice(index,1);
    this.setState({
      list: list
    })
  }
};

export default TodoList;