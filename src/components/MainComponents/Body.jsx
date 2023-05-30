import React from 'react'
import Search from './Search'

const Body = ({setMusic}) => {

  
  return (
    <div className='h-full '>
      <Search setMusic={setMusic}/>
      
    </div>
  )
}

export default Body