import React from 'react'

const Login = () => {
  return (
    <div>
        <h1 className='text-headlineTwo pt-10 ml-6 font-black text-secondary'>Log in</h1>
        <form className='mt-52 ml-6'>
            <div className='flex items-start flex-col justify-center'>
            <label className='font-bold pb-4 text-headlineSix text-secondary' htmlFor="username">Username</label>
            <input className='focus:outline-none border-b-[3px] text-secondary w-5/6' type="text" name="username" placeholder='Enter your username' aria-label="input username"/>
            
            <label className='font-bold  text-secondary pb-4 pt-4 text-headlineSix' htmlFor="password">Password</label>
            <input className=' focus:outline-none border-b-[3px] text-secondary w-5/6' type="password" placeholder='Enter your password' name="password" aria-label='input password' />
            <button type="submit" className='border-2 text-secondary mt-8 text-headlineFive uppercase font-bold rounded-full w-72 pt-2 pb-2'>log in</button>
            </div>
            
        </form>
    </div>
  )
}

export default Login