import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";



export default function TaskCard({id,name,progress,dueDate,status,duration}) {

  const formatDate=date=>{
    let taskDate = new Date(date)
    var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };  
    let formattedDate=taskDate.toLocaleDateString("en-US", options)
    return formattedDate
  }
let [taskStatus,setTaskStatus]= useState(status)
let [taskProgress,setTaskProgress]= useState(progress)
  let taskStatusCode={    
    0:"Not Started",         //0
    1:"In Progress",         //1
    2:"Paused",             //2
    3:"Completed"           //3
  }
const dispatch=useDispatch()


const doneButtonClicked=(id)=>{
 if(taskStatus!=3) 
  {setTaskStatus(3)
  setTaskProgress(100)}
 else
   dispatch(deleteTask(id))  
      }

const changetaskStatus= ()=>{  
  setTaskStatus(taskStatus==0?1
                :taskStatus==1?2
                :taskStatus==2?1:3)
  
}



const checkDeadline=(date)=>{
  const date2= new Date(date)
  const today=new Date();
  if(today.getDate()==date2.getDate()&& 
    today.getMonth()==date2.getMonth()&&
    today.getFullYear()==date2.getFullYear())
    return true

  }

 return (
    
    <div className="task-card">
      <h2 className="task-name">{name}</h2>
      <div className="faded line"></div>
      <div className="margin-1-rem">
      <h5>Progress</h5>
      <ProgressBar now={taskProgress} label={`${taskProgress}%`} />
      </div>
      <div className="faded line"></div>
      <div className="margin-1-rem">
      <h5>Due Date:</h5>
      <h6 ><em>{checkDeadline(dueDate)?"Today":formatDate(dueDate)}</em></h6>
      </div>
      <div className="faded line"></div>
      <div className="row">
        <div className="col-6">
        <h5>Duration</h5>
        <h6><em>{duration} minutes</em></h6>
        </div>
        <div className="col-6">
        <h5>Status</h5>
        <h6><em>{taskStatusCode[taskStatus]}</em></h6>
        </div>
      
      </div>
      
      <div className="faded line"></div>

      <div className="task-card-buttons">
        <Button variant="primary" onClick={changetaskStatus}>{taskStatus===0?"Start":
                                      taskStatus===1?"Pause":
                                      taskStatus===2?"Resume":"Done"}</Button>
        <Button variant="success" onClick={()=>doneButtonClicked(id)}>{taskStatus===3?"Delete":"Done"}</Button>
      </div>
    </div>
  );
}
