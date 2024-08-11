import React, { useState, useEffect } from 'react';
import '../css/TodoListpage.css';
import image1 from '../images/mylogo.gif'
import Logout from './Logout.jsx'

export default function TodoListpage() {
  const [showMessage, setShowMessage] = useState(false);
  const [todo,setTodo] = useState([]);
  const [newTodo,setNewTodo] = useState("");

  function updateTodoValue(e){
    setNewTodo(e.target.value);
  }

  function addNewTask(){
    if (newTodo !== null && newTodo.trim() !== ""){
    setTodo((prev)=>{return[...prev,newTodo]});
    }
    else{
      alert("Please enter a valid task!!");
    }
    setNewTodo("");
  }

  function editBtn(index) {
    const updatedTodo = prompt("Edit your task:", todo[index]);
    if (updatedTodo !== null && updatedTodo.trim() !== "") {
      setTodo(todo.map((task, i) => (i === index ? updatedTodo : task)));
    }
  }

  function delBtn(index){
    setTodo(todo.filter((_,i) => i !== index));
  }

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    setShowMessage(true);
  }, []);

  useEffect(() => {
    if (showMessage) {
      alert("Welcome to Your To-Do List Application.\n\n1) Click the “Delete” button (trash can icon) to delete the task.\n2) Click the “Edit” button (pencil icon) to edit the task.\n3) Click the checkbox next to the task to mark it as completed.");
      setShowMessage(false);
    }
  }, [showMessage]);


  return (
    <div className='container'>
      <div className='child1'>
        <h1>To-Do List</h1>
        <i onClick={toggleVisibility} className="fa-solid fa-user account">{isVisible ? <Logout/> : null}</i>
        <img src={image1} alt='logo'/>
      </div>
      <br /><br /><br /><br />
      <div className='child2'>
        <input value={newTodo} onChange={updateTodoValue} type="text" placeholder='Enter your task here...' />
        <button onClick={addNewTask} className='addbtn btn-grad2'>Add</button>
        <hr />
      </div>

      <ul>
          {todo.map((ele,index)=>{
            return <li key={index}>{ele} <div className='btnsdeledit'>
              <button className='editt' onClick={()=>{editBtn(index)}}><i class="fa-solid fa-pen-to-square fa-2xl"></i></button>
              <button className='del' onClick={()=>{delBtn(index)}}><i class="fa-solid fa-trash fa-2xl"></i></button>
              </div> </li>
          })}
        </ul>
      </div>
    );
}
