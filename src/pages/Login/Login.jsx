import React from 'react'
import LoginForm from '../../components/Login/Form'
import { useNavigate } from 'react-router-dom'
const Login = () => {

  const nav = useNavigate()

  return (
    <div className='grid md:grid-cols-3 m-3 p-2'>
        <h1 className='text-red-500 font-extralight md:mt-64 font-mono text-4xl md:text-6xl col-span-2 text-center'>EventBrite <br /> <span className='text-sm text-black'>Don't have an account <button className='text-red-400 font-bold' onClick={()=>nav('/register')}>SignUp</button></span></h1>
        <LoginForm/>



    </div>
  )
}

export default Login