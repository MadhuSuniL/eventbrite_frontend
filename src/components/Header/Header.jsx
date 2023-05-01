import React, { useState } from 'react'
import menu from '../../images/menu.png'
import menu2 from '../../images/menu2.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const nav = useNavigate()

    const [navbool,setNavBool] = useState(false)
    const [navimgbool,setImgNavBool] = useState(true)

  return (
    <div className='flex justify-between px-4 border-b-2 border-gray-400 pb-1 items-center'>
        <h1 className='text-red-500 font-extralight md:m-2 font-mono text-lg md:text-3xl col-span-2 text-center'>EventBrite</h1>
        
        <input type='search' placeholder='Search For events..' className='border-2 p-2 rounded-lg m-1 my-1 md:w-[50%]'/>

        <div className='hidden md:flex items-center justify-around'>
        <h1 onClick={()=> nav('/home')} className='mx-3 cursor-pointer text-sm'>Browse Events</h1>
        <h1 onClick={()=> nav('/user_events')} className='mx-3 cursor-pointer text-sm'>Host an event</h1>
        <h1 onClick={()=> nav('/help')} className='mx-3 cursor-pointer text-sm'>Help</h1>
        <h1 className='mx-3 ml-8 font-bold text-sm'>madhu@gmail.com</h1>
        </div>
        <img onClick={()=>{
        setNavBool(!navbool)
        setImgNavBool(!navimgbool)
    }
        } src={navimgbool ? menu : menu2} className='active:animate-spin md:hidden duration-500 w-8 h-8 mr-2'/>
        
        <div className={navbool ? 'fixed top-10 left-[35%] p-4 shadow-lg shadow-black rounded-lg m-2 bg-white md:hidden items-center justify-around' : 'hidden fixed top-10 left-[35%] p-4 shadow-lg shadow-black rounded-lg m-2 bg-white md:hidden items-center justify-around'}>
        <h1  onClick={()=> nav('/home')} className='mx-3 text-sm border-b-2 m-2'>Browse Events</h1>
        <h1 onClick={()=> nav('/user_events')} className='mx-3 text-sm border-b-2 m-2'>Host an event</h1>
        <h1 onClick={()=> nav('/help')} className='mx-3 text-sm border-b-2 m-2'>Help</h1>
        <h1 className='mx-3 font-bold text-sm m-2'>madhu@gmail.com</h1>
        </div>
    </div>
  )
}

export default Header