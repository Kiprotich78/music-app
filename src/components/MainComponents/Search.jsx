import React, { useState } from 'react'

const Search = ({setMusic, music}) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  const handleSearchParam = (e)=>{
    let value = e.target.value;
    setSearchParam(value);

  }

  const search = async (e)=>{
    e.preventDefault();
    const url = `https://spotify23.p.rapidapi.com/search/?q=${searchParam}&type=tracks&offset=0&limit=10&numberOfTopResults=5`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '360c5429ffmshdaaed81453f5cdfp130982jsn4bdc1a9eca17',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const data = result.tracks.items;
      setSearchResults(data);
      console.log(data);

    } catch (error) {
      console.error(error);
    }


  }

  function formatTime(milliseconds) {
    // Calculate the total seconds
    const totalSeconds = Math.floor(milliseconds / 1000);
  
    // Calculate minutes and seconds
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
  
    // Format the time as minutes:seconds
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  
    return formattedTime;
  }
  


  return (
    <div className='flex h-full flex-col w-full py-1'>
      <form action="#" className='w-full py-2' onSubmit={search}>
        <input onChange={handleSearchParam} type="text" placeholder='Search for a song...' className='w-3/4 max-w-[700px] outline-none py-2 px-4 rounded-md block m-auto focus:border-none active:outline-none' />
      </form>

      <div className={`flex-1 w-screen md:w-full px-3 md:px-10 overflow-y-auto`}>
        <div class={`antialiased font-sans min-w-full ${music? "pb-36" : ""}`}>
            <div class="py-8">
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 min-w-[460px]">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table class="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                      #
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Title
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Album
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Duration
                                    </th>
                                    
                                </tr>
                            </thead>
                            <tbody>

                              {
                                  searchResults.length && searchResults.map((item, index) => {
                                  return (
                                  <tr onClick={e => setMusic(item.data.id)} className='cursor-pointer hover:bg-gray-400' id={item.data.id}>
                                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    {index + 1}
                                  </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 w-10 h-10">
                                            {/* <img class="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                    alt="" /> */}

                                                <img class="w-full h-full rounded-full"
                                                src={item.data.albumOfTrack.coverArt.sources[1].url}
                                                alt="" />
                                            </div>
                                            <div class="ml-3">
                                                <p class="text-gray-900 whitespace-no-wrap capitalize text-xl">
                                                    {item.data.name}
                                                </p>
                                                <p class="text-gray-400 whitespace-no-wrap">
                                                    {item.data.artists.items[0].profile.name}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                      <p class="text-gray-900 whitespace-no-wrap">{item.data.albumOfTrack.name}</p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            {formatTime(item.data.duration.totalMilliseconds)}
                                        </p>
                                    </td>
                                  
                                  </tr>
                                  )
                                })
                              }
                            
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Search