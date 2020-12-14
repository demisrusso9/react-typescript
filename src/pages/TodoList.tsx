import { useState } from "react"
import { Link } from 'react-router-dom'
import '../App.css'

interface ITass {
   task: string;
   completed: boolean;
}

function TodoList() {

   const [list, setList] = useState<Array<ITass>>([]);
   const [task, setTask] = useState<string>('');

   const addTask = () => {
      setList([{ task, completed: false }, ...list])
      setTask('')
   }

   const deleteTask = (task: string) => {
      setList(list.filter(item => item.task !== task))
   }

   const completeTask = (completedTask: string) => {
      setList(list.map(item => item.task === completedTask ?
         { task: completedTask, completed: true } :
         { task: item.task, completed: item.completed ? true : false }
      ))
   }

   return (
      <div className='App'>
         <Link to="/">{'<---'}</Link>
         
         <h1>Todo List</h1>

         <div>
            <input
               type="text"
               placeholder="Task..."
               value={task}
               onChange={e => setTask(e.target.value)}
               onKeyDown={e => e.key === 'Enter' ? addTask() : null}
            />
            <button onClick={addTask}>Add Task</button>

            <hr />
         </div>


         {list.map((item, i) => (
            <div key={i} className='card'>
               <p>{item.task}</p>
               <button onClick={_ => completeTask(item.task)}>Complete</button>
               <button onClick={_ => deleteTask(item.task)}>X</button>

               {item.completed ?
                  <h3>Task completed</h3> :
                  <h3>Task Not completed</h3>
               }
            </div>
         ))}
      </div>
   )
}

export default TodoList
