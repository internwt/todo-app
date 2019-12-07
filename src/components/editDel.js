import React from 'react'


export default class EditDelete extends React.Component{
   constructor(props){
       super(props)
        this.state= {
             inputBox : false,
             inputVal : this.props.todo
        }
       this.handleRemove = this.handleRemove.bind(this)
       this.handleEdit = this.handleEdit.bind(this)
       this.handleChangeItem = this.handleChangeItem.bind(this)
       this.formSubmit = this.formSubmit.bind(this)

   }

   handleRemove(){
         this.props.removeTodo(this.props.id)
   }
   handleEdit(){
        this.props.editTodo(this.props.id)
        this.setState({
            inputBox:true
        })
   }
   
   formSubmit(event){
       event.preventDefault()
        this.props.editTodo(this.props.id,this.state.inputVal)
        this.setState({
            inputBox:false
        })

   }
   handleChangeItem(event){
       console.log(event.target.value)
       this.setState({
           inputVal:event.target.value
       })
   }

   render(){
    return (
        <div>
           
            <button onClick = {this.handleRemove}>X</button>
             <button onClick = {this.handleEdit}>Edit</button>   
                 <li>{this.props.todo}</li>
                {this.state.inputBox && 
               <form onSubmit ={this.formSubmit}> 
               <input 
                type ="text"
                name ="todo"
                 value ={this.state.inputVal}
                 onChange = {this.handleChangeItem}
                />
                <input type = "submit" value ="save" />
                </form>
                }
              </div>
    )


   }
}