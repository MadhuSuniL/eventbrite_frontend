import React from 'react'
import RegisterForm from '../../components/Register/Form'

const Register = () => {
  return (
    <div className='grid md:grid-cols-3 m-3 p-2'>
        <h1 className='text-red-500 font-extralight md:mt-64 font-mono text-4xl md:text-6xl col-span-2 text-center'>EventBrite <br /> <span className='text-sm text-black'>Already have an account? <button className='text-red-400 font-bold'>Login</button></span></h1>
        <RegisterForm/>



    </div>
  )
}

export default Register