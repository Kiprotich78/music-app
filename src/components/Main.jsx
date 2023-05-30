import React from 'react'
import Header from './MainComponents/Header';

const Main = ({addSidebar}) => {
  return (
    <main>
      <Header addSidebar={addSidebar}/>
    </main>
  )
}

export default Main