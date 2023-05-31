import React, {useState} from 'react'
import Genre from './Genre'
import Playlist from './Playlist'

const Home = ({setMusic, music}) => {
    const [playListId, setPlaylistId] = useState(""); 
    const [playListActive, setPlaylistActive] = useState(false);


    return (
        <div className='h-full relative flex w-full'>
            <section className='flex-1 h-[93vh] w-full calc-genre-w py-3 px-2 rounded-md overflow-hidden'>
                <Genre setPlaylistId={setPlaylistId} setPlaylistActive={setPlaylistActive} />
            </section>

            <section className={`z-10 ${playListActive? "translate-x-0": "translate-x-full "} w-screen transition-all absolute right-0 top-0 lg:static lg:translate-x-0 h-[93vh] md:w-[400px] py-3 px-1`}>
                <Playlist playListId={playListId} setMusic={setMusic} setPlaylistActive={setPlaylistActive}/>
            </section>
        </div>
    )
}

export default Home