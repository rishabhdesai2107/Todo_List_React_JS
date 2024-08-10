import React, { useState, useEffect } from 'react';
import '../css/TodoListpage.css';
import image1 from '../images/mylogo.gif'

export default function TodoListpage() {
  const [showMessage, setShowMessage] = useState(false);

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
        <i className="fa-solid fa-user account"></i>
        <img src={image1} alt='logo'/>
      </div>

      <br /><br /><br /><br />
      <div className='child2'>
        <input type="text" placeholder='Enter your task here...' />
        <button className='addbtn btn-grad2'>Add</button>
      </div>
      <div className='child3'>
        <ul>

        </ul>
      </div>
    </div>
  );
}
