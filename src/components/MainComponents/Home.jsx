import React, {useState} from 'react'
import Genre from './Genre'
import Playlist from './Playlist'
import Trending from './Trending'
import Artists from './Artists'

const Home = ({setMusic, setMusicUrl, setMusicDetails}) => {
    const [playListId, setPlaylistId] = useState(""); 
    const [playListImg, setPlayListImg] = useState("");
    const [playListName, setPlayListName] = useState("");
    const [playListActive, setPlaylistActive] = useState(false);

    const handlePlaylist = (id, img, name)=>{
        setPlaylistId(id);
        setPlayListImg(img);
        setPlayListName(name);
        setPlaylistActive(true);
    }

    return (
        <div className='h-full relative flex w-full'>
            <section className='flex-1 flex flex-col gap-5 h-[93vh] w-full calc-genre-w py-3 px-2 rounded-md overflow-hidden overflow-y-auto pb-20'>
                <Genre handlePlaylist={handlePlaylist} />
                <Trending setMusicUrl={setMusicUrl} setMusicDetails={setMusicDetails}/>
                <Artists />
            </section>

            <section className={`z-10 ${playListActive? "translate-x-0": "translate-x-full "} w-screen transition-all absolute right-0 top-0 lg:static lg:translate-x-0 h-[93vh] md:w-[400px] py-3 px-1`}>
                <Playlist playListId={playListId} playListImg={playListImg} playListName={playListName} setMusic={setMusic} setPlaylistActive={setPlaylistActive}/>
            </section>
        </div>
    )
}

export default Home