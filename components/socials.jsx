import React from "react";
import Image from 'next/image';

const Socials = (props) => {
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <a href={props.data.booking.link} target="_blank" className='bg-primary-50 hover:bg-primary-100 text-primary-300 flex w-full flex-row items-center justify-center rounded px-4 py-2 font-bold transition-all duration-300 hover:shadow-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                <span className='pl-2'>{props.data.booking.text}</span>
            </a>
            <div className='flex flex-row items-center justify-center gap-8 lg:justify-start'>
                <a href={`mailto:${props.data.email}`} className='bg-primary-300 hover:bg-primary-200 text-primary-50 flex flex-row items-center justify-center rounded px-8 py-2 font-bold transition-all duration-300 hover:shadow-lg'>
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
        </div>
    )
}

export default Socials