import React from 'react'
import {SlHome} from 'react-icons/sl'
import {BsSearch} from 'react-icons/bs'

const SideBar = ({removeSidebar, handleActivePage, activeSection}) => {
  return (
    <div className='flex items-center justify-center md:block h-full w-full bg-pink-600 relative'>
      <div className='p-3 text-gray-200'>
        <p onClick={()=> {handleActivePage('home'); removeSidebar()}} className={`${activeSection==='home'? "bg-slate-300 bg-opacity-50": ""} flex text-xl rounded-md items-center gap-6 pl-10 py-2 my-2 hover:bg-slate-300 hover:bg-opacity-30 hover:text-black transition-all cursor-pointer`}>
          <SlHome /> 
          <span>Home</span>
        </p>
        <p onClick={()=> {handleActivePage('search'); removeSidebar()}} className={`${activeSection==='search'? "bg-slate-300 bg-opacity-50": ""} flex text-xl rounded-md items-center gap-6 pl-10 py-2 my-2 hover:bg-slate-300 hover:bg-opacity-30 hover:text-black transition-all cursor-pointer`}>
          <BsSearch /> 
          <span>Search</span>
        </p>
       
      </div>

      <div onClick={removeSidebar} className='absolute top-6 right-6 h-10 w-10 cursor-pointer md:hidden'>
        <div className='absolute inset-0 m-auto w-full h-1 bg-black rotate-45'></div>
        <div className='absolute inset-0 m-auto w-full h-1 bg-black -rotate-45'></div>
      </div>

      <p className="btn">About</p>
    </div>
  )
}

export default SideBar