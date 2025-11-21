import React from "react";
import Image from 'next/image';

const Profile = (props) => {
    return (
    <div className='flex basis-1/4 flex-col items-center gap-8'>
        <div className='flex flex-col items-center'>
            <h1 className='text-5xl tracking-wide subpixel-antialiased animate-fade-in'>{props.data.name}</h1>
            <h2 className='text-primary-400 pt-2 font-normal tracking-wider animate-fade-in' style={{animationDelay: '100ms'}}>{props.data.headline}</h2>
        </div>
        <Image src={props.data.image} alt={props.data.alt} className="rounded-full hide-very-short transition-all duration-500 hover:scale-105 hover:shadow-2xl" width="256" height="256"/>
    </div>
    )
}

export default Profile