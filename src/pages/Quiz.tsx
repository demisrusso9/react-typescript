import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GameStateContext } from '../helpers/Contexts'

//components
import Menu from '../components/Menu'
import QuizQuestions from '../components/QuizQuestions'
import Ending from '../components/Ending'

import '../App.css'

function Quiz() {

   const [gameState, setGameState] = useState<string>('playing')
   const [name, setName] = useState<string>('')
   const [score, setScore] = useState<number>(0)

   return (
      <div className='App'>
         <Link to="/">{'<---'}</Link>

         <h1>Quiz App</h1>

         <GameStateContext.Provider
            value={{ gameState, setGameState, name, setName, score, setScore }}>
            
            {gameState === 'menu' && <Menu />}
            {gameState === 'playing' && <QuizQuestions />}
            {gameState === 'finished' && <Ending />}
         </GameStateContext.Provider>
      </div>
   )
}

export default Quiz
