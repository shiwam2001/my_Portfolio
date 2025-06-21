import Image from 'next/image'
import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { TbBrandLeetcode } from 'react-icons/tb'

const navbar = () => {
  return (
    <div className='flex justify-between'>
     <img 
     src="/img.jpg" 
     alt=""
     width={40}
     height={40} 
     className='rounded-4xl'
     />
      <div className='flex gap-3 mt-5' >
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
