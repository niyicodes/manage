import React from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header/Header"
import Home from "./Pages/HomePage/HomePage"

function App() {
  
  return (
    <div className="mx-8 ">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      
    </div>
  )
}

export default App
