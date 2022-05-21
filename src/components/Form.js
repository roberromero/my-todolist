import './Form.css'
import { useState } from 'react';
import AddTask from './AddTask';

function Form() {
    const [task, setTask] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [priority, setPriority] = useState("low");
    

    const handleTask= (e) => setTask(e.target.value);
    const handleTaskDescription = (e) => setTaskDescription(e.target.value);
    const handlePriority = (e) => setPriority(e.target.value);

    const handleNewTask= (e) => {
        e.preventDefault();
        const data = { Task: task, TaskDescription: taskDescription, Priority: priority };
        AddTask(data);
    }


  return (
    <div>
      
<form className='formAdd' action="#" onSubmit={handleNewTask}>
  <label htmlFor="Task">Task:</label>
    <input className='formAdd__elementos' type="text" id="Task" name="Task" onChange={handleTask}/>
  <label htmlFor="TaskDescription">Task description: </label>
    <textarea className='formAdd__elementos' id="TaskDescription" rows="4" cols="50" name="TaskDescription" onChange={handleTaskDescription}/>
  
  <label htmlFor="Priority">Choose priority:</label>
    <select className='formAdd__elementos' name="Priority" id="Priority" onChange={handlePriority}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>

    </select>

    <input className='formAdd__elementos' type="submit" />
</form> 
    </div>
  )
}

export default Form
