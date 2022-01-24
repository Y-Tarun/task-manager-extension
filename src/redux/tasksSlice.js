import { createSlice} from '@reduxjs/toolkit'

let newTaskObject ={  
  progress: 0,
  status: 0
}

const initialState =[]

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask:(state,action)=>{
      let newTask={...newTaskObject,...action.payload}
      state.push(newTask)
    },
    deleteTask:(state,action)=>{
      return state.filter(task=>task.id!==action.payload)
    },
    getTasks:(state,action)=>{
      return [...state,...action.payload]
    },
    updateStorage:(state)=>{
        localStorage.setItem("tasks",[JSON.stringify(state)])
    }
  }

})

// Action creators are generated for each case reducer function
export const { addTask,deleteTask,getTasks,updateStorage } = tasksSlice.actions

export default tasksSlice.reducer