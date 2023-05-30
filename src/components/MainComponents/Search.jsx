import React from 'react'

const Search = () => {
  return (
    <div className='flex w-full py-1'>
        <input type="text" placeholder='Search for a song...' className='w-3/4 max-w-[700px] outline-none py-2 px-4 rounded-md block m-auto focus:border-none active:outline-none' />
    </div>
  )
}

export default Search