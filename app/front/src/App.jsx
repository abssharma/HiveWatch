import React from 'react'
import { useState } from 'react'

import './App.css'

import Navbar from './components/Navbar'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Upload from "./pages/Upload"
import Queen from "./pages/Queen"
import Pattern from "./pages/Pattern"
import HiveNumber from "./pages/HiveNumber"
import Fact from "./pages/Fact"

const App = () => {
  return (
    <main className = "bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/upload" element = {<Upload />} />
          <Route path = "/queen-track" element = {<Queen />} />
          <Route path = "/hive-number" element = {<HiveNumber />} />
          <Route path = "/pattern" element = {<Pattern />} />
          <Route path = "/fact" element = {<Fact />} />
        </Routes>
      </Router>
    </main>
  )
}
export default App

