import React from 'react'
import data from '../data/timeLine'
import { FaExternalLinkAlt } from 'react-icons/fa'
const timeline = () => {


    console.log(data)
    return (
        <div className='my-25 '>
            <h3 className='text-3xl'>Timeline</h3>
            <div className='flex flex-col gap-2 mt-5 '>
                {data.map((items) => (
                    <div key={items.heading}>
                    <div  className='flex justify-between items-center'>
                            <h2  className='font-sans text-2xl font-bold'>{items.heading}</h2>
                            <span>{items.date}</span>

                        </div>
                        <p>{items.description}</p>
                        </div>  
                ))}
            </div>
            <div className='flex items-center gap-1 mt-4'>

    
            <a className='flex items-center gap-1 mt-4' href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent?compose=DmwnWrRlQhlcSbwXqsWmzbLsZxbwkVMgPBSHTTjhSnzVdZsQZvLfmMqZgjsWblskDGknnzlwHjDV" > Email <FaExternalLinkAlt
                                size={15}/> </a>
            
                               
            </div>

        </div>
    )
}

export default timeline
