import React, {useState} from 'react'
import Genre from './Genre'
import Playlist from './Playlist'

const Home = ({setMusic, music}) => {
    const [playListId, setPlaylistId] = useState(""); 


    return (
        <div className='h-full relative flex w-full'>
            <section className='flex-1 h-[93vh] w-full calc-genre-w py-3 px-2 rounded-md overflow-hidden'>
                <Genre setPlaylistId={setPlaylistId} />
            </section>

            <section className='translate-x-full absolute right-0 top-0 lg:static lg:translate-x-0 h-[93vh] w-[400px] py-3 px-1'>
                <Playlist playListId={playListId} setMusic={setMusic}/>
            </section>
        </div>
    )
}

export default Home