import React from 'react'

const EventForm = (p) => {

    const domain = 'http://localhost:8000/'
    

  const CreateApi =async (form)=>{
    form.preventDefault()

    var data = new FormData();
    data.append('event_name',form.target[0].value)
    data.append('event_location',form.target[1].value)
    data.append('date',form.target[2].value)
    data.append('time',form.target[3].value)
    data.append('image',form.target[4].files[0])
    data.append('user',1)

    const response = await fetch(domain+'events/create_event',{
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Authorization': 'Bearer '+localStorage.getItem('access')
          },
        method:'POST',
        body:data
    })
  
    if(response.status == 201){
        window.location.reload()
    }
    else{
        alert('....')
    }
}
  
  
    return (
    <div className={p.vis ? 'fixed w-auto top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl shadow-lg shadow-gray-600 border-t-2 border-gray-100 font-semibold p-5 bg-white' : 'fixed w-auto top-[150%] left-[150%] translate-x-[-50%] translate-y-[-50%] rounded-xl shadow-lg shadow-gray-600 border-t-2 border-gray-100 font-semibold p-5 bg-white'}>
        
    <form onSubmit={CreateApi} className='flex flex-col items-stretch'>
    <h1 className='text-red-500 text-xl font-bold text-center m-5 mt-0 mb-6'>Create Event</h1>
        
        <label htmlFor="name">Event Name </label>
        <input type='text' placeholder='Event Name' id='name' className='border-2 p-2 rounded-lg m-1 my-1 md:ml-11 ' required/>
{/* <br /> */}
        <label htmlFor="location">Event Location </label>
        <input type='text' placeholder='Event Location' className='border-2 p-2 rounded-lg m-1 my-1 md:ml-11 ' required/>

{/* <br /> */}
    
        <label htmlFor="date">Event Date </label>
        <input type='date' placeholder='Event Location' className='border-2 p-2 rounded-lg m-1 my-1 md:ml-11 ' required/>

{/* <br /> */}
    
        <label htmlFor="location">Event Time </label>
        <input type='time' placeholder='Event Location' className='border-2 p-2 rounded-lg m-1 my-1 md:ml-11 ' required/>
{/* <br /> */}

        <label htmlFor="location">Event Image </label>
        <input type='file' placeholder='Event Location' className='border-2 p-2 rounded-lg m-1 my-1 md:ml-11 ' required/>

        <input type='submit' value={'Host'} className='cursor-pointer p-2 rounded-lg m-3 mb-0 mr-0 text-white px-5 float-right bg-red-500 hover:bg-red-700'/>
    
    
    </form>



    </div>
  )
}

export default EventForm