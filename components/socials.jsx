import React from "react";
import Image from 'next/image';

const Socials = (props) => {
    return (
        <div className='flex flex-row items-center justify-center gap-8 lg:justify-start'>
            <a href={`mailto:${props.data.email}`} className='bg-primary-300 hover:bg-primary-200 text-primary-50 flex flex-row items-center justify-center rounded px-4 py-2 font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className='pl-2'>Contact</span>
            </a>
            <a href={props.data.github} target="_blank" rel="noopener noreferrer" className='transition-all hover:-translate-y-1'>
                <Image src="/logos/github.svg" alt="GitHub Logo" width={20} height={20} className='object-contain object-top' />
            </a>
            <a href={props.data.linkedin} target="_blank" rel="noopener noreferrer" className='transition-all hover:-translate-y-1'>
                <Image src="/logos/linkedin.svg" alt="LinkedIn Logo" width={20} height={20} className='object-contain object-top' />
            </a>
            <a href={props.data.cv} target="_blank" rel="noopener noreferrer" className='transition-all hover:-translate-y-1'>
                <Image src="/logos/cv.svg" alt="Download CV" width={20} height={20} className='object-contain object-top' />
            </a>
        </div>
    )
}

export default Socials