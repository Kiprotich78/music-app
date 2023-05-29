import React from 'react'
import {SlHome} from 'react-icons/sl'
import {AiOutlineFileSearch} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'

const SideBar = () => {
  return (
    <div className='h-full w-full bg-pink-600 relative'>
      <div className='p-3 text-gray-200'>
        <p className='flex text-xl rounded-md items-center gap-6 pl-10 py-2 hover:bg-slate-400 hover:text-black transition-all cursor-pointer'>
          <SlHome /> 
          <span>Home</span>
        </p>
        <p className='flex text-xl rounded-md items-center gap-6 pl-10 py-2 hover:bg-slate-400 hover:text-black transition-all cursor-pointer'>
          <AiOutlineFileSearch /> 
          <span>Explore</span>
        </p>
      </div>

      <p className='absolute bottom-8 left-0 right-0 m-auto py-3 text-2xl w-max cursor-pointer px-10 rounded-[25px] font-2xl bg-slate-300 text-black flex items-center hover:bg-gray-400 hover:text-gray-700 transition-all'> About</p>
    </div>
  )
}

export default SideBar