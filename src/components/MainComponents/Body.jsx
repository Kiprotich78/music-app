import React from 'react'
import Search from './Search'
import Home from './Home'
import {Route, Routes} from 'react-router-dom'

const Body = ({setMusic, music, setMusicUrl, setMusicDetails}) => {

  
  return (
    <div className='h-full w-full'>
      <Routes>
        <Route path='/' element={<Home setMusic={setMusic} music={music} setMusicUrl={setMusicUrl} setMusicDetails={setMusicDetails}/>}/>
        <Route path='/home' element={<Home setMusic={setMusic} music={music} setMusicUrl={setMusicUrl} setMusicDetails={setMusicDetails}/>}/>
        <Route path='search' element={<Search setMusic={setMusic} music={music} />}/>
      </Routes>
      
    </div>
  )
}

export default Body