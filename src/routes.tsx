import { BrowserRouter, Route } from 'react-router-dom'

import Hero from './pages/Hero'
import Quiz from './pages/Quiz'
import SpaceNews from './pages/SpaceNews'
import TodoList from './pages/TodoList'
import Home from './pages/Home'

function Routes() {
   return (
      <BrowserRouter>
         <Route path='/' exact component={Home} />
         <Route path='/hero' component={Hero} />
         <Route path='/quiz' component={Quiz} />
         <Route path='/space' component={SpaceNews} />
         <Route path='/todo' component={TodoList} />
      </BrowserRouter>
   )
}

export default Routes
