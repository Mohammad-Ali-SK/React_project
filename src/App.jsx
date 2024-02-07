// eslint-disable-next-line no-unused-vars
import React from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground'

const App = () => {
  return (
    <div className=' w-full h-screen relative'>
      {/* Background */}
      <Background/>
      <Foreground/>
      
    </div>
  )
}

export default App
