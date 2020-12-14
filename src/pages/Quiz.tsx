import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

function Quiz() {
   return (
      <div className='App'>
         <Link to="/">{'<---'}</Link>
         <h1>Quiz App</h1>
      </div>
   )
}

export default Quiz
