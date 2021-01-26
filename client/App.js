import React from 'react'
import Router from './Router'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
const App = () => (
    <BrowserRouter>
        <Navbar />
        <Router />
    </BrowserRouter>
)

export default App