import { useContext, useState } from 'react'
import { GameStateContext } from '../helpers/Contexts'
import { Questions } from '../helpers/Questions'

import '../App.css'

function Ending() {

   const { name, score, setScore, setGameState } = useContext(GameStateContext)

   const restartQuiz = () => {
      setScore(0)
      setGameState('menu')
   }

   return (
      <div className="End">
         <h1>Quiz Finished, congrats {name}</h1>
         <h4>{score} / {Questions.length}</h4>

         <button onClick={restartQuiz}>Restart</button>
      </div>
   )
}

export default Ending
