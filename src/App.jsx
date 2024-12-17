import { useState } from 'react'
import Nav from './components/Nav'
import {Routes,Route} from 'react-router'
import {Link} from 'react-router'
import Welcome from './pages/Welcome'
import Starships from './pages/Starships'
import './App.css'

function App() {


  return (
    <>
    <Nav />
    <Routes>
    <Route path='/' element={<Welcome />} />
    <Route path='/starships' element={<Starships />} />
</Routes>
    </>
  )
}

export default App
