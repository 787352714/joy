import React from 'react';
import Button,{ButtonType,ButtonSize} from './components/Button/Button';
import Alert,{AlertType} from './components/Alert/Alert';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Button btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={()=>{alert(1111);}} className="custom">hhhhh</Button>
       <Button btnType={ButtonType.Primary} disabled>hhhhh</Button>
       <Button btnType={ButtonType.Primary} disabled size={ButtonSize.Small}>hhhhh</Button>
       <Button btnType={ButtonType.Link} href={'https://www.baidu.com'} size={ButtonSize.Large}>hhhhh</Button>
       <div style={{padding: "20px 40px",width:" 500px"}}>
        <Alert title="爱你"></Alert>
        <Alert title="爱你" type={AlertType.Danger}></Alert>
        <Alert title="爱你"type={AlertType.Primary}></Alert>
        <Alert title="爱你"type={AlertType.Warning} closeable={false}></Alert>
        <Alert title="爱你"type={AlertType.Primary} description="爱你爱你爱你爱你" closeable={false}></Alert>
       </div>
        <code>
          const a = "1"
        </code>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
