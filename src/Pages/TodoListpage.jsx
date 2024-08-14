import React, { useState, useEffect } from 'react';
import '../css/TodoListpage.css';
import image1 from '../images/mylogo.gif';
import Logout from './Logout.jsx';
import { v4 as uuidv4 } from 'uuid';

export default function TodoListpage() {
  const [showMessage, setShowMessage] = useState(false);
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);

  function updateTodoValue(e) {
    setNewTodo(e.target.value);
  }

  function addNewTask() {
    if (newTodo.trim() !== "") {
      const newTask = {
        id: uuidv4(),
        text: newTodo,
      };
      setTodo((prev) => [...prev, newTask]);
    } else {
      alert("Please enter a valid task!!");
    }
    setNewTodo("");
  }

  function editBtn(id) {
    const updatedTodo = prompt("Edit your task:", todo.find(task => task.id === id)?.text);
    if (updatedTodo !== null && updatedTodo.trim() !== "") {
      setTodo(todo.map((task) => (task.id === id ? { ...task, text: updatedTodo } : task)));
    }
    else {
      alert("No task entered!! Please enter a valid task!!");
    }
  }

  function delBtn(id) {
    setTodo(todo.filter((task) => task.id !== id));
    setCompletedTasks(completedTasks.filter((taskId) => taskId !== id));
  }

  function handleCheckboxChange(id) {
    setCompletedTasks((prev) => {
      if (prev.includes(id)) {
        return prev.filter((taskId) => taskId !== id);
      } else {
        return [...prev, id];
      }
    });
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
        <i onClick={toggleVisibility} className="fa-solid fa-user account">{isVisible ? <Logout /> : null}</i>
        <img src={image1} alt='logo' />
      </div>
      <br /><br /><br /><br />
      <div className='child2'>
        <input value={newTodo} onChange={updateTodoValue} type="text" placeholder='Enter your task here...' />
        <button onClick={addNewTask} className='addbtn btn-grad2'>Add</button>
        <hr />
      </div>

      <ul>
        {todo.map((task) => {
          return (
            <li
              key={task.id}
              style={{
                textDecoration: completedTasks.includes(task.id) ? "line-through" : "none",
              }} >

              <input className='cb'
                type="checkbox"
                checked={completedTasks.includes(task.id)}
                onChange={() => handleCheckboxChange(task.id)}
              />

              <div className='task-text'>{task.text}</div>


              <div className='btnsdeledit'>
                <button className='editt' onClick={() => editBtn(task.id)}><i className="fa-solid fa-pen-to-square fa-2xl"></i></button>
                <button className='del' onClick={() => delBtn(task.id)}><i className="fa-solid fa-trash fa-2xl"></i></button>
              </div>

            </li>
          );
        })}
      </ul>
    </div>
  );
}
