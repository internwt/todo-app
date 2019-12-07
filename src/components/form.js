import React,{useState} from 'react';
import uuid from 'uuid/v4';

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name:"",
        }
        this.handleChange =  this.handleChange.bind(this)
        this.onhandleSubmit =  this.onhandleSubmit.bind(this)
    }
    onhandleSubmit(e){
        e.preventDefault()
        if(this.state.name){
        this.props.addItem({...this.state,id:uuid()})
        }else{
           alert(`name and age cannot be empty`)
        }
        this.setState({
            name:"",
           
        })


    }

    handleChange(e){
     this.setState({
        [e.target.name]:e.target.value
     })
    }
  render(){
    return (
        <div className="App">
        <form onSubmit = {this.onhandleSubmit} >
            <label >Name</label>
         <input type = 'text' 
           id="task"
           name ="name"
           value ={this.state.name}
           onChange ={this.handleChange }
         />
         <input type="submit" value = "submit" />
        </form>

        </div>

      );
  }
  
}

export default Form;
