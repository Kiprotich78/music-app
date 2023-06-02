import React, { useEffect, useState } from 'react'
import {IoChevronBackSharp} from 'react-icons/io5'
import ApiKey from '../../accessToken'


const Playlist = ({playListId, playListImg, playListName, setMusic, setPlaylistActive}) => {
  const [playListTracks, setPlaListTracks] = useState([]);


  const getPlayListTracks = async ()=>{
    const url = `https://spotify23.p.rapidapi.com/playlist_tracks/?id=${playListId}&offset=0&limit=100`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY || ApiKey.apiKey,
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setPlaListTracks(result.items)
      console.log(result)
      
    } catch (error) {
      console.error(error);
    }
  }

  

  useEffect(()=>{
    if(playListId){
      getPlayListTracks();
    }
  }, [playListId])



  return (
    <div className='py-3 w-full h-full bg-pink-300 lg:bg-slate-400 lg:bg-opacity-40 rounded-md px-2 flex flex-col relative'>
      <h1 className='text-xl font-[600] underline my-3 text-center text-gray-700'>Playlist</h1>
      <div className='flex-1 overflow-y-auto'>
        {playListTracks && playListTracks.map((track, index)=>{
          if(index==1){
            console.log(track)
          }
          return (
            <div onClick={()=> setMusic(track.track.id)} className='flex items-center px-2 gap-4 py-1 cursor-pointer'>
              <p>{index + 1}</p>
              <img className='h-16 rounded-lg ' src={track.track.album.images[2].url} alt="" />
              <div>
                <p className='text-xl'>{track.track.name}</p>
                <p className='text-gray-600'>{track.track.artists[0].name}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className='h-40 md:h-64 p-5 bg-gray-600 bg-opacity-50 rounded-3xl'>
        {playListImg && <img className='block mx-auto h-[90%] rounded-3xl' src={playListImg} />}
        <p className='text-gray-200 text-center text-xl font-bold'>{playListName || ""}</p>
      </div>

      <div onClick={()=> setPlaylistActive(false)} className='lg:hidden absolute top-3 left-3 text-3xl font-bold bg-gray-200 h-8 w-8 flex items-center justify-center rounded-full'>
        <IoChevronBackSharp />
      </div>
      
    </div>
  )
}

export default Playlist