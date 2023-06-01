import React, {useState} from 'react'
import Header from './MainComponents/Header';
import Body from './MainComponents/Body';
import Player from './MainComponents/Player';

const Main = ({addSidebar}) => {
  const [music, setMusic] = useState("");
  const [musicUrl, setMusicUrl] = useState("");
  const [musicDetails, setMusicDetails] = useState({});
  

  return (
    <main className='h-full flex flex-col relative w-full'>
      <section className='h-[7vh] w-full'>
        <Header addSidebar={addSidebar}/>
      </section>
      <section className='h-[93vh] w-full'>
        <Body setMusic={setMusic} music={music} setMusicUrl={setMusicUrl} setMusicDetails={setMusicDetails}/>
      </section>
      <section  className={`${music || musicUrl? "": "hidden"} calc-player-width absolute bottom-0 w-full h-max z-40`}>
        <Player music={music} setMusicUrl={setMusicUrl} musicUrl={musicUrl} musicDetails={musicDetails}/>
      </section>
    </main>
  )
}

export default Main