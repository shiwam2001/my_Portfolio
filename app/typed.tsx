'use client'
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const TypedEffect = () => {
    const refInput = useRef(null)

    useEffect(() => {

        const typed = new Typed(refInput.current!, {
            strings: [
                "Hi, I'm Shiwam Pundir",
                "Full Stack Developer",
                "MERN Stack Enthusiast",
                "Problem Solver",
            ],
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 1500,
            loop: true,
        })

        return () => {
            typed.destroy(); // cleanup
        };

    }, [])

    return (
        <div>
            <h1 className="text-2xl font-medium text-gray-800">
                <span ref={refInput}></span>
            </h1>

        </div>
    )
}

export default TypedEffect
