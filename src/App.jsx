import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";  
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
function App() {


  return (
    <div className='bg-blue-200 flex flex-col justify-center rounded-xl items-center min-h-screen'>
      <h1 className='justify-center items-center text-3xl mb-2 '>Sign In/Sign Up</h1>
      <div className='bg-[#FFF] h-96 w-[50rem] rounded-xl grid grid-cols-2'>
         <div className='bg-red-500 grid grid-col justify-center items-center text-center p-8'>
          <h1 className='text-white text-3xl mb-2 font-bold'>Hello Friends!!</h1>
          <p className='text-white text-xl font-semibold'>Enter your personal details and start journey with us</p>
          <div className='text-white text-xl font-bold'><button className='w-32 h-12 border border-solid border-white rounded'>Sign Up</button></div>
         </div>
         <div className='flex flex-col p-[2.5rem] gap-4 items-center'>
          <h1 className='text-black font-bold text-2xl'>SIGN IN</h1>
          <div className='grid grid-cols-4 gap-5 text-3xl'>
          
            
          <FcGoogle/>   
          <FaFacebookSquare/>
          <CiLinkedin/>
          <FaGithub/>
          </div>
          <div>
          <p className='text-black font text-2xl'>Or use email for login! </p>
          </div>
        
          <div>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name"></input>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email"></input>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Password"></input> 
      <br /><br />
      <button type="button" class="px-8 py-3 font-semibold rounded-full dark:bg-red-500 dark:text-gray-800">Sign in</button>
          </div>  
         </div>
      </div>
    </div>
  )
}

export default App