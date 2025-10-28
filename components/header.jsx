import React from "react";
import Navigation from "./navigation";
import Socials from "./socials";

const Header = (props) => {
    return (
        <div className='lg:fixed h-screen basis-1.5/4 flex flex-col justify-between pb-48 self-center lg:self-auto'>
            <div className=''>
                <h1 className='text-5xl subpixel-antialiased tracking-wide'>{props.data.name}</h1>
                <h2 className='text-surface-600 pt-2 text-base font-normal tracking-wider'>{props.data.headline}</h2>
                <img src={props.data.image} alt={props.data.alt} className="mt-4 mb-6 rounded-lg shadow-lg" width="250"/>
                <a href={props.data.cv} className="m-10 transition-all bg-primary-500 hover:bg-primary-300 text-surface-100 font-bold py-2 px-8 rounded">Download CV</a>
            </div>
            <Navigation></Navigation>
            <Socials data={props.data.socials}></Socials>
        </div>
    )
}

export default Header