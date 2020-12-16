import { useContext } from 'react'
import { GameStateContext } from '../helpers/Contexts'

function Menu() {
   const { setGameState, name, setName } = useContext(GameStateContext)

   return (
      <div className="Menu">
         <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={e => setName(e.target.value)} />
            
         <button onClick={e => setGameState('playing')}>Start Quiz</button>
      </div>
   )
}

export default Menu
