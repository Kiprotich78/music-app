import React, { useEffect, useState } from 'react'

const Genre = ({setPlaylistId, setPlaylistActive}) => {
  const [genres, setGenres] = useState([]);

  const getGenres = async ()=>{
    const url = 'https://spotify23.p.rapidapi.com/genre_view/?id=0JQ5DAqbMKFEC4WFtoNRpw&content_limit=10&limit=20';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setGenres(result.content.items);
    } catch (error) {
      console.error(error);
    }

  }


  useEffect(()=>{
   getGenres();
  }, [])


  return (
    <div className='bg-gray-200 bg-opacity-20 p-4 rounded-md'>
      <h2 className='text-2xl font-bold'>Genre</h2>
      <div className='flex gap-5 overflow-x-auto w-full'>
        {genres.length && genres[1].content.items.map((item)=>{
            return (
            
              <div onClick={()=> {setPlaylistId(item.id); setPlaylistActive(true);}} className='cursor-pointer min-w-max'>
                <img className='h-52 rounded-xl' src={item.images[0].url} alt="genre image" />
                <p>{item.name}</p>
              </div>
            
            )
          
        })}
      </div>
      
    </div>
  )
}

export default Genre