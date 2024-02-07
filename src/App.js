import { Component } from "react";

import "./App.css"

class App extends Component{

  state={isHide:true,isSecond:true}

  onClickFirst=()=>{
    this.setState(prevState=>({isHide:!prevState.isHide}))
  }

  onClickSecond=()=>{
    this.setState(prevState=>({isSecond:!prevState.isSecond}))
  }

  render(){
    const {isHide}=this.state
    const {isSecond}=this.state

    const first=isHide?"hide-first":"first";
    const second=isSecond?"hide-second":"second";
    return (<div className="bg-container">
      <h1>Show/Hide</h1>
      <div className="buttons-container">
        <div className="container-1">
           <button className="button" onClick={this.onClickFirst}>Show/Hide FirstName</button>
           <div >
            <h1 className={first}>Joe</h1>
           </div>
        </div>
        <div className="container-1">
           <button className="button" onClick={this.onClickSecond}>Show/Hide LastName</button>
           <div >
            <h1 className={second}>Jonas</h1>
           </div>

        </div>
        
        
      </div>

    </div>)
  }
}

export default App;
