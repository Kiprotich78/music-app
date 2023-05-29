import React from 'react'

const Header = () => {
  return (
    <div className='min-h-[7vh] w-full bg-gradient-to-r from-transparent to-gray-400 flex items-center justify-end px-10 gap-3'>
      <button className='text-2xl font-[300] py-3 px-4 rounded-[25px] hover:bg-gray-300 transition-all'>Sign Up</button>
      <button className='bg-white py-3 px-4 text-2xl rounded-[25px] hover:bg-slate-200 transition-all'>Log In</button>
    </div>
  )
}

export default Header