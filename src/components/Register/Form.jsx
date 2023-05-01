import React from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
    const domain = 'http://localhost:8000/'
    const nav = useNavigate()

    const RegisterApi = async (form) =>{
    form.preventDefault()
    const email = form.target[0].value
    const password = form.target[1].value
    const password2 = form.target[2].value

    if (password === password2){
        const response = await fetch(domain+'users/register',{
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json',
            },
            method:'POST',
            body:JSON.stringify({
                email,
                password
            })
        })
    
        const res = await response.json()
    
        if (response.status == 200){
            localStorage.setItem('access',res.access)
            localStorage.setItem('refresh',res.refresh)
            return nav('/home')
        }
        else{
            // login fail
            document.getElementById('err').style.display = 'block'
        }
    
    }
    

    else{
        document.getElementById('err2').style.display = 'block'

    }
  }
  
  
  
  
    return (
    <div className='p-3 md:m-3 mt-10 w-full mx-auto md:mt-44 rounded-xl shadow-lg shadow-gray-600 border-t-2 border-gray-100 font-semibold'>

        <form onSubmit={RegisterApi}>

        <h1 className='text-red-500 text-xl font-bold text-center m-5 mt-0 mb-6'>Register</h1>
        <h1 id='err' className='hidden text-red-800 text-sm font-bold text-center m-5 mt-0 mb-6'>User Already Exist!</h1>
        <center>

        <label htmlFor="email">Email </label>
        <input id='email' type='email' className='border-2 p-2 rounded-lg m-1 my-1 md:ml-11 ' placeholder='Email...' required/><br />

        <label htmlFor="password">Password </label>
        <input id='password' type='password' className='border-2 p-2 rounded-lg m-1 md:m-3 my-1 ' placeholder='Password...' required/>
        <br />
 
        <label htmlFor="password2">Confirm Password </label>
        <input id='password2' type='password' className='border-2 p-2 rounded-lg m-1 md:m-3 my-1 ' placeholder='Confirm Password...' required/>
        <br />
 
        <h1 id='err2' className='hidden text-red-800 text-[10px] font-bold text-center m-5 mt-0 mb-6'>Password Does't Match!</h1>

        <input type='submit' value={'Register'} className='cursor-pointer p-2 rounded-lg m-3 mb-0 mr-0 text-white px-5 float-right bg-red-500'/>
        </center>
        </form>
    </div>
  )
}

export default RegisterForm