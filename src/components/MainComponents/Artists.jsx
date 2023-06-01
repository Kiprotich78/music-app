import React, { useEffect, useState } from 'react'

const artistDetails = [{
  "artists": [
      {
          "external_urls": {
              "spotify": "https://open.spotify.com/artist/7bXgB6jMjp9ATFy66eO08Z"
          },
          "followers": {
              "href": null,
              "total": 19612978
          },
          "genres": [
              "r&b",
              "rap"
          ],
          "id": "7bXgB6jMjp9ATFy66eO08Z",
          "images": [
              {
                  "height": 640,
                  "url": "https://i.scdn.co/image/ab6761610000e5ebe50aa80e0f5869f84f6874d1",
                  "width": 640
              },
              {
                  "height": 320,
                  "url": "https://i.scdn.co/image/ab67616100005174e50aa80e0f5869f84f6874d1",
                  "width": 320
              },
              {
                  "height": 160,
                  "url": "https://i.scdn.co/image/ab6761610000f178e50aa80e0f5869f84f6874d1",
                  "width": 160
              }
          ],
          "name": "Chris Brown",
          "popularity": 87,
          "type": "artist",
          "uri": "spotify:artist:7bXgB6jMjp9ATFy66eO08Z"
      }
  ]},
  {
    "artists": [
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
            },
            "followers": {
                "href": null,
                "total": 65499671
            },
            "genres": [
                "canadian contemporary r&b",
                "canadian pop",
                "pop"
            ],
            "id": "1Xyo4u8uXC1ZmMpatF05PJ",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5eb01b9b4ec2a05d0805428acfa",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab6761610000517401b9b4ec2a05d0805428acfa",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f17801b9b4ec2a05d0805428acfa",
                    "width": 160
                }
            ],
            "name": "The Weeknd",
            "popularity": 95,
            "type": "artist",
            "uri": "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
        }
    ]


  },
  {
    "artists": [
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/4Rj9lQm9oSiMlirgpsM6eo"
            },
            "followers": {
                "href": null,
                "total": 430916
            },
            "genres": [
                "afropop",
                "gengetone",
                "kenyan pop"
            ],
            "id": "4Rj9lQm9oSiMlirgpsM6eo",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5eb9259d4f16bc0e83c70974d04",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab676161000051749259d4f16bc0e83c70974d04",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f1789259d4f16bc0e83c70974d04",
                    "width": 160
                }
            ],
            "name": "Sauti Sol",
            "popularity": 51,
            "type": "artist",
            "uri": "spotify:artist:4Rj9lQm9oSiMlirgpsM6eo"
        }
    ]
  },
  {
    "artists": [
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/10jefIr7Jj7c0dDJEqRcWK"
            },
            "followers": {
                "href": null,
                "total": 213875
            },
            "genres": [
                "kenyan drill",
                "kenyan hip hop"
            ],
            "id": "10jefIr7Jj7c0dDJEqRcWK",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5eb6cba52bd744c6d8488d23714",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab676161000051746cba52bd744c6d8488d23714",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f1786cba52bd744c6d8488d23714",
                    "width": 160
                }
            ],
            "name": "Wakadinali",
            "popularity": 46,
            "type": "artist",
            "uri": "spotify:artist:10jefIr7Jj7c0dDJEqRcWK"
        }
    ]
  },
  {
    "artists": [
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/5f7VJjfbwm532GiveGC0ZK"
            },
            "followers": {
                "href": null,
                "total": 14242792
            },
            "genres": [
                "atl hip hop",
                "atl trap",
                "rap",
                "trap"
            ],
            "id": "5f7VJjfbwm532GiveGC0ZK",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5eb6cad3eff5adc29e20f189a6c",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab676161000051746cad3eff5adc29e20f189a6c",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f1786cad3eff5adc29e20f189a6c",
                    "width": 160
                }
            ],
            "name": "Lil Baby",
            "popularity": 88,
            "type": "artist",
            "uri": "spotify:artist:5f7VJjfbwm532GiveGC0ZK"
        }
    ]
  },
  {
    "artists": [
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/3ZpEKRjHaHANcpk10u6Ntq"
            },
            "followers": {
                "href": null,
                "total": 1376622
            },
            "genres": [
                "afrobeats"
            ],
            "id": "3ZpEKRjHaHANcpk10u6Ntq",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab6761610000e5eb0f743bef043340ca5aac2205",
                    "width": 640
                },
                {
                    "height": 320,
                    "url": "https://i.scdn.co/image/ab676161000051740f743bef043340ca5aac2205",
                    "width": 320
                },
                {
                    "height": 160,
                    "url": "https://i.scdn.co/image/ab6761610000f1780f743bef043340ca5aac2205",
                    "width": 160
                }
            ],
            "name": "Ayra Starr",
            "popularity": 75,
            "type": "artist",
            "uri": "spotify:artist:3ZpEKRjHaHANcpk10u6Ntq"
        }
    ]
}

]

const artistsIDs = ["7bXgB6jMjp9ATFy66eO08Z", "1Xyo4u8uXC1ZmMpatF05PJ", "4Rj9lQm9oSiMlirgpsM6eo", "10jefIr7Jj7c0dDJEqRcWK", "5f7VJjfbwm532GiveGC0ZK", "3ZpEKRjHaHANcpk10u6Ntq"];

const Artists = () => {
  const [artistsTracks, setArtistsTracks] = useState(artistDetails);

  /*Get Popular Artits*/
  // const getSingleArtist = async (id)=>{
  //   const url = `https://spotify23.p.rapidapi.com/artist/?ids=${id}`;
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': process.env.RAPID_API_KEY,
  //       'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  //     }
  //   };

  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.text();
  //     setArtistsTracks([...artistsTracks, result]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(()=>{
  //   artistsIDs.forEach((id)=>{
  //     getSingleArtist(id)
  //   })
  // }, [])

  // useEffect(()=>{
  //   console.log(artistsTracks);
  // }, [artistsTracks]);

  


  return (
    <div className='bg-gray-200 bg-opacity-20 p-4 rounded-md'>
      <h2 className='text-2xl font-bold'>Popular Artists</h2>

        <div className='flex gap-3 py-2 overflow-y-auto'>
          {artistDetails.length && artistDetails.map((artist)=>{

            return (
              <div className='cursor-pointer min-w-max bg-gray-800 py-3 px-2 rounded-md'>
                <img className='rounded-full h-[160px] w-[160px] py-2' src={artist.artists[0].images[2].url} alt="artist" />
                <p className='py-1 text-white text-center capitalize'>{artist.artists[0].name}</p>
                <p className='py-1 text-white text-center capitalize'>{artist.artists[0].type}</p>
              </div>
            )
          })}
          
        </div>

    </div>
  )
}

export default Artists