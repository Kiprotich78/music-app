import React, {useState} from 'react'
import Header from './MainComponents/Header';
import Body from './MainComponents/Body';
import Player from './MainComponents/Player';

const Main = ({addSidebar}) => {
  const [music, setMusic] = useState("");
  

  return (
    <main className='h-full flex flex-col relative'>
      <section className='h-[7vh]'>
        <Header addSidebar={addSidebar}/>
      </section>
      <section className='max-h-[93vh]'>
        <Body setMusic={setMusic} music={music}/>
      </section>

      <section className={`${music? "": "hidden"} absolute bottom-2 w-full h-48`}>
        <Player music={music}/>
      </section>
    </main>
  )
}

export default Main