import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from "react-bootstrap";
import { addTask } from '../redux/tasksSlice';



const NewTask = ({setIsEditing}) => {  

    const dispatch= useDispatch()

    const [inputTaskName, setInputTaskName]= useState("")
    const [deadline, setDeadline] = useState("")
    const [taskDuration,setTaskDuration]= useState("")

    const addTaskButtonClicked=()=>{
        console.log(deadline)
       dispatch(addTask({
                "name": inputTaskName,
                "dueDate": deadline,
                "taskDuration": taskDuration,
                id: "id" + Math.random().toString(16).slice(2),
       }))
        setInputTaskName("")
        setDeadline("")
        setTaskDuration("")
        setIsEditing(false)
      }   
    
    return (
    
    <div className="new task-card">
        
            <input className="no-outline" onChange={(e)=>setInputTaskName(e.target.value)} type="text" value={inputTaskName} placeholder='Task Name'/>
            <div className="faded line"></div>   
            <label htmlFor="deadline-date"> Due Date</label>        
            <input id="deadline-date" className="form-control no-outline " onChange={(e)=>setDeadline(e.target.value)} type="date" />
            <div className="faded line"></div>
            <input className="no-outline" onChange={(e)=>setTaskDuration(e.target.value)} type="text" value={taskDuration} placeholder='Task Duration in minutes'/>
            <div className="faded line"></div>
            <div className="task-card-buttons">
            <Button onClick={addTaskButtonClicked}>Add</Button>
            </div>
    </div>
    
      
  )
     
};

export default NewTask;
