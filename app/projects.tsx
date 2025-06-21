import Image from 'next/image'
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const projects = () => {
  return (
    <div className='mt-25' >
      <h1 className='text-3xl mb-2'>Projects</h1>
      <p className='mb-5'>Showcasing some of my work.</p>

        <div className='grid lg:grid-cols-2 gap-2 sm:grid-cols-1 '>
            <div className=' bg-amber-50 rounded-2xl p-3 flex flex-col  gap-4 mb-4'>
                <Image
                width={350}
                height={350}
                 src="/p1.png"
                  alt='' />
                <div className='flex justify-between '>
                    <h4>Employee task management system</h4>
                    <a href="https://github.com/shiwam2001/Employee_Task_management_System-project"><FaExternalLinkAlt 
                    size={20}/></a>
                     
                </div>  
            </div>

            <div className=' bg-amber-50 rounded-2xl p-3 flex flex-col  gap-4 mb-4'>
                <Image
                width={350}
                height={350}
                 src="/p2.png"
                  alt='' />
                <div className='flex justify-between '>
                    <h4>Job portal/ hirrd</h4>
                    <a href="https://github.com/shiwam2001/JobPortal-Hirrd_Project"><FaExternalLinkAlt 
                    size={20}/></a>
                     
                </div>    
            </div>

            <div className=' bg-amber-50 rounded-2xl p-3 flex flex-col  gap-4 mb-4'>
                <Image
                width={350}
                height={350}
                 src="/p3.png"
                  alt='' />
                <div className='flex justify-between '>
                    <h4>AI powered code reviwer</h4>
                    <a href="https://github.com/shiwam2001/Ai_Powered_Code_Reviewer-Project"><FaExternalLinkAlt 
                    size={20}/></a>
                     
                </div>
            </div>

            <div className=' bg-amber-50 rounded-2xl p-3 flex flex-col  gap-4 mb-4'>
                <Image
                width={350}
                height={350}
                 src="/p4.png"
                  alt='' />
                <div className='flex justify-between '>
                    <h4>Car markiting application</h4>
                    <a href="https://github.com/shiwam2001/Powerd-Ai-Vehiql-markiting-app_Project"><FaExternalLinkAlt 
                    size={20}/></a>
                     
                </div>
            </div>
        </div>
    </div>
  )
}

export default projects
