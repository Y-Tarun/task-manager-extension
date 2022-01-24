import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getTasks } from '../redux/tasksSlice'
import TaskCard from "./TaskCard"

const TasksList = () => {
const dispatch=useDispatch()    
   let tasks = useSelector(state=>state.tasks)


useEffect(()=>{

dispatch(getTasks(JSON.parse(localStorage.getItem("tasks"))))

}

,[])

return (
        <div>         
            
           {tasks.map(task=>
            <TaskCard key={task.id} name={task.name} progress={task.progress} dueDate={task.dueDate} duration={task.taskDuration} status={task.status} id={task.id}/>            
            )}
        </div>
    )
    
}


export default TasksList
