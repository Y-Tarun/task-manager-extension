import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import TasksList from "./components/TasksList";
import SideMenuBar from "./components/SideMenuBar";
import TopNavBar from "./components/TopNavBar";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateStorage } from "./redux/tasksSlice";
import NewTask from "./components/NewTask";
import { useEffect, useState } from "react";


export default function App() {
const dispatch= useDispatch()

const [isEditing,setIsEditing]=useState(false)
const [isUpdating,setIsUpdating]= useState(false)




  return (
    <div className="App">
    <TopNavBar/>
      {!isEditing && <Button onClick ={()=>{setIsEditing(!isEditing)}}>Add New Task</Button>}
      <Button onClick={()=>dispatch(updateStorage())}>Update the Storage</Button>
     
      {/* ADDING NEW TASK */}
      <div>
      {isEditing && (
        <>
          <div
            className="overlay-styles"
            onClick={() => setIsEditing(false)}
          ></div>
          <NewTask setIsEditing={setIsEditing}/>
        </>
      )}
      </div>

      <div className="tasks-container">  
      <TasksList/>
      </div>
      
    </div>
  );
}
