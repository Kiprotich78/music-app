import React from 'react'
import Main from '../components/Main';
import SideBar from '../components/SideBar';
const Music = () => {
  return (
    <section className='w-screen h-screen bg-gradient-to-b from-pink-300 to-pink-700 flex '>
      <div className='w-64 h-full'>
          <SideBar />
      </div>
      <div className='flex-1 h-full'>
        <Main />
      </div>
    </section>
  )
}

export default Music