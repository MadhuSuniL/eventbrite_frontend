import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Event from '../../components/Events/Event'
import add from '../../images/plus.png'
import EventForm from '../../components/Events/EventForm'

const UserEvents = () => {

  const [vis,setVis] = useState(false)
  const [data,setData] = useState([])

  const domain = 'http://localhost:8000/'

  async function Api(){
    const response = await fetch(domain+'events/user_events',{
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
        <h1 className='text-2xl text-red-400 font-bold m-3 text-center'>Your Events ({data.length})</h1>
        <button onClick={()=>setVis(!vis)} className='p-2 px-3 rounded-lg bg-red-400 text-white font-bold m-3 float-right flex items-center hover:bg-red-600'><img src={add} className='w-5 mx-2'/>  Host An Event</button>
        <br /> 
        <br /> 
        <div className='max-w-[1220px] mx-auto md:mt-10 p-2 '>
        
{
  data.map(obj=><Event key={obj.id} name={obj.event_name} location={obj.event_location} date={obj.date} time={obj.time} image={domain+obj.image} />)
}
        </div>


    <EventForm vis={vis}/>
    </div>
  )
}

export default UserEvents