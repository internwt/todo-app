import React from 'react';
import Form from './form'
import EditDelete from './editDel'
class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state={
          items:[],
          editBox:false
            }
            this.addItems = this.addItems.bind(this)
            this.onhandleEdit = this.onhandleEdit.bind(this)
            this.removeItem = this.removeItem.bind(this)
            this.onhandleEdit = this.onhandleEdit.bind(this)
    }

    addItems(item){
          this.setState(({
              items:[...this.state.items,item]
          }))
    }
    removeItem(id){
        const removeItems = this.state.items.filter((i)=>i.id!==id)
        console.log(`=removeItems     =====>>>  ${JSON.stringify(removeItems)}`)
          this.setState({
              items:removeItems
          })
    }
    onhandleEdit(id,updatedItem){

        const newVal = this.state.items.map((i)=> {
             if(i.id === id){
                return {...i,name:updatedItem}
             }else{
                 return i
             }

        })
          this.setState({
              items:newVal
          })        
    }
   render(){
       const vale = this.state.items.map((index)=>{
       return (<EditDelete key = {index.id} editTodo ={this.onhandleEdit} todo = {index.name} id={index.id} removeTodo = {this.removeItem}/>)
                      
       })
    return (
        <div className="App">
           <ul>{vale}</ul>
          <Form   addItem = {this.addItems} />
        </div>
      );
   }
   
}

export default Todo;
