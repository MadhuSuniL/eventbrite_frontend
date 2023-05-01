import React, { useState } from 'react'
import menu from '../../images/e1.jfif'
import like from '../../images/heartb.png'
import liked from '../../images/hearta.png'

const Event = (p) => {

  const [likeimg,setLikeImg] = useState(false)
  const domain = 'http://localhost:8000/'

  return (
    <div className='grid md:grid-cols-4 my-5 shadow-md shadow-black rounded-lg hover:scale-105 duration-200 '>
        <center>
        <img src={p.image} className='ml-6 md:ml-0 rounded-lg mx-auto'/>
        </center>

        <div className='col-span-3 px-3 flex justify-between items-center list-item'>
            <div className='flex flex-col justify-around m-2'>
            <h1 className='font-bold my-1'>{p.name}</h1>
            <h1 className='text-sm my-1'>Starts on {p.date} {p.time} IST</h1>
            <h1 className='text-sm my-1 '>{p.location}</h1>
            </div>
            <img onClick={()=>setLikeImg(!likeimg)} src={likeimg ? liked : like} className='active:animate-ping w-6 h-6 float-right m-3' />
        </div>


    </div>
  )
}

export default Event