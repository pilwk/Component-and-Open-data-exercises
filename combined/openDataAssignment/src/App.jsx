import React from 'react'
import DeployToday from './DeployToday.jsx'
import { Footer } from './Footer';
import './App.css'

function App() {
    console.log('opendataassignment rendered')
    return (
        <div id='assignment-2'>
            <DeployToday/>
            <Footer />
        </div>
    )
}

export default App
