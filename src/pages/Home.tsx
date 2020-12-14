import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

function Home() {
   return (
      <div className="App">
         <Link to="/hero">Hero</Link>
         <Link to="/quiz">Quiz App</Link>
         <Link to="/space">Space News</Link>
         <Link to="/todo">Todo List</Link>
      </div>
   )
}

export default Home
