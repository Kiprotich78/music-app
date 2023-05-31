import React, {useState} from 'react'
import Genre from './Genre'
import Playlist from './Playlist'

const Home = ({setMusic, music}) => {
    const [playListId, setPlaylistId] = useState(""); 


    return (
        <div className='h-full relative'>
            <Genre setPlaylistId={setPlaylistId} />

            <section className='absolute right-0 top-0 h-[93vh] w-[400px]'>
                <Playlist playListId={playListId} setMusic={setMusic}/>
            </section>
        </div>
    )
}

export default Home