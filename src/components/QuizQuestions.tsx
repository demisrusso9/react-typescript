import { useContext, useState } from 'react'
import { GameStateContext } from '../helpers/Contexts'
import { Questions } from '../helpers/Questions'

function QuizQuestions() {
   const { setGameState, name, score, setScore } = useContext(GameStateContext)

   const [currentQuestion, setCurrentQuestion] = useState<number>(0)
   const [option, setOption] = useState<string>('')

   const chooseOption = (option: string) => setOption(option);

   const correctAnswer = () => {
      if (Questions[currentQuestion].answer === option) setScore(score + 1)

      setCurrentQuestion(currentQuestion + 1)
   }

   const finishQuiz = () => {
      if (Questions[currentQuestion].answer === option) setScore(score + 1)
      setGameState('finished')
   }

   return (
      <div className="Quiz">
         <h1>Welcome {name}</h1>

         <h3>{Questions[currentQuestion].prompt}</h3>


         <button onClick={_ => chooseOption('optionA')}>{Questions[currentQuestion].optionA}</button>
         <button onClick={_ => chooseOption('optionB')}>{Questions[currentQuestion].optionB}</button>
         <button onClick={_ => chooseOption('optionC')}>{Questions[currentQuestion].optionC}</button>
         <button onClick={_ => chooseOption('optionD')}>{Questions[currentQuestion].optionD}</button>

         {currentQuestion === Questions.length - 1 ?
            <button onClick={finishQuiz}>Finish Quiz</button> :
            <button onClick={correctAnswer}>Next question</button>
         }
      </div>
   )
}

export default QuizQuestions
