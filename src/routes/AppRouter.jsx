import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from '../components/navbar'
import Consulting from '../pages/consulting'
import Home from '../pages/home'
import Solutions from '../pages/solutions'
import About from '../pages/about'
import Career from '../pages/career'
import Technology from '../pages/technology'
import GetInTouch from '../pages/getInTouch'

const AppRouter = () => {
  return (
    <Router>
        <Navbar />

        <Routes>
            <Route exact path='/home' element={<Home />}/>
            <Route exact path='/consulting' element={<Consulting />}/>
            <Route exact path='/solutions' element={<Solutions />}/>
            <Route exact path='/technology' element={<Technology />}/>
            <Route exact path='/career' element={<Career />}/>
            <Route exact path='/about' element={<About />}/>
            <Route exact path='/getintouch' element={<GetInTouch />}/>
            <Route path='/' element={<Home />}/>
        </Routes>
    </Router>
  )
}

export default AppRouter