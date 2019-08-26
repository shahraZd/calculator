import React from "react";
import "./App.css";
import Button from "./button";
const calc_val = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
const calc_opp = ["/", "*", "-", "+", "="];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      dis:"",
      res:""
    }
  }

  display=(e)=>{
    this.setState({
      dis:this.state.dis.concat(e)
    },()=>{
      console.log(this.state.dis)
    })
  }

  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <input
            type="text"
            value={this.state.dis}
            name="result"
            className="result"
            readOnly
          />
        </header>
        <div className="row">
          <div className="col-9 col ">
            <div className="row">
              <div className="col-9 col">
                <Button value="C" style="calc-btn" calc={()=>{this.setState({dis:""})}} />
              </div>
              <div className="col-3 col">
                <Button value="←" style="calc-btn" calc={()=>{this.setState({dis:this.state.dis.slice(0,-1)})}} />
              </div>
            </div>
            <div className="row flex-wrap">
              {calc_val.map(e => (
                <div className={e==="0"?"col-12 col ":"col-4 col "}>
                  <Button value={e} style="calc-btn" calc={()=>this.display(e)} />

                </div>
              ))}
            </div>
          </div>
          <div className="col-3 col">
            {calc_opp.map(e => (
              <Button value={e} style="fct " calc={()=>(e==="="?this.setState({dis:String(eval(this.state.dis))}):this.display(e))} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
