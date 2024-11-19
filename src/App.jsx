import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import ViewMore from './pages/ViewMore'

export default function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='/viewmore/:id' element={<ViewMore/>}/>
         </Routes>
      </BrowserRouter>
         <Footer/>
      </div>
  )
}

