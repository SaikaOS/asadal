import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import CompletedPage from './pages/CompletedPage'
import TodoDetails from './pages/TodoDetails'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path=':id' element={<TodoDetails />}/>
        <Route path='/completed' element={<CompletedPage />} />
        <Route path='/completed/:id' element={<TodoDetails />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
