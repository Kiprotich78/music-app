import React, { useEffect, useState } from 'react'
import ApiKey from '../../accessToken'

const Player = ({music, musicUrl, setMusicUrl, musicDetails}) => {
  const [play, setPlay] = useState(true);
  const [track, setTrack] = useState("");
  const [results, setResults] = useState({})
  const [duration, setDuration] = useState("");
  const [currentTime, setCurrentTime] = useState("")
  const [barPercentage, setBarPercentage] = useState(0);

  const pauseAudio = ()=>{
    track.pause();
    setPlay(false)
  }

  const playAudio = ()=>{
    track.play();
    setPlay(true);
  }

  const playMusic = (myAudio)=>{
    if(track){
      pauseAudio();
    }

    const audio = new Audio(myAudio);
    audio.play();
    setPlay(true);

    setTrack(audio);

    audio.ontimeupdate = () => {
      const duration = audio.duration.toFixed(0);
      const durminutes = Math.floor(duration / 60);
      const durseconds = duration % 60;
      setDuration(`${durminutes < 10 ? "0" + durminutes: durminutes}:${durseconds < 10 ? "0"+durseconds : durseconds}`)
      
      const currentTime = audio.currentTime.toFixed(0);

      const minutes = Math.floor(currentTime / 60);
      const seconds = currentTime % 60;

      setBarPercentage(Math.floor((currentTime / duration) * 100));
      
      setCurrentTime(`${minutes < 10 ? "0" + minutes: minutes}:${seconds < 10 ? "0"+seconds : seconds}`);

      if(currentTime === duration){
        setPlay(false);
      }



      
      // You can perform additional actions based on the current time or duration
      // ...
    };

  }

 


  const getTrack = async ()=>{

    const url = `https://spotify23.p.rapidapi.com/tracks/?ids=${music}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY || ApiKey.apiKey,
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const res = await response.json();
      console.log(res);
      setResults(res);
      setMusicUrl("")
      playMusic(res.tracks[0].preview_url);
    } catch (error) {
      console.error(error);
    }

  }

  useEffect(()=>{
    if(music){
      getTrack();
      console.log("fetched song form id")
    }

  }, [music]);

  useEffect(()=>{
    if(musicUrl){
      playMusic(musicUrl);
      setResults(musicDetails);
      console.log("music url")
    }

  }, [musicUrl])

  function truncateWordOnSmallScreens(word, maxLength) {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth;
  
    if (screenWidth <= 560) {
      if (word.length <= maxLength) {
        return word;
      } else {
        return word.substring(0, maxLength) + '...';
      }
    }
  
    return word;
  }
  
  

  return (
    <div class="w-full md:px-2 md:pr-4">
      <div class='flex w-full bg-white  shadow-md rounded-lg overflow-hidden px-1'>
        <div class="flex w-full">
          <div class="flex md:p-1 border-b items-center">
              <img class='w-16 h-16 object-cover rounded-md' alt='User avatar' src={`${track && results.tracks[0].album.images[2].url}`}/>
              <div class="flex flex-col px-2 w-full">
                  <span class="text-xs text-gray-700 uppercase font-medium ">
                      now playing
                  </span>
                  <span class="text-sm text-red-500 capitalize font-semibold pt-1">
                    {track && truncateWordOnSmallScreens(results.tracks[0].name, 10)} 
                  </span>
                  <span class="text-xs text-gray-500 uppercase font-medium ">
                      {track && results.tracks[0].artists[0].name}
                  </span>
                
              </div>
          </div>

            <div class="flex-1 flex sm:flex-row items-center">
              <div class="flex items-center">
                <div class="flex space-x-3 p-2">
                  <button class="focus:outline-none">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
                  </button>
                  <button onClick={()=> playAudio()} class={`${play? "hidden": ""} rounded-full w-10 h-10 flex items-center justify-center pl-0.5 ring-1 ring-red-400 focus:outline-none`}>
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </button>
                  <button onClick={() => pauseAudio(false)} class={`${play? "": "hidden"} rounded-full w-10 h-10 flex items-center justify-center pl-0.5 ring-1 ring-red-400 focus:outline-none`}>
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="6" y="4" width="4" height="16"></rect>
                      <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                  </button>
                  <button class="focus:outline-none">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
                  </button>
                </div>
                </div>
                <div class="hidden md:block relative w-full sm:w-1/2 md:w-7/12 lg:w-4/6 ml-2">
                    <div class="bg-red-300 h-2 w-full rounded-lg"></div>
                    <div class={`bg-red-500 h-2 w-[${barPercentage}%] rounded-lg absolute top-0`}></div>
                </div>
                <div class="flex justify-end w-full sm:w-auto pt-1 sm:pt-0">
                    <span class="text-xs text-gray-700 uppercase font-medium pl-2">
                    {currentTime + "/"+duration}                 
                    </span>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Player