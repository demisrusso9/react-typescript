import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

function SpaceNews() {
   return (
      <div className='App'>
         <Link to="/">{'<---'}</Link>
         <h1>Space News</h1>
      </div>
   )
}

export default SpaceNews
