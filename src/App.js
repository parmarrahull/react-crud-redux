import React from 'react'
import Home from './Home'
import Create from './Create'
import Update from "./Update"
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Update />} />

      </Routes>
    </>
  )
}

export default App