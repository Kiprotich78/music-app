import React from 'react'
import Search from './Search'

const Body = ({setMusic, music}) => {

  
  return (
    <div className='h-full '>
      <Search setMusic={setMusic} music={music}/>
      
    </div>
  )
}

export default Body