"use client"
import React, { useEffect, useState } from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { TbBrandLeetcode } from 'react-icons/tb'

const navbar = () => {

  const [show,setShow]=useState(false)

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY > 200){
        setShow(true)
      } else setShow(false)
    }

    window.addEventListener('scroll',handleScroll)

    return ()=> window.removeEventListener("scroll",handleScroll)
  },[])


  return (
    <div id='flexnn' className={`flex justify-center fixed top-1  rounded-xl  w-full   shadow-md transition-all duration-500 z-50
        ${show ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
      `}>
     <img 
     src="/img.jpg" 
     alt=""
     width={40}
     height={40} 
     className='rounded-4xl'
     />
      <div className='flex gap-3 ' >
        <div className='flex items-center gap-1 ' >
        

            <button className=''>
              <a href="https://www.linkedin.com/in/shiwam-pundi0b8173298r-/"><CiLinkedin
            size='25' /></a></button>
        </div>
        
        <div className='flex items-center gap-1 ' >
            

            <button className=''><a href="https://github.com/shiwam2001"><FaGithub
            size='25' /></a></button>
        </div>

        <div className='flex items-center gap-1 ' >
        

            <button className=''><a href="https://leetcode.com/u/k0mr2WykmF/"><TbBrandLeetcode size={25} /></a></button>
        </div>
        
        </div>
    </div>
  )
}

export default navbar
