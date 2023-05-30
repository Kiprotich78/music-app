import React from 'react'
import Header from './MainComponents/Header';
import Body from './MainComponents/Body';

const Main = ({addSidebar}) => {
  return (
    <main className='h-full flex flex-col'>
      <section className='h-[7vh]'>
        <Header addSidebar={addSidebar}/>
      </section>
      <section className='max-h-[93vh]'>
        <Body />
      </section>
    </main>
  )
}

export default Main