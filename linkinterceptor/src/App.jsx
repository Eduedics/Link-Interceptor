import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import './App.css'
import Linkinterceptor from './components/Linkinterceptor';

function App() {
  

  return (
    <div className="App">
      <Router basename='/Link-Interceptor'>
        <Routes>
          <Route path="/" element={<Linkinterceptor />} />
        </Routes>
      </Router>
     
    </div>
  )
}

export default App
