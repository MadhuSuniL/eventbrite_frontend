import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Event from '../../components/Events/Event'

const Home = () => {
  
  const domain = 'http://localhost:8000/'
  const [data,setData] = useState([])
  

  async function Api(){
    const response = await fetch(domain+'events/all_events',{
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Authorization': 'Bearer '+localStorage.getItem('access')
      }
    })
  
    const res_data = await response.json()
    setData(res_data)
  }


  useEffect(()=>{
    Api()
  },[])
  
  
  
  
  return (

    <div>
        <Header/>
        <h1 className='text-2xl text-red-400 font-bold m-3 text-center'>All Events</h1>
        <div className='max-w-[1220px] mx-auto md:mt-10 p-2 '>
        
        {
  data.map(obj=><Event key={obj.id} name={obj.event_name} location={obj.event_location} date={obj.date} time={obj.time} image={obj.image} />)
}




        </div>

    </div>
  )
}

export default Home