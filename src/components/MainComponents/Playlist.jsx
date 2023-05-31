import React, { useEffect, useState } from 'react'

const Playlist = ({playListId, setMusic}) => {
  const [playListTracks, setPlaListTracks] = useState([]);


  const getPlayListTracks = async ()=>{
    const url = `https://spotify23.p.rapidapi.com/playlist_tracks/?id=${playListId}&offset=0&limit=100`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e4b2b189eemshd345243acd1cdcfp148bbfjsnd99f5796b8bc',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setPlaListTracks(result.items)
      
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
    <div className='py-3 w-full h-full bg-slate-400 bg-opacity-40 rounded-md px-2 flex flex-col'>
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
      
    </div>
  )
}

export default Playlist