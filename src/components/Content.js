import React, {Component} from 'react';
import './css/Content.css';

class Content extends Component {
  constructor(){
    super();
    this.state={
      count:0,
      number1:0,
      number2:0,
      result:0
    }
    this.handlerCountClick= this.handlerCountClick.bind(this);
    this.handlerCalculatorClick= this.handlerCalculatorClick.bind(this);
    this.handleInputChanged= this.handleInputChanged.bind(this);
  }

  handlerCountClick(e){
    if(e.target.id==='dec' && this.state.count>0){
      this.setState({
        count: this.state.count -1
      })
    }else if (e.target.id==='inc') {
      this.setState({
        count: this.state.count + 1
      })
    }else
      this.setState({
        count:0
      })
  }
  handleInputChanged(e){
    if(e.target.id ==='number1'){
      this.setState({
        number1: Number(e.target.value)
      })
    }else{
      this.setState({
        number2: Number(e.target.value)
      })
    }
  }
  handlerCalculatorClick(e){
    switch (e.target.id) {
      case 'Add':
        this.setState({
          result: this.state.number1+this.state.number2
        })
        break;
      case 'Sub':
        this.setState({
          result: this.state.number1-this.state.number2
        })
        break;
      case 'Times':
      this.setState({
        result: this.state.number1*this.state.number2
      })
        break;
      case 'Div':
      if(this.state.number2>0){
      this.setState({
        result: this.state.number1/this.state.number2
      })}else{
        this.setState({
          result: "Error Division By Zero"
        })
      }
        break;
    }

  }
  render() {
    return (
      <div className="Content">
        <h1 className="title-text">Counter:{this.state.count}</h1>
        <button id="dec" onClick={this.handlerCountClick}>-</button>
        <button id="inc" onClick={this.handlerCountClick}>+</button>
        <button id="reset" onClick={this.handlerCountClick}>Reset</button>
        <h1 className="title-text">Calculator:</h1>
        <h1 className="title-text">Result: {this.state.result}</h1>
        <div className="title-text">
            <table className="Table">
              <tbody>
                <tr>
                <td>
                  <input id='number1' type='number' value={Number(this.state.number1)} onChange={this.handleInputChanged} className="Input"></input>
                </td>

                  <td>
                    <table>
                      <tbody>
                        <tr><td><button id="Add" onClick={this.handlerCalculatorClick}>+</button></td></tr>
                        <tr><td><button id="Sub" onClick={this.handlerCalculatorClick}>-</button></td></tr>
                        <tr><td><button id="Times" onClick={this.handlerCalculatorClick}>*</button></td></tr>
                        <tr><td><button id="Div" onClick={this.handlerCalculatorClick}>/</button></td></tr>
                      </tbody>
                    </table>
                  </td>
                <td><input id='number2' type='number' pattern="[0-9]*" inputMode="numeric" value={Number(this.state.number2)} onChange={this.handleInputChanged} className="Input"></input></td>
              </tr>
              </tbody>
            </table>
        </div>
      </div>
    )
  }
}
export default Content;
