import React,{Component,Fragment} from 'react';
import TodoItem from './todoItem';
import axios from 'axios'

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state={
      inputValue: "123",
      list: []
    };
    this.handleDelet=this.handleDelet.bind(this);
  }

  componentDidMount(){
    axios.get('http://jsonplaceholder.typicode.com/todos').then(content=>{
      console.log('content :', content);
      if(content.status===200){
        console.log('获取成功');
        let titleList= [];
        content.data.forEach(item => {
          titleList.push(item.title)
        });
        this.setState({
          list: [...this.state.list,...titleList]
        })
      }
    })
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