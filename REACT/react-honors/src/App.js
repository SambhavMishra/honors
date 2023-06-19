// import Greet from './components/Greet'
// import Welcome from './components/Welcome';
// import Message from './Message';
// import Hello from './components/Hello';
// import NameList from './NameList';
import Form from './Form';
// import HookCounter1 from './components/HookCounter1';
// import ParentComponent from './components/ParentComponent';
import React from 'react';
import MemoComponent from "./components/MemoComponent"
// import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
function App() {
  return (
    <div>

    <HookCounter3/> 
    <HookCounter4/>
    {/* // <HookCounter1/>
    // <HookCounter2/>

    // <ParentComponent/>
    // <React.Fragment>
    //   <h1>Fragment Demo</h1>
    //   <p>This describes Fragment Demo</p>
    // </React.Fragment>
    



    /* <Message/> */

    /* <Greet firstname = "Sambhav" lastname="Mishra">
      <p>This is inside the greet inside the app</p>
      </Greet>
    <Greet firstname = "Uttam">
      <button>click me</button>
      </Greet>
    <Greet firstname = "Anmol"/>
    
    <Welcome firstname="Sambhav" lastname="Mishra"/>
    <Welcome firstname="Shriram" lastname="Chandra"/> 
    /* <Hello/> */

    /* <NameList/> */}
    <Form/>
    <MemoComponent/>
    </div>
  );
}

export default App;
