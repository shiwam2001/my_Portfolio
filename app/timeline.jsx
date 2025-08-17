import React from 'react'
import data from '../data/timeLine'
import { FaExternalLinkAlt } from 'react-icons/fa'
const timeline = () => {

     const email = "shiwam@example.com";
  const subject = "Job Opportunity";
  const body = "Hello Shiwam, I want to connect with you.";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;




    console.log(data)
    return (
        <div className='my-25 '>
            <h3 className='text-3xl'>Timeline</h3>
            <div className='flex flex-col gap-2 mt-5 '>
                {data.map((items) => (
                    <div key={items.heading}>
                    <div  className='flex justify-between items-center'>
                            <h2  className='font-sans text-1xl font-bold'>{items.heading}</h2>
                            <span className='font-sans text-sm font-bold '>{items.date}</span>

                        </div>
                        <p className='text-sm '>{items.description}</p>
                        </div>  
                ))}
            </div>
            <div className='flex items-center gap-5 mt-4'>

    
            <a className='flex items-center gap-1' href="mailto:shiwamrajput4@gmail.com?subject=Contact%20Me&body=Hello%20Shiwam," > Email Me <FaExternalLinkAlt
                                size={15}/> </a>
            
            <a href="/Shiwam's_cv.pdf" download="Shiwam-resume.pdf" className='bg-blue-300 text-black px-4 py-2 rounded-lg hover:bg-blue-100 transition-all'>Downlord My Resume</a>              
            </div>

        </div>
    )
}

export default timeline
