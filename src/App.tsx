
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Register from './components/Register.tsx'
import Login from './components/login.tsx'
import Home from './components/Home.tsx'



function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/> }/>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
    
      

  )
 


}

export default App
