import React, {useState} from 'react'

// const favoritesSongs = ["0V3wPSX9ygBnCm8psDIegu", "1vYZywcjdbPUnsEP43it0q", "224jZ4sUX7OhAuMwaxp86S", "2V8JCAL5fAYIuetBGKfj7X", "7tk9ZylxkJReNIavPPhqzj", "6wzgVq5ziHmiqOF9GZpljh"];

const favoritesSongsJsonArray = [
  {
    "tracks": [
      {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
              },
              "id": "06HL4z0CvFAxyc27GXpf02",
              "name": "Taylor Swift",
              "type": "artist",
              "uri": "spotify:artist:06HL4z0CvFAxyc27GXpf02"
            }
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/151w1FgRZfnKZA9FEcg9Z3"
          },
          "id": "151w1FgRZfnKZA9FEcg9Z3",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02bb54dde68cd23e2a268ae0f5",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851bb54dde68cd23e2a268ae0f5",
              "width": 64
            }
          ],
          "is_playable": true,
          "name": "Midnights",
          "release_date": "2022-10-21",
          "release_date_precision": "day",
          "total_tracks": 13,
          "type": "album",
          "uri": "spotify:album:151w1FgRZfnKZA9FEcg9Z3"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
            },
            "id": "06HL4z0CvFAxyc27GXpf02",
            "name": "Taylor Swift",
            "type": "artist",
            "uri": "spotify:artist:06HL4z0CvFAxyc27GXpf02"
          }
        ],
        "disc_number": 1,
        "duration_ms": 200690,
        "explicit": false,
        "external_ids": { "isrc": "USUG12205736" },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0V3wPSX9ygBnCm8psDIegu"
        },
        "id": "0V3wPSX9ygBnCm8psDIegu",
        "is_local": false,
        "is_playable": true,
        "name": "Anti-Hero",
        "popularity": 94,
        "preview_url": "https://p.scdn.co/mp3-preview/8587a38f3496e9b17e33d89c322c4b69ba899d69?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:0V3wPSX9ygBnCm8psDIegu"
      }
    ]
  },
  {
    "tracks": [
      {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5Z1CCuBsyhEHngq3U5IraY"
              },
              "id": "5Z1CCuBsyhEHngq3U5IraY",
              "name": "Westlife",
              "type": "artist",
              "uri": "spotify:artist:5Z1CCuBsyhEHngq3U5IraY"
            }
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6P1sBa0T1fRooA0UTAQfOu"
          },
          "id": "6P1sBa0T1fRooA0UTAQfOu",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27315f19e3b1fbfc5a2f164fb6a",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0215f19e3b1fbfc5a2f164fb6a",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485115f19e3b1fbfc5a2f164fb6a",
              "width": 64
            }
          ],
          "is_playable": true,
          "name": "Coast To Coast (Expanded Edition)",
          "release_date": "2000",
          "release_date_precision": "year",
          "total_tracks": 19,
          "type": "album",
          "uri": "spotify:album:6P1sBa0T1fRooA0UTAQfOu"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5Z1CCuBsyhEHngq3U5IraY"
            },
            "id": "5Z1CCuBsyhEHngq3U5IraY",
            "name": "Westlife",
            "type": "artist",
            "uri": "spotify:artist:5Z1CCuBsyhEHngq3U5IraY"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1JAph55NAWjqQMLqYZG5eZ"
            },
            "id": "1JAph55NAWjqQMLqYZG5eZ",
            "name": "Bernard L\u00f6hr",
            "type": "artist",
            "uri": "spotify:artist:1JAph55NAWjqQMLqYZG5eZ"
          }
        ],
        "disc_number": 1,
        "duration_ms": 237200,
        "explicit": false,
        "external_ids": { "isrc": "GBARL0000247" },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1vYZywcjdbPUnsEP43it0q"
        },
        "id": "1vYZywcjdbPUnsEP43it0q",
        "is_local": false,
        "is_playable": true,
        "name": "Soledad",
        "popularity": 57,
        "preview_url": "https://p.scdn.co/mp3-preview/92375e6aa9a8756f2804cef901b3287152a8c4cc?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "track_number": 9,
        "type": "track",
        "uri": "spotify:track:1vYZywcjdbPUnsEP43it0q"
      }
    ]
  },
  {
    "tracks": [
      {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/10tow6yKkH4OjXuZA0PR0w"
              },
              "id": "10tow6yKkH4OjXuZA0PR0w",
              "name": "Pryshon",
              "type": "artist",
              "uri": "spotify:artist:10tow6yKkH4OjXuZA0PR0w"
            }
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0q80Hj7RGzccRcHTZcb0HY"
          },
          "id": "0q80Hj7RGzccRcHTZcb0HY",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27387d87e15ac0ec96d87c38b0a",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0287d87e15ac0ec96d87c38b0a",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485187d87e15ac0ec96d87c38b0a",
              "width": 64
            }
          ],
          "is_playable": true,
          "name": "Gifted",
          "release_date": "2022-06-30",
          "release_date_precision": "day",
          "total_tracks": 17,
          "type": "album",
          "uri": "spotify:album:0q80Hj7RGzccRcHTZcb0HY"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/10tow6yKkH4OjXuZA0PR0w"
            },
            "id": "10tow6yKkH4OjXuZA0PR0w",
            "name": "Pryshon",
            "type": "artist",
            "uri": "spotify:artist:10tow6yKkH4OjXuZA0PR0w"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/09vo12hHajgG2cZzq0rGmE"
            },
            "id": "09vo12hHajgG2cZzq0rGmE",
            "name": "Bensoul",
            "type": "artist",
            "uri": "spotify:artist:09vo12hHajgG2cZzq0rGmE"
          }
        ],
        "disc_number": 1,
        "duration_ms": 234666,
        "explicit": false,
        "external_ids": { "isrc": "TCAFQ2155320" },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2V8JCAL5fAYIuetBGKfj7X"
        },
        "id": "2V8JCAL5fAYIuetBGKfj7X",
        "is_local": false,
        "is_playable": true,
        "name": "Sitachelewa",
        "popularity": 29,
        "preview_url": "https://p.scdn.co/mp3-preview/50bedbe6a58a80692551ec36e6daf24fa0ee2a4c?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:2V8JCAL5fAYIuetBGKfj7X"
      }
    ]
  },
  {
    "tracks": [
      {
        "album": {
          "album_type": "single",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4Rj9lQm9oSiMlirgpsM6eo"
              },
              "id": "4Rj9lQm9oSiMlirgpsM6eo",
              "name": "Sauti Sol",
              "type": "artist",
              "uri": "spotify:artist:4Rj9lQm9oSiMlirgpsM6eo"
            }
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2YmSVtCbLvbXki6ZC8rgeV"
          },
          "id": "2YmSVtCbLvbXki6ZC8rgeV",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273d394eeefb1bc20424856526d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02d394eeefb1bc20424856526d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851d394eeefb1bc20424856526d",
              "width": 64
            }
          ],
          "is_playable": true,
          "name": "Suzanna",
          "release_date": "2020-02-07",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:2YmSVtCbLvbXki6ZC8rgeV"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4Rj9lQm9oSiMlirgpsM6eo"
            },
            "id": "4Rj9lQm9oSiMlirgpsM6eo",
            "name": "Sauti Sol",
            "type": "artist",
            "uri": "spotify:artist:4Rj9lQm9oSiMlirgpsM6eo"
          }
        ],
        "disc_number": 1,
        "duration_ms": 231176,
        "explicit": false,
        "external_ids": { "isrc": "ZAUM71901388" },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7tk9ZylxkJReNIavPPhqzj"
        },
        "id": "7tk9ZylxkJReNIavPPhqzj",
        "is_local": false,
        "is_playable": true,
        "name": "Suzanna",
        "popularity": 41,
        "preview_url": "https://p.scdn.co/mp3-preview/9c1e31b4abdf641144fe058734ba9d66cccb17c7?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:7tk9ZylxkJReNIavPPhqzj"
      }
    ]
  },
  {
    "tracks": [
      {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5Z1CCuBsyhEHngq3U5IraY"
              },
              "id": "5Z1CCuBsyhEHngq3U5IraY",
              "name": "Westlife",
              "type": "artist",
              "uri": "spotify:artist:5Z1CCuBsyhEHngq3U5IraY"
            }
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0K3igCblJjDIJcFbaOHlxD"
          },
          "id": "0K3igCblJjDIJcFbaOHlxD",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273b881842e93527ff155893317",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02b881842e93527ff155893317",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851b881842e93527ff155893317",
              "width": 64
            }
          ],
          "is_playable": true,
          "name": "Back Home",
          "release_date": "2007-11-05",
          "release_date_precision": "day",
          "total_tracks": 13,
          "type": "album",
          "uri": "spotify:album:0K3igCblJjDIJcFbaOHlxD"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5Z1CCuBsyhEHngq3U5IraY"
            },
            "id": "5Z1CCuBsyhEHngq3U5IraY",
            "name": "Westlife",
            "type": "artist",
            "uri": "spotify:artist:5Z1CCuBsyhEHngq3U5IraY"
          }
        ],
        "disc_number": 1,
        "duration_ms": 240986,
        "explicit": false,
        "external_ids": { "isrc": "GBARL0701123" },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6wzgVq5ziHmiqOF9GZpljh"
        },
        "id": "6wzgVq5ziHmiqOF9GZpljh",
        "is_local": false,
        "is_playable": true,
        "name": "Us Against the World",
        "popularity": 51,
        "preview_url": "https://p.scdn.co/mp3-preview/3158cb79eec3d6c7df9da161483d33eb71370e7f?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:6wzgVq5ziHmiqOF9GZpljh"
      }
    ]
  }
]


const Trending = ({setMusicUrl, setMusicDetails}) => {
  // const [favoritesArray, setFavoritesArray] = useState() 

  // const getFavorites = async (id)=>{
  //   const url = `https://spotify23.p.rapidapi.com/tracks/?ids=${id}`;
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': process.env.RAPID_API_KEY,
  //       'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  //     }
  //   };

  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.json();
  //     setFavoritesArray([...favoritesArray, result]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   favoritesSongs.forEach((id, index) => {
  //     setTimeout(() => {
  //       getFavorites(id);
  //     }, 2000 * (index + 1));
  //   });
  // }, []);

  function formatTime(milliseconds) {

    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    return formattedTime;

  }
  
  return (
    <div className='bg-gray-200 bg-opacity-20 p-4 rounded-md'>
      <h2 className='text-2xl font-bold'>Favorites</h2>
      <div className='max-h-72 overflow-y-auto'>
        {favoritesSongsJsonArray.map(song => {
          return (
            <div onClick={()=> {setMusicUrl(song.tracks[0].preview_url); setMusicDetails(song)}} className='flex cursor-pointer items-center justify-between px-4 my-2 bg-gray-800 bg-opacity-10 rounded-md hover:bg-opacity-20'>
              <div  className='flex gap-2 py-2 items-center w-64'>
                <img className='rounded-md' src={song.tracks[0].album.images[2].url} alt="" />
                <div className='flex justify-center flex-col'>
                  <p className='md:text-xl text-gray-900'>{song.tracks[0].name}</p>
                  <p className='text-gray-200 text-[13px]'>{song.tracks[0].artists[0].name}</p>
                </div>
              </div>
              <p className='hidden md:block'>{song.tracks[0].album.name}</p>
              <p>{formatTime(song.tracks[0].duration_ms)}</p>
  
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Trending