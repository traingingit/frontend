import React from "react";
import './App.css';

class Currency_Calculator extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
          value:'',
          result:'',
          From : '',
          To : '' ,
        };
        this.From=""
        this.To=""
        this.value=""
        this.result=""
        this.handleChange=this.handleChange.bind(this)
        this.fromChange=this.fromChange.bind(this)
        this.toChange=this.toChange.bind(this)
        this.convert=this.convert.bind(this)
    }
    
    handleChange(event) 
    { 
       this.setState({value: event.target.value});  
       this.value=event.target.value
    }
    fromChange(event) 
    { 
      this.setState({From: event.target.value}); 
      this.From=event.target.value
    }
    toChange(event)
    {
       this.setState({To: event.target.value}); 
       this.To=event.target.value
    }
    convert() 
    {
    if(this.From =="INR" && this.To =="USD"){
        this.result=this.value*0.013
      }
      else if(this.From =="INR" && this.To =="CAD"){
        this.result=this.value*0.017
      }
      else if(this.From =="INR" && this.To =="EUR"){
        this.result=this.value*0.012
      }
      else if(this.From =="INR" && this.To =="GBP"){
        this.result=this.value*0.0099
      }
      else if(this.From =="USD" && this.To =="INR"){
        this.result=this.value/0.013
      }
      else if(this.From =="USD" && this.To =="CAD"){
        this.result=this.value/0.79
      }
      else if(this.From =="USD" && this.To =="EUR"){
        this.result=this.value*0.88
      }
      else if(this.From =="USD" && this.To =="GBP"){
        this.result=this.value*0.74
      }
      else if(this.From =="CAD" && this.To =="INR"){
        this.result=this.value/0.017
      }
      else if(this.From =="CAD" && this.To =="USD"){
        this.result=this.value*0.79
      }
      else if(this.From =="CAD" && this.To =="EUR"){
        this.result=this.value*0.7
      }
      else if(this.From =="CAD" && this.To =="GBP"){
        this.result=this.value*0.59
      }
      else if(this.From =="EUR" && this.To =="INR"){
        this.result=this.value/0.012
      }
      else if(this.From =="EUR" && this.To =="USD"){
        this.result=this.value/0.88
      }
      else if(this.From =="EUR" && this.To =="CAD"){
        this.result=this.value/0.7
      }
      else if(this.From =="EUR" && this.To =="GBP"){
        this.result=this.value*0.84
      }
      else if(this.From =="GBP" && this.To =="INR"){
        this.result=this.value/0.0099
      }
      else if(this.From =="GBP" && this.To =="USD"){
        this.result=this.value/0.74
      }
      else if(this.From =="GBP" && this.To =="CAD"){
        this.result=this.value/0.59
      }
      else if(this.From =="GBP" && this.To =="EUR"){
        this.result=this.value/0.84
      }
      else if(this.From==this.To){
        this.result=this.value
      }
    this.setState({result:this.result})
    }
    
    render()
    {
        return(
            <div id="block">
              <br/><br/><br/><br/>
                <input type="text" name = "value" id="value" placeholder="Enter a value" onInput={this.handleChange} value={this.state.value} ></input>
                <br /><br />
                <label from="From" >From : </label>
                <select name="currency" id="currency" onChange = {this.fromChange} value={this.state.From}>
                    <option value=""></option>
                    <option value = "INR">INR</option>
                    <option value = "USD">USD</option>
                    <option value = "CAD">CAD</option>
                    <option value = "EUR">EUR</option>
                    <option value = "GBP">GBP</option>
                </select>
                <br /><br />
                <label to="To">To : </label>
                <select name="currency" id="currency" onChange = {this.toChange} value={this.state.To}>
                    <option value=""></option>
                    <option value = "INR">INR</option>
                    <option value = "USD">USD</option>
                    <option value = "CAD">CAD</option>
                    <option value = "EUR">EUR</option>
                    <option value = "GBP">GBP</option>
                </select>
                <br /><br /><br />
                <button onClick={this.convert}>Convert Currency</button>
                <br /><br />
                <label>Result : </label>
                <p>{this.state.result}</p>
            </div>
        )
    }
}
export default Currency_Calculator;