import React from "react";
import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';

function VolunteeringItem(props) {
    const [ref, isVisible] = useScrollFadeIn();
    
    const logoImage = props.logo && (
        <img src={props.logo} alt={props.organisation} className='mb-4 w-25 object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110' />
    );
    
    return (
        <div 
            ref={ref}
            className={`group bg-background hover:bg-primary-100 mb-4 sm:flex sm:flex-row p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}
        >
            <div className='basis-1/4 flex flex-col items-center text-center'>
                <div className='mb-4 w-full text-sm font-mono'>{props.startDate} – {checkEndDate(props)}</div>
                {logoImage && (
                    props.href ? (
                        <a href={props.href} target="_blank" rel="noopener noreferrer">
                            {logoImage}
                        </a>
                    ) : logoImage
                )}
            </div>
            <div className='flex basis-3/4 flex-col'>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all'>
                    {props.position}{props.event && ` | ${props.event}`}
                </a>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='text-primary-400 mb-4 flex flex-row items-center'>
                    <span>{props.organisation}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="invisible ml-1 h-3 w-3 scale-50 transition ease-in-out group-hover:visible group-hover:scale-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </a>
                <div className='text-primary-400'>{props.description}</div>
            </div>
        </div>
    )
}

function checkEndDate(props) {
    if (!props.endDate) {
        return 'present';
    } else {
        return (props.endDate); 
    }  
}

export default VolunteeringItem