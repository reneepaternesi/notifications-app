import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import MetricDetail from './components/MetricDetail'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/metric" element={<MetricDetail />} />
      </Routes>
    </div>
  )
}

export default App
