import React, { useState } from 'react'
import Main from '../components/Main';
import SideBar from '../components/SideBar';
const Music = () => {
  const [showSideBar, setSidebar] = useState(false);

  const addSidebar = ()=>{
    setSidebar(true);
  }

  const removeSidebar = ()=>{
    setSidebar(false);
  }
  return (
    <section className='w-screen h-screen bg-gradient-to-b from-pink-300 to-pink-700 flex overflow-hidden'>
      <div className={`absolute ${showSideBar?"translate-x-0" : "-translate-x-full"} w-full md:translate-x-0 md:static md:w-64 h-full transition-all z-20`}>
        <SideBar removeSidebar={removeSidebar}/>
      </div>
      <div className='flex-1 h-full'>
        <Main addSidebar={addSidebar}/>
      </div>
    </section>
  )
}

export default Music