import React, { useState } from 'react'
import Main from '../components/Main';
import SideBar from '../components/SideBar';
import Footer from '../components/MainComponents/footer';
import { useNavigate } from 'react-router-dom';
const Music = () => {
  const navigate = useNavigate();
  const [showSideBar, setSidebar] = useState(false);
  const [activeSection, setActiveSection] = useState("home");


  const handleActivePage = (page)=>{
    setActiveSection(page);
    navigate(`${page}`);
  }

  const addSidebar = ()=>{
    setSidebar(true);
  }

  const removeSidebar = ()=>{
    setSidebar(false);
  }

  return (
    <>
      <section className='w-screen h-screen bg-gradient-to-b from-pink-300 to-pink-700 flex overflow-x-hidden'>
        <div className={`absolute ${showSideBar ? "translate-x-0" : "-translate-x-full"} w-full md:translate-x-0 md:static md:w-64 h-full transition-all z-20`}>
          <SideBar removeSidebar={removeSidebar} handleActivePage={handleActivePage} activeSection={activeSection} />
        </div>
        <div className='main-width h-full'>
          <Main addSidebar={addSidebar}/>
        </div>

      </section><Footer />
    </>
  )
}

export default Music