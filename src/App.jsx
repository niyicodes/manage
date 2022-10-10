import React from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Home from "./Pages/HomePage/HomePage"

function App() {
  
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
