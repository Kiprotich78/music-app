import React from 'react'
import Search from './Search'
import Home from './Home'
import {Route, Routes} from 'react-router-dom'

const Body = ({setMusic, music}) => {

  
  return (
    <div className='h-full '>
      <Routes>
        <Route path='/' element={<Home setMusic={setMusic} music={music} />}/>
        <Route path='/home' element={<Home setMusic={setMusic} music={music} />}/>
        <Route path='search' element={<Search setMusic={setMusic} music={music} />}/>
      </Routes>
      
    </div>
  )
}

export default Body