import Image from 'next/image'
import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub} from 'react-icons/fa'
import { TbBrandLeetcode } from 'react-icons/tb'

const navbar = () => {
  return (
  
       <div className='flexn    ' >
        <Image 
        alt='profile'
        src="/img.jpg"
        width={135}
        height={140}
        className='innerBorder flexn outerBorder '
          />
        <h1 className='text-4xl fontn text-center mt-3'>Shiwam Pundir</h1>
        
        <div className='mt-5 '>
          <h3 className=' text-2xl mb-2'>Who am I?</h3>
          <p className=' mt-5'>A passionate <b >Software Developer</b> based in <u>Noida, Uttar Pradesh, India</u> driven by creativity and clean code. Focused on creating interactive applications and experiences on the web. </p>

          <h3 className='ml-0 mt-20 text-2xl mb-2'>What do I do?</h3>
          <p className='mt-5'>Designs and develops modern web applications using React, Node.js, Express, Django, MySQL and MongoDB. Currently pursuing MCA and building real-world projects to sharpen full-stack skills. Focused on building fast, responsive, and modern web applications that deliver real impact.</p>

        </div>
        <div className='flex gap-3 mt-5 sm' >
        <div className='flex items-center gap-1 ' >
        <CiLinkedin
            size='25' />

            <button className=''>
              <a href="https://www.linkedin.com/in/shiwam-pundi0b8173298r-/">Linkedin</a></button>
        </div>
        
        <div className='flex items-center gap-1 ' >
            <FaGithub
            size='25' />

            <button className=''><a href="https://github.com/shiwam2001">Github</a></button>
        </div>

        <div className='flex items-center gap-1 ' >
        <TbBrandLeetcode size={25} />

            <button className=''><a href="https://leetcode.com/u/k0mr2WykmF/">Leetcode</a></button>
        </div>  
        </div>
        
        
      </div>
      
    
  )
}

export default navbar
